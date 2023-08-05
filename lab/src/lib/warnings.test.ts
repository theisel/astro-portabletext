import { test } from "uvu";
import * as assert from "uvu/assert";
import {
  unknownTypeWarning,
  unknownMarkWarning,
  unknownListWarning,
  unknownListItemWarning,
  unknownBlockWarning,
} from "../../../astro-portabletext/lib/warnings";

test("unknownTypeWarning", () => {
  assert.is(
    unknownTypeWarning("custom"),
    'PortableText [components.type] is missing "custom"'
  );
});

test("unknownMarkWarning", () => {
  assert.is(
    unknownMarkWarning("em"),
    'PortableText [components.mark] is missing "em"'
  );
});

test("unknownListWarning", () => {
  assert.is(
    unknownListWarning("bullet"),
    'PortableText [components.list] is missing "bullet"'
  );
});

test("unknownListItemWarning", () => {
  assert.is(
    unknownListItemWarning("bullet"),
    'PortableText [components.listItem] is missing "bullet"'
  );
});

test("unknownBlockWarning", () => {
  assert.is(
    unknownBlockWarning("normal"),
    'PortableText [components.block] is missing "normal"'
  );
});

test.run();
