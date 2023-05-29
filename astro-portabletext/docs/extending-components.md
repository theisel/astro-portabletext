[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Extending Components

```ts
import { Block, List, ListItem, Mark } "astro-portabletext/components";
```

- [`Block`](#block)
- [`List`/`ListItem`](#list--listitem)
- [`Mark`](#mark)
- [`PortableText`](#portabletext)

&nbsp;

## Block

```ts
/* MyBlock.astro */
---
import { Block } from "astro-portabletext/components";
import Billboard from "path/to/Billboard.astro";
import Quote from "path/to/Quote.astro";

export type Props = Parameters<typeof Block>[0];

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

## List & ListItem

```ts
/* MyList.astro */
---
import { List } from "astro-portabletext/components";
import BulletListStyle from "path/to/BulletListStyle.astro";
import SquareListStyle from "path/to/SquareListStyle.astro";

export type Props = Parameters<typeof List>[0];

const props = Astro.props;
const listItemIs = (listItem: string) => listItem === props.node.listItem;

const Cmp = listItemIs("square") ? (
  SquareListStyle
) : listItemIs("bullet") ? ( // Override default
  BulletListStyle
) : (
  List  // Fallback to `astro-portabletext`
)
---

<Cmp {...props}><slot /></Cmp>
```

## Mark

```ts
/* MyMark.astro */
---
import { Mark } from "astro-portabletext/components";
import Emphasis from "path/to/Emphasis";
import Hightlight from "path/to/Highlight.astro";

export type Props = Parameters<typeof Mark>[0];

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
import type { PortableTextProps } from "astro-portabletext/types";
import { PortableText } from "astro-portabletext";
// Custom components
import MyBlock from "path/to/MyBlock.astro";
import MyList from "path/to/MyList.astro";
import MyMark from "path/to/MyMark.astro";
// Utils
import { mergeComponents } from "astro-portabletext/utils";

export type Props = Pick<PortableTextProps, "value" | "components">;

const { value, components: overrideComponents = {} } = Astro.props;

const components = mergeComponents({
  block: MyBlock,
  list: MyList,
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
