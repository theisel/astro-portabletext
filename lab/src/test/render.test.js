import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const render = suite("render");

render("block", async () => {
  const $ = await fetchContent("render/block");
  const $block = $("div[data-custom='block']");
  const $span = $block.find("span[data-custom='text']");

  assert.is($block.length, 1);
  assert.is($span.length, 1);
  assert.is($span.text(), "Rocket launch 🚀");
});

render("list", async () => {
  const $ = await fetchContent("render/list");
  const $list = $("ul[data-custom='list']");
  const $span = $list.find("span[data-custom='text']");

  assert.is($list.length, 1);
  assert.is($span.length, 1);
});

render("mark", async () => {
  const $ = await fetchContent("render/mark");
  const $em = $("em");
  const $span = $em.find("span[data-custom='text']");

  assert.is($em.length, 1);
  assert.is($span.length, 1);
});

render.run();
