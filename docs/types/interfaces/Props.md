[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Interface: Props\<N\>

Component Props

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `N` *extends* [`TypedObject`](TypedObject.md) | Type of Portable Text payload that this component will receive on its `node` property |

## Properties

### node

```ts
node: N;
```

Portable Text data for this node

***

### index

```ts
index: number;
```

Index of the current node within its parent's child list

***

### isInline

```ts
isInline: boolean;
```

Indicates whether the node should render as an inline or block element
