[**astro-portabletext**](../../README.md) • **Docs**

***

[astro-portabletext](../../README.md) / [types](../README.md) / PortableTextComponents

# Interface: PortableTextComponents

Object defining how Portable Text types should be rendered

## Properties

### type

> **type**: `ComponentOrRecord`

How user-defined types should be rendered

***

### unknownType

> **unknownType**: `Component`

Used when a [type](PortableTextComponents.md#type) component isn't found

***

### block

> **block**: `ComponentOrRecord`\<[`Block`](Block.md)\>

How blocks should be rendered

***

### unknownBlock

> **unknownBlock**: `Component`\<[`Block`](Block.md)\>

Used when a [block](PortableTextComponents.md#block) component isn't found

***

### list

> **list**: `ComponentOrRecord`\<`ToolkitPortableTextList`\>

How lists should be rendered

***

### unknownList

> **unknownList**: `Component`\<`ToolkitPortableTextList`\>

Used when a [list](PortableTextComponents.md#list) component isn't found

***

### listItem

> **listItem**: `ComponentOrRecord`\<`ToolkitPortableTextListItem`\>

How list items should be rendered

***

### unknownListItem

> **unknownListItem**: `Component`\<`ToolkitPortableTextListItem`\>

Used when a [listItem](PortableTextComponents.md#listItem) component isn't found

***

### mark

> **mark**: `ComponentOrRecord`\<[`Mark`](Mark.md)\<`never`\>\>

How marked text should be rendered

***

### unknownMark

> **unknownMark**: `Component`\<[`Mark`](Mark.md)\<`never`\>\>

Used when a [mark](PortableTextComponents.md#mark) component isn't found

***

### hardBreak

> **hardBreak**: `Component`\<`ToolkitTextNode`\>

How line breaks should be rendered
