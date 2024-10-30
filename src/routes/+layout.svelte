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
	<div id="page">
		<aside>
			<a href="/">home</a>
			<a href="/blog">blog</a>
		</aside>
		<main in:blur={{ duration: 200, delay: 200 }} out:blur={{ duration: 200 }}>
			{@render children?.()}
		</main>
	</div>
{/key}

<style>
	#page {
		display: flex;
		flex-shrink: 1;
	}
	aside {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 2em;
		flex-basis: 15%;
	}
	main {
		padding: 2em;
		flex-basis: 50%;
	}
</style>