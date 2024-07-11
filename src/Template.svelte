<!-- learning if statements -->
<script>
  let colorName = "Red";
  let isChecked = true;
</script>

{#if colorName.toLowerCase() === "blue"}
  <h2>Blue</h2>
{:else if colorName.toLowerCase() === "red"}
  <h2>Red</h2>
{:else}
  <h2>No Specified color</h2>
{/if}
<input type="text" bind:value={colorName} />

{#if isChecked}
  <h2>Checkbox is checked</h2>
{:else}
  <h2>Checkbox is not checked</h2>
{/if}
<input type="checkbox" bind:checked={isChecked} />
