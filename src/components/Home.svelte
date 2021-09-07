<script>
  export let stories;
  console.log(stories[0]);
</script>

<h1>The Pudding</h1>
{#each stories as { img }}
  <p>{img}</p>
{/each}
<a href="/about">About</a>
