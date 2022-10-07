import type { Props } from "astro-portabletext/types";
import { createSignal, onCleanup } from "solid-js";

export function Counter(props: Props) {
  const { node, index, isInline, ...attrs } = props;
  const [count, setCount] = createSignal(0);
  const timer = setInterval(() => setCount(count() + 1), 1000);

  onCleanup(() => clearInterval(timer));

  const Block = () => <div {...attrs}>{count}</div>;
  const Inline = () => <span {...attrs}>{count}</span>;
  const Cmp = isInline ? Inline : Block;

  return <Cmp />;
}
