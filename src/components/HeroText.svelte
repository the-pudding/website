<div class="hero-text">
  <slot />
</div>

<style>
  div {
    font-size: var(--font-size-large);
    line-height: 1.65;
  }

  :global(.hero-text h1) {
    margin: 0;
  }

  :global(.hero-text p) {
    font-weight: 300;
  }
</style>
