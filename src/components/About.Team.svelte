<script>
  import { ascending } from "d3";
  import { base } from "$app/paths";
  let { staff } = $props();
  staff.sort((a, b) => ascending(a.name, b.name));
</script>

<ul>
  {#each staff as { id, name, slug }}
    <li>
      <a href="{base}/author/{slug}">
        <img src="{base}/common/assets/authors/{id}.jpg" alt="headshot of {name}" />
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
    padding: 0;
    gap: 32px;
    margin-bottom: 32px;
  }

  li {
    max-width: 10.1em;
    line-height: 1.25;
    transition: transform calc(var(--1s) * 0.25);
    color: var(--color-fg);
  }

  li:hover img {
    transform: rotate(var(--left-tilt)) scale(1.05);
  }

  a {
    padding: 0;
    color: var(--color-fg);
  }

  li:hover a {
    color: var(--color-link-hover);
  }

  img {
    margin-bottom: 0.25em;
    transition: transform calc(var(--1s) * 0.25);
  }

  span {
    font-family: var(--sans);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-small);
    display: inline-block;
    padding-top: 6px;
    text-decoration: underline 2px;
  }
</style>
