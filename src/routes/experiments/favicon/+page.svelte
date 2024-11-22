<script>
	let m = $state({ x: 0, y: 0 });
	let canvas = $state();
	let context = $state();
	let coords = $state();
	let favicon = $state();
	let color = $state();
	let link;

	// Get device pixel ratio and scale canvas accordingly
	let dpr;
	const CANVAS_SIZE = 400;
	const colors = [
		{
			name: 'red',
			color: '#ff0000'
		},
		{
			name: 'orange',
			color: '#FF8C00'
		},
		{
			name: 'yellow',
			color: '#FFFF00'
		},
		{
			name: 'lime',
			color: '#00FF00'
		},
		{
			name: 'cyan',
			color: '#00FFFF'
		},
		{
			name: 'blue',
			color: '#0000FF'
		},
		{
			name: 'magenta',
			color: '#FF00FF'
		},
		{
			name: 'purple',
			color: '#800080'
		},
        {
            name: 'black',
            color: "#000000"
        }
	];

	$effect(() => {
		dpr = window.devicePixelRatio || 1;
		// Set canvas size accounting for device pixel ratio
		canvas.width = CANVAS_SIZE * dpr;
		canvas.height = CANVAS_SIZE * dpr;

		// Scale canvas display size using CSS
		canvas.style.width = `${CANVAS_SIZE}px`;
		canvas.style.height = `${CANVAS_SIZE}px`;

		// Scale context to match device pixel ratio
		context = canvas.getContext('2d');
		context.scale(dpr, dpr);

		// Initial canvas setup
		context.fillStyle = '#ffffff';
		context.beginPath();
		context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
	});

	function onpointerdown(event) {
		// Convert coordinates to account for DPI scaling
		const rect = canvas.getBoundingClientRect();
		const x = (event.clientX - rect.left) * (canvas.width / rect.width);
		const y = (event.clientY - rect.top) * (canvas.height / rect.height);

		coords = { x: x / dpr, y: y / dpr };

		context.fillStyle = color;
		context.beginPath();
		context.arc(coords.x, coords.y, 20 / 2, 0, 2 * Math.PI);
		context.fill();
		link.href = canvas.toDataURL('image/x-icon');
	}

	function onpointermove(event) {
		const previous = coords;

		// Convert coordinates to account for DPI scaling
		const rect = canvas.getBoundingClientRect();
		const x = (event.clientX - rect.left) * (canvas.width / rect.width);
		const y = (event.clientY - rect.top) * (canvas.height / rect.height);

		coords = { x: x / dpr, y: y / dpr };
		m.x = event.clientX;
		m.y = event.clientY;

		if (event.buttons === 1 && previous) {
			event.preventDefault();

			context.strokeStyle = color;
			context.lineWidth = 20;
			context.lineCap = 'round';
			context.beginPath();
			context.moveTo(previous.x, previous.y);
			context.lineTo(coords.x, coords.y);
			context.stroke();
		}
		link.href = canvas.toDataURL('image/x-icon');
	}

	function onpointerleave() {
		coords = null;
		link.href = canvas.toDataURL('image/x-icon');
	}

	function clearCanvas() {
		context.fillStyle = '#ffffff';
		context.beginPath();
		context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
		link.href = canvas.toDataURL('image/x-icon');
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} bind:this={link} />
</svelte:head>

<h1>Favicon</h1>
<br />
<div id="canvasContainer">
	<canvas
		bind:this={canvas}
		{onpointermove}
		{onpointerleave}
		{onpointerdown}
		width="300"
		height="300"
	></canvas>
	<div id="buttons">
		{#each colors as c}
			<button
				onclick={() => {
					color = c.color;
				}}
				style="background-color: {c.color}"
				aria-label={c.name}
			></button>
		{/each}
		<button onclick={clearCanvas} aria-label="Clear">X</button>
	</div>
</div>

<style>
	button {
		display: block;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		font-size: 1.2rem;
		background-color: var(--color-bg-1);
		color: var(--color-fg-2);
		border: 1px solid var(--color-fg-1);
		cursor: pointer;
		aspect-ratio: 1;
		flex: 1;
	}

	button:hover {
		background-color: var(--color-bg-2);
	}

	#buttons {
		display: flex;
		width: 400px;
		gap: 2px;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		margin: 0;
	}

    #canvasContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 2px;
    }

	canvas {
        box-sizing: border-box;
		border: 3px solid var(--color-fg-1);
		user-select: none;
	}
</style>
