import { readable } from "svelte/store";

// create a readable store that allows reading by subscription
export default readable(
  { lat: undefined, lng: undefined, location: false },
  (set) => {}
);
