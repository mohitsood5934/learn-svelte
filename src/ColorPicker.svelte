<script>
    let red = 126;
    let green = 79;
    let blue = 0;
</script>

<div>
    <span>Red {red}</span>
    <input type="range" bind:value={red} min={0} max={255} />
    <span>Green {green}</span>
    <input type="range" bind:value={green} min={0} max={255} />
    <span>Blue {blue}</span>
    <input type="range" bind:value={blue} min={0} max={255} />
</div>

<div
    style="background-color: rgb({red},{green},{blue}); height: 100px; width: 100px;"
></div>
