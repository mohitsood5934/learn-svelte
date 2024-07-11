<!-- Await Template -->
<script>
  async function getQuote() {
    const url = "https://zenquotes.io/api/random";
    const response = await fetch(url);
    const [quoteInfo] = await response.json();
    return quoteInfo;
  }
  let promiseQuote = getQuote();

  function refreshQuote() {
    promiseQuote = getQuote();
  }
</script>

{#await promiseQuote}
  <h2>Loading!!!</h2>
{:then quoteInfo}
  <h2>{quoteInfo.q}</h2>
  <h3>{quoteInfo.a}</h3>
  <h3>{quoteInfo.h}</h3>
{:catch error}
  <h2>Some error occurred{error}</h2>
{/await}


<button on:click={refreshQuote}>Refresh Quote</button>