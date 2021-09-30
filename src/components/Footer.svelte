<script>
  import { onMount } from "svelte";
  import wordmark from "$svg/wordmark.svg";
  import copy from "$data/misc.json";

  const linksAbout = [
    { name: "Our Team", url: "https://pudding.cool/about" },
    { name: "FAQ", url: "https://pudding.cool/faq" },
    { name: "Pitch a Story", url: "https://pudding.cool/pitch" },
    { name: "Data Viz Resources", url: "https://pudding.cool/resources" },
    { name: "Privacy", url: "https://pudding.cool/privacy" },
    { name: "Polygraph Studio", url: "https://polygraph.cool" }
  ];

  const linksFollow = [
    { name: "Twitter", url: "https://twitter.com/puddingviz" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/the.pudding"
    },
    { name: "Patreon", url: "https://patreon.com/thepudding" },
    { name: "Facebook", url: "https://facebook.com/pudding.viz" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCFuV9vMFVluW9CAOdS4Oluw" },
    { name: "Newsletter", url: "http://eepurl.com/czym6f" },
    { name: "RSS", url: "https://pudding.cool/feed/index.xml" }
  ];
</script>

<footer>
  <section class="about">
    <div class="wordmark">
      {@html wordmark}
    </div>
    <p>{copy.patreon}</p>
  </section>

  <section class="links">
    <div>
      <h4>About Us</h4>
      <ul>
        {#each linksAbout as link}
          <li>
            <a href={link.url}>
              <span>{link.name.toUpperCase()}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <h4>Follow Us</h4>
      <ul>
        {#each linksFollow as link}
          <li>
            <a href={link.url}>
              <span>{link.name.toUpperCase()}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
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
