<script>
  import { ascending } from "d3";
  export let stories;
  stories.sort((a, b) => ascending(a.hed, b.hed));
</script>

<h1>The Pudding</h1>
{#each stories as { hed, dek, url }}
  <a href="https://pudding.cool/{url}" rel="external">
    <h1>{hed}</h1>
    <p>{dek}</p>
  </a>
{/each}

<a href="/about">About</a>

<style>
  a {
    display: block;
  }
</style>
