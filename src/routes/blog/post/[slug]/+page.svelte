<script>
	let { data } = $props();
	let dateString = data.date.replaceAll('-', '/');
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article>
	<h1>{data.title}</h1>
	<h2>{dateString}</h2>
	<br />
	<data.content />
</article>
<a href="..">Back</a>

<style>
	article {
		padding-bottom: 1em;
	}

	h2 {
		font-size: 1.2em;
	}
</style>
