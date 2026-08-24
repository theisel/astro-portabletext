import { expect, test } from "vitest";
import { fetchContent } from "../utils";

test("should have `hello world`", async () => {
  const $ = await fetchContent("text/default");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.text()).toBe("hello world");
});

test("should have `hello world` with undefined component", async () => {
  const $ = await fetchContent("text/undefined");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.text()).toBe("hello world");
});

test("should change joke", async () => {
  const $ = await fetchContent("text/replace");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.text()).toBe(
    "Why did the JavaScript developer quit his job? Because he didn't get callbacks."
  );
});

test("should style first word by string split", async () => {
  const $ = await fetchContent("text/style-by-split");
  const $head = $("head");
  const $elements = $("body > *");

  expect($head.children("style").length).toBe(1);
  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.children("span").length).toBe(1);
  expect($elements.children("span").text()).toBe("Yellow");
});

test("should style first word by index position", async () => {
  const $ = await fetchContent("text/style-by-index");
  const $head = $("head");
  const $elements = $("body > *");

  expect($head.children("style").length).toBe(1);
  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");
  expect($elements.children("span").length).toBe(1);
  expect($elements.children("span").text()).toBe("Green");
});
