<script>
  import { ascending } from "d3";
  import HeroText from "$components/HeroText.svelte";
  import awards from "$data/awards.csv";

  export let copy;
  export let staff;

  staff.sort((a, b) => ascending(a.name, b.name));

  const { sections } = copy;
</script>

<section id="intro" class="column">
  <HeroText>
    <h1>{copy.title}</h1>
    <p>{copy.dek}</p>
  </HeroText>
  <details>
    <summary>{copy.backgroundSummary}</summary>
    {#each copy.background as { value }}
      <p>{@html value}</p>
    {/each}
  </details>
</section>

{#each sections as { id, hed }}
  <section {id} class="column below">
    {#if hed}
      <h2>{hed}</h2>
    {/if}

    {#if id === "awards"}
      <table>
        <thead>
          <th>Award</th>
          <th>Story</th>
          <th>Year</th>
        </thead>
        <tbody>
          {#each awards as { awardText, awardUrl, storyHed, storyUrl, year }}
            <tr>
              <td><a href={awardUrl} rel="external">{awardText}</a></td>
              <td><a href={storyUrl} rel="external">{storyHed}</a></td>
              <td>{year}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:else if id === "team"}
      <ul>
        {#each staff as { id, name, slug }}
          <li>
            <a href="author/{slug}">
              <img src="common/assets/authors/{id}.jpg" alt={name} />
              <span>{name}</span>
            </a>
          </li>
        {/each}
      </ul>
    {:else}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}
  </section>
{/each}

<style>
  #intro {
    padding: 4em 0;
  }

  details p {
    font-size: var(--font-size-medium);
    padding: 0 2em;
    margin: 1.5em 0;
  }

  #team ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    max-width: 56em;
  }

  #team li {
    max-width: 12em;
    margin-right: 2em;
    margin-bottom: 2em;
  }

  .below {
    margin-bottom: 4em;
  }

  .below p {
    max-width: 40em;
  }
</style>
