import { test, expect } from "vitest";
import { fetchContent } from "../utils.mjs";

test("hardbreak", async () => {
  const $ = await fetchContent("hardbreak");
  const $el = $("br");

  expect($el.length).toBe(1);
});
