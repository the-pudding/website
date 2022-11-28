<script>
  import Meta from "$components/Meta.svelte";
  import Pitch from "$components/Pitch.svelte";
  import copy from "$data/pitch.json";
</script>

<Meta {copy} />
<Pitch {copy} />
