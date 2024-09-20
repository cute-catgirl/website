import { fetchMarkdownPosts } from '$lib/index';

const siteURL = 'https://maemoon.me';
const siteTitle = 'Mae Moon';
const siteDescription = 'My personal blog';

export const prerender = true;

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	const sortedPosts = allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

	const body = render(sortedPosts);
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/rss+xml'
		}
	};

	return new Response(body, options);
};

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<?xml-stylesheet type="text/xsl" href="/rss-stylesheet.xsl" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.path}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}/post/${post.path}</link>
<description>${post.meta.title}</description>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`;