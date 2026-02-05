# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev       # Start Next.js dev server (localhost:3000)
npm run build     # Production build
npm start         # Run production build
npm run lint      # Run ESLint
```

No test framework is configured.

## Architecture Overview

This is a **Next.js 16 multi-author blog platform** using Keystatic CMS for content management. The system organizes content by "Universes" (topics) and "Authors":

- **4 Universes**: Tech (indigo), Law (slate), Faith (emerald), Education (amber)
- **Authors** can contribute to multiple universes they're linked to
- **Content** is stored as MDX files in `/content/{universe}/` folders (no database)

### Route Structure

```
/                           → Landing page with author selection
/:authorId                  → Author dashboard showing their linked universes
/:authorId/:topic           → Topic archive with post grid
/:authorId/:topic/:slug     → Individual post with MDX content
/keystatic                  → CMS admin panel
```

### Key Data Files

- `lib/constants.ts` - UNIVERSES, AUTHORS, THEME_CLASSES definitions
- `lib/types.ts` - TypeScript interfaces (Universe, Author, BlogPost)
- `keystatic.config.ts` - CMS collection schema (4 collections matching universes)

### Content Pipeline

MDX files are processed with:
- **next-mdx-remote** for server-side compilation
- **Shiki** for syntax highlighting (dark theme for Tech, light for others)
- **remark-gfm** for GitHub Flavored Markdown
- **remark-footnotes** for footnote support
- **rehype-slug** + **rehype-autolink-headings** for heading anchors

### Theme System

Each universe has a color theme mapped in `THEME_CLASSES`:
- Keys: `bg`, `text`, `border`, `ring`, `lightBg`
- Values: Tailwind utility classes per theme color

### Route Validation Pattern

Dynamic routes validate author-universe relationships:
- Author pages check if author exists
- Topic pages verify the author is linked to that universe
- Invalid combinations return 404

## Adding Content

1. Via CMS: Visit `/keystatic` admin panel
2. Via files: Create `.mdx` in `/content/{universe}/` with frontmatter:
   ```yaml
   title: "Post Title"
   publishedDate: 2024-01-01
   description: "Brief description"
   ```

## Adding Authors/Universes

1. Add entry to `lib/constants.ts` (UNIVERSES or AUTHORS array)
2. For new universes: add collection to `keystatic.config.ts`
3. Create matching `/content/{universeId}/` directory
