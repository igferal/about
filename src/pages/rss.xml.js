import rss from '@astrojs/rss';
import { getAllPosts } from '../lib/content';

export async function GET(context) {
  const posts = await getAllPosts();
  
  return rss({
    title: 'Developer Portfolio & Blog',
    description: 'Thoughts on web development, technology, and software engineering. Explore articles about modern web technologies, best practices, and developer insights.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.subtitle,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      content: post.data.subtitle, // Could be expanded to include full content
      author: 'Developer Portfolio',
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/styles.xsl', // Optional: for styled RSS feed
  });
} 