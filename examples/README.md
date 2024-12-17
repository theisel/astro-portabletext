# `astro-portabletext` Examples

This directory provides concise code examples demonstrating specific techniques
and features of the `astro-portabletext` library. These examples are designed to
help you learn and adapt the code snippets for your own Astro projects.

💡 **Looking for documentation?** Refer to the [package documentation](../astro-portabletext/README.md).

_**Note:** These are not full applications._

## Available examples

### Customizing Components

- [Block.astro](Block.astro) — Shows how to extend and override the default rendering of specific block styles (`node.style`).
- [List.astro](List.astro) / [ListItem.astro](ListItem.astro) — Covers extending and overriding the default rendering of specific list items (`node.listItem`).
- [Mark.astro](Mark.astro) — Explains how to extend and override the rendering of specific mark types (`node.markType`).
- [Text.astro](Text.astro) — `v0.11.0+` Illustrates handling the output of `@text` nodes in Portable Text.
- [Type.astro](Type.astro) — Demonstrates handling custom Portable Text types (`node._type`) to render different components for each type, including a fallback for unknown types.

### PortableText component

- [portabletext-basic.astro](portabletext-basic.astro) — Provides an example of the most basic usage.
- [portabletext-mapped-type.astro](portabletext-mapped-types.astro) — Shows how to associate custom components to different node types.
- [portabletext-mapped-type-property.astro](portabletext-mapped-types.astro) — Shows how to associate custom components to different node type properties.
- [portabletext-slots.astro](portabletext-slots.astro) — `v0.11.0+` Illustrates using the component with slots for enhanced customization.

### Advanced techniques

- [BlockWithRenderFunction.astro](BlockWithRenderFunction.astro) — `v0.11.0+` Shows how to use the `render` function from `usePortableText` to target and alter specific child nodes.

## Contributing

Have suggestions for new examples or improvements? Feel free to open a [pull request](https://github.com/theisel/astro-portabletext/pulls) or an [issue](https://github.com/theisel/astro-portabletext/issues) in the main repository. Contributions are always welcome!
