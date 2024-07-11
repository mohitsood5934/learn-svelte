<script>
  import Team from "./Team.svelte";
  let redScore = 20;
  let blueScore = 20;
  let winingText = "";

  $: redWon = blueScore === 0;
  $: blueWon = redScore === 0;
  $: gameOver = redWon || blueWon;

  $: if (blueWon) {
    winingText = "Blue won !!!";
  } else {
    winingText = "Red won";
  }

  function newGame() {
    redScore = 20;
    blueScore = 20;
  }
</script>

<div class="row mt-2">
  <div class="col">
    <h1 class="text-center">MTG Counter</h1>
  </div>
</div>

<div class="row">
  <Team team="Red" bind:score={redScore} {gameOver} />
  <Team team="Blue" bind:score={blueScore} {gameOver} />
</div>
{#if !gameOver}
  <div class="row mt-3">
    <div class="col">
      <button on:click={newGame} class="btn btn-warning w-100"
        >Reset game</button
      >
    </div>
  </div>
{:else}
  <div class="row">
    <div class="col">
      <h2>{winingText}</h2>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <button on:click={newGame} class="btn btn-success w-100">New game</button>
    </div>
  </div>
{/if}
