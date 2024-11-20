<script>
    let { darkMode } = $props();
</script>
<a href='https://ko-fi.com/E1E21270RY' target='_blank'>
    {#if darkMode}
    <img height='36' style='border:0px;height:36px;' src='/kofi-dark.webp' border='0' alt='Support me at ko-fi.com' />
    {:else}
    <img height='36' style='border:0px;height:36px;' src='/kofi.webp' border='0' alt='Support me at ko-fi.com' />
    {/if}
</a>