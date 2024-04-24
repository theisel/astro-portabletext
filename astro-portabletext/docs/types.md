[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Types

```ts
import type {/* select type */} "astro-portabletext/types";
```

- [Props](#interface-propsn)
- [Block](#interface-block-extends-portabletextblock)
- [List](#type-list--toolkitportabletextlist)
- [ListItem](#type-listitem--toolkitportabletextlistitem)
- [Mark](#interface-mark-extends-toolkitnestedportabletextspan)
- [TextNode](#type-textnode--toolkittextnode)

---

## _interface_ Props\<N\>

**Props** is passed in to each component.

### Definition

```ts
export interface Props<N extends TypedObject> {
  /**
   * Portable Text data for this node
   */
  node: N;
  /**
   * Index within its parent
   */
  index: number;
  /**
   * Whether the component should be layed out as inline or block element
   */
  isInline: boolean;
}
```

### Example

```ts
---
/* .astro */
import type { Props as $, TypedObject } from "astro-portabletex/types";

export type Props = $<TypedObject>;
---
```

---

## _interface_ Block _extends_ PortableTextBlock

**Block** is passed in to `block` components on [Props](#interface-propsn) `node` property.

Alias to [PortableTextBlock](https://portabletext.github.io/types/interfaces/PortableTextBlock.html) with `style` set to `normal` if empty

### Definition

```ts
interface Block extends PortableTextBlock {
  style: "normal" | PortableTextBlockStyle;
}
```

### Example

```ts
---
/* .astro */
import type { Block, Props as $ } from "astro-portabletext/types";

export type Props = $<Block>;
---
```

---

## _type_ List = ToolkitPortableTextList;

**List** is passed in to `list` components on [Props](#interface-propsn) `node` property.

Alias to [ToolkitPortableTextList](https://portabletext.github.io/toolkit/types/ToolkitPortableTextList.html)

### Definition

```ts
type List = ToolkitPortableTextList;
```

### Example

```ts
---
/* .astro */
import type { List, Props as $ } from "astro-portabletext/types";

export type Props = $<List>;
---
```

---

## _type_ ListItem = ToolkitPortableTextListItem;

**ListItem** is passed in to `listItem` components on [Props](#interface-propsn) `node` property.

Alias to [ToolkitPortableTextListItem](https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html)

### Definition

```ts
type ListItem = ToolkitPortableTextListItem;
```

### Example

```ts
---
/* .astro */
import type { ListItem, Props as $ } from "astro-portabletext/types";

export type Props = $<ListItem>;
---
```

---

## _interface_ Mark _extends_ ToolkitNestedPortableTextSpan

**Mark** is passed in to `mark` components on [Props](#interface-propsn) `node` property.

Extends [ToolkitNestedPortableTextSpan](https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html) with consisting `markDef` and `markKey` properties

### Definition

```ts
interface Mark<MarkDef extends Record<string, unknown> | undefined = undefined>
  extends ToolkitNestedPortableTextSpan {
  markDef: MarkDef & PortableTextMarkDefinition;
  markKey: string;
}
```

### Example 1

```ts
---
/* .astro */
import type { Mark, Props as $ } from "astro-portabletext/types";

type Greet = { msg: string };

export type Props = $<Mark<Greet>>;

const { node } = Astro.props;
// node.markDef.msg is of type `string`
---
```

### Example 2

```ts
---
/* .astro */
import type { Mark, Props as $ } from "astro-portabletext/types";

interface Greet extends Mark {
  markDef: { msg: string };
}

export type Props = $<Greet>;

const { node } = Astro.props;
// node.markDef.msg is of type `string`
---
```

---

## _type_ TextNode = ToolkitTextNode;

Alias to [ToolkitTextNode](https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html)

### Definition

```ts
type TextNode = ToolkitTextNode;
```

### Example

```ts
---
/* .astro */
import type { TextNode, Props as $ } from "astro-portabletext/types";

export type Props = $<TextNode>;
---
```
