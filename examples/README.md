[`astro-portabletext`](../README.md)

---

# Examples

This directory provides concise code examples demonstrating specific techniques
and features of the `astro-portabletext` library. These examples are designed to
help you learn and adapt the code snippets for your own Astro projects.

**See also:** The [package documentation](../astro-portabletext/README.md).

_**Note:** These are not full applications._

## Available examples

### Customizing Components

- [Block.astro](Block.astro) — Shows how to extend and override the default rendering of specific block styles (`node.style`).
- [List.astro](List.astro) / [ListItem.astro](ListItem.astro) — Covers extending and overriding the default rendering of specific list items (`node.listItem`).
- [Mark.astro](Mark.astro) — Explains how to extend and override the rendering of specific mark types (`node.markType`).
- [Text.astro](Text.astro) — `v0.11.0+` Illustrates handling the output of `@text` nodes in Portable Text.
- [Type.astro](Type.astro) — Demonstrates handling custom Portable Text types (`node._type`) to render different components for each type, including a fallback for unknown types.

### PortableText Component

- [PortableTextBasic.astro](PortableTextBasic.astro) — Provides an example of the most basic usage.
- [PortableTextMappedType.astro](PortableTextMappedType.astro) — Shows how to associate custom components to different node types.
- [PortableTextMappedTypeProperty.astro](PortableTextMappedTypeProperty.astro) — Shows how to associate custom components to different node type properties.
- [PortableTextSlots.astro](PortableTextSlots.astro) — `v0.11.0+` Illustrates using the component with slots for enhanced customization.

### Advanced Techniques

- [BlockWithRenderFunction.astro](BlockWithRenderFunction.astro) — `v0.11.0+` Shows how to use the `render` function from `usePortableText` to target and alter specific child nodes.

## Contributing

We welcome contributions to improve `astro-portabletext`!

If you find a bug or have a feature request, please open an [issue](https://github.com/theisel/astro-portabletext/issues).
If you'd like to contribute code, feel free to submit a [pull request](https://github.com/theisel/astro-portabletext/pulls).
