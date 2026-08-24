[`astro-portabletext` • Documentation](README.md)

---

# PortableText Component

```js
import { PortableText } from "astro-portabletext";
```

This component provides a simple and flexible way to display rich text, from
using `slots` to custom `components`.

## Examples

- [Basic usage](../examples/PortableTextBasic.astro)
- [Mapping custom components to node types](../examples/PortableTextMappedType.astro)
- [Mapping custom components to node type properties](../examples/PortableTextMappedTypeProperty.astro)
- [Enhancing rendering with slots](../examples/PortableTextSlots.astro)

## Basic usage

Import the `PortableText` component and start rendering. This library provides sensible defaults for rendering common rich text elements, which you can easily override.

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
  text: /* Renders plain text */,
  hardBreak: /* <br /> */,
}
```

</details>

```tsx
---
import { PortableText } from "astro-portabletext";

const payload = [
  // Portable Text payload
];
---

<PortableText value={payload} />
```

## Custom components

Custom components provide full control over rendering rich text elements. You can map components directly to specific node types or to individual node properties.

```tsx
---
import { PortableText } from "astro-portabletext";

const payload = [
  // Portable Text payload
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

<PortableText value={payload} {components} />
```

**See also:** The mapping [component to node type](../examples/PortableTextMappedType.astro) and [component to node type property](../examples/PortableTextMappedTypeProperty.astro) examples.

### Slots

> **Added in `v0.11.0`**

Slots provide a flexible way to intercept and enhance the rendering of rich text elements. This allows you to customize the output in various ways, such as:

- Applying HTML attributes.
- Modifying the output based on specific conditions.

Here's an example of using a slot to apply custom styles to `strong` elements:

```tsx
---
import { PortableText } from "astro-portabletext";

const payload = [
  // Portable Text payload
];

const components = {
  // Optional: custom components
};
---

<PortableText value={payload} {components}>
  <fragment slot="mark">
    {({ Component, props, children }) => (
      <Component {...props} class="mark">{children}</Component>
    )}
  </fragment>
</PortableText>

<style>
  .mark:where(strong) {
    /* styles */
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

**See also:** The [slot example](../examples/PortableTextSlots.astro).

## `PortableText` component properties

| Property             | Type                    | Description                                                                                                                                             |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`              | `array` \| `object`     | Portable Text payload.                                                                                                                                  |
| `components`         | `object`                | Optional. Map components to node types or properties.                                                                                                   |
| `onMissingComponent` | `function` \| `boolean` | Optional. Handle unknown types or disable warnings. <br/>Defaults to console warnings.                                                                  |
| `listNestingMode`    | `"html"` \| `"direct"`  | Optional. List nesting mode. Defaults to `html`. <br/> See [ToolkitListNestMode](https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html) |
