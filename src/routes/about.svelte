<script context="module">
  export async function load({ fetch }) {
    const url = "/api/about.json";
    const res = await fetch(url);
    if (res.ok) {
      const { authors } = await res.json();
      return {
        props: { authors }
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
  import About from "$components/About.svelte";
  import copy from "$data/about.json";

  export let authors;
</script>

<Meta {copy} />
<About {copy} {authors} />
