<script>
  import data from "$data/resources.csv";

  export let copy;

  const { sections } = copy;
</script>

<h1>{copy.title}</h1>

{#each sections as { hed, id }}
  <section {id}>
    <h2>{hed}</h2>
    <ul>
      {#each data.filter((d) => d.category === id) as { url, slug, title, overline, description }}
        <li>
          <a href={url} rel="external">
            <h3>{title}</h3>
            {#if description}
              <p>{description}</p>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </section>
{/each}

<section id="faq">
  <h2>FAQ</h2>
  {#each copy.faq as { question, answer }}
    <details>
      <summary>{question}</summary>
      {@html answer}
    </details>
  {/each}
</section>
