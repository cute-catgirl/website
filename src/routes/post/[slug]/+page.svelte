<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<main>
	<article>
		<h1>{data.title}</h1>
		<h2>{data.date}</h2>
		<br />
		<svelte:component this={data.content} />
	</article>
	<a href="..">Back</a>
</main>

<style>
	main {
		margin: 0 auto;
		max-width: 750px;
		padding: 2em;
	}
</style>
