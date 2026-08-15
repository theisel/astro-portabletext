import { test, expect } from "vitest";
import {
  unknownTypeWarning,
  unknownMarkWarning,
  unknownListWarning,
  unknownListItemWarning,
  unknownBlockWarning,
} from "astro-portabletext/lib/warnings";

test("unknownTypeWarning", () => {
  expect(unknownTypeWarning("custom")).toBe(
    'PortableText [components.type] is missing "custom"'
  );
});

test("unknownMarkWarning", () => {
  expect(unknownMarkWarning("em")).toBe(
    'PortableText [components.mark] is missing "em"'
  );
});

test("unknownListWarning", () => {
  expect(unknownListWarning("bullet")).toBe(
    'PortableText [components.list] is missing "bullet"'
  );
});

test("unknownListItemWarning", () => {
  expect(unknownListItemWarning("bullet")).toBe(
    'PortableText [components.listItem] is missing "bullet"'
  );
});

test("unknownBlockWarning", () => {
  expect(unknownBlockWarning("normal")).toBe(
    'PortableText [components.block] is missing "normal"'
  );
});
