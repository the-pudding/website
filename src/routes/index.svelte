<script context="module">
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/parseStories.js";

  export const prerender = true;

  export async function load({ page, fetch, session, context }) {
    const keys = ["url", "date", "month", "hed", "dek", "topic", "author", "keyword"];

    const stories = parseStories({ data: storiesData, keys });

    return {
      props: { stories }
    };

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
