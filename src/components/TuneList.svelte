<script>
    import tunebook from "../../data/tunebook"
    import {dndzone} from 'svelte-dnd-action';

  
    function handleSort(e) {
		items = e.detail.items;
	}

    let items = [...tunebook];;
</script>

<section use:dndzone={{items}} on:consider={handleSort} on:finalize={handleSort}>
    {#each items as item(item.orderId)}
    <div>{item.name}</div>
    {/each}
</section>

<style>
	section {
		@apply container;
		@apply w-80;
		@apply text-red-500;
	}

	div {
		@apply container;
		@apply w-10;
		@apply h-10;
	}
	}
</style>