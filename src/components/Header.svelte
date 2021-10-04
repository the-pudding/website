<script>
  import logo from "$svg/logo.svg";
  import Icon from "$components/helpers/Icon.svelte";
  import copy from "$data/misc.json";
  import { linksAbout, linksFollow } from "$data/links.js";

  let menuVisible = false;

  const social = [
    { name: "twitter", url: "https://twitter.com/puddingviz/" },
    {
      name: "instagram",
      url: "https://www.instagram.com/the.pudding"
    },
    { name: "facebook", url: "https://facebook.com/pudding.viz/" }
  ];

  const cta = [
    { text: "Support The Pudding", url: "https://patreon.com/thepudding/" },
    { text: "Join our newsletter", url: "http://eepurl.com/czym6f" }
  ];
</script>

<header>
  <div class="logo">
    <a href="https://pudding.cool" aria-label="The Pudding">{@html logo}</a>
  </div>

  <div class="social">
    {#each social as { name, url }}
      <a href={url} aria-label={name}><Icon {name} /></a>
    {/each}
  </div>

  <div class="cta">
    {#each cta as { text, url }}
      <a class="btn" href={url}>{text}</a>
    {/each}
  </div>

  <nav>
    <button
      type="button"
      class="nav-btn-open"
      aria-label="open navigation"
      aria-controls="slide-nav"
      aria-expanded="false">&#9776;</button
    >
    <div id="slide-nav" class="slide-content">
      <button type="button" class="nav-btn-close" aria-label="close navigation">&times;</button>
      <p>{copy.tagline}</p>
      <div class="nav-cta">
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
</header>

<style>
  header {
    box-shadow: 0 2px red;
  }

  .logo {
    max-width: 2em;
  }

  .logo a {
    border: none;
  }

  .logo a:hover {
    background-color: transparent;
  }

  :global(.st1) {
    fill: blue;
  }

  .menu {
    opacity: 0;
  }

  .menu.is-visible {
    opacity: 1;
  }
</style>
