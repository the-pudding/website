<script>
  import Meta from "$components/Meta.svelte";
  import Home from "$components/Home.svelte";
  import HiddenAuthors from "$components/HiddenAuthors.svelte";
  import copy from "$data/home.json";

  export let data;

  const { stories, staff, authors } = data;
</script>

<Meta {copy} />
<Home {copy} {stories} {staff} />
<HiddenAuthors {authors} />
