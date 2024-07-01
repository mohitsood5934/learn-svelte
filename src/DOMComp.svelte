<!-- DOM Events -->
<script>
    function clickMe(e) {
        console.log(e);
        alert("Button clicked");
    }

    function onInput(e) {
        console.log(e, "on input");
    }

    function onChange(e) {
        console.log(e, "on change");
    }

    function onKeyPress(e) {
        console.log(e.key, e, "key pressed");
    }

    function handleSubmit(e) {
        console.log("e", "submit form");
    }
</script>

<button on:click|once ={clickMe}>Click Me</button>
<input type="range" on:input={onInput} on:change={onChange} />
<svelte:window on:keypress={onKeyPress} />
<form on:submit|preventDefault|stopPropagation={handleSubmit}>
    <button type="submit">Submit Form</button>
</form>
