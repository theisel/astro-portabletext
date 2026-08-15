import { test, expect } from "vitest";
import { fetchContent } from "../utils.mjs";

test("block", async () => {
  const $ = await fetchContent("type/block");
  const $el = $("p");

  expect($el.length).toBe(1);
  expect($el.text()).toBe("Hello World");
});

test("inline", async () => {
  const $ = await fetchContent("type/inline");
  const $el = $("span");

  expect($el.length).toBe(1);
  expect($el.text()).toBe("Hello World");
});

test("unknown.block", async () => {
  const $ = await fetchContent("type/unknown-block");
  const $el = $("[data-portabletext-unknown]");

  expect($el.length).toBe(1);
  expect($el.get(0).name).toBe("div");
  expect($el.attr("style")).toBe("display:none");
  expect($el.attr("data-portabletext-unknown")).toBe("type");
});

test("unknown.inline", async () => {
  const $ = await fetchContent("type/unknown-inline");
  const $el = $("[data-portabletext-unknown]");

  expect($el.length).toBe(1);
  expect($el.get(0).name).toBe("span");
  expect($el.attr("style")).toBe("display:none");
  expect($el.attr("data-portabletext-unknown")).toBe("type");
});
