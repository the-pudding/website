<script context="module">
  export async function load({ page, fetch }) {
    const url = `/api/${page.params.name}.json`;
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

  const copy = {
    title: author.name,
    description: "Author bio and published stories"
  };
</script>

<Meta {copy} />
<Author {stories} {author} />
