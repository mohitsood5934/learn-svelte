<!-- Binding variable to input -->
<script>
    let name = "Ash";
    let disabled = false;
    let fontSize = 30;
</script>

<h1>Hello Svelte Developer !</h1>
<h2>{name}</h2>
<input type="text" bind:value={name} />
<button {disabled}>Click me</button>
<h1>Font Size : {fontSize}px</h1>
<input type="range" bind:value={fontSize} />
<h2 style="font-size: {fontSize}px;">Mohit</h2>
