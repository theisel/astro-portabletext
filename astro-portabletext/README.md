<div>
  <img src="https://github.com/theisel/astro-portabletext/raw/main/logo.svg" width="240" alt="astro-portabletext logo">
</div>

# astro-portabletext

![license](https://img.shields.io/npm/l/astro-portabletext?style=flat-square)
[![npm](https://img.shields.io/npm/v/astro-portabletext?style=flat-square)](https://www.npmjs.com/package/astro-portabletext)

&nbsp;

Render [Portable Text](https://portabletext.org/) with [Astro](https://astro.build/).

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/astro-portabletext/tree/main/demo)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/theisel/astro-portabletext/tree/main/demo)

&nbsp;

## Table of Contents

- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Sanity Projects](#sanity-projects)
- [License](#license)

&nbsp;

## Getting Started

### Install

```bash
$ npm install astro-portabletext
# $ pnpm add astro-portabletext
# $ yarn add astro-portabletext
```

### Usage

| Import                          | Description                                                                                                                       |
| :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| `astro-portabletext`            | For `PortableText` component. <br>See [PortableText Component](docs/portabletext-component.md) for details.                       |
| `astro-portabletext/components` | For `Block`, `List`, `ListItem` and `Mark` components. <br> See [Extending Components](docs/extending-components.md) for details. |
| `astro-portabletext/types`      | For Typescript [types](docs/types.md)                                                                                             |
| `astro-portabletext/utils`      | For [utility](docs/utils.md) functions                                                                                            |

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
    h1: /* <h1 {...attrs}><slot /></h1> */,
    h2: /* <h2 {...attrs}><slot /></h2> */,
    h3: /* <h3 {...attrs}><slot /></h3> */,
    h4: /* <h4 {...attrs}><slot /></h4> */,
    h5: /* <h5 {...attrs}><slot /></h5> */,
    h6: /* <h6 {...attrs}><slot /></h6> */,
    blockquote: /* <blockquote {...attrs}><slot /></blockquote> */,
    normal: /* <p {...attrs}><slot /></p> */
  },
  list: {
    bullet: /* <ul {...attrs}><slot /></ul> */,
    number: /* <ol {...attrs}><slot /></ol> */,
    menu: /* <menu {...attrs}><slot /></menu> */,
  },
  listItem: {
    bullet: /* <li {...attrs}><slot /></li> */,
    number: /* <li {...attrs}><slot /></li> */,
    menu: /* <li {...attrs}><slot /></li> */,
  },
  mark: {
    code: /* <code {...attrs}><slot /></code> */,
    em: /* <em {...attrs}><slot /></em> */,
    link: /* <a {...attrs} href="..."><slot /></a> */,
    'strike-through': /* <del {...attrs}><slot /></del> */,
    strong: /* <strong {...attrs}><slot /></strong> */,
    underline: /* <span {...attrs} style="text-decoration: underline;"><slot /></span> */
  },
  hardBreak: /* <br /> */,
}
```

&nbsp;

## Documentation

Refer to [docs](docs/README.md) page for advanced usage and examples.

&nbsp;

## Sanity Projects
Refer to `astro-portabletext` [Sanity docs](docs/sanity.md)  page

&nbsp;

## License

ISC
