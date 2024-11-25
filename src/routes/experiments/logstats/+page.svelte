<script>
    let { data } = $props();
    let sortedInstances = $derived(Object.entries(data.counts).sort(([, a], [, b]) => b - a));

    const milestones = [100, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 5000];

    let milestoneProgress = $derived.by(() => {
        const totalUsers = calculateTotal(data.counts);
        const nextMilestone = milestones.find(milestone => milestone > totalUsers) || milestones[milestones.length - 1];
        const previousMilestone = milestones.slice().reverse().find(milestone => milestone <= totalUsers) || 0;

        return {
            current: totalUsers,
            nextMilestone,
            previousMilestone,
            progress: ((totalUsers - previousMilestone) / (nextMilestone - previousMilestone)) * 100
        };
    });

    function calculateTotal(values) {
        return Object.values(values).reduce((total, num) => total + num, 0);
    }
</script>

<h1>Logiverse stats</h1>
<br>
<h2>
    The <a href="https://logiverse.social">Logiverse</a> currently has {calculateTotal(data.counts)} users.
</h2>
<h2>Instance stats</h2>
{#each sortedInstances as [instance, count]}
    <h3>{instance} - {count}</h3>
{/each}
<br>
<h2>Milestones</h2>
<div class="milestone-display">
    {#each milestones as milestone}
        <div class="milestone {milestone <= milestoneProgress.current ? 'completed' : ''}">
            {#if milestone <= milestoneProgress.current}
            <span>✓ </span>
            {/if}
            <span class="milestone-label">{milestone} users</span>
            {#if milestone == milestoneProgress.nextMilestone}
            <span>({milestoneProgress.progress.toFixed(2)}%)</span>
            {/if}
            <br>
        </div>
    {/each}
</div>
<style>
    a {
        font-size: 1.5rem;
    }

    span {
        font-family: 'Inter', sans-serif;
    }
</style>
