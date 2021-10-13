<div class="hero-text">
  <slot />
</div>

<style>
  div {
    line-height: 1.65;
    padding: 4em 0 2em 0;
  }

  :global(.hero-text h1) {
    margin: 0;
    font-size: var(--font-size-giant);
  }

  :global(.hero-text p) {
    font-weight: 300;
    font-size: var(--font-size-large);
  }
</style>
