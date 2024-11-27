<script>
	import CodeDisplay from "/lib/codeDisplay.svelte";

	let game = $state({
		score: 0,
		clickPower: 1,
		upgradePrice: 50,
		featuresUnlocked: [],
		autoclickPower: 0,
		autoUpgradePrice: 500
	})

	function click() {
		game.score += game.clickPower;
		if (game.score >= 25 && !game.featuresUnlocked.includes(0)) {
			game.featuresUnlocked = [...game.featuresUnlocked, 0];
		}
		if (game.score >= 300 && !game.featuresUnlocked.includes[1]) {
			game.featuresUnlocked = [...game.featuresUnlocked, 1];
		}
	}

	function upgrade() {
		if (game.score >= game.upgradePrice) {
			game.score -= game.upgradePrice;
			game.clickPower += 1;
			game.upgradePrice *= 2;
		}
	}

	function upgradeAuto() {
		if (game.score >= game.autoUpgradePrice) {
			game.score -= game.autoUpgradePrice;
			game.autoclickPower += 1;
			game.autoUpgradePrice *= 3;
		}
	}

	function autoclick() {
		game.score += game.autoclickPower;
	}

	setInterval(autoclick, 1000);
</script>

<h1>{game.score == 0 ? 'Click' : game.score}</h1>

<div class="buttons">
	<button class="button" onclick={click}>click();</button>
	{#if game.featuresUnlocked.includes(0)}
		<button class="button" onclick={upgrade}>upgrade();</button>
	{/if}
	{#if game.featuresUnlocked.includes(1)}
		<button class="button" onclick={upgradeAuto}>upgradeAuto();</button>
	{/if}
</div>
<CodeDisplay {game}></CodeDisplay>

<style>
	.buttons {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		margin: 1em 0;
	}

	.button {
		padding: 1rem 2rem;
		font-size: 1.2rem;
		font-family: monospace;
		background-color: var(--color-fg-1);
		color: var(--color-bg);
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.button:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
	}

	.button:active {
		transform: translateY(0);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
