<script>
  export let copy;
</script>

<h1>{copy.title}</h1>

<section class="intro">
  {#each copy.intro as { value }}
    <p>{@html value}</p>
  {/each}
</section>

<section class="principles">
  <ul>
    {#each copy.principles as { lead, description }}
      <li><strong>{@html lead}</strong> {@html description}</li>
    {/each}
  </ul>
</section>

<section class="send">
  <h2>{copy.sendHed}</h2>
  <p>{copy.sendDek}</p>
  <ul>
    {#each copy.sendList as { lead, description }}
      <li><strong>{@html lead}:</strong> {@html description}</li>
    {/each}
  </ul>
</section>

<section class="misc">
  {#each copy.misc as { value }}
    <p>{@html value}</p>
  {/each}
</section>

<section class="compensation">
  <h2>{copy.compensationHed}</h2>
  <p>{@html copy.compensationDek}</p>
</section>

<section class="time">
  <h2>
    {copy.timeHed}
  </h2>
  <p>{@html copy.timeDek}</p>
</section>
