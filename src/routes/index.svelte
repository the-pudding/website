<script context="module">
  export async function load({ fetch }) {
    const url = "/api/home.json";
    const res = await fetch(url);
    if (res.ok) {
      const stories = await res.json();
      return {
        props: { stories }
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

  export let stories;
</script>

<Meta />
<Home {stories} />
