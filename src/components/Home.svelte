<script>
  import { ascending } from "d3";
  export let stories;
  stories.sort((a, b) => ascending(a.hed, b.hed));
</script>

<h1>The Pudding</h1>
{#each stories as { hed, dek, slug }}
  <h1>{hed}</h1>
  <p>{dek}</p>
  <p>{slug}</p>
{/each}
<a href="/about">About</a>
