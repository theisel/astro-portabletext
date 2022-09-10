import { test } from "uvu";
import * as assert from "uvu/assert";
import {
  unknownTypeWarning,
  unknownMarkWarning,
  unknownListStyleWarning,
  unknownListItemStyleWarning,
  unknownBlockStyleWarning,
} from "../../src/warnings";

test("unknownTypeWarning", () => {
  assert.type(unknownTypeWarning("custom"), "string");
});

test("unknownMarkWarning", () => {
  assert.type(unknownMarkWarning("em"), "string");
});

test("unknownListStyleWarning", () => {
  assert.type(unknownListStyleWarning("bullet"), "string");
});

test("unknownListItemStyleWarning", () => {
  assert.type(unknownListItemStyleWarning("bullet"), "string");
});

test("unknownBlockStyleWarning", () => {
  assert.type(unknownBlockStyleWarning("normal"), "string");
});

test.run();
