<!-- <script>
  import Fun from "./Fun.svelte";
  import Funny from "./Funny.svelte";
  let name = "Mohit";
  let favColor = 'Red';
  let favNumber = 12;
  let fontSize = '20px';
  setTimeout(() => {
    favColor = 'blue';
    fontSize = '40px';
  }, 1000);
  import Funny from "./Funny.svelte";
  import Fun from "./Fun.svelte";
    import MissionPossible from "./MissionPossible.svelte";
    import Style from "./Style.svelte";
    import Cool from "./Cool.svelte";
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
</script> -->

<!-- 
<h1>Hello Svelte Developer</h1>
<p style = "color: {favColor};font-size: {fontSize};">{name.toUpperCase()}</p>
<p style="font-size: {fontSize};">Fav number is {favNumber / 2}</p>
<Fun/>
<Funny />
 <h1>Font Size: {size}</h1> 
 <Funny fontSize={size} />  
Parent to child 
<h1>My Id: {myId}</h1>
 <Fun bind:myId={myId} />
<Fun bind:myId />  
<MissionPossible color={color}/> 
<Style />
 <Cool /> -->

<script>
  import ColorPicker from "./ColorPicker.svelte";
  import Container from "./Container.svelte";
  import DomComp from "./DOMComp.svelte";
  import Form from "./Form.svelte";
  import Slider from "./Slider.svelte";
  import Child from "./Child.svelte";
  import Reactive from "./Reactive.svelte";
  import Template from "./Template.svelte";
  import Each from "./Each.svelte";
  import Await from "./Await.svelte";
  import MtgCounter from "./MtgCounter.svelte";
  import LifeCycle from "./LifeCycle.svelte";
  import LifeCycleTwo from "./LifeCycleTwo.svelte";
  import Stores from "./Stores.svelte";

  function onFormSubmit(e) {
    console.log(e, "event detail");
    const { name, age } = e.detail;
    console.log(name, age, "name & age");
  }

  function customEvent(e) {
    console.log(e.detail.message, 'this is a message');
  }
  let show = false;
</script>

<!-- <Slider />
<h2 style="text-align: center;">Color Picker</h2>
<ColorPicker /> -->
<!-- <DomComp /> -->
<!-- <Form on:form_submit={onFormSubmit} /> -->
<!-- <Container
  on:form_submit={onFormSubmit}
  on:click={(e) => {
    console.log("button clicked!");
  }}
/>

<Child on:custom_event={customEvent}/> -->
<!-- <Reactive /> -->
<!-- <Template /> -->
<!-- <Each /> -->
<!-- <Await /> -->
<!-- <MtgCounter /> -->

<input type="checkbox" bind:checked={show} />
{#if show}
<!-- <LifeCycle /> -->
<!-- <LifeCycleTwo /> -->
<Stores />
{/if}