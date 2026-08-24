import { expect, test } from "vitest";
import { throwError } from "astro-portabletext/lib/internal";

test("throwError", () => {
  expect(() => throwError("test")).toThrow("test");
});
