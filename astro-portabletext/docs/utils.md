[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Utils

```ts
import {/* select utility function */} "astro-portabletext/utils";
```

## toPlainText

&#9656; **toPlainText**(`blocks`): `string`

| Name   | Type                | Description           |
| :----- | :------------------ | :-------------------- |
| blocks | `array` \| `object` | Portable Text payload |

See [https://portabletext.github.io/toolkit/modules.html#toPlainText](https://portabletext.github.io/toolkit/modules.html#toPlainText) for details.

## mergeComponents

&#9656; **mergeComponents**(`components`, `overrides`): `object`

| Name       | Type     | Description                                                    |
| :--------- | :------- | :------------------------------------------------------------- |
| components | `object` | See [components](portabletext-component.md#components) options |
| overrides  | `object` | See [components](portabletext-component.md#components) options |
