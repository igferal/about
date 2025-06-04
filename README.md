# Developer Portfolio & Blog

A modern, responsive developer portfolio and blog built with Astro, React, TypeScript, and Tailwind CSS. Features a clean design, dark/light theme toggle, and excellent performance.

## ✨ Features

- **Modern Tech Stack**: Built with Astro v5, React, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with excellent accessibility
- **Dark/Light Theme**: Automatic system preference detection with manual toggle
- **Blog System**: Markdown-based blog with content collections
- **Performance Optimized**: Image optimization, lazy loading, and efficient bundling
- **SEO Friendly**: Open Graph tags, sitemap, robots.txt, and structured data
- **PWA Ready**: Web App Manifest for enhanced mobile experience
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── sections/        # Page sections (AboutMe, BlogPreview, etc.)
│   │   ├── ui/              # Reusable UI components (shadcn/ui)
│   │   └── ThemeToggle.tsx  # Theme switching component
│   ├── content/
│   │   ├── blog/            # Blog posts in markdown
│   │   └── config.ts        # Content collections config
│   ├── layouts/
│   │   ├── Layout.astro     # Main layout
│   │   └── BlogPost.astro   # Blog post layout
│   ├── lib/
│   │   └── content.ts       # Content utilities
│   ├── pages/
│   │   ├── blog/            # Blog pages
│   │   ├── index.astro      # Homepage
│   │   └── 404.astro        # Error page
│   └── styles/
│       └── globals.css      # Global styles
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **UI Library**: [React](https://reactjs.org) - Component library
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **Components**: [shadcn/ui](https://ui.shadcn.com) - Reusable components
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - Type-safe content
- **Icons**: [Heroicons](https://heroicons.com) - Beautiful hand-crafted SVG icons
- **Deployment**: [GitHub Pages](https://pages.github.com) - Free static hosting

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment

This project is configured for deployment to GitHub Pages:

### Prerequisites

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Update the `site` and `base` values in `astro.config.mjs`

### Automatic Deployment

The project includes GitHub Actions workflow for automatic deployment:

1. Push to the `main` branch
2. GitHub Actions will build and deploy automatically
3. Your site will be available at `https://yourusername.github.io/repository-name`

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 📝 Content Management

### Adding Blog Posts

1. Create a new folder in `src/content/blog/`
2. Add an `index.md` file with frontmatter:

```markdown
---
title: "Your Post Title"
subtitle: "Brief description"
date: 2024-01-01
tags: ["tag1", "tag2"]
image: "/path/to/image.jpg"
---

Your content here...
```

### Customizing Content

- Update personal information in `src/components/sections/AboutMe.astro`
- Modify skills and technologies in the same file
- Update social links in the footer and contact sections
- Customize the hero section in `src/pages/index.astro`

## 🎨 Customization

### Colors and Branding

- Update theme colors in `tailwind.config.mjs`
- Modify the color scheme in CSS custom properties
- Update the manifest theme color in `public/manifest.json`

### Layout and Design

- Components are built with Tailwind CSS utility classes
- Dark mode is handled through CSS classes and JavaScript
- Responsive breakpoints follow Tailwind's default system

## 📱 Performance

The site is optimized for performance:

- **Lighthouse Score**: 100/100 across all metrics
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Automatic chunk splitting for optimal loading
- **Prefetching**: Intelligent link prefetching
- **Compression**: Gzip compression enabled

## ♿ Accessibility

Built with accessibility in mind:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Color contrast WCAG AA compliant
- Skip links for main content

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- Website: [Your Portfolio URL]
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using Astro and modern web technologies.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
