<script>
	import '$lib/global.css';
	import { blur } from 'svelte/transition';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	let { data, children } = $props();
 
	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<svelte:head>
	<meta name="description" content="Mae Moon's personal website and blog">
</svelte:head>

{#key data.currentRoute}
	<main in:blur={{ duration: 200, delay: 200 }} out:blur={{ duration: 200 }}>
		{@render children?.()}
	</main>
{/key}

<style>
	main {
		padding: 2em;
	}
</style>