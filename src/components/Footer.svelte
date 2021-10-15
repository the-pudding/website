<script>
  import { onMount } from "svelte";
  import wordmark from "$svg/wordmark.svg";
  import copy from "$data/misc.json";
  import { about, follow } from "$data/links.js";

  const ctas = follow.filter((d) => d.cta);
  const followNotCtas = follow.filter((d) => !d.cta);
</script>

<footer class="column-wide">
  <section class="about">
    <div class="wordmark">
      {@html wordmark}
    </div>
    <p>{copy.patreon}</p>

    <div class="buttons">
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
        {#each followNotCtas as { name, url }}
          <li>
            <a href={url} rel="external">
              <span>{name}</span>
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
    padding: 8em 0 4em 0;
    justify-content: space-between;
  }

  h4 {
    margin: 0.5rem 0 1rem 0;
  }

  .wordmark {
    max-width: 10em;
  }

  .buttons {
    display: flex;
    flex-direction: column;
  }

  .about {
    max-width: 30em;
  }

  .links {
    display: flex;
  }

  .links div:last-of-type {
    margin-left: 2em;
  }

  .links ul {
    list-style: none;
  }

  @media only screen and (max-width: 700px) {
    footer {
      flex-direction: column;
    }

    .about {
      max-width: 100%;
      margin-bottom: 2em;
    }
  }
</style>
