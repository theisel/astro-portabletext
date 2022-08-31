/* eslint-disable @typescript-eslint/no-explicit-any */
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
  PortableTextListItemBlock,
  PortableTextMarkDefinition,
  TypedObject,
} from "@portabletext/types";

export type { TypedObject } from "@portabletext/types";

/**
 * Properties for the `astro-portabletext` component
 *
 * @template Value Portable Text payload
 */
export interface PortableTextProps<
  Value extends TypedObject = ArbitraryTypedObject
> {
  /**
   * Portable Text blocks
   */
  value: Value | Value[];

  /**
   * Components for rendering
   */
  components: PortableTextComponents;

  /**
   * This function is called when faced with unknown types.
   *
   * Prints a warning message to the console by default.
   * Pass `false` to disable.
   */
  onMissingComponent?: MissingComponentHandler | false;

  /**
   * A 'nice to have', default is 'html'
   * Refer to {@link https://portabletext.github.io/toolkit/modules.html#ToolkitListNestMode}
   */
  listNestingMode?: ToolkitListNestMode;
}

/**
 * Object defining how Portable Text types should be rendered
 */
export type PortableTextComponents = {
  /**
   * How user-defined types should be rendered
   */
  type: ComponentOrRecord;
  /**
   * Used when a `type` handler isn't found
   */
  unknownType: Component;
  /**
   * How blocks should be rendered
   */
  block: ComponentOrRecord<BlockStyle> | ComponentOrRecord<Block>;
  /**
   * Used when a `block` handler isn't found
   */
  unknownBlockStyle: Component<BlockStyle> | Component<Block>;
  /**
   * How lists should be rendered
   */
  list: ComponentOrRecord<List>;
  /**
   * Used when a `list` handler isn't found
   */
  unknownList: Component<List>;
  /**
   * How list items should be rendered
   */
  listItem: ComponentOrRecord<ListItem>;
  /**
   * Used when a `listItem` handler isn't found
   */
  unknownListItem: Component<ListItem>;
  /**
   * How marked text should be rendered
   */
  mark: ComponentOrRecord<Mark>;
  /**
   * Used when a `mark` handler isn't found
   */
  unknownMark: Component<Mark>;
  /**
   * How line breaks should be rendered
   */
  hardBreak: Component<ToolkitTextNode>;
};

/**
 * Object defining how some Portable Text types should be rendered
 */
export type SomePortableTextComponents = Partial<PortableTextComponents>;

/**
 * Component Props
 *
 * @template N Type of Portable Text payload that this component will receive on its `node` property
 */
export interface Props<
  N extends Node | Record<string, any> = ArbitraryTypedObject
> {
  /**
   * Portable Text node
   */
  node: N extends TypedObject ? N : N & TypedObject;

  /**
   * Index within its parent
   */
  index: number;

  /**
   * Whether the component should be layed out as inline or block element
   */
  isInline: boolean;

  /**
   * Set when `style` is used within an Astro component, should be used when defined.
   */
  class?: string;
  /**
   * @deprecated Use `class`
   */
  astroClass: string | undefined;
}

/**
 * Generic Portable Text component
 *
 * @template N Portable Text node type
 */
export type Component<
  N extends Node | Record<string, any> = ArbitraryTypedObject
> = (props: Props<N>) => any | Promise<(props: Props<N>) => any>;

/**
 * For internal use
 */
export type ComponentOrRecord<
  N extends Node | Record<string, any> = ArbitraryTypedObject
> = Component<N> | Record<string, Component<N>>;

/**
 * Portable Text node types
 */
export type Node = Block | BlockStyle | List | ListItem | Mark | TypedObject;

/**
 * Alias for {@link PortableTextBlock}
 *
 * @example
 * import type { Block, Props } from "astro-portabletext/types";
 * const { node } = Astro.props as Props<Block>;
 */
export type Block = PortableTextBlock;

/**
 * @example
 * import type { BlockStyle, Props } from "astro-portabletext/types";
 * const { node } = Astro.props as Props<BlockStyle>;
 */
export interface BlockStyle extends Block {
  style: "normal" | PortableTextBlockStyle;
}

/**
 * Alias for {@link ToolkitPortableTextList}
 *
 * @example
 * import type { List, Props } from "astro-portabletext/types";
 * const { node } = Astro.props as Props<List>;
 */
export type List = ToolkitPortableTextList;

/**
 * Alias for {@link ToolkitPortableTextListItem}
 *
 * @example
 * import type { ListItem, Props } from "astro-portabletext/types";
 * const { node } = Astro.props as Props<ListItem>;
 */
export type ListItem = ToolkitPortableTextListItem;

/**
 * @template MarkDef Object defining what the `markDef` property will receive
 *
 * @example
 * import type { Mark, Props } from "astro-portabletext/types";
 * type Greet = Mark<{ msg: string }>;
 * const { node } = Astro.props as Props<Greet>;
 */
export interface Mark<
  MarkDef extends Record<string, any> | undefined = undefined
> extends ToolkitNestedPortableTextSpan {
  markDef: MarkDef extends Record<string, any>
    ? MarkDef & PortableTextMarkDefinition
    : undefined;
  markKey: string;
}

/**
 * Alias to `ToolkitTextNode`
 *
 * @see {@link https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html}
 *
 * @example
 * import type { TextNode, Props } from "astro-portabletext/types";
 * const props = Astro.props as Props<TextNode>;
 */
export type TextNode = ToolkitTextNode;

export type MissingComponentHandler = (
  message: string,
  context: { type: string; nodeType: NodeType }
) => void;

export enum NodeType {
  BLOCK = "block",
  BLOCK_STYLE = "blockStyle",
  LIST_STYLE = "listStyle",
  LIST_ITEM_STYLE = "listItemStyle",
  MARK = "mark",
}
