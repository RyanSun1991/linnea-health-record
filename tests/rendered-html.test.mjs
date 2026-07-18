import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

for (const [path, title] of [
  ["/", "Your health record, with the terms in plain view."],
  ["/privacy/", "Privacy policy"],
  ["/consumer-health/", "Consumer health data policy"],
  ["/disclaimers/", "AI notices"],
  ["/terms/", "Terms of service"],
  ["/support/", "Support"],
]) {
  test(`server-renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
    assert.match(html, /Linnea/);
    assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
  });
}

test("publishes the consumer-health notice from the home page", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.match(html, /href="\/consumer-health"/i);
  assert.match(html, /Raw Apple Health samples stay on the device/i);
});

test("publishes the versioned AI notices from the home page", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.match(html, /href="\/disclaimers"/i);

  const noticesResponse = await render("/disclaimers/");
  const noticesHtml = await noticesResponse.text();
  assert.match(noticesHtml, /v1\.0\.2026-04/);
  assert.match(noticesHtml, /v2\.0\.2026-05/);
  assert.match(noticesHtml, /not medical advice/i);
});
