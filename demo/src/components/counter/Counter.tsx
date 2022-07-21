import type { Props } from "astro-portabletext/types";
import { createSignal, onCleanup } from "solid-js";

export function Counter(props: Props) {
  const { isInline, astroClass } = props;
  const [count, setCount] = createSignal(0);
  const timer = setInterval(() => setCount(count() + 1), 1000);

  onCleanup(() => clearInterval(timer));

  const Block = () => (
    <div
      class={astroClass}
      data-portabletext-type="counter"
      style="display: grid; justify-items: center;"
    >
      <h2>Block Counter</h2>
      <p>{count}</p>
    </div>
  );

  const Inline = () => (
    <span class={astroClass} data-portabletext-type="counter">
      <strong>Inline Counter</strong> {count}
    </span>
  );

  return isInline ? <Inline /> : <Block />;
}
