import { suite } from "uvu";
import * as assert from "uvu/assert";
import { isBlockStyle, mergeComponents } from "../../src/utils";

// ----------------------------------------------------------------------------
// Test `isBlockStyle`
// ----------------------------------------------------------------------------

const testIsBlockStyle = suite("isBlockStyle");

testIsBlockStyle("returns true for block style", () => {
  const node = { _type: "block", style: "normal" };

  assert.ok(isBlockStyle(node));
});

testIsBlockStyle("returns false for non-block style", () => {
  const node = { _type: "block" };

  assert.not.ok(isBlockStyle(node));
});

testIsBlockStyle.run();

// ----------------------------------------------------------------------------
// Test `mergeComponents`
// ----------------------------------------------------------------------------
const testMergeComponents = suite("mergeComponents");

testMergeComponents("should merge components", () => {
  const a = {
    block: {
      h1: () => null,
      h2: () => null,
    },
  };

  const b = {
    block: {
      h2: () => null,
    },
  };

  const c = mergeComponents(a, b);

  assert.equal(c, { block: { h1: a.block.h1, h2: b.block.h2 } });
});

testMergeComponents("should override components", () => {
  const a = {
    block: {
      h1: () => null,
      h2: () => null,
    },
  };

  const b = {
    block: () => null,
  };

  const c = mergeComponents(a, b);

  assert.equal(c, { block: b.block });
});

testMergeComponents("should extend components", () => {
  const a = {
    block: () => null,
    mark: () => null,
  };

  const b = {
    type: () => null,
  };

  const c = mergeComponents(a, b);

  assert.equal(c, { block: a.block, mark: a.mark, type: b.type });
});

testMergeComponents.run();
