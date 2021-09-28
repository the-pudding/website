<script>
  import { ascending } from "d3";
  import { setContext } from "svelte";
  import Intro from "$components/Home.Intro.svelte";
  import Search from "$components/Home.Search.svelte";
  import Stories from "$components/Home.Stories.svelte";
  import copy from "$data/home.json";

  export let stories;
  export let staff;

  let highlight = [];

  setContext("Home", { stories, staff, copy });
</script>

<Intro />
<Search bind:highlight />
<Stories {highlight} />

<a href="about">About</a>
<a href="pitch">Pitch</a>
<a href="privacy">Privacy</a>
<a href="faq">FAQ</a>
<a href="author/russell-goldenberg">Russell</a>
<a href="author/jan-diehm">Jan</a>

<!-- <a href="rss.xml">RSS</a> -->
