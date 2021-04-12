<script>
    import tunebook from "../../data/tunebook"
</script>

<ol>
    {#each tunebook as {name, orderId}}
    <li class="hover:text-red-900">{orderId}. {name}</li>
    {/each}
</ol>

