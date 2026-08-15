import { test, expect } from "vitest";
import { fetchContent } from "../utils";

test("block", async () => {
  const $ = await fetchContent("render/block");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("div");
  expect($elements.attr("data-custom")).toBe("block");

  const $span = $elements.children();
  expect($span.length).toBe(1);
  expect($span.get(0)?.name).toBe("span");
  expect($span.attr("data-custom")).toBe("text");
  expect($span.text()).toBe("Rocket launch 🚀");
});

test("list", async () => {
  const $ = await fetchContent("render/list");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("ul");
  expect($elements.attr("data-custom")).toBe("list");

  const $li = $elements.children();
  expect($li.length).toBe(1);
  expect($li.get(0)?.name).toBe("li");

  const $span = $li.children();
  expect($span.length).toBe(1);
  expect($span.get(0)?.name).toBe("span");
  expect($span.attr("data-custom")).toBe("text");
});

test("mark", async () => {
  const $ = await fetchContent("render/mark");
  const $elements = $("body > *");

  expect($elements.length).toBe(1);
  expect($elements.get(0)?.name).toBe("p");

  const $em = $elements.children();
  expect($em.length).toBe(1);
  expect($em.get(0)?.name).toBe("em");

  const $span = $em.children();
  expect($span.length).toBe(1);
  expect($span.get(0)?.name).toBe("span");
  expect($span.attr("data-custom")).toBe("text");
});
