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
      <a href="https://pudding.cool" aria-label="The Pudding">{@html wordmark}</a>
    </div>

    <div class="cta">
      {#each ctas as { cta, url, name }}
        <div>
          <p>{copy[name.toLowerCase()]}</p>
          <!-- TODO move to inline link? -->
          <a class="btn" href={url} rel="external">{cta}</a>
        </div>
      {/each}
    </div>
  </section>

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
    margin: 0.5em 0 1em 0;
  }

  .wordmark {
    max-width: 10em;
  }

  .about {
    max-width: 30em;
    padding-right: 4em;
  }

  .btn {
    display: block;
  }

  .links {
    display: flex;
  }

  .links div {
    width: 10em;
  }

  .links div:last-of-type {
    margin-left: 2em;
  }

  .links ul {
    list-style: none;
  }

  .cta div {
    padding-bottom: 2em;
  }

  @media only screen and (max-width: 700px) {
    footer {
      flex-direction: column;
    }

    .about {
      max-width: 100%;
      margin-bottom: 2em;
      margin-right: 0;
      padding-right: 0;
    }

    .links div {
      width: 50%;
    }
    .links div:last-of-type {
      margin-left: 0;
    }
  }
</style>
