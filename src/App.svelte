<script>
  // import Fun from "./Fun.svelte";
  // import Funny from "./Funny.svelte";
  // let name = "Mohit";
  // let favColor = 'Red';
  // let favNumber = 12;
  // let fontSize = '20px';
  // setTimeout(() => {
  //   favColor = 'blue';
  //   fontSize = '40px';
  // }, 1000);
  import Funny from "./Funny.svelte";
  import Fun from "./Fun.svelte";
    import MissionPossible from "./MissionPossible.svelte";
  let size = 150;
  setInterval(() => {
    if(size === 150) {
      size = 5;
    } else {
      size +=1;
    }

  },10)
  let myId = 151288;
  let color = 'greenish';
</script>

<!-- <h1>Hello Svelte Developer</h1>
<p style = "color: {favColor};font-size: {fontSize};">{name.toUpperCase()}</p>
<p style="font-size: {fontSize};">Fav number is {favNumber / 2}</p> -->
<!-- <Fun/>
<Funny /> -->
<h1>Font Size: {size}</h1>
<Funny fontSize={size} />  <!--Parent to chile-->
<h1>My Id: {myId}</h1>
<Fun bind:myId={myId} />  <!--child to parent-->
<!-- <Fun bind:myId />   -->
<MissionPossible color={color}/>