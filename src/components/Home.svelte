<script>
  export let stories;
</script>

<h1>The Pudding</h1>
{#each stories as { img }}
  <p>{img}</p>
{/each}
<a href="/about">About</a>
