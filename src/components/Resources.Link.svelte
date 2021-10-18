<script>
  export let id;
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
      class="{id}-img"
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
    margin-bottom: 4px;
  }

  a {
    background: var(--color-off-white);
    display: flex;
    padding: 3em;
    text-decoration: none;
    align-items: flex-start;
    text-decoration: none;
  }

  .title {
    font-weight: var(--font-weight-normal);
  }

  .title span {
    color: var(--color-body);
    background-size: 100% 0.05em;
    background-position: 0 90%;
    background-repeat: no-repeat;
    background-image: linear-gradient(var(--color-gray-dark), var(--color-gray-dark));
    transition: all var(--transition-fast) var(--transition-ease);
    padding: 0 0.05em;
  }

  a:hover .title span,
  a:focus .title span {
    background-size: 100% 0.1em;
    background-image: linear-gradient(var(--color-link), var(--color-link));
  }

  a:hover img {
    transform: scale(1.02);
  }

  .podcast-img {
    max-width: 140px;
  }

  img {
    max-width: 240px;
    width: 40%;
    border: 1px solid currentColor;
  }

  .info {
    margin: 0;
    padding: 0 1em;
    flex-grow: 1;
    color: currentColor;
  }
</style>
