<script context="module">
  export async function load({ fetch }) {
    const url = "/api/about.json";
    const res = await fetch(url);
    if (res.ok) {
      const { staff } = await res.json();
      return {
        props: { staff }
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

  export let staff;
</script>

<Meta {copy} />
<About {copy} {staff} />
