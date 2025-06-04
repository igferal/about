---
title: "Modern CSS Techniques for 2024"
subtitle: "Exploring container queries, cascade layers, and other cutting-edge CSS features"
image: "/blog/modern-css.jpg"
date: 2024-01-10
tags: ["css", "web-design", "frontend", "responsive-design"]
---

# Modern CSS Techniques for 2024

CSS has evolved tremendously in recent years. Let's explore some of the most exciting modern CSS features that are changing how we build responsive, maintainable websites.

## Container Queries: The Game Changer

Container queries allow components to adapt based on their container's size, not just the viewport:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

## Cascade Layers

Organize your CSS with explicit layer control:

```css
@layer reset, base, components, utilities;

@layer base {
  h1 { font-size: 2rem; }
}

@layer components {
  .button { padding: 1rem; }
}
```

## CSS Grid Subgrid

Finally available in all major browsers:

```css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}
```

## Custom Properties Evolution

CSS custom properties are more powerful than ever:

```css
:root {
  --spacing-unit: 1rem;
  --color-primary: hsl(200 50% 50%);
}

.component {
  padding: calc(var(--spacing-unit) * 2);
  color: var(--color-primary);
}
```

## Logical Properties

Write CSS that adapts to different writing modes:

```css
.box {
  margin-block: 1rem;
  margin-inline: 2rem;
  border-inline-start: 2px solid blue;
}
```

## The Future is Bright

These modern CSS features enable us to write more maintainable, performant, and accessible styles. Start incorporating them into your projects today! 