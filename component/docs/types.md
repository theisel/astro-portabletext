[**`astro-portabletext`**](../README.md) > [**`docs`**](./README.md)

# Types

```ts
import type {/* select type */} "astro-portabletext/types";
```

- [Props](#interface-props)
- [BlockStyle](#interface-blockstyle-extends-blocktype-block--portabletextblock)
- [Block](#type-block--portabletextblock)
- [List](#type-list--toolkitportabletextlist)
- [ListItem](#type-listitem--toolkitportabletextlistitem)
- [Mark](#interface-mark-extends-toolkitnestedportabletextspan)
- [TextNode](#type-textnode--toolkittextnode)

---

## _interface_ Props\<N\>

**Props** is passed in to each component.

### Definition

```ts
export interface Props<
  N extends TypedObject | Record<string, any> = ArbitraryTypedObject
> {
  /**
   * Portable Text node
   */
  node: N extends TypedObject ? N : N & TypedObject;
  /**
   * Index within its parent
   */
  index: number;
  /**
   * Whether the component should be layed out as inline or block element
   */
  isInline: boolean;
  /**
   * Set when `style` is used within an Astro component, should be used when defined.
   */
  class?: string;
  /**
   * @deprecated Use `class`
   */
  astroClass: string | undefined;
}
```

### Example

```ts
---
import type { Props } from "astro-portabletex/types";

const props = Astro.props as Props;
---
```

---

## _interface_ BlockStyle _extends_ [Block](#type-block--portabletextblock)

**BlockStyle** props is passed in to all `block` components.

### Definition

```ts
export interface BlockStyle extends Block {
  style: "normal" | PortableTextBlockStyle;
}
```

### Example

```ts
/* .astro */
import type { BlockStyle, Props as $ } from "astro-portabletext/types";

export type Props = $<BlockStyle>;

const props = Astro.props as Props;
```

---

## _type_ Block = PortableTextBlock;

Use [BlockStyle](#interface-blockstyle-extends-blocktype-block--portabletextblock) for `block` components as `style` property is always set.

See [PortableTextBlock](https://portabletext.github.io/types/interfaces/PortableTextBlock.html) for details.

### Definition

```ts
export type Block = PortableTextBlock;
```

### Example

```ts
/* .astro */
import type { Block, Props as $ } from "astro-portabletext/types";

export type Props = $<Block>;

const props = Astro.props as Props;
```

---

## type List = ToolkitPortableTextList;

**List** props is passed in to all `list` components.

See [ToolkitPortableTextList](https://portabletext.github.io/toolkit/modules.html#ToolkitPortableTextList) for details.

### Definition

```ts
export type List = ToolkitPortableTextList;
```

### Example

```ts
/* .astro */
import type { List, Props as $ } from "astro-portabletext/types";

export type Props = $<List>;

const props = Astro.props as Props;
```

---

## type ListItem = ToolkitPortableTextListItem;

**ListItem** props is passed in to all `listItem` components.

See [ToolkitPortableTextListItem](https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html) for details.

### Definition

```ts
export type ListItem = ToolkitPortableTextListItem;
```

### Example

```ts
/* .astro */
import type { ListItem, Props as $ } from "astro-portabletext/types";

export type Props = $<ListItem>;

const props = Astro.props as Props;
```

---

## _interface_ Mark _extends_ ToolkitNestedPortableTextSpan

**Mark** props is passed in to all `mark` components.

### Definition

```ts
export interface Mark<
  MarkDef extends Record<string, any> | undefined = undefined
> extends ToolkitNestedPortableTextSpan {
  markDef: MarkDef extends Record<string, any>
    ? MarkDef & PortableTextMarkDefinition
    : undefined;
  markKey: string;
}
```

### Example 1

```ts
/* .astro */
import type { Mark, Props as $ } from "astro-portabletext/types";

type Greet = Mark<{ msg: string }>;

export type Props = $<Greet>;

const props = Astro.props as Props;
```

### Example 2

```ts
/* .astro */
import type { Mark, Props as $ } from "astro-portabletext/types";

interface Greet extends Mark {
  markDef: { msg: string };
}

export type Props = $<Greet>;

const props = Astro.props as Props;
```

---

## type TextNode = ToolkitTextNode;

**TextNode** is alias to [ToolkitTextNode](https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html)

### Definition

```ts
export type TextNode = ToolkitTextNode;
```

### Example

```ts
/* .astro */
import type { TextNode, Props as $ } from "astro-portabletext/types";

export type Props = $<TextNode>;

const props = Astro.props as Props;
```
