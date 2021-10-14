<script>
  import Social from "$components/Header.Social.svelte";
  import SlideOut from "$components/Header.SlideOut.svelte";
  import logo from "$svg/logo.svg";
</script>

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
    box-shadow: 0 4px 4px var(--color-off-white);
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0.25em 1.5em;
    padding-right: 4em;
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
    display: block;
  }

  @media only screen and (max-width: 700px) {
    .links {
      display: none;
    }
  }
</style>
