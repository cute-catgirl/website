<script>
	import '$lib/global.css';
	import { blur } from 'svelte/transition';
	export let data;

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
 
	inject({ mode: dev ? 'development' : 'production' });
</script>

{#key data.currentRoute}
	<main in:blur={{ duration: 200, delay: 200 }} out:blur={{ duration: 200 }}>
		<slot />
	</main>
{/key}
