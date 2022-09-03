[**`astro-portabletext`**](../README.md) > [**`docs`**](./README.md)

# `PortableText` Component

```ts
import { PortableText } from "astro-portabletext";
```

## Properties

- [value](#value)
- [components](#components) `optional`
- [onMissingComponent](#onmissingcomponent) `optional`
- [listNestingMode](#listnestingmode) `optional`

### `value`

**T `array` | `object`**

Portable Text payload

### `components`

**T `object`**

Override/extend the default components.

```js
{
  // custom types
  type: { [_type]: Component } | Component,
  unknownType: Component,
  // block style
  block: { [style]: Component } | Component,
  unknownBlockStyle: Component,
  // list
  list: { [listItem]: Component } | Component,
  unknownList: Component,
  // list item
  listItem: { [listItem]: Component } | Component,
  unknownListItem: Component,
  // mark
  mark: { [markType]: Component } | Component,
  unknownMark: Component,
  // line break
  hardBreak: Component
}
```

See [Extending Components](./extending-components.md) and [Merge/Override Components](./merge-override-components.md) for examples.

### `onMissingComponent`

**T `function` | `false`**

Disable warning message or handle unknown types.

- `function` to handle unknown types.
- `false` to disable warning messages.
- Prints to console by default.

### `listNestingMode`

**T `html` | `direct`**

See [ToolkitListNestMode](https://portabletext.github.io/toolkit/modules.html#ToolkitListNestMode)