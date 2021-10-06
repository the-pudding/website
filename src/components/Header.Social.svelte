<script>
  import Icon from "$components/helpers/Icon.svelte";
  import logo from "$svg/logo.svg";
  export let cta;
  export let platforms;
</script>

<div class="social">
  <div class="logo">
    <a href="https://pudding.cool" aria-label="The Pudding">{@html logo}</a>
  </div>

  <div class="platforms">
    {#each platforms as { name, url }}
      <a href={url} aria-label={name}><Icon {name} /></a>
    {/each}
  </div>

  <div class="cta">
    {#each cta as { text, url }}
      <a class="btn" href={url}>{text}</a>
    {/each}
  </div>
</div>

<style>
  .logo {
    max-width: 2em;
  }

  .logo a {
    border: none;
  }

  .logo a:hover {
    background-color: transparent;
  }

  :global(.st1) {
    fill: var(--color-gray-medium);
  }
</style>
