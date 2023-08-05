import { suite } from "uvu";
import * as assert from "uvu/assert";
import { fetchContent } from "../utils.mjs";

const extras = suite("extras");

extras("hardbreak", async () => {
  const $ = await fetchContent("hardbreak");
  const $el = $("br");

  assert.is($el.length, 1);
});

extras.run();
