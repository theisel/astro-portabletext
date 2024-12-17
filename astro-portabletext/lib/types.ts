import type {
  ToolkitListNestMode,
  ToolkitNestedPortableTextSpan,
  ToolkitPortableTextList,
  ToolkitPortableTextListItem,
  ToolkitTextNode,
} from "@portabletext/toolkit";

import type {
  ArbitraryTypedObject,
  PortableTextBlock,
  PortableTextBlockStyle,
  PortableTextMarkDefinition,
  TypedObject,
} from "@portabletext/types";

export type { TypedObject } from "@portabletext/types";

/**
 * Properties for the `PortableText` component
 *
 * @typeParam Value - Type of Portable Text payload
 */
export interface PortableTextProps<
  Value extends TypedObject = PortableTextBlock | ArbitraryTypedObject,
> {
  /**
   * Portable Text payload
   */
  value: Value | Value[];

  /**
   * Components for rendering
   */
  components?: SomePortableTextComponents;

  /**
   * Function to call when faced with unknown types.
   *
   * @remarks
   * - Prints a warning message to the console by default.
   * - Use `false` to disable.
   */
  onMissingComponent?: MissingComponentHandler | boolean;

  /**
   * Defines the nesting mode for lists. The value can be `html` or `direct`, and defaults to `html`.
   *
   * @remarks
   * - `html` - Deeper list nodes will appear as a child of the last list item in the parent list
   * - `direct` - Deeper list nodes will appear as a direct child of the parent list
   *
   * @see {@link https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html ToolkitListNestMode}
   */
  listNestingMode?: ToolkitListNestMode;
}

/**
 * Defines how Portable Text types should be rendered.
 */
export interface PortableTextComponents {
  /**
   * Component or mapping of components for rendering `custom` types.
   */
  type: ComponentOrRecord;
  /**
   * Used when a {@link PortableTextComponents.type type} component isn't found.
   */
  unknownType: Component;
  /**
   * Component or mapping of components for rendering `block` styles.
   */
  block: ComponentOrRecord<Block>;
  /**
   * Used when a {@link PortableTextComponents.block block} component isn't found.
   */
  unknownBlock: Component<Block>;
  /**
   * Component or mapping of components for rendering `list` item type.
   */
  list: ComponentOrRecord<List>;
  /**
   * Used when a {@link PortableTextComponents.list list} component isn't found.
   */
  unknownList: Component<List>;
  /**
   * Component or mapping of components for rendering `list` item type.
   */
  listItem: ComponentOrRecord<ListItem>;
  /**
   * Used when a {@link PortableTextComponents.listItem listItem} component isn't found.
   */
  unknownListItem: Component<ListItem>;
  /**
   * Component or mapping of components for rendering `mark` definition type.
   */
  mark: ComponentOrRecord<Mark<never>>;
  /**
   * Used when a {@link PortableTextComponents.mark mark} component isn't found.
   */
  unknownMark: Component<Mark<never>>;
  /**
   * Component for rendering `spans` of text.
   * @remarks Added in: `v0.11.0`
   */
  text: Component<TextNode>;
  /**
   * Component for rendering a newline `\n` of text.
   */
  hardBreak: Component<TextNode>;
}

/**
 * Defines how some Portable Text types should be rendered.
 */
export type SomePortableTextComponents = Partial<PortableTextComponents>;

/**
 * Component Props
 *
 * @typeParam N - Type of Portable Text payload that this component will receive on its `node` property
 */
export interface Props<N extends TypedObject> {
  /**
   * Portable Text data for this node
   */
  node: N;
  /**
   * Index of the current node within its parent's child list
   */
  index: number;
  /**
   * Indicates whether the node should render as an inline or block element
   */
  isInline: boolean;
}

/**
 * Alias to {@link https://portabletext.github.io/types/interfaces/PortableTextBlock.html PortableTextBlock}
 * with `style` set to `normal` when undefined
 *
 * @example
 * ```ts
 * ---
 * import type { Block, Props as $ } from "astro-portabletext/types";
 *
 * type Props = $<Block>;
 * ---
 * ```
 *
 * @remarks To concisely achieve the same result in the example, use the convenience type {@link BlockProps} instead.
 */
export interface Block extends PortableTextBlock {
  style: "normal" | PortableTextBlockStyle;
}

/**
 * Convenience type for {@link Block} component props
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```ts
 * ---
 * import type { BlockProps } from "astro-portabletext/types";
 *
 * type Props = BlockProps;
 * ---
 * ```
 */
export type BlockProps = Props<Block>;

/**
 * Alias to {@link https://portabletext.github.io/toolkit/types/ToolkitPortableTextList.html ToolkitPortableTextList}
 *
 * @example
 * ```ts
 * ---
 * import type { List, Props as $ } from "astro-portabletext/types";
 *
 * type Props = $<List>;
 * ---
 * ```
 *
 * @remarks To concisely achieve the same result in the example, use the convenience type {@link ListProps} instead.
 */
export type List = ToolkitPortableTextList;

/**
 * Convenience type for {@link List} component props
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```ts
 * ---
 * import type { ListProps } from "astro-portabletext/types";
 *
 * type Props = ListProps;
 * ---
 * ```
 */
export type ListProps = Props<List>;

/**
 * Alias to {@link https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html ToolkitPortableTextListItem}
 *
 * @example
 * ```ts
 * ---
 * import type { ListItem, Props as $ } from "astro-portabletext/types";
 *
 * type Props = $<ListItem>;
 * ---
 * ```
 *
 * @remarks To concisely achieve the same result in the example, use the convenience type {@link ListItemProps} instead.
 */
export type ListItem = ToolkitPortableTextListItem;

/**
 * Convenience type for {@link ListItem} component props
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```ts
 * ---
 * import type { ListItemProps } from "astro-portabletext/types";
 *
 * type Props = ListItemProps;
 * ---
 * ```
 */
export type ListItemProps = Props<ListItem>;

/**
 * Extends {@link https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html ToolkitNestedPortableTextSpan}
 * with consisting `markDef` and `markKey` properties
 *
 * @typeParam MarkDef - Defines the shape of `markDef` property
 *
 * @remarks
 * To concisely achieve the same result in the example, use the convenience type {@link MarkProps} instead.
 *
 * @example
 * ```ts
 * ---
 * import type { Mark, Props as $ } from "astro-portabletext/types";
 *
 * type Greet = { msg: string };
 * type Props = $<Mark<Greet>>;
 * ---
 * ```
 */
export interface Mark<
  MarkDef extends Record<string, unknown> | undefined = undefined,
> extends ToolkitNestedPortableTextSpan {
  markDef: MarkDef & PortableTextMarkDefinition;
  markKey: string;
}

/**
 * Convenience type for {@link Mark} component props
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```ts
 * ---
 * import type { MarkProps } from "astro-portabletext/types";
 *
 * type Greet = { msg: string };
 * type Props = MarkProps<Greet>;
 * ---
 * ```
 */
export type MarkProps<
  MarkDef extends Record<string, unknown> | undefined = undefined,
> = Props<Mark<MarkDef>>;

/**
 * Alias to {@link https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html ToolkitTextNode}
 *
 * @example
 * ```ts
 * ---
 * import type { TextNode, Props as $ } from "astro-portabletext/types";
 *
 * type Props = $<TextNode>;
 * ---
 * ```
 *
 * @remarks To concisely achieve the same result in the example, use the convenience type {@link TextNodeProps} instead.
 */
export type TextNode = ToolkitTextNode;

/**
 * Convenience type for {@link TextNode} component props
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```ts
 * ---
 * import type { TextNodeProps } from "astro-portabletext/types";
 *
 * type Props = TextNodeProps;
 * ---
 * ```
 */
export type TextNodeProps = Props<TextNode>;

/**
 * The shape of the {@link PortableTextProps.onMissingComponent onMissingComponent} function
 */
export type MissingComponentHandler = (
  message: string,
  context: { type: string; nodeType: NodeType }
) => void;

/**
 * Properties for the `RenderHandler` function
 *
 * @typeParam T - Type of Portable Text payload
 * @typeParam Children - Type of children
 */
export type RenderHandlerProps<
  T extends TypedObject = TypedObject,
  Children = unknown,
> = {
  /**
   * The component that is associated with the Portable Text node.
   */
  Component: Component<T>;
  /**
   * The component props
   */
  props: Props<T>;
  /**
   * The children related to the Portable Text node.
   * If the node is a custom {@link PortableTextComponents.type type} or a {@link TextNode}, then children will be `undefined`.
   */
  children?: Children;
};

/**
 * The shape of the render component function
 *
 * @typeParam T - Type of Portable Text payload
 * @typeParam Children - Type of children
 */
export type RenderHandler<
  T extends TypedObject = TypedObject,
  Children = unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = (props: RenderHandlerProps<T, Children>) => any;

/**
 * Options for the `render` function accessed via `usePortableText`
 */
export type RenderOptions = {
  type?: RenderHandler<TypedObject, never>;
  block?: RenderHandler<Block>;
  list?: RenderHandler<List>;
  listItem?: RenderHandler<ListItem>;
  mark?: RenderHandler<Mark>;
  text?: RenderHandler<TextNode, never>;
  hardBreak?: RenderHandler<TextNode, never>;
};

/**
 * Context object returned by `usePortableText`, providing utilities for rendering and customizing Portable Text components.
 *
 * The `Context` type includes functions to retrieve default or unknown components and
 * to customize rendering behavior for specific node types.
 */
export interface Context {
  /**
   * Retrieves the default `astro-portabletext` component associated with a Portable Text node.
   *
   * @returns The default component for the node, such as `Block`, `List`, etc.
   *
   * @example
   * ```ts
   * ---
   * const { getDefaultComponent } = usePortableText(node);
   * const Component = getDefaultComponent();
   * ---
   * <Component {...Astro.props}>
   *    <slot />
   * </Component>
   * ```
   */
  getDefaultComponent: () => Component;
  /**
   * Retrieves the `unknown` component associated with a Portable Text node.
   *
   * @returns The component used for unknown nodes, such as `unknownBlock` or `unknownList`.
   *
   * @example
   * ```ts
   * ---
   * const { getUnknownComponent } = usePortableText(node);
   * const Component = getUnknownComponent();
   * ---
   * <Component {...Astro.props}>
   *   <slot />
   * </Component>
   * ```
   */
  getUnknownComponent: () => Component;
  /**
   * Customizes rendering for specific Portable Text node types.
   *
   * The `render` function enables developers to define custom behavior for specific node types,
   * such as overriding the default text or mark rendering.
   *
   * @remarks
   * Added in: `v0.11.0`
   *
   * @param options {@link RenderOptions} - Configuration for customizing node rendering
   * @returns The desired output for the Portable Text node
   *
   * @example Basic usage
   * ```ts
   * ---
   * import { usePortableText } from "astro-portabletext";
   *
   * const { node } = Astro.props;
   * const { getDefaultComponent, render } = usePortableText(node);
   * const Component = getDefaultComponent();
   * ---
   * <Component {...Astro.props}>
   *  {render({
   *    text: ({ props }) => props.node.text.toUpperCase(),
   *    mark: ({ Component, props, children }) => (
   *      <Component {...props} class="custom-mark">{children}</Component>
   *    ),
   * </Component>
   *
   * <style>
   *  .custom-mark {
   *    // some styles
   *  }
   * </style>
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (options: RenderOptions) => any;
}

/**
 * Generic Portable Text component
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Component<T extends TypedObject = any> = (props: Props<T>) => any;

/**
 * Defines a component or a mapping of components
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentOrRecord<T extends TypedObject = any> =
  | Component<T>
  | Record<string, Component<T>>;

/**
 * Defines the type of Portable Text node
 * @internal
 */
export type NodeType = "type" | "block" | "list" | "listItem" | "mark";
