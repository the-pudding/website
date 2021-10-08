<script>
  export let url;
  export let slug;
  export let title;
  export let description;
</script>

<div class="resource">
  <a class="column" href={url} rel="external">
    <img
      src="/common/assets/resources/32/{slug}.jpg"
      alt="thumbnail for link"
      srcset="/common/assets/resources/480/{slug}.jpg 480w"
      sizes="480px"
      loading="lazy"
    />
    <div class="info">
      <h3 class="title">
        <span>{title}</span>
      </h3>
      {#if description}
        <p>{description}</p>
      {/if}
    </div>
  </a>
</div>

<style>
  .resource {
    background: var(--color-off-white);
    border-bottom: 4px solid var(--background-body);
  }

  .resource a {
    display: flex;
    padding: 4rem 0;
    text-decoration: none;
    align-items: flex-start;
    text-decoration: none;
  }

  .resource a .tease span {
    background-image: linear-gradient(var(--dark), var(--dark));
    background-repeat: no-repeat;
    background-position: 0 90%;
    background-size: 0% 0.1em;
  }

  .resource a:hover .tease span,
  .resource a:focus .tease span {
    background-size: 100% 0.1em;
  }

  img {
    max-width: 240px;
    width: 40%;
    border: 1px solid var(--dark);
  }

  .info {
    margin: 0;
    padding: 0 1em;
    flex-grow: 1;
    color: currentColor;
  }
</style>
