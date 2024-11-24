<script>
	let score = $state(0);
	let clickPower = $state(1);
	let upgradePrice = $state(50);
	let featuresUnlocked = $state([]);
	let autoclickPower = $state(0);
	let autoUpgradePrice = $state(500);

	let code = $derived.by(() => {
		if (featuresUnlocked.includes(1)) {
			return `// click v0.1
// by Mae Moon
// TODO: add saving

function click() {
    score += ${clickPower};
    // TODO: add new stuff
}

function upgrade() {
    if (score >= ${upgradePrice}) {
        score -= ${upgradePrice};
        clickPower += 1;
        upgradePrice *= 2;
    }
}
    
function upgradeAuto() {
    if (score >= ${autoUpgradePrice}) {
        score -= ${autoUpgradePrice};
        autoclickPower += 1;
        autoUpgradePrice *= 3;
    }
}
    
function autoclick() {
    score += ${autoclickPower};
}

setInterval(autoclick, 1000);`;
		}
		if (featuresUnlocked.includes(0)) {
			return `// click v0.1
// by Mae Moon
// TODO: add saving

function click() {
    score += ${clickPower};
    if (score >= 300) {
        unlockNewFeature();
    }
}

function upgrade() {
    if (score >= ${upgradePrice}) {
        score -= ${upgradePrice};
        clickPower += 1;
        upgradePrice *= 2;
    }
}`;
		}
		return `// click v0.1
// by Mae Moon
// TODO: add saving

function click() {
    score += 1;
    if (score >= 25) {
        unlockNewFeature();
    }
}`;
	});

	function click() {
		score += clickPower;
		if (score >= 25 && !featuresUnlocked.includes(0)) {
			featuresUnlocked = [...featuresUnlocked, 0];
		}
		if (score >= 300 && !featuresUnlocked.includes[1]) {
			featuresUnlocked = [...featuresUnlocked, 1];
		}
	}

	function upgrade() {
		if (score >= upgradePrice) {
			score -= upgradePrice;
			clickPower += 1;
			upgradePrice *= 2;
		}
	}

	function upgradeAuto() {
		if (score >= autoUpgradePrice) {
			score -= autoUpgradePrice;
			autoclickPower += 1;
			autoUpgradePrice *= 3;
		}
	}

	function autoclick() {
		score += autoclickPower;
	}

	setInterval(autoclick, 1000);
</script>

<h1>{score == 0 ? 'Click' : score}</h1>

<div class="buttons">
	<button class="button" onclick={click}>click();</button>
	{#if featuresUnlocked.includes(0)}
		<button class="button" onclick={upgrade}>upgrade();</button>
	{/if}
	{#if featuresUnlocked.includes(1)}
		<button class="button" onclick={upgradeAuto}>upgradeAuto();</button>
	{/if}
</div>
<div class="code-block">
	<div class="code-header">
		<span class="file-name">game.js</span>
	</div>
	<code>{code}</code>
</div>

<style>
	.buttons {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		margin: 1em 0;
	}

	.code-block {
		background-color: var(--color-fg-1);
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		margin: 0;
		padding: 0;
		color: var(--color-bg);
		font-family: monospace;
		font-size: 1rem;
		line-height: 1.5;
		overflow-x: auto;
	}

	.code-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		background-color: rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.file-name {
		font-size: 0.9rem;
		opacity: 0.8;
	}

	code {
		display: block;
		padding: 1.5rem;
		white-space: pre;
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
