<script>
  import { onMount, onDestroy } from "svelte";
  let quoteData;
  let loading = true;
  let error = false;
  onMount(() => {
    console.log("Component loaded/mounted");
    async function getQuote() {
      try {
        const url = "https://zenquotes.io/api/random";
        const response = await fetch(url);
        const [quoteInfo] = await response.json();
        quoteData = quoteInfo;
        loading = false;
      } catch (error) {
        loading = false;
        error = true;
      }
    }
    getQuote();
    return () => {
      quoteData = "";
    };
  });
  onDestroy(() => {
    console.log("Component removed/unloaded");
  });
</script>

<!-- {#if loading}
  <h2>Loading data !!!</h2>
{/if}
{#if quoteData}
  <h2>{quoteData.q}</h2>
  <h3>{quoteData.a}</h3>
  <h3>{quoteData.h}</h3>
{/if} -->
{#if loading}
  <h2>Loading...</h2>
{:else if error}
  <h2>Error in the API</h2>
{:else}
  <h2>{quoteData.q}</h2>
  <h3>{quoteData.a}</h3>
  <h3>{quoteData.h}</h3>
{/if}
