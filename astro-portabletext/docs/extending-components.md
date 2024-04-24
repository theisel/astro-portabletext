[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Extending Components

```ts
import { Block, List, ListItem, Mark } "astro-portabletext/components";
```

- [`Block`](#block)
- [`List`](#list)
- [`ListItem`](#listitem)
- [`Mark`](#mark)
- [`PortableText`](#portabletext)

&nbsp;

## Block

```ts
/* MyBlock.astro */
---
import type { Props as $, Block as BlockType } from "astro-portabletext/types";
import { Block } from "astro-portabletext/components";
import Billboard from "path/to/Billboard.astro";
import Quote from "path/to/Quote.astro";

export type Props = $<BlockType>;

const props = Astro.props;
const styleIs = (style: string) => style === props.node.style;

const Cmp = styleIs("billboard") ? (
  Billboard
) : styleIs("blockquote") ? (  // Override default
  Quote
) : (
  Block  // Fallback to `astro-portabletext`
)
---

<Cmp {...props}><slot /></Cmp>
```

## List

```ts
/* MyList.astro */
---
import type { Props as $, List as ListType } from "astro-portabletext/types";
import { List } from "astro-portabletext/components";
import BulletList from "path/to/BulletList.astro";
import SquareList from "path/to/SquareList.astro";

export type Props = $<ListType>;

const props = Astro.props;

const listItemIs = (listItem: string) => listItem === props.node.listItem;

const Cmp = listItemIs("square") ? (
  SquareList
) : listItemIs("bullet") ? ( // Override default
  BulletList
) : (
  List  // Fallback to `astro-portabletext`
)
---

<Cmp {...props}><slot /></Cmp>
```

## ListItem

```ts
/* MyListItem.astro */
---
import type { Props as $, ListItem as ListItemType } from "astro-portabletext/types";
import { ListItem } from "astro-portabletext/components";
import BulletListItem from "path/to/BulletListItem.astro";
import SquareListItem from "path/to/SquareListItem.astro";

export type Props = $<ListItemType>;

const props = Astro.props;

const listItemIs = (listItem: string) => listItem === props.node.listItem;

const Cmp = listItemIs("square") ? (
  SquareListItem
) : listItemIs("bullet") ? ( // Override default
  BulletListItem
) : (
  ListItem  // Fallback to `astro-portabletext`
)
---

<Cmp {...props}><slot /></Cmp>
```

## Mark

```ts
/* MyMark.astro */
---
import type { Props as $, Mark as MarkType } from "astro-portabletext/types";
import { Mark } from "astro-portabletext/components";
import Emphasis from "path/to/Emphasis";
import Hightlight from "path/to/Highlight.astro";

export type Props = $<MarkType<never>>; // 👈 Use `never` for type parameter

const props = Astro.props;
const markTypeIs = (markType: string) => markType === props.node.markType;

const Cmp = markTypeIs("hightlight") ? (
  Hightlight
) : markTypeIs("em") ? ( // Override default
  Emphasis
) : (
  Mark // Fallback to `astro-portabletext`
)
---

<Cmp {...props}><slot /></Cmp>
```

## PortableText

```ts
/* MyPortableText.astro */
---
import { PortableText } from "astro-portabletext";
// Custom components
import MyBlock from "path/to/MyBlock.astro";
import MyList from "path/to/MyList.astro";
import MyListItem from "path/to/MyListItem.astro";
import MyMark from "path/to/MyMark.astro";
// Utils
import { mergeComponents } from "astro-portabletext/utils";

type PortableTextProps = Parameters<typeof PortableText>[0];

export type Props = Pick<PortableTextProps, "value" | "components">;

const { value, components: overrideComponents = {} } = Astro.props;

const components = mergeComponents({
  block: MyBlock,
  list: MyList,
  listItem: MyListItem,
  mark: MyMark,
}, overrideComponents)
---

<PortableText value={value} components={components} />
```

```ts
/* .astro */
---
import MyPortableText from "path/to/MyPortableText.astro";

const value = /* provide value */
const components = /* provide components */
---

<MyPortableText value={value} components={components} />
```
