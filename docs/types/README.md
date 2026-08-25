**`astro-portabletext` v1.0.0 • Type Definitions**

---

# Type Definitions

## Interfaces

| Interface                                                      | Description                                                                                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [TypedObject](interfaces/TypedObject.md)                       | Any object with an `_type` property (which is required in portable text arrays), as well as a _potential_ `_key` (highly encouraged)             |
| [PortableTextProps](interfaces/PortableTextProps.md)           | Properties for the `PortableText` component.                                                                                                     |
| [PortableTextComponents](interfaces/PortableTextComponents.md) | Defines how Portable Text types should be rendered.                                                                                              |
| [Props](interfaces/Props.md)                                   | Base props type for Portable Text components.                                                                                                    |
| [Block](interfaces/Block.md)                                   | Alias to [PortableTextBlock](https://portabletext.github.io/types/interfaces/PortableTextBlock.html) with `style` set to `normal` when undefined |
| [Mark](interfaces/Mark.md)                                     | Portable Text `mark` node.                                                                                                                       |
| [Context](interfaces/Context.md)                               | Context returned by `usePortableText` for rendering and customizing Portable Text components.                                                    |

## Type Aliases

| Type Alias                                                               | Description                                                                                   |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [SomePortableTextComponents](type-aliases/SomePortableTextComponents.md) | Defines how some Portable Text types should be rendered.                                      |
| [TypedObjectProps](type-aliases/TypedObjectProps.md)                     | Component props type for a standard Portable Text node.                                       |
| [BlockProps](type-aliases/BlockProps.md)                                 | Component props type for [Block](interfaces/Block.md).                                        |
| [List](type-aliases/List.md)                                             | Portable Text `list` node.                                                                    |
| [ListProps](type-aliases/ListProps.md)                                   | Component props type for [List](type-aliases/List.md).                                        |
| [ListItem](type-aliases/ListItem.md)                                     | Portable Text `listItem` node.                                                                |
| [ListItemProps](type-aliases/ListItemProps.md)                           | Component props type for [ListItem](type-aliases/ListItem.md).                                |
| [MarkProps](type-aliases/MarkProps.md)                                   | Component props type for [Mark](interfaces/Mark.md).                                          |
| [TextNode](type-aliases/TextNode.md)                                     | Portable Text `text` node.                                                                    |
| [TextNodeProps](type-aliases/TextNodeProps.md)                           | Component props type for [TextNode](type-aliases/TextNode.md).                                |
| [MissingComponentHandler](type-aliases/MissingComponentHandler.md)       | Type of the [onMissingComponent](interfaces/PortableTextProps.md#onmissingcomponent) handler. |
| [RenderHandlerProps](type-aliases/RenderHandlerProps.md)                 | Properties for the `RenderHandler` function.                                                  |
| [RenderHandler](type-aliases/RenderHandler.md)                           | The shape of the render component function.                                                   |
| [RenderOptions](type-aliases/RenderOptions.md)                           | Options for the `render` function accessed via `usePortableText`.                             |
| [Component](type-aliases/Component.md)                                   | Generic Portable Text component.                                                              |
| [ComponentOrRecord](type-aliases/ComponentOrRecord.md)                   | Defines a component or a mapping of components.                                               |
| [NodeType](type-aliases/NodeType.md)                                     | Defines the type of Portable Text node.                                                       |
