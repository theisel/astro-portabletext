[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Hydration

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

```ts
/* Map.astro */
---
import type { Props as $ } from "astro-portabletext/types";
import { Map, type Props as MapProps } from "./Map";

export type Props = $<MapProps>;
---

<Map client:idle {...Astro.props.node} />
```
