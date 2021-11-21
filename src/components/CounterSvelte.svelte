<script>
  import {
    counter,
    incrementCounter,
    decrementCounter,
  } from "../stores/counter.js";
</script>

<div class="pb-4">
  <div class="children">
    <slot />
  </div>
  <div class="counter flex flex-row">
    <button
      class="py-2 px-4 bg-red-200 hover:bg-red-400 rounded-xl"
      on:click={decrementCounter}>-</button
    >
    <pre class="py-2 mx-4">{ $counter }</pre>
    <button
      class="py-2 px-4 bg-blue-200 hover:bg-blue-400 rounded-xl"
      on:click={incrementCounter}>+</button
    >
  </div>
</div>
