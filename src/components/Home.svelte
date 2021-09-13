<script>
  import { ascending } from "d3";
  import colors from "$data/thumbnail-colors.json";
  export let stories;
  stories.sort((a, b) => ascending(a.slug, b.slug));

  const lookupColor = (slug) => {
    const match = colors.find((d) => d.slug === slug);
    return match ? match.rgb : "rgb(255,255,255)";
  };
</script>

<h1>The Pudding</h1>
<a href="about">About</a>
<a href="author/russell-goldenberg">Russell</a>
<a href="author/jan-diehm">Jan</a>
<!-- <a href="rss.xml">RSS</a> -->

{#each stories as { hed, dek, url, slug }}
  <!-- <a href="https://pudding.cool/{url}" rel="external"> -->
  <div style="background-color: {lookupColor(slug)};">
    <img src="common/assets/thumbnails/640/{slug}.jpg" alt="" />
    <!-- <h1>{hed}</h1> -->
    <!-- <p>{dek}</p> -->
  </div>
  <!-- </a> -->
{/each}

<style>
  div {
    /* height: 1em; */
    padding: 2em;
  }

  a {
    display: block;
  }

  h1 {
    font-family: var(--serif);
  }
  img {
    border: 1px solid white;
  }
</style>
