[astro-portabletext](../README.md) / [types](../modules/types.md) / Block

# Interface: Block

[types](../modules/types.md).Block

Alias to [PortableTextBlock](https://portabletext.github.io/types/interfaces/PortableTextBlock.html) with `style` set to `normal`

**`Example`**

```ts
---
import type { Block, Props as $ } from "astro-portabletext/types";

export type Props = $<Block>;
---
```

## Hierarchy

- `PortableTextBlock`

  ↳ **`Block`**

## Table of contents

### Properties

- [style](types.Block.md#style)
- [\_type](types.Block.md#_type)
- [\_key](types.Block.md#_key)
- [children](types.Block.md#children)
- [markDefs](types.Block.md#markDefs)
- [listItem](types.Block.md#listItem)
- [level](types.Block.md#level)

## Properties

### <a id="style" name="style"></a> style

• **style**: `string`

#### Overrides

PortableTextBlock.style

___

### <a id="_type" name="_type"></a> \_type

• **\_type**: `string`

Type name identifying this as a portable text block.
All items within a portable text array should have a `_type` property.

Usually 'block', but can be customized to other values

#### Inherited from

PortableTextBlock.\_type

___

### <a id="_key" name="_key"></a> \_key

• `Optional` **\_key**: `string`

A key that identifies this block uniquely within the parent array. Used to more easily address
the block when editing collaboratively, but is also very useful for keys inside of React and
other rendering frameworks that can use keys to optimize operations.

#### Inherited from

PortableTextBlock.\_key

___

### <a id="children" name="children"></a> children

• **children**: (`ArbitraryTypedObject` \| `PortableTextSpan`)[]

Array of inline items for this block. Usually contain text spans, but can be
configured to include inline objects of other types as well.

#### Inherited from

PortableTextBlock.children

___

### <a id="markDefs" name="markDefs"></a> markDefs

• `Optional` **markDefs**: `PortableTextMarkDefinition`[]

Array of mark definitions used in child text spans. By having them be on the block level,
the same mark definition can be reused for multiple text spans, which is often the case
with nested marks.

#### Inherited from

PortableTextBlock.markDefs

___

### <a id="listItem" name="listItem"></a> listItem

• `Optional` **listItem**: `string`

If this block is a list item, identifies which style of list item this is
Common values: 'bullet', 'number', but can be configured

#### Inherited from

PortableTextBlock.listItem

___

### <a id="level" name="level"></a> level

• `Optional` **level**: `number`

If this block is a list item, identifies which level of nesting it belongs within

#### Inherited from

PortableTextBlock.level
