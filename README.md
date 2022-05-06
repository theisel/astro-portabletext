# astro-portabletext

[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)

Render [Portable Text](https://portabletext.org/) with [Astro](https://astro.build/).

We have [react-portabletext](https://github.com/portabletext/react-portabletext) and [svelte-portabletext](https://github.com/portabletext/svelte-portabletext) which can be used to output your [Portable Text](https://github.com/portabletext/portabletext) with [Astro](https://astro.build/). Like so...

```js
/* .astro file */
---
import { PortableText } from "@portabletext/react";
---

<PortableText
  /* client:{load|idle|visible|media|only} needed for hydration */
  value={[/* ... */]}
  components={/* ... */}
/>
```

However, it will add bloat if **_only_** one or some of the blocks  need hydration.



## Install
```
npm install astro-portabletext --save-dev
```

## Usage
```js
/* .astro file */
---
import { PortableText } from "astro-portabletext";
---

<PortableText 
  value={[/* portable text blocks */]} 
  components={/* custom components */}
/>
```

## Default Components
**astro-portabletext** components will render the following
```js
{
  /* type: Must be defined by you! */,
  block: {
    h1: /* <h1 class="..."><slot /></h1> */,
    h2: /* <h2 class="..."><slot /></h2> */,
    h3: /* <h3 class="..."><slot /></h3> */,
    h4: /* <h4 class="..."><slot /></h4> */,
    h5: /* <h5 class="..."><slot /></h5> */,
    h6: /* <h6 class="..."><slot /></h6> */,
    blockquote: /* <blockquote class="..."><slot /></blockquote> */,
    normal: /* <p class="..."><slot /></p> */
  },
  list: /* <ul class="..."><slot /></ul> | <ol class="..."><slot /></ol>*/,
  listItem: /* <li class="..."><slot /></li> */,
  mark: {
    code: /* <code class="..."><slot /></code> */,
    em: /* <em class="..."><slot /></em> */,
    link: /* <a href="..." class="..."><slot /></a> */,
    'strike-through': /* <del class="..."><slot /></del> */,
    strong: /* <strong class="..."><slot /></strong> */,
    underline: /* <span class="..." style="text-decoration: underline;"><slot /></span> */
  },
  hardBreak: /* <br /> */,
}
```

## Merge Components

Keep default components and add to them
```js
---
import { PortableText } from "astro-portabletext";
import { Unicorn } from "@component/Unicorn";
import { Dinosaur } from "@component/Dinosaur";
import { Sunny } from "@component/Sunny";
import { Highlight } from "@component/Highlight";
---

<PortableText 
  value={[/* portable text blocks */]}
  components={{
    type: {
      unicorn: Unicorn,
      dinosaur: Dinosaur,
    },
    block: {
      sunny: Sunny,
    },
    mark: {
      highlight: Highlight,
    },
  }}
/>
```

## Overwrite Default Component
Change some default components like so
```js
/* .astro file */
---
import { PortableText } from "astro-portabletext";
import { PageHeading } from "@component/PageHeading";
---

<PortableText 
  value={[/* portable text blocks */]}
  components={{
    block: {
      h1: PageHeading,
    },
  }}
/>
```

## With Handler

Create a handler for better control
```js
/* .astro file */
---
import { PortableText } from "astro-portabletext";
import { Type } from "@handler/Type"
import { Block } from "@handler/Block"
import { Mark } from "@handler/Mark"
---

<PortableText 
  value={[/* portable text blocks */]}
  components={{
    type: Type,
    block: Block,
    mark: Mark
  }}
/>
```

## Using `<style>` in Astro component
```js
/* .astro file */
---
import { PortableText } from "astro-portabletext";
import { Unicorn } from "@component/Unicorn";
---

<PortableText 
  value={[/* portable text blocks */]} 
  components={{
    type: {
      unicorn: Unicorn
    }
  }}
/>

<style>
  .unicorn {/* some values */}
</style>
```

```js
/* @component/Unicorn.tsx */
import type { PtTypeComponentProps } from "astro-portabletext";

export function Unicorn(props: PtTypeComponentProps) {
  const { astroClass = "" } = props;

  return (
    <div className={`unicorn ${astroClass}`}>
      /* ... */
    </div>
  )
}
```