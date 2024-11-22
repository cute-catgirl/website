<script>
    let m = $state({ x: 0, y: 0 });
    let canvas = $state();
    let context = $state();
    let coords = $state();
    let favicon = $state();
    let link;
    $effect(() => {
		context = canvas.getContext('2d');
        context.fillStyle = "#ffffff";
        context.beginPath();
        context.fillRect(0, 0, canvas.width, canvas.height);
	});

    function onpointerdown(event) {
		coords = { x: event.offsetX, y: event.offsetY };

		context.fillStyle = "#000000";
		context.beginPath();
		context.arc(coords.x, coords.y, 20 / 2, 0, 2 * Math.PI);
		context.fill();
        link.href = canvas.toDataURL("image/x-icon");
	}

    function onpointermove(event) {
        const previous = coords;
        coords = { x: event.offsetX, y: event.offsetY };
        m.x = event.clientX;
        m.y = event.clientY;
        if (event.buttons === 1) {
			event.preventDefault();

			context.strokeStyle = "#000000";
			context.lineWidth = 20;
			context.lineCap = 'round';
			context.beginPath();
			context.moveTo(previous.x, previous.y);
			context.lineTo(coords.x, coords.y);
			context.stroke();
		}
        link.href = canvas.toDataURL("image/x-icon");
    }

    function onpointerleave() {
        coords = null;
        link.href = canvas.toDataURL("image/x-icon");
    }

    function clearCanvas() {
        context.fillStyle = "#ffffff";
        context.beginPath();
        context.fillRect(0, 0, canvas.width, canvas.height);
        link.href = canvas.toDataURL("image/x-icon");
    }
</script>

<svelte:head>
    <link rel="icon" href={favicon} bind:this={link}/>
</svelte:head>

<h1>Favicon</h1>
<br>
<canvas bind:this={canvas} {onpointermove} {onpointerleave} {onpointerdown} width="300" height="300"></canvas>
<br>
<button onclick={clearCanvas}>Clear</button>
<style>
    button {
        padding: 0.5em;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 1.2rem;
        background-color: var(--color-bg-1);
        color: var(--color-fg-2);
        border: 1px solid var(--color-fg-1);
        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-bg-2);
    }

    canvas {
        border: 3px solid var(--color-fg-1);
        user-select: none;
    }
</style>