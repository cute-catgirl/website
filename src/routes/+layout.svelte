<script>
	import Breadcrumb from '../lib/breadcrumb.svelte';
	import "../app.css";
	import { theme } from './shared.svelte.js';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';
	let { data, children } = $props();

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
	onMount(() => {
		document.documentElement.className = theme.dark ? 'dark' : '';
	});
</script>

<svelte:head>
	<title>Mae Moon</title>
	<meta name="description" content="Mae Moon's personal website and blog" />
	{#if data.currentRoute != "/experiments/favicon"}
	<link rel="icon" href="/favicon.svg" />
	{/if}
</svelte:head>

<div id="page" class="bg-slate-100 w-screen min-h-screen flex justify-center items-start bg-nord6 dark:bg-nord1">
	{#key data.currentRoute}
		<main class="w-1/2 h-full p-4 text-nord0 dark:text-nord6 leading-snug">
			<Breadcrumb path={data.currentRoute}></Breadcrumb>
			{@render children?.()}
		</main>
		<button
			class="fixed bottom-4 right-4 text-3xl flex justify-center items-center w-12 h-12 hover:-translate-y-1 transition-transform focus:outline outline-2 outline-nord2 dark:outline-nord4 rounded inline-block"
			aria-label="Switch theme"
			id="themebutton"
			onclick={() => {
				theme.dark = !theme.dark;
				document.body.className = theme.dark ? 'dark' : '';
			}}
		>
			{#if theme.dark}
				<i class="fa-solid fa-moon text-nord6"></i>
			{:else}
				<i class="fa-solid fa-sun text-nord0"></i>
			{/if}
		</button>
	{/key}
</div>