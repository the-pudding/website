<script context="module">
  export async function load({ fetch }) {
    const url = "/api/home.json";
    const res = await fetch(url);
    if (res.ok) {
      const { stories, staff } = await res.json();
      return {
        props: { stories, staff }
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
  import copy from "$data/home.json";

  export let stories;
  export let staff;
</script>

<Meta {copy} />
<Home {copy} {stories} {staff} />
