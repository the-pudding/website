<script>
  import awards from "$data/awards.csv";
</script>

<table>
  <thead>
    <tr>
      <th>Award</th>
      <th>Story</th>
      <th>Year</th>
    </tr>
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

<style>
  table {
    width: 100%;
    table-layout: auto;
    margin-bottom: 48px;
    font-family: var(--sans);
    color: var(--color-fg);
  }

  tr {
    border-bottom: 1px solid var(--color-border);
  }

  td,
  th {
    padding: 0.75em 0.25em;
  }

  td {
    font-size: var(--font-size-small);
    color: var(--color-fg);
  }

  td a {
    color: var(--color-fg);
    text-decoration: underline 2px var(--color-fg);
  }

  td:nth-child(3),
  th:nth-child(3) {
    text-align: right;
  }

  :global(table a:hover) {
    color: var(--color-link-hover);
    text-decoration: underline 2px var(--color-link-hover);
  }
</style>
