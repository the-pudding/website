<script>
  import { onMount } from "svelte";
  import wordmark from "$svg/wordmark.svg";
  import copy from "$data/misc.json";

  const links = [
    { name: "about", url: "https://pudding.cool/about" },
    { name: "facebook", url: "https://facebook.com/pudding.viz/" },
    { name: "twitter", url: "https://twitter.com/puddingviz/" },
    {
      name: "instagram",
      url: "https://www.instagram.com/the.pudding"
    },
    { name: "patreon", url: "https://patreon.com/thepudding/" },
    { name: "privacy", url: "https://pudding.cool/privacy/" },
    { name: "newsletter", url: "http://eepurl.com/czym6f" },
    { name: "rss", url: "https://pudding.cool/feed/index.xml" }
  ];
</script>

<footer>
  <section class="about">
    <div class="wordmark">
      {@html wordmark}
    </div>
    <p>{copy.tagline}</p>
  </section>

  <section class="links">
    <ul>
      {#each links as link}
        <li>
          <a href={link.url}>
            <span>{link.name.toUpperCase()}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</footer>

<style>
  footer {
    background-color: var(--color-body);
    color: var(--background-body);
    font-family: var(--sans);
    padding: 3em 1em;
    margin-top: 3em;
  }

  .wordmark {
    max-width: 10em;
    margin: 1em auto;
  }

  .about {
    margin: 3rem auto;
    margin-top: 0;
    text-align: center;
  }

  .links ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .links li {
    display: flex;
    padding: 0.5em 1em;
  }

  .links a {
    display: flex;
    border: none;
    align-items: center;
    text-decoration: none;
  }

  .links span {
    margin-left: 0.5em;
  }
</style>
