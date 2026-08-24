import { describe, expect, test } from "vitest";
import { mergeComponents } from "astro-portabletext/lib/utils";

// ----------------------------------------------------------------------------
// Test `mergeComponents`
// ----------------------------------------------------------------------------
describe("mergeComponents", () => {
  test("should merge components", () => {
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

    expect(c).toEqual({ block: { h1: a.block.h1, h2: b.block.h2 } });
  });

  test("`block` should be a function", () => {
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

    expect(c).toEqual({ block: b.block });
  });

  test("`block` should be a plain object", () => {
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

    expect(c).toEqual({ block: { h1: b.block.h1, h2: b.block.h2 } });
  });

  test("should extend components", () => {
    const a = {
      block: () => null,
      mark: () => null,
    };

    const b = {
      type: () => null,
    };

    const c = mergeComponents(a, b);

    expect(c).toEqual({ block: a.block, mark: a.mark, type: b.type });
  });
});
