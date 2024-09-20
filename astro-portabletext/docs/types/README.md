[**astro-portabletext**](../README.md) • **Docs**

***

[astro-portabletext](../README.md) / types

# types

## Index

### Interfaces

| Interface | Description |
| ------ | ------ |
| [PortableTextProps](interfaces/PortableTextProps.md) | Properties for the `PortableText` component |
| [PortableTextComponents](interfaces/PortableTextComponents.md) | Object defining how Portable Text types should be rendered |
| [Props](interfaces/Props.md) | Component Props |
| [Block](interfaces/Block.md) | Alias to [PortableTextBlock](https://portabletext.github.io/types/interfaces/PortableTextBlock.html) with `style` set to `normal` |
| [Mark](interfaces/Mark.md) | Extends [ToolkitNestedPortableTextSpan](https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html) with consisting `markDef` and `markKey` properties |
| [TypedObject](interfaces/TypedObject.md) | Any object with an `_type` property (which is required in portable text arrays), as well as a _potential_ `_key` (highly encouraged) |

### Type Aliases

| Type alias | Description |
| ------ | ------ |
| [SomePortableTextComponents](type-aliases/SomePortableTextComponents.md) | Object defining how some Portable Text types should be rendered |
| [List](type-aliases/List.md) | Alias to [ToolkitPortableTextList](https://portabletext.github.io/toolkit/types/ToolkitPortableTextList.html) |
| [ListItem](type-aliases/ListItem.md) | Alias to [ToolkitPortableTextListItem](https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html) |
| [TextNode](type-aliases/TextNode.md) | Alias to [ToolkitTextNode](https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html) |
| [MissingComponentHandler](type-aliases/MissingComponentHandler.md) | The shape of the [onMissingComponent](interfaces/PortableTextProps.md#onMissingComponent) function |
