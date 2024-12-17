[`astro-portabletext` • Documentation](README.md)

---

# PortableText component

```js
import { PortableText } from "astro-portabletext";
```

This component provides a simple and flexible way to display rich text, from
using `slots` to custom `components`.

## Examples

- [Basic example](../examples/portabletext-basic.astro)
- Custom component [mapped to node type](../examples/portabletext-mapped-type.astro)
- Custom component [mapped to node type property](../examples/portabletext-mapped-type-property.astro)
- `v0.11.0+` Using PortableText component with [slots](../examples/portabletext-slots.astro)

## Basic usage

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

## Custom components

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

💡 Refer to mapping [component to node type](../examples/portabletext-mapped-type.astro) and [component to node type property](../examples/portabletext-mapped-type-property.astro) examples for more guidance.

### Slots

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

The available slot names are:

- `block`
- `hardBreak`
- `list`
- `listItem`
- `mark`
- `text`
- `type`

💡 Refer to [slot example](../examples/portabletext-slots.astro) for more details.

## `PortableText` component properties

| Property                        | Type                    | Description                                                                                                                                                  |
| ------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                         | `array` or `object`     | Portable Text payload                                                                                                                                        |
| `components (optional)`         | `object`                | Mapping of components to node types or its properties.                                                                                                       |
| `onMissingComponent (optional)` | `function` or `boolean` | Disable warning messages or handle unknown types. **Default** prints to console.                                                                             |
| `listNestingMode (optional)`    | `"html"` or `"direct"`  | List nesting mode. **Default** is `html`. See [ToolkitListNestMode](https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html) for more details. |
