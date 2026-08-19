import { expect, test } from "vitest";
import { fetchContent } from "../utils";

test("with style `h1`", async () => {
  const $ = await fetchContent("block/h1");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("h1");
  expect($elements.text()).toBe("Heading L1");
});

test("with style `h2`", async () => {
  const $ = await fetchContent("block/h2");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("h2");
  expect($elements.text()).toBe("Heading L2");
});

test("with style `h3`", async () => {
  const $ = await fetchContent("block/h3");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("h3");
  expect($elements.text()).toBe("Heading L3");
});

test("with style `h4`", async () => {
  const $ = await fetchContent("block/h4");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("h4");
  expect($elements.text()).toBe("Heading L4");
});

test("with style `h5`", async () => {
  const $ = await fetchContent("block/h5");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("h5");
  expect($elements.text()).toBe("Heading L5");
});

test("with style `h6`", async () => {
  const $ = await fetchContent("block/h6");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("h6");
  expect($elements.text()).toBe("Heading L6");
});

test("custom-handler", async () => {
  const $ = await fetchContent("block/custom-handler");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.attr("data-portabletext-unknown")).toBe("block");
});

test("default-handler", async () => {
  const $ = await fetchContent("block/default-handler");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.attr("data-portabletext-unknown")).toBe("block");
});

test("with style `blockquote`", async () => {
  const $ = await fetchContent("block/blockquote");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("blockquote");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("p");
  expect($children.text()).toBe("Quote");
});

test("with style `normal`", async () => {
  const $ = await fetchContent("block/normal");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.text()).toBe("I'm a paragraph");
});

test("missing style", async () => {
  const $ = await fetchContent("block/missing-style");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.text()).toBe("I'm a paragraph");
});

test("with style", async () => {
  const $ = await fetchContent("block/with-style");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.attr("class")?.indexOf("astro-")).not.toBe(-1);
});

test("unknown", async () => {
  const $ = await fetchContent("block/unknown");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.attr("data-portabletext-unknown")).toBe("block");
});

test("override", async () => {
  const $ = await fetchContent("block/override");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.attr("data-myh1-cmp")).toBeDefined();
});

test("merge", async () => {
  const $ = await fetchContent("block/merge");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.attr("data-grid-cmp")).toBeDefined();
});

test("block index", async () => {
  const $ = await fetchContent("block/block-index");
  const $elements = $("body > *");

  expect($elements.length).toBe(3);
  expect($elements.eq(0).attr("data-block-index")).toBe("0");
  expect($elements.eq(1).attr("data-block-index")).toBe("1");
  expect($elements.eq(2).attr("data-block-index")).toBe("2");
});
