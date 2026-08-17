import { expect, test } from "vitest";
import { fetchContent } from "../utils";

test("issue-175", async () => {
  const $ = await fetchContent("issues/issue-175");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("li");

  const $nestedChildren = $children.children();
  expect($nestedChildren.length).toBe(1);
  expect($nestedChildren.get(0)?.name).toBe("div");
  expect($nestedChildren.attr("data-block")).toBe("standfirst");
});

/**
 * Test case for @portabletext/toolkit issue #100.
 * Validates the correct structural parsing of nested lists, checking both
 * padded numbering (ol) and explicit bullets (ul).
 * @see https://github.com/portabletext/toolkit/issues/100
 */
test("toolkit-100", async () => {
  const $ = await fetchContent("issues/toolkit-100");
  const $elements = $("body > *");

  // There should be exactly 3 root list elements generated
  expect($elements.length).toBe(3);

  // 1. Pure Nested UL (padded level 1 -> level 2)
  const $root1 = $elements.eq(0);
  expect($root1.get(0)?.name).toBe("ul");
  expect($root1.children().length).toBe(1); // the padded li

  const $nestedUl = $root1.children().eq(0).children("ul");
  expect($nestedUl.length).toBe(1);
  expect($nestedUl.children().eq(0).text()).toContain("pure ul");

  // 2. Pure Nested OL (padded level 1 -> level 2)
  const $root2 = $elements.eq(1);
  expect($root2.get(0)?.name).toBe("ol");
  expect($root2.children().length).toBe(1); // the padded li

  const $nestedOl = $root2.children().eq(0).children("ol");
  expect($nestedOl.length).toBe(1);
  expect($nestedOl.children().eq(0).text()).toContain("pure ol");

  // 3. Mixed List (level 1 bullet -> level 3 number)
  const $root3 = $elements.eq(2);
  expect($root3.get(0)?.name).toBe("ul");
  expect($root3.children().length).toBe(1);

  const $mixedLi1 = $root3.children().eq(0);
  expect($mixedLi1.text()).toContain("mixed root");

  // Padded Level 2 <ol> (caused by level 3 number)
  const $mixedPaddedOl = $mixedLi1.children("ol");
  expect($mixedPaddedOl.length).toBe(1);

  const $mixedPaddedLi = $mixedPaddedOl.children().eq(0);
  expect($mixedPaddedLi.get(0)?.name).toBe("li");

  // Actual Level 3 <ol>
  const $mixedNestedOl = $mixedPaddedLi.children("ol");
  expect($mixedNestedOl.length).toBe(1);
  expect($mixedNestedOl.children().eq(0).text()).toContain("mixed nested");
});
