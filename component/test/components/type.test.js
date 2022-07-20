import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const type = suite("type");

type("block", async () => {
  const $ = await fetchContent("type/block");
  const $el = $("p");

  assert.is($el.length, 1);
  assert.is($el.text(), "Hello World");
});

type("inline", async () => {
  const $ = await fetchContent("type/inline");
  const $el = $("span");

  assert.is($el.length, 1);
  assert.is($el.text(), "Hello World");
});

type.run();
