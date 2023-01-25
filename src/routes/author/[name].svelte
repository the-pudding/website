<script>
  import Meta from "$components/Meta.svelte";
  import Author from "$components/Author.svelte";

  // exports from [name].json.js endpoint
  export let stories;
  export let author;

  const copy = {
    title: author.name,
    description: "Author bio and published stories"
  };
</script>

<Meta {copy} />
<Author {stories} {author} />
