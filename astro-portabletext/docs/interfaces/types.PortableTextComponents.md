[astro-portabletext](../README.md) / [types](../modules/types.md) / PortableTextComponents

# Interface: PortableTextComponents

[types](../modules/types.md).PortableTextComponents

Object defining how Portable Text types should be rendered

## Table of contents

### Properties

- [type](types.PortableTextComponents.md#type)
- [unknownType](types.PortableTextComponents.md#unknownType)
- [block](types.PortableTextComponents.md#block)
- [unknownBlock](types.PortableTextComponents.md#unknownBlock)
- [list](types.PortableTextComponents.md#list)
- [unknownList](types.PortableTextComponents.md#unknownList)
- [listItem](types.PortableTextComponents.md#listItem)
- [unknownListItem](types.PortableTextComponents.md#unknownListItem)
- [mark](types.PortableTextComponents.md#mark)
- [unknownMark](types.PortableTextComponents.md#unknownMark)
- [hardBreak](types.PortableTextComponents.md#hardBreak)

## Properties

### <a id="type" name="type"></a> type

• **type**: `ComponentOrRecord`

How user-defined types should be rendered

___

### <a id="unknownType" name="unknownType"></a> unknownType

• **unknownType**: `Component`

Used when a [type](types.PortableTextComponents.md#type) component isn't found

___

### <a id="block" name="block"></a> block

• **block**: `ComponentOrRecord`\<[`Block`](types.Block.md)\>

How blocks should be rendered

___

### <a id="unknownBlock" name="unknownBlock"></a> unknownBlock

• **unknownBlock**: `Component`\<[`Block`](types.Block.md)\>

Used when a [block](types.PortableTextComponents.md#block) component isn't found

___

### <a id="list" name="list"></a> list

• **list**: `ComponentOrRecord`\<`ToolkitPortableTextList`\>

How lists should be rendered

___

### <a id="unknownList" name="unknownList"></a> unknownList

• **unknownList**: `Component`\<`ToolkitPortableTextList`\>

Used when a [list](types.PortableTextComponents.md#list) component isn't found

___

### <a id="listItem" name="listItem"></a> listItem

• **listItem**: `ComponentOrRecord`\<`ToolkitPortableTextListItem`\>

How list items should be rendered

___

### <a id="unknownListItem" name="unknownListItem"></a> unknownListItem

• **unknownListItem**: `Component`\<`ToolkitPortableTextListItem`\>

Used when a [listItem](types.PortableTextComponents.md#listItem) component isn't found

___

### <a id="mark" name="mark"></a> mark

• **mark**: `ComponentOrRecord`\<[`Mark`](types.Mark.md)\<`never`\>\>

How marked text should be rendered

___

### <a id="unknownMark" name="unknownMark"></a> unknownMark

• **unknownMark**: `Component`\<[`Mark`](types.Mark.md)\<`never`\>\>

Used when a [mark](types.PortableTextComponents.md#mark) component isn't found

___

### <a id="hardBreak" name="hardBreak"></a> hardBreak

• **hardBreak**: `Component`\<`ToolkitTextNode`\>

How line breaks should be rendered
