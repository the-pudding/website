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
</footer>

<style>
  footer {
    display: flex;
    padding: 0rem 0rem 10rem 0rem;
    margin: 2rem 5vw 0 5vw;
    max-width: 960px;
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
    padding: 0 2rem 0 0;
  }

  .links {
    display: flex;
  }

  .links div {
    padding: 0 0 0 2rem;
    width: 10rem;
  }

  .links ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  @media only screen and (max-width: 700px) {
    footer {
      flex-direction: column;
      padding: 2rem 2rem 10rem 2rem;
    }

    .about {
      max-width: 100%;
      padding: 0;
      margin: 0 0 3rem 0;
    }

    .links div {
      padding: 0 2rem 0 0;
      width: 50%;
    }
  }
</style>
