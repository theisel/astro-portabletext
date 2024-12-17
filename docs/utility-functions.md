[`astro-portabletext` • Documentation](README.md)

---

# Utility functions

This library provides utility functions to help you work with Portable Text content:

```js
// v0.11.0+
import {
  usePortableText,
  mergeComponents,
  toPlainText,
} from "astro-portabletext";

// Deprecated
import {
  usePortableText,
  mergeComponents,
  toPlainText,
} from "astro-portabletext/utils";
```

## `usePortableText`

> **usePortableText**(`node`: [TypedObject](types/interfaces/TypedObject.md)): [Context](types/interfaces/Context.md)

This function gives you access to helper functions like `render` (added in `v0.11.0`), which allows you to fine-tune the output of child nodes in your custom components. It should only be used within an Astro component that has been passed into the PortableText `components` prop. It follows a naming convention similar to React hooks, though it is not a hook as such.

💡 Refer to [BlockWithRenderFunction.astro](../examples/BlockWithRenderFunction.astro) example for guidance.

## `mergeComponents`

> **mergeComponents**(`components`: [SomePortableTextComponents](types/type-aliases/SomePortableTextComponents.md), `overrideComponents`: [SomePortableTextComponents](types/type-aliases/SomePortableTextComponents.md)): `object`

Combines two sets of `components` options, where `overrideComponents` takes precedence.

## `toPlainText`

> **toPlainText**(`block`): `string`

Extracts the text content from Portable Text blocks, preserving spacing.

💡 Refer to `@portabletext/toolkit` [toPlainText](https://portabletext.github.io/toolkit/functions/toPlainText.html) documentation for more details.
