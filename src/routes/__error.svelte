<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        message: error.message
      }
    };
  }
</script>

<script>
  export let status;
  export let message;
</script>

<h1>{status}</h1>
<h2>{message}</h2>
