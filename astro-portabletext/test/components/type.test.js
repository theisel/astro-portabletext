import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const type = suite("type");

type("block", async () => {
  const $ = await fetchContent("type/block");
  const $el = $("p");

  assert.is($el.length, 1);
  assert.is($el.text(), "Hello World");
});

type("inline", async () => {
  const $ = await fetchContent("type/inline");
  const $el = $("span");

  assert.is($el.length, 1);
  assert.is($el.text(), "Hello World");
});

type("unknown.block", async () => {
  const $ = await fetchContent("type/unknown-block");
  const $el = $("[data-portabletext-unknown]");

  assert.is($el.length, 1);
  assert.is($el.get(0).name, "div");
  assert.is($el.attr("style"), "display:none");
  assert.is($el.attr("data-portabletext-unknown"), "type");
});

type("unknown.inline", async () => {
  const $ = await fetchContent("type/unknown-inline");
  const $el = $("[data-portabletext-unknown]");

  assert.is($el.length, 1);
  assert.is($el.get(0).name, "span");
  assert.is($el.attr("style"), "display:none");
  assert.is($el.attr("data-portabletext-unknown"), "type");
});

type.run();
