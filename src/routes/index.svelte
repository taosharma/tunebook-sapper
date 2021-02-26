<script>
  let count = 0;

  function changeCount(event) {
    switch (event) {
      case "INCREMENT":
        count++;
        break;
      case "DECREMENT":
        count--;
        break;
      default:
        console.log("No event");
    }
  }
</script>

<section>
  <button on:click={() => changeCount("INCREMENT")}>Increment</button>
  <p>Count: {count}</p>
  <button on:click={() => changeCount("DECREMENT")}>Decrement</button>
</section>

<style lang="postcss">
  p {
    @apply text-red-500;
  }
</style>
