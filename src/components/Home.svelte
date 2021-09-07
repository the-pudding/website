<script>
  import { ascending } from "d3";
  export let stories;
  stories.sort((a, b) => ascending(a.hed, b.hed));
  console.log(stories[0]);
</script>

<h1>The Pudding</h1>
{#each stories as { hed }}
  <p>{hed}</p>
{/each}
<a href="/about">About</a>
