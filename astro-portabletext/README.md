<div>
  <img src="https://github.com/theisel/astro-portabletext/raw/main/logo.svg" width="240" alt="astro-portabletext logo">
</div>

# astro-portabletext

[![npm](https://img.shields.io/npm/v/astro-portabletext?style=flat-square)](https://www.npmjs.com/package/astro-portabletext)
![license](https://img.shields.io/npm/l/astro-portabletext?style=flat-square)

A flexible and customizable library for rendering [Portable Text](https://portabletext.org) content in [Astro](https://astro.build) projects.

⚠️ **Prerequisites**:

- Astro v4.6+ (as of `v0.11.0`)

## Table of Contents

- [Features](#features)
- [Demonstration](#demo)
- [Resources](#resources)
- [Installation](#installation)
- [Usage](#usage)
  - [Sanity Integration](#sanity-integration)
  - [`PortableText` component](#portabletext-component)
    - [Basic usage](#basic-usage)
    - [Custom components](#custom-components)
    - [Slots](#slots)
  - [`PortableText` component properties](#portabletext-component-properties)
  - [Utility functions](#utility-functions)
    - [usePortableText](#useportabletext)
    - [mergeComponents](#mergecomponents)
    - [toPlainText](#toplaintext)
- [Contributing](#contributing)
- [License](#license)

<h2 id="features">🚀 Features</h2>

- 🧩 **Core components:** Provides pre-built components for common Portable Text elements.
- 🔧 **Customizable:** Use `components` or `slots` to tailor output to your needs.
- 🛠 **Flexible control:** Use `render` function via `usePortableText` to fine-tune rendering.
- 📘 **Typescript:** Built with full TypeScript support.

<h2 id="demo">🎮 Demonstration</h2>

Jump in and see it in action:

<div>
  <a href="https://stackblitz.com/github/theisel/astro-portabletext/tree/main/demo">
    <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz">
  </a>
  <a href="https://codesandbox.io/p/sandbox/github/theisel/astro-portabletext/tree/main/demo">
    <img src="https://assets.codesandbox.io/github/button-edit-lime.svg" alt="Open in CodeSandbox">
  </a>
</div>

<h2 id="resources">📖 Resources</h2>

- **Documentation:** [Read the full documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/README.md "Full documentation for astro-portabletext") including TypeScript type definitions.
- **Examples:** [Browse practical examples](https://github.com/theisel/astro-portabletext/tree/main/examples "Browse examples for astro-portabletext") to help you learn.

<h2 id="installation">📦 Installation</h2>

Pick your favorite package manager and run one of these:

```bash
npm install astro-portabletext
# or
pnpm add astro-portabletext
# or
yarn add astro-portabletext
# or
bun add astro-portabletext
```

<h2 id="usage">🧑‍💻 Usage</h2>

### Sanity Integration

This library is [officially recommended](https://www.sanity.io/plugins/sanity-astro#rendering-rich-text-and-block-content-with-portable-text) by [Sanity](https://sanity.io) for rendering Portable Text in Astro projects.

Helpful resources:

- [Sanity Integration for Astro](https://www.sanity.io/plugins/sanity-astro)
- [Guide: Building a Blog with Sanity and Astro](https://www.sanity.io/guides/sanity-astro-blog)

### `PortableText` component

This component provides a simple and flexible way to display rich text, from
using `slots` to custom `components`.

#### Basic usage

Import the `PortableText` component and start rendering. This library provides sensible defaults for rendering common Portable Text elements, which you can easily override.

> Use the following default mapping to understand what each node type outputs.

<details>
  <summary>View the default structure and output</summary>

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
    _type: "block",
    children: [
      {
        _type: "span",
        marks: [],
        text: "This is a ",
      },
      {
        _type: "span",
        marks: ["strong"],
        text: "bold",
      },
      {
        _type: "span",
        marks: [],
        text: " text example!",
      },
    ],
    markDefs: [],
    style: "normal",
  },
];
---

<PortableText value={portableText} />
```

#### Custom components

Custom components allow for better control over rendering of rich text elements. You can map a component to a node type or map the component to the property of the node type.

```js
/* .astro */
---
import { PortableText } from "astro-portabletext";

const portableText = [
  // ... your Portable Text content
];

const components = {
  // custom types
  type: { [_type]: Component } | Component,
  unknownType: Component,
  // block style
  block: { [style]: Component } | Component,
  unknownBlock: Component,
  // list
  list: { [listItem]: Component } | Component,
  unknownList: Component,
  // list item
  listItem: { [listItem]: Component } | Component,
  unknownListItem: Component,
  // mark
  mark: { [markType]: Component } | Component,
  unknownMark: Component,
  // strings; added in `v0.11.0`
  text: Component,
  // line break
  hardBreak: Component
};
---

<PortableText value={portableText} components={components} />
```

💡 Refer to [`custom` components documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/portabletext-component.md#custom-components "Custom components documentation for astro-portabletext") for more details.

#### Slots

> **Added in `v0.11.0`**

Slots provide a flexible way to enhance the rendering of Portable Text elements by passing additional props to the component. This allows you to customize the output in various ways, such as:

- Applying custom styles or classes
- Wrapping elements in custom components
- Modifying the output based on specific conditions

Here's an example of using a slot to apply custom styles to `strong` elements:

```ts
/* .astro */
---
import { PortableText } from "astro-portabletext";

const portableText = [
  // ... your Portable Text content
];
---

<PortableText value={portableText}>
  <fragment slot="mark">{({ Component, props, children }) => (
    <Component {...props} class="mark">{children}</Component>
  )}</fragment>
</PortableText>

<style>
  .mark:where(strong) {
    /* some styles */
  }
</style>
```

💡 Refer to [`slots` documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/portabletext-component.md#slots "Slots documentation for astro-portabletext") for more details.

### `PortableText` component properties

| Property                        | Type                    | Description                                                                                                                                |
| ------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                         | `array` or `object`     | Portable Text payload                                                                                                                      |
| `components (optional)`         | `object`                | Mapping of components to node types or its properties.                                                                                     |
| `onMissingComponent (optional)` | `function` or `boolean` | Disable warning messages or handle unknown types. **Default** prints to console.                                                           |
| `listNestingMode (optional)`    | `"html"` or `"direct"`  | List nesting mode. **Default** is `html`. See [ToolkitListNestMode](https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html) |

### Utility functions

This library provides utility functions to help you work with Portable Text content:

```js
import {
  usePortableText,
  mergeComponents,
  toPlainText,
  spanToPlainText, // added in `v0.11.0`
} from "astro-portabletext";
```

💡 Refer to the [utility functions](https://github.com/theisel/astro-portabletext/blob/main/docs/utility-functions.md) documentation for more details.

<h2 id="contributing">🙌 Contributing</h2>

We welcome contributions to improve `astro-portabletext`!

If you find a bug or have a feature request, please open an [issue](https://github.com/theisel/astro-portabletext/issues) on GitHub.
If you'd like to contribute code, feel free to submit a [pull request](https://github.com/theisel/astro-portabletext/pulls).

<h2 id="license">📄 License</h2>

This project is licensed under the [ISC License](https://github.com/theisel/astro-portabletext/blob/main/LICENSE).
