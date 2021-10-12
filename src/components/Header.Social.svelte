<script>
  import Icon from "$components/helpers/Icon.svelte";
  import { follow } from "$data/links.js";

  const names = ["Twitter", "Instagram", "Facebook"];
  const platforms = follow.filter((d) => names.includes(d.name));
  const ctas = follow.filter((d) => d.cta);
</script>

<div class="container">
  <div class="platforms">
    {#each platforms as { name, url }}
      <a href={url} rel="external" aria-label={name}><Icon name={name.toLowerCase()} /></a>
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

  .platforms {
    line-height: 1;
    margin-right: 1em;
  }
</style>
