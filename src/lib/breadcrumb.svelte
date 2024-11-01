<script>
    let { path } = $props();
    
    let splitPath = $derived.by(() => {
        let fullPath = "home" + path;
        return fullPath.split("/").filter(Boolean);
    });

    // Define which paths should be linked vs just displayed
    const nonLinkablePaths = ['post'];

    // Generate the href for each breadcrumb segment, returning null for non-linkable paths
    function getHref(segment, index) {
        // Home always links to root
        if (segment.toLowerCase() === 'home') {
            return '/';
        }

        // Don't generate links for segments in nonLinkablePaths
        if (nonLinkablePaths.includes(segment.toLowerCase())) {
            return null;
        }

        // For blog section, link directly to /blog
        if (segment.toLowerCase() === 'blog') {
            return '/blog';
        }

        // For other segments (like the actual post slug)
        return '/' + splitPath.slice(1, index + 1).join('/');
    }
</script>

<div>
    {#each splitPath as segment, index}
        {#if index > 0}
            <span>/</span>
        {/if}
        {#if getHref(segment, index) !== null}
            <a href={getHref(segment, index)}>{segment}</a>
        {:else}
            <span class="non-link">{segment}</span>
        {/if}
    {/each}
</div>

<style>
    div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 1.2em;
    }

    span {
        font-size: 1.2em;
    }

    a:hover {
        text-decoration: underline;
    }

    .non-link {
        color: var(--color-fg-4);  /* Optional: style non-linkable segments differently */
    }
</style>