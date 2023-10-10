import type { Props as $, TypedObject } from "astro-portabletext/types";
import { createSignal, onCleanup } from "solid-js";

export function Counter(props: $<TypedObject>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { node, index, isInline, ...attrs } = props;
  const [count, setCount] = createSignal(0);
  const timer = setInterval(() => setCount(count() + 1), 1000);

  onCleanup(() => clearInterval(timer));

  const Block = () => <div {...attrs}>{count()}</div>;
  const Inline = () => <span {...attrs}>{count()}</span>;
  const Cmp = isInline ? Inline : Block;

  return <Cmp />;
}
