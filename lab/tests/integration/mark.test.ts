import { test, expect } from "vitest";
import { fetchContent } from "../utils";

test("code", async () => {
  const $ = await fetchContent("mark/code");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("code");
  expect($children.text()).toBe("function test() {}");
});

test("em", async () => {
  const $ = await fetchContent("mark/em");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("em");
  expect($children.text()).toBe("emphasize");
});

test("link", async () => {
  const $ = await fetchContent("mark/link");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("a");
  expect($children.attr("href")).toBe("https://test.com/");
  expect($children.text()).toBe("test.com");
});

test("link_missing_href", async () => {
  const $ = await fetchContent("mark/link-missing-href");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("a");
  expect($children.attr("href")).toBe(undefined);
  expect($children.text()).toBe("test.com");
});

test("strike-through", async () => {
  const $ = await fetchContent("mark/strike-through");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("del");
  expect($children.text()).toBe("deleted");
});

test("strong", async () => {
  const $ = await fetchContent("mark/strong");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("strong");
  expect($children.text()).toBe("bold");
});

test("underline", async () => {
  const $ = await fetchContent("mark/underline");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("span");
  expect($children.attr("style")).toBe("text-decoration: underline;");
});

test("unknown", async () => {
  const $ = await fetchContent("mark/unknown");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("span");
  expect($children.attr("data-portabletext-unknown")).toBe("mark");
  expect($children.text()).toBe("highlighted");
});
