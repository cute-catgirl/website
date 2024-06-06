<script>
	import '$lib/global.css';
	import { fly, blur } from 'svelte/transition';
	export let data;
</script>

{#key data.currentRoute}
	<main in:blur={{ duration: 200, delay: 200 }} out:blur={{ duration: 200 }}>
		<slot />
	</main>
{/key}
