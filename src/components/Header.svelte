<script>
  import { base } from "$app/paths";
  import { fly, fade } from "svelte/transition";
  import wordmark from "$svg/wordmark-sticker.svg";
  import Menu from "$components/Header.Menu.svelte";
  import copy from "$data/misc.json";

  let visible = $state(false);
  let index = $state(-1);
  let tagline = $derived(copy.taglines[index] || "");
  let menu;
  let openBtnEl;

  function onClose(skip) {
    visible = false;
    openBtnEl.removeAttribute("aria-hidden");
    if (!skip) openBtnEl.focus();
  }

  function onClickMenu() {
    // console.log("click");
    visible = true;
  }

  $effect(() => {
    index = 0;
    const i = setInterval(() => {
      index += 1;
      if (index >= copy.taglines.length) index = 0;
    }, 5000);

    return () => clearInterval(i);
  });
</script>

<div class="special">
  <p>
    <a href="https://www.instagram.com/p/DDKdigixJPX/?img_index=1" target="_blank" rel="noreferrer"
      >Free Crokinole board giveaway!</a
    >
  </p>
</div>
<header class="column-wide">
  <div class="stories">
    <p>
      {@html copy.taglinePre}...<br />
      {#key index}<strong in:fly={{ delay: 200, duration: 500, y: 15 }}>{tagline}</strong>{/key}
    </p>
  </div>
  <div class="wordmark">
    <a href="{base}/" aria-label="The Pudding" target="_self">{@html wordmark}</a>
  </div>
  <div class="menu">
    <ul>
      <li>
        <a href="{base}/about" aria-label="About" target="_self"
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
<div class="column-wide">
  <div class="stories stories-mobile">
    <p>
      {@html copy.taglinePre}...<br />
      {#key index}<strong in:fly={{ delay: 200, duration: 500, y: 15 }}>{tagline}</strong>{/key}
    </p>
  </div>
</div>

<Menu {visible} bind:this={menu} close={onClose} />

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0 auto 24px auto;
    max-height: 100px;
    margin-bottom: 0;
  }

  header > div {
    width: 30%;
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
    max-width: 150px;
  }

  li:nth-of-type(1) {
    transform: rotate(var(--left-tilt));
  }

  li:nth-of-type(3) {
    transform: rotate(var(--right-tilt));
  }

  li:nth-of-type(3):hover {
    transform: rotate(var(--right-tilt-double)) scale(1.05);
  }

  li:nth-of-type(1):hover {
    transform: rotate(0deg) scale(1.05);
  }

  li:nth-of-type(2) {
    width: 40%;
    display: none;
  }

  li:nth-of-type(1) {
    display: none;
  }

  .stories {
    display: none;
  }

  .stories-mobile {
    display: block;
    font-family: var(--sans);
    margin-bottom: 64px;
    text-align: center;
    transform: translate(0, -5px);
  }

  .stories p {
    margin: 0;
    font-size: var(--14px);
    line-height: 1.325;
  }

  .stories strong {
    display: inline-block;
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

    li:nth-of-type(2) {
      width: 50%;
    }

    .menu {
      width: 350px;
      max-width: none;
    }
    li:nth-of-type(1),
    li:nth-of-type(2) {
      display: inline-block;
    }
    .stories-mobile {
      text-align: left;
      transform: translate(0, 5px);
    }
  }

  @media only screen and (min-width: 960px) {
    .stories {
      display: inline-block;
      max-width: 300px;
    }
    .stories-mobile {
      display: none;
    }
    .wordmark {
      margin: 0 auto;
      justify-content: center;
    }
    header {
      margin-bottom: 24px;
    }
  }

  .special {
    background-color: var(--color-fg);
    color: var(--color-bg);
    text-align: center;
    padding: 16px;
  }

  .special p {
    margin: 0;
  }
  .special p a {
    font-family: var(--mono);
    color: var(--color-bg);
    text-decoration-color: var(--color-bg);
    font-size: var(--14px);
  }
</style>
