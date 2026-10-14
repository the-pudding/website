<script>
  import Intro from "$components/studio/Intro.svelte";
  import Projects from "$components/studio/Projects.svelte";
  import Contact from "$components/studio/Contact.svelte";

  let { copy, general, projects } = $props();
</script>

<article class="studio">
  <Intro {copy} />
  <Projects {projects} />
  <Contact {general} />
</article>

<style>
  .studio {
    --studio-gray: #657175;
    --studio-gray-light: #c6d0d7;
    --color-yellow-dark: #f1a51f;
    --color-red-dark: #dd4467;
    --color-green-dark: #2c9d6f;
    --color-blue-dark: #4560c2;
    --color-purple-dark: #815dc7;
    --color-gray-dark: #8c979c;
    --color-yellow-darkest: #5e5041;
    --color-red-darkest: #671c4a;
    --color-green-darkest: #245242;
    --color-blue-darkest: #1d357a;
    --color-purple-darkest: #382953;
    --color-gray-darkest: #40484d;
  }
</style>
