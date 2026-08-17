[`astro-portabletext` • Documentation](README.md)

---

# Getting started

## Installation

```sh
npm install astro-portabletext
```

## Usage

### PortableText Component

The `PortableText` component provides a simple and flexible way to render rich text content. It includes:

- **Default rendering** for common Portable Text elements (paragraphs, headings, lists, etc.).
- **Custom rendering** using your own components or `slots`.

#### Basic Usage

Here's a minimal example:

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

💡 **Learn more:** For details on custom components, slots, and advanced usage, check out the [PortableText Component documentation](portabletext-component.md).
