import { expect, test } from "vitest";
import { fetchContent } from "../utils";

test("hardbreak", async () => {
  const $ = await fetchContent("hardbreak");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $children = $elements.children();
  expect($children.length).toBe(1);
  expect($children.get(0)?.name).toBe("br");
});
