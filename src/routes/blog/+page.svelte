<script>
	import { fade } from 'svelte/transition';
	let { data } = $props();
</script>

<h1 class="text-2xl font-bold">Mae Moon ~ Blog</h1>
<br />
<ul>
    {#each data.posts as post}
        <li transition:fade>
            <a href={'/blog/post/' + post.path} class="focus:outline outline-2 outline-nord2 outline-offset-1 dark:outline-nord4 rounded inline-block underline">
                {post.meta.title}
            </a>
        </li>
    {/each}
</ul>