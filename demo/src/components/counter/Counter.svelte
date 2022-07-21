<script lang="ts">
  import type { Props } from "astro-portabletext/types";
  import { onDestroy } from "svelte";

  const { astroClass, isInline } = $$props as Props;

  let count: number = 0;

  const interval = setInterval(() => {
    count = count + 1;
  }, 1000);

  onDestroy(() => clearInterval(interval));
</script>

{#if isInline}
  <span class={astroClass} data-portabletext-type="counter">
    <strong>Inline Counter</strong>
    {count}
  </span>
{:else}
  <div class={astroClass} data-portabletext-type="counter">
    <h2>Block Counter</h2>
    <p>{count}</p>
  </div>
{/if}

<style>
  div[data-portabletext-type="counter"] {
    display: grid;
    justify-items: center;
  }
</style>
