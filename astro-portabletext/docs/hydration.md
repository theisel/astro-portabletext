[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Hydration

```ts
/* Map.tsx */
import type { Props as $, TypedObject } from "astro-portabletext/types";

interface MapProps extends TypedObject {
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

const props = Astro.props;
---

<Map client:idle {...props} />
```
