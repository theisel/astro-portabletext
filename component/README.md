<div>
  <img src="../logo.svg" width="240" alt="astro-portabletext logo">
</div>

# astro-portabletext

[![license](https://flat.badgen.net/badge/license/ISC/green)](https://opensource.org/licenses/ISC)
[![npm](https://flat.badgen.net/npm/v/astro-portabletext)](https://www.npmjs.com/package/astro-portabletext)

Render [Portable Text](https://portabletext.org/) with [Astro](https://astro.build/)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [License](#license)

## Install

```
npm install astro-portabletext
```

## Usage

| Import                          | Description                                                                                                                       |
| :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| `astro-portabletext`            | For `PortableText` component. <br>See [PortableText Component](./docs/portabletext-component.md) for details.                     |
| `astro-portabletext/components` | For `Block`, `List`, `ListItem` and `Mark` components. <br> See [Extending Components](./docs/extending-components.md) for usage. |
| `astro-portabletext/types`      | For Typescript [types](https://github.com/theisel/astro-portabletext/blob/main/component/lib/types.ts)                            |
| `astro-portabletext/utils`      | For [utility](https://github.com/theisel/astro-portabletext/blob/main/component/lib/utils.ts) functions                           |

```ts
/* .astro file */
---
import { PortableText } from "astro-portabletext";
---

<PortableText
  value=/* Required */
  components=/* Optional */
  onMissingComponent=/* Optional */
  listNestingMode=/* Optional */
/>
```

**astro-portabletext** components will render the following:

```js
{
  type: {
    /* custom types go here */
  },
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
  list: {
    bullet: /* <ul class={astroClass}><slot /></ul> */,
    number: /* <ol class={astroClass}><slot /></ol> */,
  },
  listItem: {
    bullet: /* <li class={astroClass}><slot /></li> */,
    number: /* <li class={astroClass}><slot /></li> */,
  },
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
```

## Documentation

See [documentation](./docs/README.md) for advanced usage and examples.

## License

ISC
