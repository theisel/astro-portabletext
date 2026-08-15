import { test, expect } from "vitest";
import { fetchContent } from "../utils";

test("menu", async () => {
  const $ = await fetchContent("list/menu");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("menu");
});

test("ol", async () => {
  const $ = await fetchContent("list/ordered");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ol");
});

test("ul", async () => {
  const $ = await fetchContent("list/unordered");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");
});

test("unknown", async () => {
  const $ = await fetchContent("list/unknown");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");
  expect($elements.attr("data-portabletext-unknown")).toBe("list");
});

test("nested", async () => {
  const $ = await fetchContent("list/nested");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");

  const $topLIs = $elements.children();
  expect($topLIs.length).toBe(2);
  expect($topLIs.get(0)?.name).toBe("li");
  expect($topLIs.get(1)?.name).toBe("li");

  // Helper function to return the direct, trimmed text content of an element
  const getDirectText = ($el: ReturnType<typeof $>) => {
    return $el
      .contents()
      .filter((_, el) => el.type === "text")
      .text()
      .trim();
  };

  // Assert top level text (filtering out descendant text)
  expect(getDirectText($topLIs.eq(0))).toBe("1");
  expect(getDirectText($topLIs.eq(1))).toBe("2");

  // Navigate to Level 2 (child of first LI)
  const $level2ULs = $topLIs.eq(0).children();
  expect($level2ULs.length).toBe(1);
  expect($level2ULs.get(0)?.name).toBe("ul");

  const $level2LIs = $level2ULs.eq(0).children();
  expect($level2LIs.length).toBe(1);
  expect($level2LIs.get(0)?.name).toBe("li");

  // Assert level 2 text
  expect(getDirectText($level2LIs.eq(0))).toBe("1.1");

  // Navigate to Level 3 (child of Level 2 LI)
  const $level3ULs = $level2LIs.eq(0).children();
  expect($level3ULs.length).toBe(1);
  expect($level3ULs.get(0)?.name).toBe("ul");

  const $level3LIs = $level3ULs.eq(0).children();
  expect($level3LIs.length).toBe(1);
  expect($level3LIs.get(0)?.name).toBe("li");

  // Assert level 3 text (deepest level has no children)
  expect(getDirectText($level3LIs.eq(0))).toBe("1.1.1");
  expect($level3LIs.eq(0).children().length).toBe(0);
});

test("styled", async () => {
  const $ = await fetchContent("list/styled");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");

  const $li = $elements.children();
  expect($li.length).toBe(1);
  expect($li.get(0)?.name).toBe("li");

  const $banner = $li.children();
  expect($banner.length).toBe(1);
  expect($banner.get(0)?.name).toBe("div");
  expect($banner.attr("class")).toBe("banner");
  expect($banner.text()).toBe("List Item 1");
});
