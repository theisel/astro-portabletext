import { test, expect } from "vitest";
import { fetchContent } from "@/utils";

test("menu", async () => {
  const $ = await fetchContent("list/menu");
  const $el = $("menu");

  expect($el.length).toBe(1);
});

test("ol", async () => {
  const $ = await fetchContent("list/ordered");
  const $el = $("ol");

  expect($el.length).toBe(1);
});

test("ul", async () => {
  const $ = await fetchContent("list/unordered");
  const $el = $("ul");

  expect($el.length).toBe(1);
});

test("unknown", async () => {
  const $ = await fetchContent("list/unknown");
  const $el = $("ul");

  expect($el.length).toBe(1);
  expect($el.attr("data-portabletext-unknown")).toBe("list");
});

test("nested", async () => {
  const $ = await fetchContent("list/nested");

  expect($("body").html()?.trim()).toMatch(
    /^<ul>\s*<li>\s*1\s*<ul>\s*<li>\s*1\.1\s*<ul>\s*<li>\s*1\.1\.1\s*<\/li>\s*<\/ul>\s*<\/li>\s*<\/ul>\s*<\/li>\s*<li>\s*2\s*<\/li>\s*<\/ul>$/
  );
});

test("styled", async () => {
  const $ = await fetchContent("list/styled");
  const $ul = $("ul");

  expect($ul.length).toBe(1);

  const $li = $ul.find("li");

  expect($li.length).toBe(1);

  const $banner = $li.find("div.banner");

  expect($banner.length).toBe(1);
  expect($banner.text()).toBe("List Item 1");
});
