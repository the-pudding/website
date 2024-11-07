<script>
  import Icon from "$components/helpers/Icon.svelte";
  import Social from "$components/Header.Social.svelte";
  import SlideOut from "$components/Header.SlideOut.svelte";
  import logo from "$svg/logo.svg";
  import misc from "$data/misc.json";

  let slideOut;
  let openBtn;

  const onClose = () => {
    openBtn.focus();
    openBtn.removeAttribute("aria-hidden");
  };

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
    <button
      type="button"
      class="btn-open"
      aria-label="open navigation"
      aria-controls="slide-nav"
      aria-expanded="false"
      bind:this={openBtn}
      on:click={(e) => slideOut.onOpen(e)}><Icon name="menu" /></button
    >
    <SlideOut bind:this={slideOut} on:close={openBtn.focus()} />
  </div>
</header>

<style>
  header {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0.75em 1em;
    /* padding-right: 3em; */
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

  .btn-open {
    /* margin: 0;
    padding: 0;
    right: -1.5em; */
    top: 0;
    position: sticky;
    width: 2em;
    height: 2em;
    margin: 0;
    padding: 0;
    background: transparent;
    color: var(--color-body);
    /* transform: translate(-100%, -50%); */
    z-index: var(--z-overlay);
  }

  .btn-open:hover {
    color: var(--color-accent);
  }

  .right-container {
    display: flex;
    align-items: center;
  }

  :global(.btn-open > *) {
    pointer-events: none;
  }

  @media only screen and (max-width: 850px) {
    .links {
      display: none;
    }
  }
</style>
