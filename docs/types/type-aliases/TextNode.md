[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Type Alias: TextNode

```ts
type TextNode: ToolkitTextNode;
```

Alias to [ToolkitTextNode](https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html)

## Example

```ts
---
import type { TextNode, Props as $ } from "astro-portabletext/types";

type Props = $<TextNode>;
---
```

## Remarks

To concisely achieve the same result in the example, use the convenience type [TextNodeProps](TextNodeProps.md) instead.
