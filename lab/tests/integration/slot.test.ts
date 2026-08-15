import { test, expect } from "vitest";
import { fetchContent } from "../utils";

test("block", async () => {
  const $ = await fetchContent("slot/block");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.attr("data-slot")).toBe("block");
});

test("custom block", async () => {
  const $ = await fetchContent("slot/block-custom");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.attr("data-slot")).toBe("custom-block");
});

test("list", async () => {
  const $ = await fetchContent("slot/list");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");
  expect($elements.attr("data-slot")).toBe("list");
});

test("custom list", async () => {
  const $ = await fetchContent("slot/list-custom");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");
  expect($elements.attr("data-slot")).toBe("custom-list");
});

test("listitem", async () => {
  const $ = await fetchContent("slot/listitem");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("li");
  expect($children.attr("data-slot")).toBe("listitem");
});

test("custom listitem", async () => {
  const $ = await fetchContent("slot/listitem-custom");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("li");
  expect($children.attr("data-slot")).toBe("custom-listitem");
  expect($children.text()).toBe("List Item 1");
});

test("mark", async () => {
  const $ = await fetchContent("slot/mark");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("strong");
  expect($children.attr("data-slot")).toBe("mark");
});

test("custom mark", async () => {
  const $ = await fetchContent("slot/mark-custom");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("strong");
  expect($children.attr("data-slot")).toBe("custom-mark");
  expect($children.text()).toBe("bold");
});

test("type", async () => {
  const $ = await fetchContent("slot/type");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.attr("data-slot")).toBe("type");
  expect($elements.text()).toBe("Hello World");
});
