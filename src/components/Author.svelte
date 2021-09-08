<script>
  export let stories;
  export let author;
</script>

<h1>{author.name}</h1>

{#each stories as { hed }}
  <p>{hed}</p>
{/each}
