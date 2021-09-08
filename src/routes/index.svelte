<script context="module">
  export const prerender = true;

  export async function load({ page, fetch, session, context }) {
    const url = "/api/home";
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
