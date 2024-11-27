<script>
	let { game } = $props();

	let code = $derived.by(() => {
		// Header
		let codeString = `// click v0.1\n// by Mae Moon\n// TODO: add saving\n\n`;
		// Click
		if (game.featuresUnlocked.includes(1)) {
			codeString += `function click() {\n    score += ${game.clickPower};\n    // TODO: add new stuff\n}`;
		} else if (game.featuresUnlocked.includes(0)) {
			codeString += `function click() {\n    score += ${game.clickPower};\n    if (score >= 300) {\n        unlockNewFeature();\n    }\n}`;
		} else {
			codeString += `function click() {\n    score += ${game.clickPower};\n    if (score >= 25) {\n        unlockNewFeature();\n    }\n}`;
		}

		// Click Upgrade
		if (game.featuresUnlocked.includes(0)) {
			codeString += `\n\nfunction upgrade() {\n    if (score >= ${game.upgradePrice}) {\n        score -= ${game.upgradePrice};\n        clickPower += 1;\n        upgradePrice *= 2;\n    }\n}`;
		}

		// Autoclicker
		if (game.featuresUnlocked.includes(1)) {
			codeString += `\n\nfunction upgradeAuto() {\n    if (score >= ${game.autoUpgradePrice}) {\n        score -= ${game.autoUpgradePrice};\n        autoclickPower += 1;\n        autoUpgradePrice *= 3;\n    }\n}\n\nfunction autoclick() {\n    score += ${game.autoclickPower};\n}\n\nsetInterval(autoclick, 1000);`;
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
