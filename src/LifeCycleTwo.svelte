<script>
  import { onDestroy, onMount, beforeUpdate, afterUpdate } from "svelte";

  let numbers = [];
  let unOrderedListElement;

  onMount(() => {
    const intervalId = setInterval(() => {
      numbers = [...numbers, numbers.length + 1];
    }, 1000);

    return () => {
      console.log("Also destroyed!!!");
      clearInterval(intervalId);
    };
  });

  beforeUpdate(() => {
    // it runs before unmount
    console.log("Runs before update happened!!!");
    if (unOrderedListElement) {
      unOrderedListElement.scroll(0, unOrderedListElement.scrollHeight);
    }
  });

  afterUpdate(() => {
    console.log("Runs after update happened!!!");
  });

  onDestroy(() => {
    console.log("Runs after component unloaded / unmounted!!!");
  });
</script>

<ul bind:this={unOrderedListElement}>
  {#each numbers as number (number)}
    <li>{number}</li>
  {/each}
</ul>

<style>
  ul {
    max-height: 100px;
    border: 1px solid black;
    overflow: scroll;
  }
</style>
