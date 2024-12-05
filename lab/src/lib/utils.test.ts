import { suite } from "uvu";
import * as assert from "uvu/assert";
/**
 * Importing `mergeComponents` from `astro-portabletext/utils` is deprecated and
 * should be imported via `astro-portabletext` instead.
 * However, due to the `PortableText` Astro component being part of `astro-portabletext`,
 * it is not possible to import `mergeComponents` directly, as `tsm` throws an error.
 * Therefore, importing `mergeComponents` using a relative path to `lib/utils` is necessary
 * to mitigate the deprecation warning.
 */
import { mergeComponents } from "../../../astro-portabletext/lib/utils";

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

testMergeComponents("`block` should be a function", () => {
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

testMergeComponents("`block` should be a plain object", () => {
  const a = {
    block: () => null,
  };

  const b = {
    block: {
      h1: () => null,
      h2: () => null,
    },
  };

  const c = mergeComponents(a, b);

  assert.equal(c, { block: { h1: b.block.h1, h2: b.block.h2 } });
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
