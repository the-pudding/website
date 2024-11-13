<script>
  import Meta from "$components/Meta.svelte";
  import About from "$components/About.svelte";
  import copy from "$data/about.json";

  let { data } = $props();
  const { authors } = data;
</script>

<Meta {copy} />
<About {copy} {authors} />
