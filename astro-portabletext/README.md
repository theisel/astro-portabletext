# astro-portabletext

[![npm version](https://img.shields.io/npm/v/astro-portabletext.svg?style=flat-square)](https://npmjs.com/package/astro-portabletext)
![license](https://img.shields.io/npm/l/astro-portabletext?style=flat-square)

A flexible library for rendering [Portable Text](https://portabletext.org/) content in [Astro](https://astro.build/) projects.

**Prerequisites:**

- Astro (`>=4.6.0`)
- Node.js (`>=22.12.0`)

**Installation:**

```sh
npm install astro-portabletext
```

## Features

- **Core components** for common rich text elements.
- **Custom rendering** using `slots` or your own `components`.
- **Flexible control** with the `render` function via `usePortableText`.
- **Built with** TypeScript support.

## Demonstration

View live examples:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/astro-portabletext/tree/main/demo)
[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/theisel/astro-portabletext/tree/main/demo)

## Resources

- [Documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/README.md)
- [Examples](https://github.com/theisel/astro-portabletext/blob/main/examples/README.md)

## Usage

Display rich text with sensible defaults, or customize the output using `components` and/or `slots`.

### Components

```tsx
---
import { PortableText } from "astro-portabletext";

const payload = [
  // Portable Text payload
];

const components = {
  // Custom components
};
---

<PortableText value={payload} {components} />
```

[Read the custom components documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/portabletext-component.md#custom-components)

### Slots

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

[Read the slots documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/portabletext-component.md#slots)

## API

[View full API documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/README.md)

### `PortableText` component properties

| Property             | Type                    | Description                                                                                                                                             |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`              | `array` \| `object`     | Portable Text payload.                                                                                                                                  |
| `components`         | `object`                | Optional. Map components to node types or properties.                                                                                                   |
| `onMissingComponent` | `function` \| `boolean` | Optional. Handle unknown types or disable warnings. <br/>Defaults to console warnings.                                                                  |
| `listNestingMode`    | `"html"` \| `"direct"`  | Optional. List nesting mode. Defaults to `html`. <br/> See [ToolkitListNestMode](https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html) |

### Utilities

Import utility functions directly from the package root.

```js
import {
  mergeComponents,
  spanToPlainText,
  toPlainText,
  usePortableText,
} from "astro-portabletext";
```

[Read the utility functions documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/utility-functions.md)

### Types

Import TypeScript types from the `types` export.

```ts
import type { ... } from "astro-portabletext/types";
```

[Read the type definitions documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/types/README.md)

## Contributing

We welcome contributions to improve `astro-portabletext`!

If you find a bug or have a feature request, please open an [issue](https://github.com/theisel/astro-portabletext/issues).
If you'd like to contribute code, feel free to submit a [pull request](https://github.com/theisel/astro-portabletext/pulls).

## License

[ISC](https://github.com/theisel/astro-portabletext/blob/main/LICENSE)
