[`astro-portabletext` • Documentation](README.md)

---

# Utility Functions

Utility functions to help you work with Portable Text content:

```js
// v0.11.0+
import {
  mergeComponents,
  spanToPlainText,
  toPlainText,
  usePortableText,
} from "astro-portabletext";

// Removed in `v1.0.0`
import {
  mergeComponents,
  toPlainText,
  usePortableText,
} from "astro-portabletext/utils";
```

## `usePortableText`

> **usePortableText**(`node`: [TypedObject](types/interfaces/TypedObject.md)): [Context](types/interfaces/Context.md)

This function gives you access to helper functions like `render` (added in `v0.11.0`), which allows you to fine-tune the output of child nodes in your custom components. It should only be used within an Astro component that has been passed into the PortableText `components` prop.

**See also:** The [BlockWithRenderFunction.astro](../examples/BlockWithRenderFunction.astro) example.

## `mergeComponents`

> **mergeComponents**(`components`: [SomePortableTextComponents](types/type-aliases/SomePortableTextComponents.md), `overrideComponents`: [SomePortableTextComponents](types/type-aliases/SomePortableTextComponents.md)): `object`

Combines two sets of `components` options, where `overrideComponents` takes precedence.

## `toPlainText`

> **toPlainText**(`block`): `string`

Extracts the text content from Portable Text blocks, preserving spacing.

**See also:** The `@portabletext/toolkit` [toPlainText](https://portabletext.github.io/toolkit/functions/toPlainText.html) documentation.

## `spanToPlainText`

> **spanToPlainText**(`span`): `string`

> **Added in `v0.11.0`**
> Returns plain text from a Portable Text span, useful for extracting text from nested nodes.

**See also:** The `@portabletext/toolkit` [spanToPlainText](https://portabletext.github.io/toolkit/functions/spanToPlainText.html) documentation.
