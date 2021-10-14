<script>
  import { onMount, tick } from "svelte";
  import copy from "$data/misc.json";
  import { about, follow } from "$data/links.js";

  const ctas = follow.filter((d) => d.cta);

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

    <section class="about">
      <p>{copy.patreon}</p>
      <div>
        {#each ctas as { cta, url }}
          <a class="btn btn-light" href={url} rel="external">{cta}</a>
        {/each}
      </div>
    </section>

    <section class="links">
      <div>
        <h4>About Us</h4>
        <ul>
          {#each about as { name, url, rel }}
            <li>
              <a href={url} {rel} sveltekit:prefetch>
                <span>{name}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h4>Follow Us</h4>
        <ul>
          {#each follow as { name, url }}
            <li>
              <a href={url} rel="external">
                <span>{name}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </section>
  </div>
</nav>

<style>
  .btn-open {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    right: 1em;
    background: transparent;
    color: var(--color-body);
    transform: translate(-100%, -50%);
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
    max-width: var(--width-column-narrow);
    padding: 1rem 2rem;
  }

  #slide-nav.visible {
    visibility: visible;
  }

  #slide-nav.active {
    transform: translate(0, 0);
  }

  .about div {
    display: flex;
    flex-direction: column;
  }

  .links div {
    padding: 2rem 0 0 0;
  }

  a {
    color: var(--background-body);
  }

  li {
    list-style-type: none;
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-thin);
  }

  h4 {
    color: var(--color-off-white);
    border-bottom: 1px solid var(--color-gray-light);
  }

  /* .cta .btn, footer .btn, #slide-nav .btn {
	background-size: 200% 100%;
	background-position: -100% 0;
	background-repeat: no-repeat;
	background-image: linear-gradient(90deg, var(--color-accent) 50%, var(--off-black) 50%);
	transition: background-position var(--transition-medium) var(--transition-ease) color var(--transition-slow) var(--transition-ease);
}

.cta .btn:hover, footer .btn:hover, #slide-nav .btn:hover {
	background-position: 0 0;
	color: var(--color-off-black);
} */
</style>
