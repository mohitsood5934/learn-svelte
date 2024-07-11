<!-- readable stores -->
<script>
  import store from "./stores/GeoLocation.Store";
  const unsub = store.subscribe((info) => {
    console.log(info, "store info");
  });
  console.log(unsub, 'unsub returned func');
</script>
