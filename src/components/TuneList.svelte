<style>
	section {
		width: 12em;
		padding: 1em;
		height: 7.5em;
	}
	div {
		height: 1.5em;
		width: 10em;
		text-align: center;
		border: 1px solid black;
		margin: 0.2em;
		padding: 0.3em;
	}
</style>

<script>
    import tunebook from "../../data/tunebook"
    import {dndzone} from 'svelte-dnd-action';

  
    function handleSort(e) {
		items = e.detail.items;
	}

    let items = [
		{id:1, title: 'I'},
		{id:2, title: 'Am'},
		{id:3, title: 'Yoda'}
	];;
</script>

<section use:dndzone={{items}} on:consider={handleSort} on:finalize={handleSort}>
    {#each items as item(item.id)}
    <div>{item.title}</div>
    {/each}
</section>