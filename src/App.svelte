<script>
    // import Fun from "./Fun.svelte";
    // import Funny from "./Funny.svelte";
    let name = "Mohit";
    let favColor = 'Red';
    let favNumber = 12;
    let fontSize = '20px';
    setTimeout(() => {
      favColor = 'blue';
      fontSize = '40px';
    }, 1000);

</script>
<h1>Hello Svelte Developer</h1>
<p style = "color: {favColor};font-size: {fontSize};">{name.toUpperCase()}</p>
<p style="font-size: {fontSize};">Fav number is {favNumber / 2}</p>
<!-- <Fun/>
<Funny /> -->