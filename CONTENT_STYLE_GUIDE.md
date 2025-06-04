# Content Style Guide

## Overview
This style guide ensures consistency across all content in the developer portfolio and blog.

## Blog Post Structure

### Frontmatter Requirements
```yaml
---
title: "Your Post Title"
subtitle: "Brief description (50-150 characters)"
date: 2024-01-01
tags: ["tag1", "tag2", "tag3"] # Max 3 tags
image: "/path/to/featured-image.jpg"
---
```

### Content Guidelines

#### Title
- Use title case
- Keep under 60 characters for SEO
- Be descriptive and engaging
- Avoid clickbait

#### Subtitle
- Expand on the title
- 50-150 characters
- Provide clear value proposition
- End without punctuation

#### Tags
- Maximum 3 tags per post
- Use lowercase
- Be specific (prefer "react-hooks" over "react")
- Consistent naming across posts

#### Featured Image
- Minimum 1200x630px for social sharing
- Use high-quality, relevant images
- Prefer landscapes over portraits
- Ensure images work in both light/dark themes

### Writing Style

#### Voice and Tone
- Professional but approachable
- Educational and helpful
- Avoid jargon without explanation
- Use active voice
- Write in second person when giving instructions

#### Structure
1. **Hook**: Start with a compelling opening
2. **Problem**: Define what you're solving
3. **Solution**: Provide clear, actionable steps
4. **Examples**: Include code snippets and practical examples
5. **Conclusion**: Summarize key takeaways

#### Code Examples
- Use proper syntax highlighting
- Include complete, runnable examples
- Add comments for complex logic
- Follow established code formatting conventions

## Portfolio Content

### About Me Section
- Keep personal but professional
- Focus on skills and achievements
- Include personality to stand out
- Update regularly with new accomplishments

### Skills Section
- Group by category (Languages, Frameworks, Tools, Cloud)
- Keep current - remove outdated technologies
- Order by proficiency within categories
- Add new skills as you learn them

### Contact Information
- Keep professional email address
- Ensure all social links are current
- Test all links regularly
- Include response time expectations

## Image Guidelines

### File Naming
- Use descriptive names: `react-component-lifecycle.jpg`
- Use kebab-case: `modern-css-techniques.png`
- Include dimensions if relevant: `hero-image-1920x1080.jpg`

### Optimization
- Use WebP format when possible
- Compress images (aim for under 500KB)
- Include alt text for accessibility
- Use responsive images for different screen sizes

### Placement
- Blog images: Store in `src/content/blog/[post-slug]/`
- General images: Store in `public/images/`
- Component images: Consider using Astro's Image component

## SEO Best Practices

### Meta Descriptions
- 150-160 characters
- Include primary keyword
- Compelling and actionable
- Unique for each page

### Headings
- Use H1 for page title only
- Use H2 for main sections
- Use H3 for subsections
- Maintain logical hierarchy

### Internal Linking
- Link to related blog posts
- Use descriptive anchor text
- Link to portfolio sections from blog posts
- Create topic clusters

## Content Calendar

### Blog Posting Schedule
- Aim for 1-2 posts per month
- Plan posts around:
  - New technology releases
  - Personal project milestones
  - Industry trends
  - Tutorial requests

### Content Types
1. **Tutorial Posts**: Step-by-step guides
2. **Opinion Pieces**: Industry insights and thoughts
3. **Project Showcases**: Deep dives into personal projects
4. **Quick Tips**: Short, actionable advice
5. **Reviews**: Tool and technology evaluations

## Quality Checklist

### Before Publishing
- [ ] Proofread for grammar and spelling
- [ ] Verify all code examples work
- [ ] Test all external links
- [ ] Check image optimization and alt text
- [ ] Validate frontmatter format
- [ ] Ensure responsive design
- [ ] Test in both light and dark themes

### SEO Review
- [ ] Meta description under 160 characters
- [ ] Title under 60 characters
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Internal links to related content
- [ ] Alt text for all images
- [ ] Clean, descriptive URLs

### Accessibility Check
- [ ] Images have meaningful alt text
- [ ] Proper heading structure
- [ ] Sufficient color contrast
- [ ] Links have descriptive text
- [ ] Content is keyboard navigable

## Brand Voice

### Do
- Be helpful and educational
- Share personal experiences and lessons learned
- Admit when you don't know something
- Encourage learning and experimentation
- Use inclusive language

### Don't
- Be overly technical without context
- Use deprecating language about technologies
- Make assumptions about reader knowledge
- Include personal political opinions
- Use offensive or exclusive language

## Content Maintenance

### Regular Reviews
- Monthly: Check for broken links
- Quarterly: Update outdated information
- Yearly: Review and refresh evergreen content

### Updates
- Add "Updated:" date for significant changes
- Maintain version history for major tutorials
- Archive or redirect outdated content

---

**This style guide is a living document. Update it as the site grows and evolves.** 