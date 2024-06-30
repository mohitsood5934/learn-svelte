<script>
    export let myId = 151288;
    setInterval(() => {
        if(myId === 151288) {
            myId = 151200;
        } else {
            myId += 1;
        }
    },10)
</script>