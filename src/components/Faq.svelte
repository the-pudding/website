<script>
  export let copy;
</script>

<h1>{copy.title}</h1>

<section id="intro">
  {#each copy.intro as { value }}
    <p>{@html value}</p>
  {/each}
</section>

<section id="faq">
  {#each copy.faq as { id, question, answer }}
    <details>
      <summary>{question}</summary>
      {#each answer as { value }}
        <p>{@html value}</p>
      {/each}
    </details>
  {/each}
</section>
