<script context="module">
  import storiesData from "$data/stories.csv";
  import filterStoryProps from "$utils/filterStoryProps.js";

  export const prerender = true;

  export async function load({ page, fetch, session, context }) {
    const keys = ["url", "date", "month", "hed", "dek", "topic", "author", "keyword"];

    const url = "/api/stories?keys=test";
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
