[**astro-portabletext**](../../README.md)

***

[astro-portabletext](../../README.md) / [types](../README.md) / PortableTextComponents

# Interface: PortableTextComponents

Object defining how Portable Text types should be rendered

## Properties

### type

> **type**: [`ComponentOrRecord`](../type-aliases/ComponentOrRecord.md)\<`any`\>

How user-defined types should be rendered

***

### unknownType

> **unknownType**: [`Component`](../type-aliases/Component.md)\<`any`\>

Used when a [type](PortableTextComponents.md#type) component isn't found

***

### block

> **block**: [`ComponentOrRecord`](../type-aliases/ComponentOrRecord.md)\<[`Block`](Block.md)\>

How blocks should be rendered

***

### unknownBlock

> **unknownBlock**: [`Component`](../type-aliases/Component.md)\<[`Block`](Block.md)\>

Used when a [block](PortableTextComponents.md#block) component isn't found

***

### list

> **list**: [`ComponentOrRecord`](../type-aliases/ComponentOrRecord.md)\<`ToolkitPortableTextList`\>

How lists should be rendered

***

### unknownList

> **unknownList**: [`Component`](../type-aliases/Component.md)\<`ToolkitPortableTextList`\>

Used when a [list](PortableTextComponents.md#list) component isn't found

***

### listItem

> **listItem**: [`ComponentOrRecord`](../type-aliases/ComponentOrRecord.md)\<`ToolkitPortableTextListItem`\>

How list items should be rendered

***

### unknownListItem

> **unknownListItem**: [`Component`](../type-aliases/Component.md)\<`ToolkitPortableTextListItem`\>

Used when a [listItem](PortableTextComponents.md#listItem) component isn't found

***

### mark

> **mark**: [`ComponentOrRecord`](../type-aliases/ComponentOrRecord.md)\<[`Mark`](Mark.md)\<`never`\>\>

How marked text should be rendered

***

### unknownMark

> **unknownMark**: [`Component`](../type-aliases/Component.md)\<[`Mark`](Mark.md)\<`never`\>\>

Used when a [mark](PortableTextComponents.md#mark) component isn't found

***

### text

> **text**: [`Component`](../type-aliases/Component.md)\<`ToolkitTextNode`\>

How text should be rendered

***

### hardBreak

> **hardBreak**: [`Component`](../type-aliases/Component.md)\<`ToolkitTextNode`\>

How line breaks should be rendered
