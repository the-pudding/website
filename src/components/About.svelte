<script>
  import { ascending } from "d3";
  import HeroText from "$components/HeroText.svelte";
  import awards from "$data/awards.csv";

  export let copy;
  export let staff;

  staff.sort((a, b) => ascending(a.name, b.name));

  const { sections } = copy;
</script>

<section id="intro" class="column-wide">
  <HeroText>
    <h1>{copy.title}</h1>
    <p>{@html copy.dek}</p>
  </HeroText>
</section>

<section id="more" class="column-regular">
  <details>
    <summary>{copy.backgroundSummary}</summary>
    {#each copy.background as { value }}
      <p>{@html value}</p>
    {/each}
  </details>
</section>

{#each sections as { id, hed }}
  <section {id} class="column-regular below">
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
      <details>
        <summary>{copy.teamSummary}</summary>
        {#each copy.teamDropdown as { value }}
          <p>{@html value}</p>
        {/each}
        <ul id="background-list">
          {#each copy.teamDropdownList as { lead, description }}
            <li><strong>{@html lead}</strong> {@html description}</li>
          {/each}
        </ul>
      </details>
      <details>
        <summary>{copy.collabSummary}</summary>
        {#each copy.collabDropdown as { value }}
          <p>{@html value}</p>
        {/each}
      </details>
      <details>
        <summary>{copy.speakingSummary}</summary>
        {#each copy.speakingDropdown as { value }}
          <p>{@html value}</p>
        {/each}
      </details>
    {:else if id === "positions"}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
      <details>
        <summary>{copy.positionsSummary}</summary>
        {#each copy.positionsDropdown as { value }}
          <p>{@html value}</p>
        {/each}
      </details>
    {:else if id === "studio"}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
      <details>
        <summary>{copy.studioSummary}</summary>
        {#each copy.studioDropdown as { value }}
          <p>{@html value}</p>
        {/each}
      </details>
    {:else}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}
  </section>
{/each}

<style>
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

  #background-list li {
    max-width: none;
    list-style-type: disc;
    margin: 0;
  }

  table {
    width: 100%;
    table-layout: auto;
  }

  tr {
    border-bottom: 1px solid var(--color-border)
  }

  td, th {
    padding: 0.75rem .25rem;
  }

  td:nth-child(3) {
      width: 10%;
  }

  .below {
    padding-top: 2em;
    margin-bottom: 4em;
  }

  .below p {
    max-width: 40em;
  }
</style>
