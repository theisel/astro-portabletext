[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Styling Component

```ts
/* .astro file */
---
import { PortableText } from "astro-portabletext";
import Map from "path/to/Map.astro";
---

<PortableText
  value={/* portable text blocks */}
  components={{
    type: {
      map: Map
    }
  }}
/>

<style>
  .map {/* some values */}
</style>
```

Refer back to [Hydration](hydration.md) to see how `.map` is used.
