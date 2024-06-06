<script>
	export let data;
	const date = new Date(data.date);
	let dateString = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<main>
	<article>
		<h1>{data.title}</h1>
		<h2>{dateString}</h2>
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
