<script>
  import { ascending } from "d3";
  import awards from "$data/awards.csv";
  import staff from "$data/staff.js";

  export let copy;
  staff.sort((a, b) => ascending(a.name, b.name));

  const { sections } = copy;
</script>

<h1>{copy.title}</h1>

{#each sections as { id, hed }}
  <section {id}>
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
      {#each staff as { id, name, slug }}
        <li>
          <a href="author/{slug}">
            <img src="common/assets/authors/{id}.jpg" alt={name} />
            <span>{name}</span>
          </a>
        </li>
      {/each}
    {:else}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}

    {#if id === "bio"}
      <details>
        <summary>Read more about why and how we exist</summary>
        {#each copy.bioMore as { value }}
          <p>{@html value}</p>
        {/each}
      </details>
    {/if}
  </section>
{/each}
