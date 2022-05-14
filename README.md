<div>
  <img src="https://raw.githubusercontent.com/theisel/astro-portabletext/main/logo.svg" width="240" alt="astro-portabletext logo">
</div> 

# astro-portabletext

[![license](https://badgen.net/badge/license/ISC/green)](https://opensource.org/licenses/ISC)
[![github](https://badgen.net/github/release/theisel/astro-portabletext)](https://github.com/theisel/astro-portabletext)
[![npm](https://badgen.net/npm/v/astro-portabletext)](https://www.npmjs.com/package/astro-portabletext)

Render [Portable Text](https://portabletext.org/) with [Astro](https://astro.build/).

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
    h1: /* <h1 class={astroClass}><slot /></h1> */,
    h2: /* <h2 class={astroClass}><slot /></h2> */,
    h3: /* <h3 class={astroClass}><slot /></h3> */,
    h4: /* <h4 class={astroClass}><slot /></h4> */,
    h5: /* <h5 class={astroClass}><slot /></h5> */,
    h6: /* <h6 class={astroClass}><slot /></h6> */,
    blockquote: /* <blockquote class={astroClass}><slot /></blockquote> */,
    normal: /* <p class={astroClass}><slot /></p> */
  },
  list: /* <ul class={astroClass}><slot /></ul> | <ol class="..."><slot /></ol>*/,
  listItem: /* <li class={astroClass}><slot /></li> */,
  mark: {
    code: /* <code class={astroClass}><slot /></code> */,
    em: /* <em class={astroClass}><slot /></em> */,
    link: /* <a href="..." class={astroClass}><slot /></a> */,
    'strike-through': /* <del class={astroClass}><slot /></del> */,
    strong: /* <strong class={astroClass}><slot /></strong> */,
    underline: /* <span class={astroClass} style="text-decoration: underline;"><slot /></span> */
  },
  hardBreak: /* <br /> */,
}

/* astroClass; see `Using <style> in Astro component` */
```

## Merge/Override Components

Add to them or override a particular one
```js
---
import { PortableText } from "astro-portabletext";
import { Unicorn } from "@component/Unicorn";
import { Dinosaur } from "@component/Dinosaur";
import { Sunny } from "@component/Sunny";
import { Highlight } from "@component/Highlight";
import { PageHeading } from "@component/PageHeading";
import { Bold } from "@component/Bold";
---

<PortableText 
  value={[/* portable text blocks */]}
  components={{
    type: {
      unicorn: Unicorn,
      dinosaur: Dinosaur,
    },
    block: {
      h1: PageHeading, /* Override default `h1` block style */
      sunny: Sunny, /* Custom block style */
    },
    mark: {
      strong: Bold, /* Override default `strong` mark */
      highlight: Highlight, /* Custom mark */
    },
  }}
/>
```

## Custom Handler

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
/* @component/Unicorn.jsx */
export function Unicorn(props) {
  const { astroClass = "" } = props;

  return (
    <div className={`unicorn ${astroClass}`}>
      /* ... */
    </div>
  )
}
```

## Typescript
```js
/* @component/Greeting.tsx */
import type { PtTypeComponentProps, TypedObject } from "astro-portabletext/types";

interface Greet extends TypedObject {
  message: string
}

export function Greeting(props: PtTypeComponentProps<Greet>) {
  return <p>Hello {props.node.message}</p>
}
```

## Credits
[@portabletext/react](https://github.com/portabletext/react-portabletext)

[@portabletext/svelte](https://github.com/portabletext/svelte-portabletext)