import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const slot = suite("extras");

slot("block", async () => {
  const $ = await fetchContent("slot/block");
  const $el = $("p[data-slot='block']");

  assert.is($el.length, 1);
});

slot("custom block", async () => {
  const $ = await fetchContent("slot/block-custom");
  const $el = $("p[data-slot='custom-block']");

  assert.is($el.length, 1);
});

slot("list", async () => {
  const $ = await fetchContent("slot/list");
  const $el = $("ul[data-slot='list']");

  assert.is($el.length, 1);
});

slot("custom list", async () => {
  const $ = await fetchContent("slot/list-custom");
  const $el = $("ul[data-slot='custom-list']");

  assert.is($el.length, 1);
});

slot("listitem", async () => {
  const $ = await fetchContent("slot/listitem");
  const $el = $("li[data-slot='listitem']");

  assert.is($el.length, 1);
});

slot("custom listitem", async () => {
  const $ = await fetchContent("slot/listitem-custom");
  const $el = $("li[data-slot='custom-listitem']");

  assert.is($el.length, 1);
  assert.is($el.text(), "List Item 1");
});

slot("mark", async () => {
  const $ = await fetchContent("slot/mark");
  const $el = $("strong[data-slot='mark']");

  assert.is($el.length, 1);
});

slot("custom mark", async () => {
  const $ = await fetchContent("slot/mark-custom");
  const $el = $("strong[data-slot='custom-mark']");

  assert.is($el.length, 1);
  assert.is($el.text(), "bold");
});

slot("type", async () => {
  const $ = await fetchContent("slot/type");
  const $el = $("[data-slot='type']");

  assert.is($el.length, 1);
  assert.is($el.text(), "Hello World");
});

slot.run();
