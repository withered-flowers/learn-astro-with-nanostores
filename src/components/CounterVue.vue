<template>
  <div class="pb-4">
    <div class="children">
      <slot />
    </div>
    <div class="counter flex flex-row">
      <button
        class="py-2 px-4 bg-red-200 hover:bg-red-400 rounded-xl"
        @click="decrementCounter()"
      >
        -
      </button>
      <pre class="py-2 mx-4">{{ count }}</pre>
      <button
        class="py-2 px-4 bg-blue-200 hover:bg-blue-400 rounded-xl"
        @click="incrementCounter()"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from "@nanostores/vue";

import {
  counter,
  decrementCounter,
  incrementCounter,
} from "../stores/counter.js";

export default {
  setup() {
    const count = useStore(counter);
    return {
      count,
      incrementCounter,
      decrementCounter,
    };
  },
};
</script>

<style></style>
