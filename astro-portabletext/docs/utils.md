[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

&nbsp;

# Utils

```ts
import {/* select utility function */} "astro-portabletext/utils";
```

&nbsp;

## usePortableText

Should only be used within a custom `block|list|listItem|mark|type` handler.

&#9656; **usePortableText**(`node`): `object`

| Name | Type     | Description                                                   |
| :--- | :------- | :------------------------------------------------------------ |
| node | `object` | The `Portable Text` payload that is passed into the component |

&#9656; **Returns `object`**

| Property            | Type              | Description                                                                                                                      |
| :------------------ | :---------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| getDefaultComponent | `() => Component` | Returns the `default` component related to the passed in `node`. Use this when you need to fall back to the `default` component. |
| getUnknownComponent | `() => Component` | Returns the counterpart `unknown(Block\|List\|ListItem\|Mark\|Type)` component related to the passed in `node`.                  |

&nbsp;

## toPlainText

&#9656; **toPlainText**(`blocks`): `string`

| Name   | Type                | Description           |
| :----- | :------------------ | :-------------------- |
| blocks | `array` \| `object` | Portable Text payload |

See [@portabletext/toolkit - toPlainText](https://portabletext.github.io/toolkit/functions/toPlainText.html) for details.

&nbsp;

## mergeComponents

&#9656; **mergeComponents**(`components`, `overrides`): `object`

| Name       | Type     | Description                                                    |
| :--------- | :------- | :------------------------------------------------------------- |
| components | `object` | See [components](portabletext-component.md#components) options |
| overrides  | `object` | See [components](portabletext-component.md#components) options |
