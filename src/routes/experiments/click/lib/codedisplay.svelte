<script>
	let { game } = $props();

	let code = $derived.by(() => {
		// Header
		let codeString = `// click v0.1
// by Mae Moon
// TODO: add saving\n\n`;
		// Click
		if (game.featuresUnlocked.includes(1)) {
			codeString += `function click() {
	score += ${game.clickPower};
	// TODO: add new stuff
}`
		} else if (game.featuresUnlocked.includes(0)) {
			codeString += `function click() {
	score += ${game.clickPower};
	if (score >= 300) {
        unlockNewFeature();
    }
}`
		} else {
			codeString += `function click() {
	score += ${game.clickPower};
	if (score >= 25) {
        unlockNewFeature();
    }
}`
		}

		// Click Upgrade
		if (game.featuresUnlocked.includes(0)) {
			codeString += `
function upgrade() {
    if (score >= ${game.upgradePrice}) {
        score -= ${game.upgradePrice};
        clickPower += 1;
        upgradePrice *= 2;
    }
}`
		}

		// Autoclicker
		if (game.featuresUnlocked.includes(1)) {
			codeString += `
function upgradeAuto() {
    if (score >= ${game.autoUpgradePrice}) {
        score -= ${game.autoUpgradePrice};
        autoclickPower += 1;
        autoUpgradePrice *= 3;
    }
}
    
function autoclick() {
    score += ${game.autoclickPower};
}

setInterval(autoclick, 1000);`
		}
		return codeString;
	});
</script>

<div class="code-block">
	<div class="code-header">
		<span class="file-name">game.js</span>
	</div>
	<code>{code}</code>
</div>

<style>
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
</style>
