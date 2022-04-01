<script>
  import Meta from "$components/Meta.svelte";
  import Resources from "$components/Resources.svelte";
  import copy from "$data/resources.json";
</script>

<Meta {copy} />
<Resources {copy} />
