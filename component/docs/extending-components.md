[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Extending Components

```ts
import { Block, List, ListItem, Mark } "astro-portabletext/components";
import type { BlockProps, ListProps, ListItemProps, MarkProps } "astro-portabletext/components";
```

- [`Block`](#block)
- [`List`/`ListItem`](#list--listitem)
- [`Mark`](#mark)
- [`PortableText`](#portabletext)

## Block

```ts
/* MyBlock.astro */
---
import type { BlockProps } from "astro-portabletext/components";
import { Block } from "astro-portabletext/components";
import Billboard from "path/to/Billboard.astro";
import Quote from "path/to/Quote.astro";

export type { BlockProps as Props };

const props = Astro.props as BlockProps;
const styleIs = (style: string) => style === props.node.style;

const Cmp = styleIs("billboard") ? (
  Billboard
) : styleIs("blockquote") ? (  // Override default
  Quote
) : (
  Block  // Fallback to `astro-portabletext` Block component
)
---

<Cmp {...props}><slot /></Cmp>
```

## List & ListItem

```ts
/* MyList.astro */
---
import type { ListProps } from "astro-portabletext/components";
import { List } from "astro-portabletext/components";
import BulletListStyle from "path/to/BulletListStyle.astro";
import SquareListStyle from "path/to/SquareListStyle.astro";

export type { ListProps as Props };

const props = Astro.props as ListProps;
const listItemIs = (listItem: string) => listItem === props.node.listItem;

const Cmp = listItemIs("square") ? (
  SquareListStyle
) ? listItemIs("bullet") ? ( // Override default
  BulletListStyle
) : (
  List  // Fallback to `astro-portabletext` List component
)
---

<Cmp {...props}><slot /></Cmp>
```

## Mark

```ts
/* MyMark.astro */
---
import type { MarkProps } from "astro-portabletext/components";
import { Mark } from "astro-portabletext/components";
import Emphasis from "path/to/Emphasis";
import Hightlight from "path/to/Highlight.astro";

export type { MarkProps as Props };

const props = Astro.props as MarkProps;
const markTypeIs = (markType: string) => markType === props.node.markType;

const Cmp = markTypeIs("hightlight") ? (
  Hightlight
) : markTypeIs("em") ? ( // Override default
  Emphasis
) : (
  Mark // Fallback to `astro-portabletext` Mark component
)
---

<Cmp {...props}><slot /></Cmp>
```

## PortableText

```ts
/* MyPortableText.astro */
---
import type { PortableTextProps } from "astro-portabletext";
import { PortableText } from "astro-portabletext";
// Custom components
import MyBlock from "path/to/MyBlock.astro";
import MyList from "path/to/MyList.astro";
import MyMark from "path/to/MyMark.astro";

export interface Props {
  value: PortableTextProps["value"]
}

const { value } = Astro.props as Props;

const components = {
  block: MyBlock,
  list: MyList,
  mark: MyMark,
}
---

<PortableText value={value} components={components} />
```

```ts
/* .astro */
---
import MyPortableText from "path/to/MyPortableText.astro";

const value = /* provide value */
---

<MyPortableText value={value} />
```
