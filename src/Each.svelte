<script>
  let colorList = ["red", "green", "blue"];
  let color = '';

  setTimeout(() => {
    colorList = [...colorList, 'pink'];

  },200)

  function addColorBtnHandler() {
    if(color !== '') {
        colorList = [...colorList, color];
    color = '';
    alert('Color added to color list');
    } else {
        alert()
    }
  }
</script>

<ul>
  {#each colorList as color, index (color)}
    <li>{index + 1}{color}</li>
  {/each}
</ul>

<h2>Color entered: ${color}</h2>
<input type="text" bind:value={color} />
<button on:click={addColorBtnHandler}>Add Color</button>
