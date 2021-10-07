<script context="module">
  export function load({ page, error, status }) {
    return {
      props: {
        page,
        status,
        message: error.message
      }
    };
  }
</script>

<script>
  export let page;
  export let status;
  export let message;
</script>

<h1>{status}</h1>
<h2>The page you are looking for, https://{page.host}{page.path} could not be found.</h2>
