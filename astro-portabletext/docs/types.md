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
   * Portable Text node
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
  /**
   * ⚠️ As of Astro V3, this has no impact and should be ignored.
   * It will be dropped in future release.
   */
  class?: string | undefined | null;
}
```

### Example

```ts
---
import type { Props as $, TypedObject } from "astro-portabletex/types";

export type Props = $<TypedObject>;

const props = Astro.props;
---
```

---

## _interface_ Block _extends_ PortableTextBlock

**Block** is passed in to `block` components on [Props](#interface-propsn) `node` property.

See [PortableTextBlock](https://portabletext.github.io/types/interfaces/PortableTextBlock.html) for details.

### Definition

```ts
interface Block extends PortableTextBlock {
  style: "normal" | PortableTextBlockStyle;
}
```

### Example

```ts
/* .astro */
import type { Block, Props as $ } from "astro-portabletext/types";

export type Props = $<Block>;

const props = Astro.props;
```

---

## type List = ToolkitPortableTextList;

**List** is passed in to `list` components on [Props](#interface-propsn) `node` property.

See [ToolkitPortableTextList](https://portabletext.github.io/toolkit/modules.html#ToolkitPortableTextList) for details.

### Definition

```ts
type List = ToolkitPortableTextList;
```

### Example

```ts
/* .astro */
import type { List, Props as $ } from "astro-portabletext/types";

export type Props = $<List>;

const props = Astro.props;
```

---

## type ListItem = ToolkitPortableTextListItem;

**ListItem** is passed in to `listItem` components on [Props](#interface-propsn) `node` property.

See [ToolkitPortableTextListItem](https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html) for details.

### Definition

```ts
type ListItem = ToolkitPortableTextListItem;
```

### Example

```ts
/* .astro */
import type { ListItem, Props as $ } from "astro-portabletext/types";

export type Props = $<ListItem>;

const props = Astro.props;
```

---

## _interface_ Mark _extends_ ToolkitNestedPortableTextSpan

**Mark** is passed in to `mark` components on [Props](#interface-propsn) `node` property.

See [ToolkitNestedPortableTextSpan](https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html) for details.

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
/* .astro */
import type { Mark, Props as $ } from "astro-portabletext/types";

type Greet = Mark<{ msg: string }>;

export type Props = $<Greet>;

const props = Astro.props;
```

### Example 2

```ts
/* .astro */
import type { Mark, Props as $ } from "astro-portabletext/types";

interface Greet extends Mark {
  markDef: { msg: string };
}

export type Props = $<Greet>;

const props = Astro.props;
```

---

## type TextNode = ToolkitTextNode;

**TextNode** is alias to [ToolkitTextNode](https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html)

### Definition

```ts
type TextNode = ToolkitTextNode;
```

### Example

```ts
/* .astro */
import type { TextNode, Props as $ } from "astro-portabletext/types";

export type Props = $<TextNode>;

const props = Astro.props;
```
