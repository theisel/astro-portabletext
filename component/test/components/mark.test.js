import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const mark = suite("mark");

mark("code", async () => {
  const $ = await fetchContent("mark/code");
  const $el = $("code");

  assert.is($el.length, 1);
  assert.is($el.text(), "function test() {}");
});

mark("em", async () => {
  const $ = await fetchContent("mark/em");
  const $el = $("em");

  assert.is($el.length, 1);
  assert.is($el.text(), "emphasize");
});

mark("link", async () => {
  const $ = await fetchContent("mark/link");
  const $el = $("a");

  assert.is($el.length, 1);
  assert.is($el.attr("href"), "https://test.com/");
  assert.is($el.text(), "test.com");
});

mark("strike-through", async () => {
  const $ = await fetchContent("mark/strike-through");
  const $el = $("del");

  assert.is($el.length, 1);
  assert.is($el.text(), "deleted");
});

mark("strong", async () => {
  const $ = await fetchContent("mark/strong");
  const $el = $("strong");

  assert.is($el.length, 1);
  assert.is($el.text(), "bold");
});

mark("underline", async () => {
  const $ = await fetchContent("mark/underline");
  const $el = $("span");

  assert.is($el.length, 1);
  assert.is($el.attr("style"), "text-decoration: underline;");
});

mark("unknown", async () => {
  const $ = await fetchContent("mark/unknown");
  const $el = $("[data-portabletext-unknown]");

  assert.is($el.length, 1);
  assert.is($el.attr("data-portabletext-unknown"), "mark");
  assert.is($el.text(), "highlighted");
  assert.is($el[0].name, "span");
});

mark.run();
