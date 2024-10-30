<script>
	import { fade } from 'svelte/transition';
	let { data } = $props();
</script>

<svelte:head>
	<title>Mae Moon</title>
</svelte:head>

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
	{#each data.posts.slice(0, 8) as post}
		<li transition:fade>
			<a href={'/blog/post/' + post.path}>
				{post.meta.title}
			</a>
		</li>
	{/each}
	<a href="/blog"><strong>see more -></strong></a>
</ul>