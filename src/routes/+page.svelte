<script>
	import Supportbutton from '../lib/supportbutton.svelte';
	import { fade } from 'svelte/transition';
	import { theme } from './shared.svelte.js';
	let { data } = $props();
</script>

<h1 class="text-2xl font-bold pb-2">Mae Moon</h1>
<p>
	Hi! I'm Mae! I'm a highschool student living in Canada. I'm transfem and use she/her pronouns! I
	enjoy coding, playing video games, and music.
</p>
<ul class="py-3">
	<li>
		<a href="/projects" class="font-bold underline focus:outline outline-2 outline-nord2 outline-offset-1 dark:outline-nord4 rounded">projects -></a>
	</li>
	<li>
		<a href="/experiments" class="font-bold underline focus:outline outline-2 outline-nord2 outline-offset-1 dark:outline-nord4 rounded">experiments -></a>
	</li>
	<li>
		<a href="/archive" class="font-bold underline focus:outline outline-2 outline-nord2 outline-offset-1 dark:outline-nord4 rounded">archive -></a>
	</li>
</ul>
<h2 class="text-xl font-bold">Blog</h2>
<ul class="pb-3">
	{#each data.posts.slice(0, 8) as post}
		<li transition:fade>
			<a href={'/blog/post/' + post.path} class="underline focus:outline outline-2 outline-nord2 outline-offset-1 dark:outline-nord4 rounded">
				{post.meta.title}
			</a>
		</li>
	{/each}
	<a href="/blog" class="underline font-bold focus:outline outline-2 outline-nord2 outline-offset-1 dark:outline-nord4 rounded">see more -></a>
</ul>
<h2 class="text-xl font-bold">Contact + Socials</h2>
<div class="pb-3 leading-normal">
	<p>Discord ~ cute_catgirl</p>
	<p>Email ~ maemoon@proton.me</p>
	<a href="https://bsky.app/profile/maemoon.me">Bluesky - @maemoon.me</a>
</div>
<h2 class="text-xl font-bold pb-2">Support Me</h2>
<Supportbutton darkMode={theme.dark}></Supportbutton>
