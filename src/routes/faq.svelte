<script context="module">
</script>

<script>
  import Meta from "$components/Meta.svelte";
  import Faq from "$components/Faq.svelte";
  import copy from "$data/faq.json";
</script>

<Meta {copy} />
<Faq {copy} />
