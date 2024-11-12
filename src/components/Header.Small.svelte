<script>
  import wordmark from "$svg/wordmark-sticker.svg";
  import Menu from "$components/Header.Menu.svelte";
  import copy from "$data/misc.json";

  let menu;
  let visible = $state(false);
  let openBtnEl;

  const onClose = () => {
    visible = false;
    openBtnEl.focus();
    openBtnEl.removeAttribute("aria-hidden");
  };
</script>

<header>
  <div class="stories">
    <p>{@html copy.tagline}</p>
  </div>
  <div class="wordmark">
    <a href="https://pudding.cool" aria-label="The Pudding" target="_self">{@html wordmark}</a>
  </div>
  <div class="menu">
    <ul>
      <li>
        <a href="about" aria-label="About" target="_self"
          ><img src="assets/stickers/about@2x.png" alt="about sticker" /></a
        >
      </li>
      <li>
        <a
          href="https://pudding.cool/subscribe"
          rel="external"
          aria-label="subscribe"
          target="_self"><img src="assets/stickers/subscribe@2x.png" alt="subscribe sticker" /></a
        >
      </li>
      <li>
        <button
          bind:this={openBtnEl}
          onclick={() => (visible = true)}
          aria-label="open menu"
          aria-controls="nav-content"
        >
          <img src="assets/stickers/more@2x.png" alt="more sticker" />
        </button>
      </li>
    </ul>
  </div>
</header>

<Menu {visible} bind:this={menu} close={onClose} />

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    padding: 16px;
    max-width: calc(var(--width-column-wide) - var(--margin) * 2);
    margin: 0 auto 64px auto;
  }

  header > div {
    width: 25%;
  }

  ul {
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    list-style-type: none;
  }

  li a {
    display: block;
  }

  li:nth-of-type(1) {
    transform: rotate(-2deg);
  }

  li:nth-of-type(2) {
    transform: rotate(-3deg);
  }

  .stories p {
    margin: 0;
    line-height: 1.325;
  }

  .wordmark {
    width: 40%;
    margin: 0 auto;
    transform: rotate(-4deg);
    display: flex;
    justify-content: center;
  }

  .wordmark a {
    border: none;
    display: block;
    color: var(--color-fg);
    max-width: 16em;
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    line-height: 1;
  }
</style>
