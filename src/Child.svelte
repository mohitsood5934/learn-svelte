<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function handleClick(e) {
        dispatch('custom_event', {
            message: Math.random(),
        })
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleClick} />


<style>
div {
    width: 90%;
    height: 300px;
    margin-top: 30px;
    background-color: aquamarine;
}
</style>