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
  import GeoLocation from "./GeoLocation.svelte";
  import countStore from "./stores/count.store";
  import customCountStore from "./stores/custom.count.store";
  import {
    storeOne,
    storeTwo,
    storeSumEven,
    storeOneEven,
  } from "./stores/derived.store";
  import { onDestroy } from "svelte";
  import ContactList from "./ContactList.svelte";
  import Action from "./Action.svelte";
  import Slot from "./Slot.svelte";
  import DraggableSlot from "./DraggableSlot.svelte";

  function onFormSubmit(e) {
    console.log(e, "event detail");
    const { name, age } = e.detail;
    console.log(name, age, "name & age");
  }

  function customEvent(e) {
    console.log(e.detail.message, "this is a message");
  }
  let show = false;

  // setTimeout(() => {
  //   countStore.set(2000);
  // },2000)

  function add() {
    // writable store
    countStore.update((n) => {
      return n + 1;
    });
  }

  function minus() {
    // writable store
    countStore.update((n) => {
      return n - 1;
    });
  }

  setTimeout(() => {
    countStore.update((n) => {
      return n + 300;
    });
  }, 2000);

  const unsub = countStore.subscribe((n) => {
    console.log(n, "count store");
  });

  onDestroy(() => {
    unsub();
  });
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

  <h2>Readable Store</h2>
  <GeoLocation />

  <hr />
  <h2>Writable Store</h2>
  <h3>{$countStore}</h3>
  <button on:click={add}>+</button>
  <button on:click={minus}>-</button>
  <hr />
  <h2>Custom Store</h2>
  <h3>{$customCountStore}</h3>
  <button on:click={customCountStore.addOne}>+</button>
  <button on:click={customCountStore.minusOne}>-</button>
  <button on:click={customCountStore.multiplyByThree}>3 * </button>
  <hr />
  <h2>Derived Store</h2>
  <h2>Sum of store is even: {$storeSumEven}</h2>
  <h3>Store One {$storeOne}</h3>
  <input type="range" bind:value={$storeOne} min="0" max="10" />
  <h3>Store Two {$storeTwo}</h3>
  <input type="range" bind:value={$storeTwo} min="0" max="10" />
  <h3>Store One Even {$storeOneEven}</h3>
  <hr />
  <h3>Contact List Challenge</h3>
  <ContactList />
{/if}
<!-- 
<Action /> -->

<!-- <Slot>
  <h1 slot="top">Hello</h1>
  <div slot="bottom">
    <p>Hello , how are you doing ??</p>
  </div>
</Slot> -->

<DraggableSlot left={30} top={30} >
<h1>Hello</h1>
</DraggableSlot>
