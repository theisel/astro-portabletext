import { suite } from "uvu";
import * as assert from "uvu/assert";
import { mergeComponents } from "../../src/utils";

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
