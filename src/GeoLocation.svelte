<!-- readable stores -->
<script>
  import { onDestroy } from "svelte";
  import store from "./stores/GeoLocation.Store";
//   const unsub = store.subscribe((info) => {
//     console.log(info, "store info");
//   });
//   console.log(unsub, "unsub returned func");

//   onDestroy(() => {
//     unsub();
//     console.log('unsubscribed!!');
//   })
</script>

{#if !$store.location && !$store.errorMessage}
<h2>Gathering location of the user !!!</h2>
{:else if $store.errorMessage}
<h2>Error: {$store.errorMessage}</h2>
{:else}
<h2>Latitude: {$store.lat}, Longitude: {$store.lng}</h2>
{/if}