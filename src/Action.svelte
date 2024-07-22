<!-- Learn actions in svelte -->
<!-- Action is a function that runs when HTML element loads on the page -->

<script>
  let show = false;
  let width = 100;

  function exampleAction(node, exampleObj) {
    const { color = "", width } = exampleObj;
    console.log(color, "This is the parameter passed!!!");
    const contextFunc = (e) => {
      e.preventDefault();
      alert("Right Click");
    };
    node.addEventListener("contextmenu", contextFunc);
    node.style.backgroundColor = color;
    node.style.width = width + "px";
    return {
      destroy() {
        console.log("Destroy was called!");
        node.removeEventListener("contextmenu", contextFunc);
      },
      update({ color, width }) {
        node.style.width = width + "px";
      },
    };
  }
</script>

<input type="checkbox" bind:checked={show} />

{#if show}
  <!-- <div use:exampleAction/> -->
  <div use:exampleAction={{ color: "red", width }} />
  <input type="range" min="50" max="500" bind:value={width} />
{/if}

<style>
  div {
    height: 300px;
    width: 300px;
    border: 1px solid black;
  }
</style>
