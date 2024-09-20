import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const text = suite("text");

text("should have `hello world`", async () => {
  const $ = await fetchContent("text/default");
  const $el = $("p");

  assert.is($el.length, 1);
  assert.is($el.text(), "hello world");
});

text("should have `hello world` with undefined component", async () => {
  const $ = await fetchContent("text/undefined");
  const $el = $("p");

  assert.is($el.length, 1);
  assert.is($el.text(), "hello world");
});

text("should change joke", async () => {
  const $ = await fetchContent("text/replace");
  const $el = $("p");

  assert.is($el.length, 1);
  assert.is(
    $el.text(),
    "Why did the JavaScript developer quit his job? Because he didn't get callbacks."
  );
});

text("should style first word by string split", async () => {
  const $ = await fetchContent("text/style-by-split");
  const $head = $("head");
  const $p = $("p");

  assert.is($head.children("style").length, 1);
  assert.is($p.length, 1);
  assert.is($p.children("span").length, 1);
  assert.is($p.children("span").text(), "Yellow");
});

text("should style first word by index position", async () => {
  const $ = await fetchContent("text/style-by-index");
  const $head = $("head");
  const $p = $("p");

  assert.is($head.children("style").length, 1);
  assert.is($p.length, 1);
  assert.is($p.children("span").length, 1);
  assert.is($p.children("span").text(), "Green");
});

text.run();
