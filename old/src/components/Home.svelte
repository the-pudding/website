<script>
  import { ascending } from "d3";
  import { setContext } from "svelte";
  import Intro from "$components/Home.Intro.svelte";
  import Promo from "$components/Home.Promo.svelte";
  import Search from "$components/Home.Search.svelte";
  import Stories from "$components/Home.Stories.svelte";

  export let copy;
  export let stories;
  export let staff;

  let highlight = stories.map((d) => d.slug);
  let jump;

  setContext("Home", { stories, staff, copy });

  const onSearchFocus = () => jump();
</script>

<Intro />
{#if copy.promo.text}
  <Promo text={copy.promo.text} link={copy.promo.link} />
{/if}
<Search bind:highlight on:focus={onSearchFocus} />
<Stories {highlight} bind:jump />
