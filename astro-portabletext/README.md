<div>
  <img src="https://github.com/theisel/astro-portabletext/raw/main/logo.svg" width="240" alt="astro-portabletext logo">
</div>

# astro-portabletext

![license](https://img.shields.io/npm/l/astro-portabletext?style=flat-square)
[![npm](https://img.shields.io/npm/v/astro-portabletext?style=flat-square)](https://www.npmjs.com/package/astro-portabletext)

Effortlessly integrate [Portable Text](https://portabletext.org) into your [Astro](https://astro.build) projects, with extensive customisation options to perfectly match your vision.

## 🎮 Play around

Jump in and see it in action:

<div>
  <a href="https://stackblitz.com/github/theisel/astro-portabletext/tree/main/demo">
    <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz">
  </a>
  <a href="https://codesandbox.io/p/sandbox/github/theisel/astro-portabletext/tree/main/demo">
    <img src="https://assets.codesandbox.io/github/button-edit-lime.svg" alt="Open in CodeSandbox">
  </a>
</div>

## ✨ Why use `astro-portabletext`?

It provides a seamless way to render Portable Text in Astro, with a focus on performance, flexibility, and ease of use:

- 🚀 **Speed and simplicity:** Minimised client-side JS for faster loads, with Astro's islands working its magic.
- 🎨 **Make it yours:** Pre-built components are great, but you can tweak them, extend them, and make them totally yours with slots and custom components.
- 📢 **Recommended by Sanity:** [Officially recommended](https://www.sanity.io/plugins/sanity-astro#rendering-rich-text-and-block-content-with-portable-text) for rendering Portable Text in Astro projects.

## 🚀 Features

- 🧩 **Core components:** Includes pre-built components for essential Portable Text elements, giving you a solid foundation to build upon.
- 🔧 **Customisable:** Use `slots` for light tweaks or bring in your custom `components` for complete control.
- 🛠 **Fine-tune node rendering:** Use the `render` function from `usePortableText` for extra control over child node output.
- 📘 **Typescript:** Full TypeScript support means you can build with confidence.

## 📦 Install it

Pick your favourite package manager and run one of these:

```bash
npm install astro-portabletext
# or
pnpm add astro-portabletext
# or
yarn add astro-portabletext
# or
bun add astro-portabletext
```

## 🧑‍💻 Let's get coding

Ready to render some Portable Text? Here's a quick start.

### Basic

Import the `PortableText` component into your `.astro` file and start rendering. It's that simple! You can even override the defaults if you want to get fancy.

<details>
  <summary>Peek at the default structure</summary>

```js
{
  type: {
    /* Custom types go here */
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
  text: /* Renders plain text */
  hardBreak: /* <br /> */,
}
```

</details>

```js
/* .astro */
---
import { PortableText } from "astro-portabletext";

const portableText = [
  {
    _type: 'block',
    _key: 'a1ph4',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'c961f',
        text: 'This is a Portable Text example.',
        marks: [],
      },
    ],
  },
];
---

<PortableText value={portableText} />
```

### Customisation

#### Slots - Tweak it just right

Sometimes you just need to nudge things here and there. Use `slots` for those quick customisations without breaking a sweat.

```js
/* .astro */
---
import { PortableText } from "astro-portabletext";

const portableText = [
  {
    _type: 'block',
    _key: 'a1ph4',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'c961f',
        text: 'This is a Portable Text example.',
        marks: [],
      },
    ],
  },
];
---

<PortableText value={portableText}>
  <fragment slot="block">{({ Component, props, children }) => (
    <Component {...props} class="block">{children}</Component>
  )}</fragment>
</PortableText>

<style>
  .block:where(h1, h2) {
    /* some styles */
  }
</style>
```

#### Custom components - Full control

Want to take things to the next level? Bring in your own custom components to fully control how each part is rendered.

```js
/* .astro */
---
import { PortableText } from "astro-portabletext";
import MyCustomBlock from "./MyCustomBlock.astro";

const portableText = [
  {
    _type: 'block',
    _key: 'a1ph4',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'c961f',
        text: 'This is a Portable Text example.',
        marks: [],
      },
    ],
  },
];
---

<PortableText
  value={portableText}
  components={{ block: MyCustomBlock }}
/>
```

#### Mix and match: Ultimate flexibility

Take the best of both worlds! You can use custom components and tweak small details with slots. It's the flexibility you've been looking for.

```js
/* .astro */
---
import { PortableText } from "astro-portabletext";
import MyCustomBlock from "./MyCustomBlock.astro";

const portableText = [
  {
    _type: 'block',
    _key: 'a1ph4',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'c961f',
        text: 'This is a Portable Text example.',
        marks: [],
      },
    ],
  },
];
---

<PortableText
  value={portableText}
  components={{ block: MyCustomBlock }}
>
  <fragment slot="block">{({ Component /* MyCustomBlock */, props, children }) => (
    <Component {...props} class="block">{children}</Component>
  )}</fragment>
</PortableText>

<style>
  .block:where(h1, h2) {
    /* some styles */
  }
</style>
```

```ts
/* MyCustomBlock.astro */
---
import type { Block, Props as $ } from "astro-portabletext/types";
import { usePortableText } from "astro-portabletext/utils";

export type Props = $<Block>;

const { node, isInline, index, ...attrs} = Astro.props;
const { render, getDefaultComponent } = usePortableText(node);

const DefaultBlock = getDefaultComponent(); // In this `block` context, it returns `astro-portabletext` block component

const styleIs = (style: string) => style === node.style;
---

{
  styleIs("h1") ? (
    <h1 {...attrs}>{render({
      text: ({ props }) => props.node.text.replace("fox", "🦊") // Use the render function to customise the output
    })}</h1>
  ) : (
    <DefaultBlock {...Astro.props}>
      <slot />
    </DefaultBlock>
  )
}
```

## 📖 Documentation

For all the fine details, check out the [docs](docs/README.md), including guides for integrating with [Sanity](docs/sanity.md).

## 📄 License

This project is licensed under the [ISC License](https://github.com/theisel/astro-portabletext/blob/main/LICENSE).
