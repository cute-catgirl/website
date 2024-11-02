<script>
	import Breadcrumb from '../lib/breadcrumb.svelte';
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

<div id="page">
	{#key data.currentRoute}
	<aside>
		<a href="/" class:active={data.currentRoute == "/"}>home</a>
		<a href="/blog" class:active={data.currentRoute == "/blog"}>blog</a>
	</aside>
	<main>
		{@render children?.()}
	</main>
	{/key}
</div>

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

	.active::before {
		content: "* ";
	}
</style>