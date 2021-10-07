<script>
  import Icon from "$components/helpers/Icon.svelte";
  import logo from "$svg/logo.svg";
  import { follow } from "$data/links.js";

  const names = ["Twitter", "Instagram", "Facebook"];
  const platforms = follow.filter((d) => names.includes(d.name));
  const ctas = follow.filter((d) => d.cta);
</script>

<div class="container">
  <div class="logo">
    <a href="https://pudding.cool" aria-label="The Pudding">{@html logo}</a>
  </div>

  <div class="links">
    <div class="platforms">
      {#each platforms as { name, url }}
        <a href={url} aria-label={name}><Icon name={name.toLowerCase()} /></a>
      {/each}
    </div>

    <div class="cta">
      {#each ctas as { cta, url }}
        <a class="btn" href={url}>{cta}</a>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0.5em;
    padding-right: 3em;
    align-items: center;
  }

  a {
    display: inline-block;
    line-height: 1;
  }

  .logo {
    width: 1.5em;
  }

  .logo a {
    border: none;
  }

  .logo a:hover {
    background-color: transparent;
  }

  :global(.logo svg) {
    display: block;
  }

  :global(.logo .st1) {
    fill: var(--color-gray-medium);
  }

  .links {
    display: flex;
    align-items: center;
  }

  .platforms a {
    margin: 0 0.5em;
  }

  .cta {
    margin-left: 1em;
  }

  .cta a {
    margin: 0 0.5em;
  }
</style>
