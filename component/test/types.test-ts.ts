import {
  ArbitraryTypedObject,
  PortableTextMarkDefinition,
} from "@portabletext/types";
import { Test } from "ts-toolbelt";

import {
  Props,
  Block,
  BlockStyle,
  List,
  ListItem,
  Mark,
  TypedObject,
  Component,
} from "../lib/types";

const { checks, check } = Test;

// ----------------------------------------------------------------------------
// Props
type PropsNode<T> = Pick<Props<T>, "node">;
type nodeIs<T> = { node: T };

checks([
  // defaults without node
  check<
    Omit<Props, "node">,
    { index: number; isInline: boolean; astroClass: string | undefined },
    Test.Pass
  >(),
  // validate node type
  check<Pick<Props, "node">, nodeIs<ArbitraryTypedObject>, Test.Pass>(),
  check<PropsNode<Block>, nodeIs<Block>, Test.Pass>(),
  check<PropsNode<BlockStyle>, nodeIs<BlockStyle>, Test.Pass>(),
  check<PropsNode<List>, nodeIs<List>, Test.Pass>(),
  check<PropsNode<ListItem>, nodeIs<ListItem>, Test.Pass>(),
  check<PropsNode<Mark>, nodeIs<Mark>, Test.Pass>(),
  check<
    PropsNode<{ a: string }>,
    nodeIs<{ a: string } & TypedObject>,
    Test.Pass
  >(),
]);

// ----------------------------------------------------------------------------
// Mark
type MarkDef<T> = Pick<Mark<T>, "markDef">;
type markDefIs<T> = { markDef: T };

checks([
  check<Pick<Mark, "markDef">, { markDef: undefined }, Test.Pass>(),
  check<
    MarkDef<{ a: string }>,
    markDefIs<
      {
        a: string;
      } & PortableTextMarkDefinition
    >,
    Test.Pass
  >(),
]);

// ----------------------------------------------------------------------------
// Component
checks([
  check<Parameters<Component>, [Props], Test.Pass>(),
  check<Parameters<Component<Block>>, [Props<Block>], Test.Pass>(),
  check<Parameters<Component<BlockStyle>>, [Props<BlockStyle>], Test.Pass>(),
  check<Parameters<Component<List>>, [Props<List>], Test.Pass>(),
  check<Parameters<Component<ListItem>>, [Props<ListItem>], Test.Pass>(),
  check<Parameters<Component<Mark>>, [Props<Mark>], Test.Pass>(),
]);
