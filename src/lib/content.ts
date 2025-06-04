import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Get all published blog posts sorted by date (newest first)
 * Cached for performance in production builds
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog');
  
  // Filter out draft posts and sort by date
  return posts
    .filter((post: BlogPost) => !post.data.draft)
    .sort((a: BlogPost, b: BlogPost) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Get a specific blog post by its slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getCollection('blog');
  return posts.find((post: BlogPost) => post.slug === slug && !post.data.draft);
}

/**
 * Get recent blog posts (limit number of posts returned)
 */
export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

/**
 * Calculate estimated reading time for a blog post
 * More accurate calculation considering different content types
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  
  // Remove markdown syntax for more accurate word count
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
    .replace(/[#*_~-]/g, '') // Remove markdown formatting
    .trim();
  
  const words = cleanContent.split(/\s+/).filter(word => word.length > 0).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Format a date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Format a date for SEO/structured data
 */
export function formatDateISO(date: Date): string {
  return date.toISOString();
}

/**
 * Generate excerpt from blog post content
 */
export function generateExcerpt(content: string, maxLength: number = 160): string {
  // Remove markdown syntax
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '$1') // Convert links to plain text
    .replace(/[#*_~-]/g, '') // Remove markdown formatting
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
  
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  
  // Find the last complete word within the limit
  const truncated = cleanContent.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  return truncated.substring(0, lastSpaceIndex) + '...';
}

/**
 * Get blog posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => 
    post.data.tags && post.data.tags.includes(tag)
  );
}

/**
 * Get all unique tags from blog posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    if (post.data.tags) {
      post.data.tags.forEach(tag => tags.add(tag));
    }
  });
  
  return Array.from(tags).sort();
}

/**
 * Optimize image URL for different screen sizes
 * Returns an object with srcset and sizes for responsive images
 */
export function getResponsiveImageAttrs(src: string, alt: string) {
  // For local images, let Astro handle optimization
  if (!src.startsWith('http')) {
    return { src, alt };
  }
  
  // For remote images, we could add different size variations
  // This is a basic implementation - could be enhanced with actual CDN parameters
  const baseUrl = src.split('?')[0];
  const sizes = [480, 768, 1024, 1280, 1600];
  
  const srcset = sizes
    .map(size => `${baseUrl}?w=${size} ${size}w`)
    .join(', ');
  
  return {
    src: `${baseUrl}?w=800`, // Default size
    srcset,
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px',
    alt,
    loading: 'lazy' as const,
    decoding: 'async' as const
  };
} 