<script>
  import { ascending } from "d3";
  export let cohort;
  cohort.sort((a, b) => ascending(a.name, b.name));
</script>

<h2>The Pudding's <a href="https://pudding.cool/career/cohort/">2024 Cohort</a></h2>
<ul>
  {#each cohort as { id, name, slug }}
    <li>
      <a href="/author/{slug}">
        <img src="/common/assets/authors/{id}.jpg" alt="headshot of {name}" />
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
    max-width: 10.1em;
    margin-right: 2em;
    margin-bottom: 2em;
    line-height: 1.25;
  }

  a {
    padding: 0;
  }

  img {
    margin-bottom: 0.25em;
  }
</style>
