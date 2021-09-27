<script>
  import logo from "$svg/logo.svg";
  import Icon from "$components/helpers/Icon.svelte";

  let menuVisible = false;

  const social = [
    { name: "twitter", url: "https://twitter.com/puddingviz/" },
    {
      name: "instagram",
      url: "https://www.instagram.com/the.pudding"
    },
    { name: "facebook", url: "https://facebook.com/pudding.viz/" }
  ];

  const cta = [
    { name: "Support The Pudding", url: "https://patreon.com/thepudding/" },
    { name: "Join our newsletter", url: "http://eepurl.com/czym6f" }
  ];
</script>

<header>
  <div class="logo">
    <a href="https://pudding.cool" aria-label="The Pudding">{@html logo}</a>
  </div>

  <div class="social">
    {#each social as { name, url }}
      <a href={url} aria-label={name}><Icon {name} /></a>
    {/each}
  </div>

  <div class="cta">
    {#each cta as { name, url }}
      <a class="btn" href={url}>{name}</a>
    {/each}
  </div>

  <div class="menu-toggle">
    <button on:click={() => (menuVisible = !menuVisible)}><Icon name="menu" /></button>
  </div>

  <div class="menu" class:is-visible={menuVisible}>
    <p>I am the menu</p>
  </div>
</header>

<style>
  header {
    box-shadow: 0 2px red;
  }

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
    fill: blue;
  }

  .menu {
    opacity: 0;
  }

  .menu.is-visible {
    opacity: 1;
  }
</style>
