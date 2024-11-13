<script>
  import Meta from "$components/Meta.svelte";
  import Author from "$components/Author.svelte";

  let { data } = $props();

  const { stories, author } = data;

  const copy = {
    title: author.name,
    description: "Author bio and published stories"
  };
</script>

<Meta {copy} />
<Author {stories} {author} />
