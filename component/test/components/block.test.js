import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const block = suite("block");

block("with style `h1`", async () => {
  const $ = await fetchContent("block/h1");
  const $el = $("h1");

  assert.is($el.length, 1);
  assert.is($el.text(), "Heading L1");
});

block("with style `h2`", async () => {
  const $ = await fetchContent("block/h2");
  const $el = $("h2");

  assert.is($el.length, 1);
  assert.is($el.text(), "Heading L2");
});

block("with style `h3`", async () => {
  const $ = await fetchContent("block/h3");
  const $el = $("h3");

  assert.is($el.length, 1);
  assert.is($el.text(), "Heading L3");
});

block("with style `h4`", async () => {
  const $ = await fetchContent("block/h4");
  const $el = $("h4");

  assert.is($el.length, 1);
  assert.is($el.text(), "Heading L4");
});

block("with style `h5`", async () => {
  const $ = await fetchContent("block/h5");
  const $el = $("h5");

  assert.is($el.length, 1);
  assert.is($el.text(), "Heading L5");
});

block("with style `h6`", async () => {
  const $ = await fetchContent("block/h6");
  const $el = $("h6");

  assert.is($el.length, 1);
  assert.is($el.text(), "Heading L6");
});

block("with style `blockquote`", async () => {
  const $ = await fetchContent("block/blockquote");
  const $el = $("blockquote");
  const $el2 = $el.children("p");

  assert.is($el.length, 1);
  assert.is($el.children().length, 1);
  assert.is($el2.length, 1);
  assert.is($el2.text(), "Quote");
});

block("with style `normal`", async () => {
  const $ = await fetchContent("block/normal");
  const $el = $("p");

  assert.is($el.length, 1);
  assert.is($el.text(), "I'm a paragraph");
});

block("missing style", async () => {
  const $ = await fetchContent("block/missing-style");
  const $el = $("p");

  assert.is($el.length, 1);
  assert.is($el.text(), "I'm a paragraph");
});

block("with style", async () => {
  const $ = await fetchContent("block/with-style");
  const $el = $("p").get(0);

  assert.ok($el);
  assert.not($el.attribs.class?.indexOf("astro-"), -1);
});

block("unknown", async () => {
  const $ = await fetchContent("block/unknown");
  const $el = $("[data-portabletext-unknown]");

  assert.is($el.length, 1);
  assert.is($el.attr("data-portabletext-unknown"), "blockstyle");
  assert.is($el[0].name, "p");
});

block("override", async () => {
  const $ = await fetchContent("block/override");
  const $el = $("[data-myh1-cmp]");

  assert.is($el.length, 1);
});

block.run();
