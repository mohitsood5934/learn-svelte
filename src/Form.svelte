<script>
    let name = 'blue';
    let age = 33;
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function onSubmit(e) {
        console.log(e);
        // first arg -> name of event, second_arg -> data you want to submit
        dispatch('form_submit', {
            name,
            age,
        });
    }
</script>

<form on:submit|preventDefault|stopPropagation={onSubmit}>
    <label for="name">Name</label>
    <input type="text" bind:value={name} id="name"  />
    <label for="age">Age</label>
    <input type="number" bind:value={age} id="age"  />
    <button type="submit">Submit</button>
</form>
<button>Click me</button>