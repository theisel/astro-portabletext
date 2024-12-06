[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Interface: Block

Alias to [PortableTextBlock](https://portabletext.github.io/types/interfaces/PortableTextBlock.html)
with `style` set to `normal` when undefined

## Example

```ts
---
import type { Block, Props as $ } from "astro-portabletext/types";

type Props = $<Block>;
---
```

## Remarks

To concisely achieve the same result in the example, use the convenience type [BlockProps](../type-aliases/BlockProps.md) instead.

## Extends

- `PortableTextBlock`

## Properties

### style

```ts
style: string;
```

Visual style of the block
Common values: 'normal', 'blockquote', 'h1'...'h6'

#### Overrides

`PortableTextBlock.style`

***

### \_type

```ts
_type: string;
```

Type name identifying this as a portable text block.
All items within a portable text array should have a `_type` property.

Usually 'block', but can be customized to other values

#### Inherited from

`PortableTextBlock._type`

***

### \_key?

```ts
optional _key: string;
```

A key that identifies this block uniquely within the parent array. Used to more easily address
the block when editing collaboratively, but is also very useful for keys inside of React and
other rendering frameworks that can use keys to optimize operations.

#### Inherited from

`PortableTextBlock._key`

***

### children

```ts
children: (ArbitraryTypedObject | PortableTextSpan)[];
```

Array of inline items for this block. Usually contain text spans, but can be
configured to include inline objects of other types as well.

#### Inherited from

`PortableTextBlock.children`

***

### markDefs?

```ts
optional markDefs: PortableTextMarkDefinition[];
```

Array of mark definitions used in child text spans. By having them be on the block level,
the same mark definition can be reused for multiple text spans, which is often the case
with nested marks.

#### Inherited from

`PortableTextBlock.markDefs`

***

### listItem?

```ts
optional listItem: string;
```

If this block is a list item, identifies which style of list item this is
Common values: 'bullet', 'number', but can be configured

#### Inherited from

`PortableTextBlock.listItem`

***

### level?

```ts
optional level: number;
```

If this block is a list item, identifies which level of nesting it belongs within

#### Inherited from

`PortableTextBlock.level`
