<script>
	let { data } = $props();
	let dateString = data.date.replaceAll('-', '/');
</script>

<h1 class="text-xl font-bold">{data.title}</h1>
<h2>{dateString}</h2>
<br />
<article class="prose prose-h1:text-xl prose-a:underline">
	<data.content />
</article>
<a href=".." class="underline">Back</a>