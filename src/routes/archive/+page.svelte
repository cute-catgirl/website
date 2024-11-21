<svelte:head>
	<title>Mae Moon</title>
</svelte:head>
<h1>Mae Moon ~ Archive</h1>
<br />
<p>
    This is a collection of some of the older things I've made. A lot of this is unfinished or broken.
</p>
<ul>
	<li>
		<a href="https://cute-catgirl.github.io/catbox-v1/">
			<h2>Catbox v1</h2>
            <h3>2021</h3>
			<p>This was the very first website I ever made and published. I worked on this mostly during COVID when I was doing online school. Open a box, get a cat.</p>
		</a>
        <a href="https://cute-catgirl.github.io/clicker/">
			<h2>Clicker</h2>
            <h3>2021</h3>
			<p>Unfinished clicker game. I don't know why I ever thought the background color looked good. That said, might return to this someday.</p>
		</a>
        <a href="https://cute-catgirl.github.io/catbox/">
			<h2>Catbox v2</h2>
            <h3>2022</h3>
			<p>An improved version of Catbox. I completely recoded it in jQuery, adding more cats and a log of the ones you've found.</p>
		</a>
        <a href="https://cute-catgirl.github.io/square/">
			<h2>square.</h2>
            <h3>2022</h3>
			<p>A rotating square. Click to change direction. Counts the number of rotations and saves it in local storage.</p>
		</a>
        <a href="https://cute-catgirl.github.io/blockfuck/">
            <h2>Blockfuck</h2>
            <h3>2023</h3>
            <p>A brainfuck IDE and interpreter using Blockly. Seems to be broken.</p>
        </a>
        <a href="https://cute-catgirl.gitlab.io">
            <h2>cute-catgirl.gitlab.io</h2>
            <h3>2024</h3>
            <p>My previous website. I really liked the style of this but it didn't work on mobile and was somewhat complicated to maintain. I ended up making this website to replace it, focusing more on simplicity and general usability over looking cool.</p>
        </a>
	</li>
</ul>

<style>
    p {
        margin-bottom: 1em;
    }

	ul {
		max-width: 800px;
	}

	ul li a {
		display: block;
		text-decoration: none;
		background-color: var(--color-bg-2);
		border-radius: 8px;
		padding: 1.5rem;
        margin-bottom: 1em;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		border: 2px solid var(--color-fg-3);
	}

	ul li a:hover {
		transform: translateY(-5px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		border-color: var(--color-fg-1);
	}

	ul li a h2 {
		color: var(--color-fg-1);
		font-size: 1.5rem;
	}

	ul li a h3 {
		color: var(--color-fg-3);
		margin-bottom: 1rem;
		font-size: 1rem;
		font-weight: normal;
	}

	ul li a p {
		color: var(--color-fg-2);
		line-height: 1.6;
	}

	@media (max-width: 600px) {
		ul li a {
			padding: 1rem;
		}
	}
</style>
