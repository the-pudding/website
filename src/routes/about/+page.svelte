<script>
  import Meta from "$components/Meta.svelte";
  import About from "$components/About.svelte";
  import copy from "$data/about.json";

  export let data;
  const { authors } = data;
</script>

<Meta {copy} />
<About {copy} {authors} />
