import { writable } from "svelte/store";
// custom store
const store = writable(4);

export default {
  subscribe: store.subscribe,
  addOne: () => {
    store.update((n) => n + 1);
  },
  minusOne: () => {
    store.update((n) => n - 1);
  },
  set: (n) => {
    if (n > 0) {
        store.set(n);
    }
  },
  multiplyByThree: () => {
    store.update((n) => n * 3);
  },

};
