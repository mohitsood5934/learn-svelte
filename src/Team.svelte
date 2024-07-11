<script>
  export let team;
  export let score;
  export let gameOver;

  function add() {
    score += 1;
  }

  function minus() {
    score -= 1;
  }
</script>

<div style="border: dashed {team.toLowerCase()} 5px;" class="container">
  <h2 class:text-danger={team === "Red"} class:text-primary={team === "Blue"}>
    Team {team.toLowerCase()}: {score}
  </h2>
  <button class="btn btn-success" on:click={add} disabled={gameOver}>+</button>
  <button class="btn btn-danger" on:click={minus} disabled={gameOver}>-</button>
</div>

<style>
  div.col {
    padding: 20px;
    text-align: center;
  }
</style>
