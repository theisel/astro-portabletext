[**`astro-portabletext` v1.0.0 • Type Definitions**](../README.md)

---

# Interface: Context

Context returned by `usePortableText` for rendering and customizing Portable Text components.

Provides utility functions for resolving components and a `render` function
for fine-grained control over how nested children are rendered.

## Properties

### getDefaultComponent

```ts
getDefaultComponent: () => Component;
```

Retrieves the default component associated with a Portable Text node.

#### Returns

[`Component`](../type-aliases/Component.md)

The default component for the node, such as `Block`, `List`, etc.

#### Example

```tsx
---
const { getDefaultComponent } = usePortableText(node);
const Component = getDefaultComponent();
---
<Component {...Astro.props}>
   <slot />
</Component>
```

---

### getUnknownComponent

```ts
getUnknownComponent: () => Component;
```

Retrieves the unknown component associated with a Portable Text node.

#### Returns

[`Component`](../type-aliases/Component.md)

The component used for unknown nodes, such as `unknownBlock` or `unknownList`.

#### Example

```tsx
---
const { getUnknownComponent } = usePortableText(node);
const Component = getUnknownComponent();
---
<Component {...Astro.props}>
  <slot />
</Component>
```

---

### render

```ts
render: (options) => any;
```

Allows for fine-grained control over how nested Portable Text children are rendered.

#### Parameters

| Parameter | Type                                                | Description                                                                                       |
| --------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `options` | [`RenderOptions`](../type-aliases/RenderOptions.md) | [RenderOptions](../type-aliases/RenderOptions.md) - Configuration for customizing node rendering. |

#### Returns

`any`

The desired output for the Portable Text node.

#### Remarks

Added in: `v0.11.0`

#### Example

**Basic usage**

```tsx
---
import { usePortableText } from "astro-portabletext";

const { node } = Astro.props;
const { getDefaultComponent, render } = usePortableText(node);
const Component = getDefaultComponent();
---
<Component {...Astro.props}>
 {render({
   text: ({ props }) => props.node.text.toUpperCase(),
   mark: ({ Component, props, children }) => (
     <Component {...props} class="custom-mark">{children}</Component>
   ),
 })}
</Component>

<style>
 .custom-mark {
   // some styles
 }
</style>
```
