# Development Guide

## Overview
This guide helps you maintain, customize, and extend your Astro portfolio and blog.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Git

### Development Workflow
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run astro check
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── sections/       # Landing page sections
│   ├── ui/            # shadcn/ui components
│   └── ThemeToggle.tsx # Theme switching
├── content/            # Content collections
│   ├── blog/          # Blog posts (Markdown)
│   └── config.ts      # Content schemas
├── layouts/           # Page layouts
├── lib/              # Utilities and helpers
├── pages/            # Route pages
└── styles/           # Global styles
```

## Adding Content

### Blog Posts
1. Create a new folder in `src/content/blog/[slug]/`
2. Add `index.md` with frontmatter:
```yaml
---
title: "Your Post Title"
subtitle: "Brief description"
date: 2024-01-01
tags: ["tag1", "tag2"]
image: "./featured-image.jpg"
---
```
3. Include images in the same folder
4. Write content in Markdown

### Portfolio Updates
- **About Me**: Edit `src/components/sections/AboutMe.astro`
- **Skills**: Edit `src/components/sections/Skills.astro`
- **Contact**: Edit `src/components/sections/Contacts.astro`

## Customization

### Theme Colors
Edit `tailwind.config.mjs` to change the color palette:
```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Typography
Modify font settings in:
- `src/styles/globals.css` for CSS variables
- `tailwind.config.mjs` for font families

### Layout Changes
- **Header/Navigation**: Edit `src/layouts/Layout.astro`
- **Blog Layout**: Edit `src/layouts/BlogPost.astro`
- **Component Styles**: Individual `.astro` files

## Component Development

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and use in `src/pages/index.astro`
3. Follow existing patterns for styling and accessibility

### Using shadcn/ui Components
```bash
# Add new components
npx shadcn-ui@latest add [component-name]
```

### React Components
- Use `.tsx` extension
- Add `client:load` directive in Astro files
- Keep hydration minimal for performance

## SEO & Performance

### Meta Tags
- Edit `src/layouts/Layout.astro` for global meta
- Add page-specific meta in frontmatter
- Use descriptive titles and descriptions

### Image Optimization
- Use Astro's `<Image>` component
- Provide alt text for accessibility
- Use appropriate formats (WebP when possible)

### Performance Checklist
- [ ] Minimize JavaScript bundle size
- [ ] Use lazy loading for images
- [ ] Optimize font loading
- [ ] Enable compression
- [ ] Test Core Web Vitals

## Content Guidelines

### Writing Style
- Professional but approachable tone
- Include code examples where relevant
- Use proper headings hierarchy (H1 → H2 → H3)
- Write engaging introductions

### Image Requirements
- Minimum 1200x630px for featured images
- Compress images (aim for <500KB)
- Use descriptive filenames
- Include meaningful alt text

### SEO Best Practices
- Title: 50-60 characters
- Meta description: 150-160 characters
- Use relevant keywords naturally
- Internal linking between posts

## Deployment

### GitHub Pages
The site automatically deploys via GitHub Actions when you push to `main`:

1. Push changes to main branch
2. GitHub Actions builds the site
3. Site deploys to `https://yourusername.github.io/repository-name`

### Manual Deployment
```bash
# Build the site
npm run build

# Deploy dist/ folder to your hosting provider
```

### Environment Configuration
Update `astro.config.mjs` for different environments:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name', // For GitHub Pages subpath
  // ... other config
});
```

## Troubleshooting

### Common Issues

**Build Errors**
- Check TypeScript errors: `npm run astro check`
- Verify all imports are correct
- Ensure all required frontmatter fields are present

**Image Issues**
- Verify image paths are correct
- Check file extensions match imports
- Ensure images are in public/ or imported properly

**Styling Issues**
- Check Tailwind class names for typos
- Verify CSS custom properties are defined
- Test in both light and dark themes

**Performance Issues**
- Minimize client-side JavaScript
- Use Astro's static generation
- Optimize images and fonts

### Getting Help
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## Maintenance

### Regular Tasks
- **Monthly**: Update dependencies, check for broken links
- **Quarterly**: Review and update content, performance audit
- **Yearly**: Major dependency updates, design refresh

### Dependency Updates
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Major version updates (be careful)
npm install package@latest
```

### Backup Strategy
- Keep source code in Git repository
- Regular commits with descriptive messages
- Consider backing up content separately

## Extension Ideas

### Future Features
- **Search**: Add local search with Fuse.js
- **Comments**: Integrate with services like Giscus
- **Analytics**: Google Analytics or privacy-focused alternatives
- **Newsletter**: Email subscription integration
- **Contact Form**: Netlify Forms or similar service
- **Tags System**: Filter blog posts by tags
- **Reading Progress**: Progress bar for blog posts
- **Social Sharing**: Share buttons for posts

### Advanced Customizations
- **Custom Fonts**: Web font integration
- **Animations**: Framer Motion or CSS animations
- **Dark Mode**: Advanced theme switching
- **Internationalization**: Multi-language support
- **CMS Integration**: Headless CMS for non-technical editing

---

**Remember**: Always test changes locally before deploying, and keep the user experience as the top priority. 