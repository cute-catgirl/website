<script>
	// #, ##, ###, ####, #####, ######
	const headingRegex = /^(#{1,6})\s(.*)$/;
	// $variable=value
	const expressionRegex = /^\$(.*)$/;
	// *italic* or _italic_
	const italicRegex = /(\*|_)(.*?)\1/g;
	// **bold** or __bold__
	const boldRegex = /(\*\*|__)(.*?)\1/g;
	// <input ${variable} />
	const inputRegex = /<input\s\$\{(.+?)\}\s\/>/g;
	let rawContent = $state(
		'# Heading\n## Heading 2\n### Heading 3\nSome body text!\n\n**Bold text**\n*Italic text*\n\n$variable=*nyaa~*\nvar: {variable}\n\n$variable2=**:3**\nvar 2: {variable2}\n\n$variable3={variable} {variable2}\nvar 3: {variable3}'
	);

	let content = $derived.by(() => {
		let lines = rawContent.split('\n');
		let parsedLines = [];
		let initialDocumentVariables = {};

		const applyInlineStyles = (text, visited = new Set()) => {
			let textToReturn = text;

			// Apply bold and italic formatting
			textToReturn = textToReturn.replace(boldRegex, '<strong>$2</strong>');
			textToReturn = textToReturn.replace(italicRegex, '<em>$2</em>');

			// Resolve variables
			textToReturn = textToReturn.replace(/\{(.+?)\}/g, (match, variable) => {
				if (visited.has(variable)) {
					console.error(`Circular reference detected for variable: ${variable}`);
					return 'nice try';
				}
				if (!documentVariables[variable]) {
					return match;
				}
				visited.add(variable);
				const resolvedValue = applyInlineStyles(documentVariables[variable], visited);
				visited.delete(variable);
				return resolvedValue;
			});

			return textToReturn;
		};

		const handleExpression = (expression) => {
			const [variable, value] = expression.split('=');
			initialDocumentVariables[variable] = value;
		};

		for (let line of lines) {
			const headingMatch = line.match(headingRegex);
			const expressionMatch = line.match(expressionRegex);
			if (line.trim() === '') {
				parsedLines.push('<br>');
			} else if (expressionMatch) {
				handleExpression(expressionMatch[1]);
			} else if (headingMatch) {
				const level = headingMatch[1].length;
				const text = applyInlineStyles(headingMatch[2]);
				parsedLines.push(`<h${level}>${text}</h${level}>`);
			} else {
				const paragraph = applyInlineStyles(line);
				parsedLines.push(`<p>${paragraph}</p>`);
			}
		}
		return parsedLines.join('');
	});
</script>

<h1 class="text-xl font-bold">Markdown</h1>
<br />
<div id="container">
	<div>
		<textarea bind:value={rawContent}></textarea>
	</div>
	<div id="document">
		{@html content}
	</div>
</div>

<style>
	#container {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 1em;
	}

	textarea {
		box-sizing: border-box;
		width: 100%;
		height: auto;
		min-height: 300px;
		font-family: monospace;
		padding: 0.5em;
		resize: none;
	}

	#container > div {
		flex: 1;
	}

	#document {
		white-space: pre-wrap;
		padding: 0.5em;
	}
</style>
