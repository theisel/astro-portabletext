import { test, expect } from "vitest";
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
