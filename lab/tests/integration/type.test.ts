import { expect, test } from "vitest";
import { fetchContent } from "../utils";

test("block", async () => {
  const $ = await fetchContent("type/block");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.text()).toBe("Hello World");
});

test("inline", async () => {
  const $ = await fetchContent("type/inline");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("span");
  expect($children.text()).toBe("Hello World");
});

test("unknown.block", async () => {
  const $ = await fetchContent("type/unknown-block");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("div");
  expect($elements.attr("style")).toBe("display:none");
  expect($elements.attr("data-portabletext-unknown")).toBe("type");
});

test("unknown.inline", async () => {
  const $ = await fetchContent("type/unknown-inline");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("span");
  expect($children.attr("style")).toBe("display:none");
  expect($children.attr("data-portabletext-unknown")).toBe("type");
});
