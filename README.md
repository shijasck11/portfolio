# Shijas Cherakkatil | Portfolio

Personal portfolio site, deployed at https://shijas.netlify.app/.

Built with [Astro](https://astro.build) and Tailwind CSS. Every page is static HTML, so the full content is
visible to search engines and without JavaScript. React is used only for the project modal on the home
page and the demo switcher on the VibeTribe page.

## Run locally

**Prerequisites:** Node.js 22.12+ (see `.nvmrc`)

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/
npm run check    # type-check .astro, .ts and .tsx files
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/constants.ts` | All site content: bio, skills, experience, projects, publications |
| `src/pages/index.astro` | Home page |
| `src/pages/projects/[slug].astro` | One page per project, generated from `PROJECTS` |
| `src/layouts/Base.astro` | `<head>`: title, description, canonical, Open Graph / Twitter tags, scroll-reveal script |
| `src/components/` | Page sections (`.astro`, static) and the two React islands (`ProjectModal.tsx`, `ProjectDetails.tsx`) |
| `src/lib/structured-data.ts` | schema.org JSON-LD, built from `constants.ts` |
| `src/pages/robots.txt.ts` | `robots.txt`, pointing at the sitemap |
| `public/` | Images, videos, social preview image (`media/og-image.jpg`), Search Console verification file |

To add a project, add an entry to `PROJECTS` with a unique `slug`; its page, sitemap entry and structured
data are generated automatically.

The site URL is set once, as `site` in `astro.config.mjs`.
