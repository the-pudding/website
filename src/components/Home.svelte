<script>
  import { ascending } from "d3";
  import Intro from "$components/Home.Intro.svelte";
  import colors from "$data/thumbnail-colors.json";
  import copy from "$data/home.json";

  export let stories;
  export let staff;
  stories.sort((a, b) => ascending(a.slug, b.slug));

  const lookupColor = (slug) => {
    const match = colors.find((d) => d.slug === slug);
    return match && match.colors.length ? match.colors : ["rgb(255,255,255)"];
  };
</script>

<Intro {stories} {staff} />

<a href="about">About</a>
<a href="pitch">Pitch</a>
<a href="privacy">Privacy</a>
<a href="faq">FAQ</a>
<a href="author/russell-goldenberg">Russell</a>
<a href="author/jan-diehm">Jan</a>
<!-- <a href="rss.xml">RSS</a> -->

{#each stories as { hed, dek, url, slug }}
  <!-- <a href="https://pudding.cool/{url}" rel="external"> -->
  <div>
    <div class="palette">
      {#each lookupColor(slug) as rgb}
        <p style="background: {rgb};" />
      {/each}
    </div>
    <img src="common/assets/thumbnails/640/{slug}.jpg" alt="" />
    <!-- <h1>{hed}</h1> -->
    <!-- <p>{dek}</p> -->
  </div>
  <!-- </a> -->
{/each}

<style>
  a {
    display: block;
  }

  .palette {
    display: flex;
  }

  .palette p {
    width: 4em;
    height: 4em;
  }
</style>
