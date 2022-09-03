[**`astro-portabletext`**](../README.md) > [**`docs`**](./README.md)

# Merge/Override Components

```ts
---
import { PortableText } from "astro-portabletext";
// type
import Map from "path/to/Map.astro";
// block
import Billboard from "path/to/Billboard.astro";
import PageHeading from "path/to/PageHeading.astro";
// list
import Numbered from "path/to/Numbered.astro";
import Squared from "path/to/Squared.astro";
// mark
import Highlight from "path/to/Highlight.astro";
import Bold from "path/to/Bold.astro";
---

<PortableText
  value={/* portable text blocks */}
  components={{
    type: {
      map: Map,
    },
    block: {
      h1: PageHeading /* Override default `h1` block style */,
      billboard: Billboard /* Custom block style */,
    },
    list: {
      number: Numbered /* Override default `number` list item */,
      square: Squared /* Custom list item */,
    },
    mark: {
      strong: Bold /* Override default `strong` mark type */,
      highlight: Highlight /* Custom mark */,
    },
  }}
/>
```
