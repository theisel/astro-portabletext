---
"astro-portabletext": minor
---

Feat: `usePortableText` to get context for the current Portable Text node.

```ts
---
import { Props as ComponentProps } from "astro-portabletext/types";
import { usePortableText } from "astro-portabletext/utils";

export type Props = ComponentProps;

const props = Astro.props;
const { node } = props;
const { next } = usePortableText(node);
const FallbackComponent = next();
---

<FallbackComponent {...props}>
  <slot />
</FallbackComponent>
```
