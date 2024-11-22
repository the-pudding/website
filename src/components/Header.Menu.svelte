<script>
  import { base } from "$app/paths";
  import { afterNavigate } from "$app/navigation";
  import copy from "$data/misc.json";
  import { about, follow } from "$data/links.js";
  import focusTrap from "$actions/focusTrap.js";
  import closeIcon from "$svg/circle-x.svg";

  let { visible, close } = $props();

  let mainEl;
  let closeBtnEl;
  let slideNav;
  let openBtn;
  let firstFocusable;
  let lastFocusable;
  let active = false;

  export const open = () => {
    closeBtnEl.focus();
    main.setAttribute("aria-hidden", true);
  };

  const onClose = async (e) => {
    if (e?.type === "keyup" && e?.key !== "Escape") return;

    mainEl.removeAttribute("aria-hidden");
    visible = false;
    close(e === "skip");
  };

  $effect(() => {
    mainEl = document.querySelector("main");
  });

  afterNavigate(() => {
    onClose("skip");
  });
</script>

<svelte:window on:keyup={onClose} />

<nav id="nav-menu" class:visible use:focusTrap aria-hidden={!visible}>
  <div class="nav-content" class:visible class:active bind:this={slideNav}>
    <button class="btn-close" aria-label="close menu" bind:this={closeBtnEl} onclick={onClose}
      >{@html closeIcon}</button
    >

    <section class="links">
      <div class="about">
        <h4>About Us</h4>
        <ul>
          {#each about as { name, url, rel }}
            {@const slug = name.toLowerCase().replace(/[^a-z]/g, "_")}
            {@const external = rel === "external"}
            {@const prefix = external ? "" : `${base}/`}
            <li>
              <a href="{base}{url}" {rel}>
                <img aria-label={name} src="{base}/assets/stickers/{slug}@2x.png" alt={name} />
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="follow">
        <h4>Follow Us</h4>
        <ul>
          {#each follow as { name, url }}
            {@const slug = name.toLowerCase().replace(/[^a-z]/g, "_")}
            <li>
              <a href={url} target="_blank" rel="noreferrer">
                <img src="{base}/assets/stickers/{slug}@2x.png" alt="{name} logo" /><span
                  >{name}</span
                >
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </section>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    max-width: 360px;
    height: 100svh;
    z-index: calc(var(--z-overlay) + 1);
    background: var(--color-fg);
    color: var(--color-bg);
    visibility: hidden;
    transform: translate(100%, 0);
    transition: transform var(--transition-medium);
  }

  nav.visible {
    visibility: visible;
    transform: translate(0, 0);
  }

  h4 {
    font-family: var(--mono);
    font-size: var(--font-size-xsmall);
    text-transform: uppercase;
  }

  .links {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    padding: 0 24px;
  }

  .links > div {
    width: 50%;
  }

  .links ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .links li {
    font-family: var(--sans);
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    transition: transform calc(var(--1s) * 0.25);
    transform-origin: center center;
  }

  .links li a {
    display: flex;
    align-items: center;
    color: currentColor;
  }

  .links li a span {
    border-bottom: 1px solid currentColor;
    margin-left: 4px;
  }

  .links li:hover img {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  .follow img {
    width: 48px;
  }

  .follow li:hover span {
    color: var(--color-link-hover);
  }

  .btn-close {
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background: transparent;
  }

  :global(.btn-close svg path, .btn-close svg circle) {
    stroke: var(--color-bg);
  }

  :global(.btn-close:hover svg path, .btn-close:hover svg circle) {
    stroke: var(--color-link-hover);
  }
</style>
