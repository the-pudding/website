<script>
  let { authors } = $props();
</script>

<div>
  {#each authors as slug}
    <a href="/author/{slug}">{slug}</a>
  {/each}
</div>

<style>
  div {
    display: none;
  }
</style>
