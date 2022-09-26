---
"astro-portabletext": patch
---

Fixes PortableText `onMissingComponent` prop to accept boolean

```diff
- onMissingComponent?: MissingComponentHandler | false;
+ onMissingComponent?: MissingComponentHandler | boolean;
```
