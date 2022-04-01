<script>
  import Meta from "$components/Meta.svelte";
  import About from "$components/About.svelte";
  import copy from "$data/about.json";

  // exports from author.json.js endpoint
  export let authors;
</script>

<Meta {copy} />
<About {copy} {authors} />
