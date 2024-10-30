<script>
	import { fade } from 'svelte/transition';
	let { data } = $props();
</script>

<h1>Mae Moon ~ Blog</h1>
<br />
<ul>
    {#each data.posts as post}
        <li transition:fade>
            <a href={'/blog/post/' + post.path}>
                {post.meta.title}
            </a>
        </li>
    {/each}
</ul>