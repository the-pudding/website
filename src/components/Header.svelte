<script>
  import Big from "$components/Header.Big.svelte";
  import Small from "$components/Header.Small.svelte";

  let big = false;
</script>

{#if big}
  <Big></Big>
{:else}
  <Small></Small>
{/if}
