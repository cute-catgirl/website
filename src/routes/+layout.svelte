<script>
	import Breadcrumb from '../lib/breadcrumb.svelte';
	import '$lib/global.css';
	import { blur } from 'svelte/transition';
	import { theme } from './shared.svelte.js';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';
	let { data, children } = $props();

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
	onMount(() => {
		document.body.className = theme.dark ? 'theme-dark' : 'theme-light';
	});
</script>

<svelte:head>
	<meta name="description" content="Mae Moon's personal website and blog" />
	{#if data.currentRoute != "/experiments/favicon"}
	<link rel="icon" href="/favicon.svg" />
	{/if}
</svelte:head>

<div id="page">
	{#key data.currentRoute}
		<main>
			<Breadcrumb path={data.currentRoute}></Breadcrumb>
			{@render children?.()}
		</main>
		<button
			aria-label="Switch theme"
			id="themebutton"
			onclick={() => {
				theme.dark = !theme.dark;
				document.body.className = theme.dark ? 'theme-dark' : 'theme-light';
			}}
		>
			{#if theme.dark}
				<i class="fa-solid fa-moon"></i>
			{:else}
				<i class="fa-solid fa-sun"></i>
			{/if}
		</button>
	{/key}
</div>

<style>
	#page {
		display: flex;
		justify-content: center;
		flex-shrink: 1;
	}

	/*aside {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 2em;
		flex-basis: 15%;
	}*/

	main {
		padding: 2em;
		flex-basis: 50%;
	}

	/*.active::before {
		content: '* ';
	}*/

	#themebutton {
		position: fixed;
		right: 1em;
		bottom: 1em;
		border: none;
		font-size: 2em;
		cursor: pointer;
		color: var(--color-fg-1);
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 1.5em;
		height: 1.5em;
		padding: 0;
		transition: 0.1s ease-in-out;
	}

	#themebutton:hover {
		color: var(--color-fg-2);
		transform: translate(0, -3px);
	}
</style>
