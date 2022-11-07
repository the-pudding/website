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
      <a class={name === "Instagram" ? "stroke" : "solid"} href={url} aria-label={name}
        ><Icon name={name.toLowerCase()} /></a
      >
    {/each}
  </div>

  <div class="cta">
    {#each ctas as { cta, url }}
      <a class="btn" href={url} rel="external">{cta}</a>
    {/each}
    <a class="btn" href="https://pudding.cool/process/pudding-cup-2022/" rel="external">Enter The Pudding Cup</a>
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
    font-size: var(--font-size-xsmall);
  }

  .cta {
    display: flex;
    flex-direction: row;
  }

  .btn {
    background: transparent;
    border: 2px solid var(--color-off-black);
    color: var(--color-off-black);
  }

  .btn:last-of-type {
    background: var(--color-accent);
    border: 2px solid var(--color-accent);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn:last-of-type:hover {
    border: 2px solid var(--color-off-black);
  }

  :global(a.solid svg) {
    fill: var(--color-off-black);
    stroke: none;
  }

  :global(.solid svg:hover) {
    fill: var(--color-accent);
  }

  :global(a.stroke svg:hover) {
    stroke: var(--color-accent);
  }

  .platforms {
    line-height: 1;
    margin-right: 1em;
  }

  a:focus {
    box-shadow: 0 0 0 2px var(--color-focus);
  }
</style>
