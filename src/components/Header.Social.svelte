<script>
  import Icon from "$components/helpers/Icon.svelte";
  import { follow } from "$data/links.js";

  const names = ["Twitter", "Facebook", "Instagram"];
  const platforms = follow.filter((d) => names.includes(d.name));
  const ctas = follow.filter((d) => d.cta);
</script>

<div class="container">
  <div class="platforms">
    {#each platforms as { name, url }}
      {#if name !== "Instagram"}
        <a class="solid-icon" href={url} rel="external" aria-label={name}><Icon name={name.toLowerCase()} /></a>
      {:else}
      <a class="stroke-icon" href={url} rel="external" aria-label={name}><Icon name={name.toLowerCase()} /></a>
      {/if}

    {/each}
  </div>

  <div class="cta">
    {#each ctas as { cta, url }}
      <a class="btn" href={url} rel="external">{cta}</a>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    display: inline-block;
    line-height: 1;
    margin: 0 0.5em;
    background-image: none;
    font-size: var(--font-size-small);
  }

  :global(.solid-icon svg) {
    fill: var(--color-off-black);
    stroke: none;
  }

  :global(.solid-icon svg:hover) {
    fill: var(--color-accent);
  }

  :global(.stroke-icon svg:hover) {
    stroke: var(--color-accent);
  }

  :global(.stroke-icon svg, .solid-icon svg) {
    width: 1.25rem;
    height: 1.25rem;
  }

  .platforms {
    line-height: 1;
    margin-right: 1em;
  }

  a:focus {
    box-shadow: 0 0 0 2px var(--color-focus);
  }

  .btn {
    width: 15rem;
  }
</style>
