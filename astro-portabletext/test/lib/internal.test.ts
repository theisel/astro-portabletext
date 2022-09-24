import { test } from "uvu";
import * as assert from "uvu/assert";
import { throwError } from "../../src/internal";

test("throwError", () => {
  assert.throws(() => throwError("test"), "test");
});

test.run();
