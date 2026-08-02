import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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

test("renders the clinic homepage with production metadata and content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Aannapurnaa Dental Clinic/i);
  assert.match(html, /Expert Dental &amp; Implant Care/i);
  assert.match(html, /Book a consultation/i);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("renders primary content routes without falling through to a 404", async () => {
  for (const [pathname, expected] of [
    ["/services", /Care for every kind of smile/i],
    ["/blogs", /Latest posts/i],
    ["/blogs/dental-implants-questions", /questions worth asking first/i],
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should render successfully`);
    assert.match(await response.text(), expected);
  }
});
