<script>
  import { base } from "$app/paths";
  import wordmark from "$svg/wordmark-sticker.svg";
  import Menu from "$components/Header.Menu.svelte";
  import copy from "$data/misc.json";

  let menu;
  let visible = $state(false);
  let openBtnEl;

  function onClose(skip) {
    visible = false;
    openBtnEl.removeAttribute("aria-hidden");
    if (!skip) openBtnEl.focus();
  }

  function onClickMenu() {
    console.log("click");
    visible = true;
  }
</script>

<header class="column-wide">
  <div class="stories">
    <p>{@html copy.tagline}</p>
  </div>
  <div class="wordmark">
    <a href="https://pudding.cool" aria-label="The Pudding" target="_self">{@html wordmark}</a>
  </div>
  <div class="menu">
    <ul>
      <li>
        <a href="/about" aria-label="About" target="_self"
          ><img src="{base}/assets/stickers/about@2x.png" alt="about sticker" /></a
        >
      </li>
      <li>
        <a
          href="https://pudding.cool/subscribe"
          rel="external"
          aria-label="subscribe"
          target="_self"
          ><img src="{base}/assets/stickers/subscribe@2x.png" alt="subscribe sticker" /></a
        >
      </li>
      <li>
        <button
          bind:this={openBtnEl}
          onclick={onClickMenu}
          aria-label="open menu"
          aria-controls="nav-content"
        >
          <img src="{base}/assets/stickers/more@2x.png" alt="more sticker" />
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
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0 auto 64px auto;
    max-height: 100px;
  }

  header > div {
    width: 33.33%;
  }

  .menu {
    max-width: 100px;
  }

  ul {
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    list-style-type: none;
    width: 100%;
    transition: transform calc(var(--1s) * 0.25);
  }

  li:hover {
    transform: rotate(var(--right-tilt)) scale(1.05);
  }

  li a {
    display: block;
    max-width: 100px;
  }

  li:nth-of-type(1) {
    transform: rotate(-2deg);
  }

  li:nth-of-type(2) {
    transform: rotate(-3deg);
    display: none;
  }

  li:nth-of-type(1) {
    display: none;
  }

  li:nth-of-type(1):hover,
  li:nth-of-type(2):hover {
    transform: rotate(0deg) scale(1.05);
  }

  .stories {
    display: none;
  }

  .stories p {
    margin: 0;
    font-size: var(--14px);
    line-height: 1.325;
  }

  .wordmark {
    width: 200px;
    margin: 0 0 0 -16px;
    transform: rotate(-4deg);
    display: flex;
    justify-content: start;
    transition: transform calc(var(--1s) * 0.25);
  }

  .wordmark:hover {
    transform: rotate(var(--left-tilt)) scale(1.05);
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

  @media only screen and (min-width: 600px) {
    .wordmark {
      width: 40%;
    }
    li {
      width: 33.33%;
    }
    .menu {
      width: 300px;
      max-width: none;
    }
    li:nth-of-type(1),
    li:nth-of-type(2) {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 960px) {
    .stories {
      display: inline-block;
      max-width: 300px;
    }

    .wordmark {
      margin: 0 auto;
      justify-content: center;
    }
  }
</style>
