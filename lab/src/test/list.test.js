import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const list = suite("list");

list("menu", async () => {
  const $ = await fetchContent("list/menu");
  const $el = $("menu");

  assert.is($el.length, 1);
});

list("ol", async () => {
  const $ = await fetchContent("list/ordered");
  const $el = $("ol");

  assert.is($el.length, 1);
});

list("ul", async () => {
  const $ = await fetchContent("list/unordered");
  const $el = $("ul");

  assert.is($el.length, 1);
});

list("unknown", async () => {
  const $ = await fetchContent("list/unknown");
  const $el = $("ul");

  assert.is($el.length, 1);
  assert.is($el.attr("data-portabletext-unknown"), "list");
});

list.run();
