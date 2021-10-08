<div class="hero-text">
  <slot />
</div>

<style>
  div {
    line-height: 1.65;
    font-size: var(--font-size-large);
  }

  :global(.hero-text h1) {
    margin: 0;
  }

  :global(.hero-text p) {
    font-weight: 300;
  }
</style>
