<script lang="ts">
  import type { Props as $, TypedObject } from "astro-portabletext/types";
  import { onDestroy } from "svelte";

  const { node, index, isInline, ...attrs } = $$restProps as $<TypedObject>;

  let count: number = 0;

  const interval = setInterval(() => {
    count = count + 1;
  }, 1000);

  onDestroy(() => clearInterval(interval));
</script>

{#if isInline}
  <span {...attrs}>{count}</span>
{:else}
  <div {...attrs}>{count}</div>
{/if}
