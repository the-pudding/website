<script context="module">
</script>

<script>
  import Meta from "$components/Meta.svelte";
  import Privacy from "$components/Privacy.svelte";
  import copy from "$data/privacy.json";
</script>

<Meta {copy} />
<Privacy {copy} />
