import { test } from "uvu";
import * as assert from "uvu/assert";
import {
  unknownTypeWarning,
  unknownMarkWarning,
  unknownListWarning,
  unknownListItemWarning,
  unknownBlockWarning,
} from "../../src/warnings";

test("unknownTypeWarning", () => {
  assert.type(unknownTypeWarning("custom"), "string");
});

test("unknownMarkWarning", () => {
  assert.type(unknownMarkWarning("em"), "string");
});

test("unknownListWarning", () => {
  assert.type(unknownListWarning("bullet"), "string");
});

test("unknownListItemWarning", () => {
  assert.type(unknownListItemWarning("bullet"), "string");
});

test("unknownBlockWarning", () => {
  assert.type(unknownBlockWarning("normal"), "string");
});

test.run();
