<script>
  let { children } = $props();
</script>

<div class="hero-text">
  {@render children?.()}
</div>

<style>
  div {
    line-height: 1.65;
    padding: 2em 0;
  }

  :global(.hero-text h1) {
    margin: 0;
    font-size: var(--font-size-giant);
    font-family: var(--sans);
    font-weight: var(--font-weight-bold);
    -webkit-font-smoothing: antialiased;
  }

  :global(.hero-text p) {
    font-weight: var(--font-weight-thin);
    font-size: var(--font-size-large);
    line-height: 1.4;
    max-width: var(--width-padded);
    -webkit-font-smoothing: antialiased;
  }

  @media only screen and (min-width: 960px) {
    div {
      padding: 4em 0 2em 0;
    }
  }
</style>
