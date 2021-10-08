<script>
  import { onMount } from "svelte";
  import wordmark from "$svg/wordmark.svg";
  import copy from "$data/misc.json";
  import { about, follow } from "$data/links.js";

  const ctas = follow.filter((d) => d.cta);
</script>

<footer>
  <section class="about">
    <div class="wordmark">
      {@html wordmark}
    </div>
    <p>{copy.patreon}</p>

    <div>
      {#each ctas as { cta, url }}
        <a class="btn" href={url} rel="external">{cta}</a>
      {/each}
    </div>
  </section>

  <section class="links">
    <div>
      <h4>About Us</h4>
      <ul>
        {#each about as { name, url, rel }}
          <li>
            <a href={url} {rel}>
              <span>{name.toUpperCase()}</span>
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
              <span>{name.toUpperCase()}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</footer>

<style>
  footer {
    display: flex;
    padding: 1em;
    margin: 0 auto;
    max-width: 960px;
    justify-content: space-between;
  }

  .wordmark {
    max-width: 10em;
  }

  .about {
    max-width: 30em;
  }

  .links {
    display: flex;
  }

  .links ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
</style>
