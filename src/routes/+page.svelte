<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let data;
	const date = new Date(data.posts[0].meta.date);
	let dateString = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
	let messages = [
		'This is a blog. Sometimes I write stuff.',
		'This is a blog. I write stuff here.',
		'This is a blog. Occasionally, I write stuff.',
		'This is a blog. I write stuff here when I feel like it.',
		`This is a blog. It currently has ${data.posts.length} posts.`,
		'This is a blog. Thank you for reading!',
		'This is a blog... or is it?',
		'This is a blog. It is written in Svelte and SvelteKit.',
		`This is a blog. It was last updated on ${dateString}.`,
		'This is, unsurprisingly, a blog.'
	];

	let message = "This is a blog. This message hasn't loaded yet.";

	onMount(() => {
		message = messages[Math.floor(Math.random() * messages.length)];
	});
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main>
	<h1>Blog :3</h1>
	<br />
	<p>{message}</p>
	<br />
	<ul>
		{#each data.posts as post}
			<li transition:fade>
				<a href={'/post/' + post.path}>
					{post.meta.title}
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		margin: 0 auto;
		max-width: 750px;
		padding: 2em;
	}

	li {
		list-style: none;
	}
</style>
