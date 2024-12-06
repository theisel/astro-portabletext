[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Interface: Context

Context object returned by `usePortableText`, providing utilities for rendering and customizing Portable Text components.

The `Context` type includes functions to retrieve default or unknown components and
to customize rendering behavior for specific node types.

## Example

```ts
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
</Component>
```

## Properties

### getDefaultComponent()

```ts
getDefaultComponent: () => Component<any>;
```

Retrieves the default `astro-portabletext` component associated with a Portable Text node.

#### Returns

[`Component`](../type-aliases/Component.md)\<`any`\>

The default component for the node, such as `Block`, `List`, etc.

#### Example

```ts
---
const { getDefaultComponent } = usePortableText(node);
const Component = getDefaultComponent();
---
<Component {...Astro.props}>
   <slot />
</Component>
```

***

### getUnknownComponent()

```ts
getUnknownComponent: () => Component<any>;
```

Retrieves the `unknown` component associated with a Portable Text node.

#### Returns

[`Component`](../type-aliases/Component.md)\<`any`\>

The component used for unknown nodes, such as `unknownBlock` or `unknownList`.

#### Example

```ts
---
const { getUnknownComponent } = usePortableText(node);
const Component = getUnknownComponent();
---
<Component {...Astro.props}>
  <slot />
</Component>
```

***

### render()

```ts
render: (options) => any;
```

Customizes rendering for specific Portable Text node types.

The `render` function enables developers to define custom behavior for specific node types,
such as overriding the default text or mark rendering.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`RenderOptions`](../type-aliases/RenderOptions.md) | [RenderOptions](../type-aliases/RenderOptions.md) - Configuration for customizing node rendering |

#### Returns

`any`

The desired output for the Portable Text node

#### Example

```ts
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
</Component>

<style>
 .custom-mark {
   // some styles
 }
</style>
```
