[`astro-portabletext` • Documentation](README.md)

---

# Getting Started

## Installation

```sh
npm install astro-portabletext
```

## Usage

The `PortableText` component renders rich text with sensible defaults out of the box. You can customize the output using `components` and/or `slots`.

### Basic usage

```tsx
---
import { PortableText } from "astro-portabletext";

const value = [
  // Portable Text payload
];
---

<PortableText value={value} />
```

### Custom components

Override how specific node types are rendered by passing a `components` prop.

```tsx
---
import { PortableText } from "astro-portabletext";

const value = [
  // Portable Text payload
];

const components = {
  // Custom components
};
---

<PortableText value={value} {components} />
```

[Read the custom components documentation](portabletext-component.md#custom-components)

### Slots

Slots provide a flexible way to enhance rendering by passing additional props to the component.

```tsx
---
import { PortableText } from "astro-portabletext";

const value = [
  // Portable Text payload
];

const components = {
  // Optional: custom components
};
---

<PortableText value={value} {components}>
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

[Read the slots documentation](portabletext-component.md#slots)

## Next steps

- [PortableText component](portabletext-component.md) — Full usage and configuration options.
- [Utility functions](utility-functions.md) — Helper functions for working with Portable Text content.
- [TypeScript types](types/README.md) — Type definitions.
- [Examples](../examples/README.md) — Practical usage examples.
