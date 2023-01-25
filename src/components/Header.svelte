<script>
  import Social from "$components/Header.Social.svelte";
  import SlideOut from "$components/Header.SlideOut.svelte";
  import logo from "$svg/logo.svg";
  import misc from "$data/misc.json";

  $: hasBanner = misc.banner;
</script>

{#if hasBanner}
  <div class="banner">{@html misc.banner}</div>
{/if}

<header>
  <div class="logo">
    <a href="https://pudding.cool" aria-label="The Pudding">{@html logo}</a>
  </div>
  <div class="right-container">
    <div class="links">
      <Social />
    </div>
    <SlideOut />
  </div>
</header>

<style>
  header {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0.75em 1em;
    padding-right: 3em;
  }

  .logo {
    width: 1.5em;
  }

  .logo a {
    display: block;
    border: none;
    padding: 0;
  }

  .logo a:focus {
    box-shadow: 0 0 0 2px var(--color-focus);
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
    display: block;
  }

  .banner {
    background: var(--color-purple);
    color: var(--color-white);
    border: none;
    padding: 16px 8px;
    text-align: center;
  }

  :global(.banner a) {
    color: var(--color-white);
    border-bottom: 2px solid currentColor;
  }

  @media only screen and (max-width: 850px) {
    .links {
      display: none;
    }
  }
</style>
