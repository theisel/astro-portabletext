import { test } from "uvu";
import * as assert from "uvu/assert";
import { isBlockStyle } from "../../src/utils";

test("isBlockStyle", () => {
  // _type `block`
  assert.ok(isBlockStyle({ _type: "block", style: "normal" }));
  assert.not.ok(isBlockStyle({ _type: "block" }));

  // _type `custom`
  assert.ok(isBlockStyle({ _type: "custom", style: "normal" }));
  assert.not.ok(isBlockStyle({ _type: "custom" }));
});

test.run();
