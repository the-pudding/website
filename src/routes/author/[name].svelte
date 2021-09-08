<script context="module">
  export async function load({ page, fetch, session, context }) {
    const url = `/api/${page.params.name}`;
    const res = await fetch(url);
    if (res.ok) {
      const { stories, author } = await res.json();
      return {
        props: { stories, author }
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
  import Author from "$components/Author.svelte";
  export let stories;
  export let author;
</script>

<Meta />
<Author {stories} {author} />
