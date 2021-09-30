<script context="module">
</script>

<script>
  import Meta from "$components/Meta.svelte";
  import About from "$components/About.svelte";
  import copy from "$data/about.json";
</script>

<Meta {copy} />
<About {copy} />
