<script>
    function calculateTotal(values) {
        return Object.values(values).reduce((total, num) => total + num, 0);
    }
    let { data } = $props();
    let sortedInstances = $derived(Object.entries(data.counts).sort(([, a], [, b]) => b - a));
</script>

<h1>Logiverse stats</h1>
<br>
<h2>The <a href="https://logiverse.social">Logiverse</a> currently has {calculateTotal(data.counts)} users</h2>
{#each sortedInstances as [instance, count]}
    <h3>{instance} - {count}</h3>
{/each}

<style>
    a {
        font-size: 1.5rem;
    }
</style>