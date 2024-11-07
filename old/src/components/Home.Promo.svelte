<script>
  export let text;
  export let link;
</script>

<a href={link} rel="extenral">
  <div id="promo">
    <p>{@html text}</p>
  </div>
</a>

<style>
  a {
    display: none;
  }
  /* TODO no */
  /* #promo {
    background: var(--color-accent);
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 13vh;
    right: 5vw;
    z-index: var(--z-overlay);
    box-shadow: 0 4px 4px var(--color-gray-light);
    border: 2px solid var(--color-accent);
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    pointer-events: none;
  }

  #promo:hover {
    border: 2px solid var(--color-off-black);
  }

  p {
    text-align: center;
    text-decoration: underline;
    padding: 1rem;
    line-height: 1.35;
    animation: spin 10s linear 0.01s infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } */
</style>
