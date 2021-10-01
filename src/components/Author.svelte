<script>
  export let stories;
  export let author;

  $: console.log(author);
</script>

<section id="info">
  <h1>{author.name}</h1>

  <img src="../common/assets/authors/{author.id}.jpg" alt={author.name} />

  <p>{author.name} {@html author.bio}</p>

  <ul class="links">
    {#if author.twitter}
      <li>
        <a href={author.twitter}>Twitter</a>
      </li>
    {/if}

    {#if author.url}
      <a href={author.url}>Website</a>
    {/if}
  </ul>
</section>

<section id="stories">
  <ul>
    {#each stories as { hed, url }}
      <li>
        <a href="https://pudding.cool/{url}" rel="external">{hed}</a>
      </li>
    {/each}
  </ul>
</section>
