<script>
  import { onMount, tick } from "svelte";
  import { navigating } from "$app/stores";
  import Icon from "$components/helpers/Icon.svelte";
  import copy from "$data/misc.json";
  import { about, follow } from "$data/links.js";

  const ctas = follow.filter((d) => d.cta);
  const followNotCtas = follow.filter((d) => !d.cta);

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

  $: if ($navigating) {
    visible = false;
    active = false;
  }

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
    on:click={onOpen}><Icon name="menu" /></button
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
      on:click={onClose}><Icon name="x" /></button
    >

    <section class="links">
      <div>
        <h4>About Us</h4>
        <ul>
          {#each about as { name, url, rel }}
            <li>
              {#if rel === "external"}
                <a href={url} {rel}>
                  <span>{name}</span>
                </a>
              {:else}
                <a href={url} {rel} sveltekit:prefetch>
                  <span>{name}</span>
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h4>Follow Us</h4>
        <ul>
          {#each followNotCtas as { name, url }}
            <li>
              <a href={url}>
                <span>{name}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </section>

    <section class="about">
      <div>
        {#each ctas as { cta, url }}
          <a class="btn" href={url} rel="external">{cta}</a>
        {/each}
      </div>
    </section>
  </div>
</nav>

<style>
  .btn-open {
    margin: 0;
    padding: 0;
    position: fixed;
    top: 2em;
    right: -1.5em;
    width: 2em;
    height: 2em;
    background: transparent;
    color: var(--color-body);
    transform: translate(-100%, -50%);
    z-index: var(--z-overlay);
  }

  .btn-open:hover {
    color: var(--color-accent);
  }

  .btn-close {
    background: var(--background-body);
    color: var(--color-link);
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-close:hover {
    background: var(--color-accent);
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
    transition: transform var(--transition-medium);
    transform: translate(100%, 0);
    width: 100%;
    max-width: 28em;
    padding: 1em 2em;
  }

  #slide-nav.visible {
    visibility: visible;
  }

  #slide-nav.active {
    transform: translate(0, 0);
  }

  .links {
    display: flex;
  }

  .links div {
    padding-top: 2em;
  }

  .links div {
    width: 50%;
  }

  .links div:last-of-type {
    margin-left: 2em;
  }

  .links li {
    padding-bottom: 0;
  }

  .about {
    margin-top: 2em;
  }

  .about div {
    display: flex;
    flex-direction: column;
  }

  a {
    color: var(--background-body);
    font-size: var(--font-size-small);
  }

  a.btn {
    background: var(--background-body);
    color: var(--color-link);
  }

  a.btn:focus {
    background: var(--color-focus);
  }

  a.btn:hover {
    background: var(--color-accent);
  }

  li {
    list-style-type: none;
    margin: 0;
  }

  h4 {
    color: var(--background-body);
    border-bottom: 1px solid var(--color-gray-light);
  }

  :global(.logo a, .logo a:hover) {
    text-decoration: none;
    background-image: none;
  }
</style>
