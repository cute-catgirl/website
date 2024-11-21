<script>
	import Supportbutton from '../lib/supportbutton.svelte';
	import { fade } from 'svelte/transition';
	import { theme } from './shared.svelte.js';
	let { data } = $props();
</script>

<svelte:head>
	<title>Mae Moon</title>
</svelte:head>

<h1>Mae Moon</h1>
<br />
<p>
	Hi! I'm Mae! I'm a highschool student living in Canada. I'm transfem and use she/her pronouns! I
	enjoy coding, playing video games, and music.
</p>
<br />
<ul>
	<li>
		<a href="/projects"><strong>projects -></strong></a>
	</li>
	<li>
		<a href="/experiments"><strong>experiments -></strong></a>
	</li>
	<li>
		<a href="/archive"><strong>archive -></strong></a>
	</li>
</ul>
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
<h2 class="section">Contact</h2>
<p>Discord ~ cute_catgirl</p>
<p>Email ~ maemoon@proton.me</p>
<h2 class="section">Support Me</h2>
<Supportbutton darkMode={theme.dark}></Supportbutton>
