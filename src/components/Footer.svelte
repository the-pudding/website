<script>
  import { onMount } from "svelte";
  import wordmark from "$svg/wordmark.svg";
  import copy from "$data/misc.json";
  import { linksAbout, linksFollow } from "$data/links.js";
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
