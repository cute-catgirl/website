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
	<title>Mae Moon</title>
</svelte:head>

<main>
	<h1>Mae Moon</h1>
	<br />
	<p>Hi! I'm Mae! I'm a highschool student living in Canada. I'm transfem and use she/her pronouns! I enjoy coding, playing video games, and music.</p>
	<h2 class="section">Projects</h2>
	<p>Coming soon-ish</p>
	<h2 class="section">Experiments</h2>
	<ul>
		<li>
			<a href="https://cute-catgirl.github.io/the-universe-at-the-end-of-time/">the universe at the end of time</a>
		</li>
	</ul>
	<h2 class="section">Contact</h2>
	<p>Discord ~ cute_catgirl</p>
	<p>Email ~ maemoon@proton.me</p>
	<h2 class="section">Blog</h2>
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
	}

	li {
		list-style: none;
		padding-bottom: 0.2em;
	}
</style>
