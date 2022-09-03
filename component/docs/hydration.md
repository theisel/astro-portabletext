[**`astro-portabletext`**](../README.md) > [**`docs`**](./README.md)

# Hydration

```ts
/* Map.tsx */
import type { Props as $ } from "astro-portabletext/types";

interface MapProps = {
  /* some values */
}

export type Props = $<MapProps>;

export function Map(props: Props) {
  /*
   * some logic to load/use map
   */
  return (
    <div class={`map ${props.class}`}>
      <!-- ... -->
    </div>
  )
}
```

```ts
/* Map.astro */
---
import type { Props } from "./Map";
import { Map } from "./Map";

export type { Props };

const props = Astro.props as Props;
---

<Map client:idle {...props} />
```
