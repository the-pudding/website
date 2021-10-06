<script>
  import { onMount, tick } from "svelte";
  import copy from "$data/misc.json";
  import { linksAbout, linksFollow } from "$data/links.js";
  export let cta;

  let main;
  let slideNav;
  let openBtn;
  let closeBtn;
  let firstFocusable;
  let lastFocusable;
  let visible = false;
  let active = false;

  const onOpen = async () => {
    active = true;
    visible = true;
    await tick();
    closeBtn.focus();
    main.setAttribute("aria-hidden", true);
    openBtn.setAttribute("aria-hidden", true);
  };

  const onClose = async (e) => {
    if (e.type === "keyup" && e.key !== "Escape") return;

    active = false;
    await tick();
    openBtn.focus();
    main.removeAttribute("aria-hidden");
    openBtn.removeAttribute("aria-hidden");
  };

  const onTransitionEnd = () => {
    visible = active;
  };

  const moveFocusToTop = (e) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      firstFocusable.focus();
    }
  };

  const moveFocusToBottom = (e) => {
    if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault();
      lastFocusable.focus();
    }
  };

  onMount(() => {
    main = document.querySelector("main");
    const focusableInNav = [...slideNav.querySelectorAll("a, button")];
    firstFocusable = focusableInNav.shift();
    lastFocusable = focusableInNav.pop();
    firstFocusable.addEventListener("keydown", moveFocusToBottom);
    lastFocusable.addEventListener("keydown", moveFocusToTop);
  });
</script>

<nav>
  <button
    type="button"
    class="btn-open"
    aria-label="open navigation"
    aria-controls="slide-nav"
    aria-expanded="false"
    bind:this={openBtn}
    on:click={onOpen}>&#9776;</button
  >

  <div
    id="slide-nav"
    class="slide-content"
    class:visible
    class:active
    bind:this={slideNav}
    on:transitionend={onTransitionEnd}
    on:keyup={onClose}
  >
    <button
      type="button"
      class="btn-close"
      aria-label="close navigation"
      bind:this={closeBtn}
      on:click={onClose}>&times;</button
    >

    <p>{copy.tagline}</p>

    <div class="cta">
      {#each cta as { text, url }}
        <a class="btn" href={url}>{text}</a>
      {/each}
    </div>

    <div>
      <h4>About Us</h4>
      <ul>
        {#each linksAbout as { url, text, rel }}
          <li>
            <a href={url} {rel}>
              <span>{text.toUpperCase()}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <h4>Follow Us</h4>
      <ul>
        {#each linksFollow as { url, text }}
          <li>
            <a href={url}>
              <span>{text.toUpperCase()}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  .btn-open {
    position: absolute;
    top: 50%;
    right: 0.5em;
    transform: translate(0, -50%);
  }

  #slide-nav {
    position: fixed;
    top: 0;
    right: 0;
    visibility: hidden;
    height: 100%;
    z-index: var(--z-overlay);
    background: var(--color-body);
    color: var(--background-body);
    transition: transform 0.5s;
    transform: translate(100%, 0);
  }

  #slide-nav.visible {
    visibility: visible;
  }

  #slide-nav.active {
    transform: translate(0, 0);
  }

  a {
    color: var(--background-body);
  }
</style>
