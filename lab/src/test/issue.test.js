import { test, expect } from "vitest";
import { fetchContent } from "../utils.mjs";

test("issue-175", async () => {
  const $ = await fetchContent("issues/issue-175");

  const $ul = $("ul");
  const $li = $ul.find("li");
  const $el = $li.find("div[data-block='standfirst']");

  expect($ul.length).toBe(1);
  expect($li.length).toBe(1);
  expect($el.length).toBe(1);
});
