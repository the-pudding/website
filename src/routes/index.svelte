<script context="module">
  export async function load({ fetch }) {
    const url = "/api/home.json";
    const res = await fetch(url);
    if (res.ok) {
      const { stories, staff, authors } = await res.json();
      return {
        props: { stories, staff, authors }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load data`)
    };
  }
</script>

<script>
  import Meta from "$components/Meta.svelte";
  import Home from "$components/Home.svelte";
  import HiddenAuthors from "$components/HiddenAuthors.svelte";
  import copy from "$data/home.json";

  export let stories;
  export let staff;
  export let authors;
</script>

<Meta {copy} />
<Home {copy} {stories} {staff} />
<HiddenAuthors {authors} />
