import { test, expect } from "vitest";
import { fetchContent } from "@/utils";

test("should have `hello world`", async () => {
  const $ = await fetchContent("text/default");
  const $el = $("p");

  expect($el.length).toBe(1);
  expect($el.text()).toBe("hello world");
});

test("should have `hello world` with undefined component", async () => {
  const $ = await fetchContent("text/undefined");
  const $el = $("p");

  expect($el.length).toBe(1);
  expect($el.text()).toBe("hello world");
});

test("should change joke", async () => {
  const $ = await fetchContent("text/replace");
  const $el = $("p");

  expect($el.length).toBe(1);
  expect($el.text()).toBe(
    "Why did the JavaScript developer quit his job? Because he didn't get callbacks."
  );
});

test("should style first word by string split", async () => {
  const $ = await fetchContent("text/style-by-split");
  const $head = $("head");
  const $p = $("p");

  expect($head.children("style").length).toBe(1);
  expect($p.length).toBe(1);
  expect($p.children("span").length).toBe(1);
  expect($p.children("span").text()).toBe("Yellow");
});

test("should style first word by index position", async () => {
  const $ = await fetchContent("text/style-by-index");
  const $head = $("head");
  const $p = $("p");

  expect($head.children("style").length).toBe(1);
  expect($p.length).toBe(1);
  expect($p.children("span").length).toBe(1);
  expect($p.children("span").text()).toBe("Green");
});
