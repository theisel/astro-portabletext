[astro-portabletext](README.md) / merge-override-components

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
import NumberedList from "path/to/NumberedList.astro";
import SquaredList from "path/to/SquaredList.astro";
// listItem
import NumberedListItem from "path/to/NumberedListItem.astro";
import SquaredListItem from "path/to/SquaredListItem.astro";
// mark
import Highlight from "path/to/Highlight.astro";
import Bold from "path/to/Bold.astro";

const value = /* portable text payload */

const components = {
  type: {
    map: Map,
  },
  block: {
    h1: PageHeading /* Override default `h1` block style */,
    billboard: Billboard /* Custom block style */,
  },
  list: {
    number: NumberedList /* Override default `number` list */,
    square: SquaredList /* Custom list */,
  },
  listItem: {
    number: NumberedListItem /* Override default `number` list item */,
    square: SquaredListItem /* Custom list item */,
  },
  mark: {
    strong: Bold /* Override default `strong` mark type */,
    highlight: Highlight /* Custom mark */,
  },
};
---

<PortableText value={value} components={components} />
```

See also [Extending PortableText Component](./extending-components.md) for more concepts.
