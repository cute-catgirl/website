<script>
	let { data } = $props();
	let dateString = data.date.replaceAll('-', '/');
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<main>
	<article>
		<h1>{data.title}</h1>
		<h2>{dateString}</h2>
		<br />
		<data.content />
	</article>
	<a href="..">Back</a>
</main>

<style>
	main {
		margin: 0 auto;
		max-width: 750px;
		padding: 2em;
	}

	article {
		padding-bottom: 1em;
	}
</style>
