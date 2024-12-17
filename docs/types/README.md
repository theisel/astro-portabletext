**`astro-portabletext` • Type Definitions**

***

# Type Definitions

## Interfaces

| Interface | Description |
| ------ | ------ |
| [PortableTextProps](interfaces/PortableTextProps.md) | Properties for the `PortableText` component |
| [PortableTextComponents](interfaces/PortableTextComponents.md) | Defines how Portable Text types should be rendered. |
| [Props](interfaces/Props.md) | Component Props |
| [Block](interfaces/Block.md) | Alias to [PortableTextBlock](https://portabletext.github.io/types/interfaces/PortableTextBlock.html) with `style` set to `normal` when undefined |
| [Mark](interfaces/Mark.md) | Extends [ToolkitNestedPortableTextSpan](https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html) with consisting `markDef` and `markKey` properties |
| [Context](interfaces/Context.md) | Context object returned by `usePortableText`, providing utilities for rendering and customizing Portable Text components. |
| [TypedObject](interfaces/TypedObject.md) | Any object with an `_type` property (which is required in portable text arrays), as well as a _potential_ `_key` (highly encouraged) |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [SomePortableTextComponents](type-aliases/SomePortableTextComponents.md) | Defines how some Portable Text types should be rendered. |
| [BlockProps](type-aliases/BlockProps.md) | Convenience type for [Block](interfaces/Block.md) component props |
| [List](type-aliases/List.md) | Alias to [ToolkitPortableTextList](https://portabletext.github.io/toolkit/types/ToolkitPortableTextList.html) |
| [ListProps](type-aliases/ListProps.md) | Convenience type for [List](type-aliases/List.md) component props |
| [ListItem](type-aliases/ListItem.md) | Alias to [ToolkitPortableTextListItem](https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html) |
| [ListItemProps](type-aliases/ListItemProps.md) | Convenience type for [ListItem](type-aliases/ListItem.md) component props |
| [MarkProps](type-aliases/MarkProps.md) | Convenience type for [Mark](interfaces/Mark.md) component props |
| [TextNode](type-aliases/TextNode.md) | Alias to [ToolkitTextNode](https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html) |
| [TextNodeProps](type-aliases/TextNodeProps.md) | Convenience type for [TextNode](type-aliases/TextNode.md) component props |
| [MissingComponentHandler](type-aliases/MissingComponentHandler.md) | The shape of the [onMissingComponent](interfaces/PortableTextProps.md#onMissingComponent) function |
| [RenderHandlerProps](type-aliases/RenderHandlerProps.md) | Properties for the `RenderHandler` function |
| [RenderHandler](type-aliases/RenderHandler.md) | The shape of the render component function |
| [RenderOptions](type-aliases/RenderOptions.md) | Options for the `render` function accessed via `usePortableText` |
| [Component](type-aliases/Component.md) | Generic Portable Text component |
| [ComponentOrRecord](type-aliases/ComponentOrRecord.md) | Defines a component or a mapping of components |
| [NodeType](type-aliases/NodeType.md) | Defines the type of Portable Text node |
