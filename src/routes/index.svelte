<script>
  import Meta from "$components/Meta.svelte";
  import Home from "$components/Home.svelte";
  import HiddenAuthors from "$components/HiddenAuthors.svelte";
  import copy from "$data/home.json";

  // exports from index.js endpoint
  export let stories;
  export let staff;
  export let authors;
</script>

<Meta {copy} />
<Home {copy} {stories} {staff} />
<HiddenAuthors {authors} />
