[astro-portabletext](README.md) / hydration

# Hydration

## JSX / Svelte / \* Component _(interactive)_

&#9656; **JSX Example**

```ts
/* Map.tsx */
import type { TypedObject } from "astro-portabletext/types";

export interface Props extends TypedObject {
  /* some values */
}

export function Map(props: Props) {
  /*
   * some logic to load/use map
   */
  return (
    <div>
      <!-- ... -->
    </div>
  )
}
```

## Astro Component

```ts
/* Map.astro */
---
import type { Props as $ } from "astro-portabletext/types";
import { Map, type Props as MapProps } from "./Map";

export type Props = $<MapProps>;

const { node: props /*, isInline */ } = Astro.props;

/* ☝️ Don't forget about `isInline` */
---

<Map client:idle {...props} />
```

## Astro Page

```ts
/* pages/*.astro */
---
import { PortableText } from "astro-portabletext";
import Map from "path/to/Map.astro"; // 👈 Import Astro component

const value = /* provide value */

const components = {
  type: {
    map: Map
  }
};
---

<PortableText value={value} components={components} />
```

It's better to extend the [PortableText](./portabletext-component.md) component, see [Extending Components](./extending-components.md).
