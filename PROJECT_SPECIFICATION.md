# Astro Developer Portfolio & Blog - Project Specification

## Project Overview
A clean, minimal developer portfolio website built with Astro, featuring a landing page and blog. The site will use shadcn components with React for interactive elements and support dark/light mode themes.

## Technical Stack
- **Framework**: Astro
- **UI Components**: shadcn/ui
- **Frontend Library**: React (for components requiring interactivity)
- **Styling**: Tailwind CSS (via shadcn)
- **Content**: Markdown files with frontmatter
- **Deployment**: GitHub Pages

## Site Structure

### Landing Page (`/`)
Single page with four main sections:

1. **About Me**
   - Minimal timeline layout
   - 5 key milestones (mix of personal and professional highlights)
   - Clean, focused narrative approach

2. **Skills and Technologies**
   - Grouped skill badges with icons/logos
   - Categories: Languages, Frameworks, Tools, Cloud/Infrastructure
   - Visual badge layout for each technology

3. **Contacts**
   - Email
   - LinkedIn
   - GitHub
   - Simple contact links/buttons

4. **Blog Preview/CTA**
   - Section that directs visitors to the blog
   - Minimal discovery approach (no explicit navigation menu)

### Blog Page (`/blog`)
- 4x4 grid layout of blog post cards
- Each card contains:
  - Featured image
  - Title
  - Subtitle/description
- Cards link to individual blog post pages

### Individual Blog Post Pages (`/blog/[slug]`)
- Featured image at the top
- Title
- Publish date
- Estimated reading time
- Markdown content
- Tags at bottom (visual display only, not clickable)
- "Back to Blog" navigation

## Content Management

### Blog Post Structure
```
src/content/blog/
├── my-first-post/
│   ├── index.md
│   └── featured-image.jpg
├── another-post/
│   ├── index.md
│   └── featured-image.png
└── ...
```

### Blog Post Frontmatter
```yaml
---
title: "Post Title"
subtitle: "Brief description for the card"
image: "./featured-image.jpg"
date: "2024-01-15"
tags: ["javascript", "astro", "webdev"]
---
```

### Content Workflow
- Local content management
- Write markdown files locally
- Add featured images to post folders
- Build and deploy to GitHub Pages
- Single author setup

## Design Requirements

### Visual Style
- Clean and minimal aesthetic
- Lots of white space
- Modern developer look
- Professional but approachable

### Theme Support
- Dark/light mode toggle
- Default shadcn color palette (to be tweaked later)
- Consistent theming across all components

### Navigation
- No traditional header navigation
- Blog discoverable through landing page
- Minimal approach focusing on content
- Simple "Back to Blog" links where needed

## Technical Implementation Notes

### Astro Configuration
- Static site generation
- Content collections for blog posts
- Image optimization for featured images
- SEO meta tags and open graph support

### Component Architecture
- Astro components for static content
- React components only where interactivity is needed
- shadcn/ui components for consistent styling
- Responsive design for all screen sizes

### Performance Considerations
- Optimize images (featured images, skill badges, etc.)
- Minimal JavaScript bundle
- Fast loading times
- SEO-friendly URLs (`/blog/post-title`)

### GitHub Pages Deployment
- Static build output
- Automated deployment via GitHub Actions
- Custom domain support ready
- Proper asset handling for images

## Development Phases

### Phase 1: Foundation
- Set up Astro project with shadcn/ui
- Configure Tailwind CSS and theme system
- Set up content collections for blog
- Implement dark/light mode toggle

### Phase 2: Landing Page
- About Me timeline component
- Skills and Technologies badges
- Contacts section
- Blog preview/CTA section

### Phase 3: Blog System
- Blog listing page with grid layout
- Individual blog post pages
- Image handling and optimization
- Reading time calculation

### Phase 4: Polish & Deploy
- Responsive design refinements
- Performance optimization
- GitHub Pages deployment setup
- Final testing and QA

## Future Considerations
- Color palette customization system
- Additional blog features (search, categories)
- Contact form integration
- Analytics integration
- RSS feed for blog posts

---

## Developer Notes
- Prioritize performance and simplicity
- Ensure all components are accessible
- Follow Astro best practices for static generation
- Keep the codebase clean and maintainable
- Document any custom components or configurations 