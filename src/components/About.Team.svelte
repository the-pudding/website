<script>
  export let staff;
</script>

<ul>
  {#each staff as { id, name, slug }}
    <li>
      <a href="author/{slug}" sveltekit:prefetch>
        <img src="common/assets/authors/{id}.jpg" alt={name} />
        <span>{name}</span>
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }

  li {
    max-width: 10em;
    margin-right: 2em;
    margin-bottom: 2em;
    line-height: 1.25;
  }

  img {
    margin-bottom: 0.25em;
  }
</style>
