# Leafy Bowl

Landing page for **Leafy Bowl**, a 100% veg healthy-salad brand in Vallabh Vidyanagar, Anand (Gujarat). It shows the ten bowls and sends orders to **WhatsApp**.

**Live site:** https://leafy-bowl.vercel.app/

The hero is a photoreal salad that **pulls apart into vertical layers as you scroll**: peanuts, greens, cucumber, pepper, tomato, corn, paneer and chana lift away from the bowl, and re-stack when you scroll back up.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) and React 18
- [Tailwind CSS 3](https://tailwindcss.com/)
- TypeScript
- Fonts via `next/font`: Bricolage Grotesque and Instrument Serif
- Deployed on [Vercel](https://vercel.com/)

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3100.

```bash
npm run build   # production build
npm start       # serve the production build on port 3100
```

## Project structure

```
app/                 Next.js app router (layout, global styles, page)
components/
  Hero.tsx           Hero copy, CTAs and scroll tracks
  ExplodedBowl.tsx   Scroll-driven layer animation
  Menu.tsx           The ten bowls
  Build.tsx          "Make it yours" steps
  Visit.tsx          WhatsApp CTA, phone, address, footer
lib/
  config.ts          Contact details, WhatsApp link, price toggle
  menu.ts            Menu items
  layers.ts          Exploded-view layer sizes and positions
public/layers/       Transparent PNG cut-outs for the hero
LAYER_PROMPTS.md     Image prompts used to make the layer PNGs
```

## Editing content

| To change | Edit |
|---|---|
| Phone, address, WhatsApp link, show or hide prices | `lib/config.ts` |
| Bowl names, descriptions, tags | `lib/menu.ts` |
| Brand colours | `tailwind.config.js` (and `app/globals.css`) |
| Menu photos | Replace the placeholder block in `components/Menu.tsx` with `next/image` |

Prices currently show as `₹ ___`. Set `showPrices: false` in `lib/config.ts` to hide them.

## The exploded-view hero

`components/ExplodedBowl.tsx` reads scroll position on each animation frame and moves every layer with `transform` only. Each layer is a transparent PNG in `public/layers/`:

| File | Layer |
|---|---|
| `00-bowl.png` | Bowl |
| `01-peanuts.png` | Roasted peanuts |
| `02-greens.png` | Fresh greens |
| `03-cucumber.png` | Cucumber slices |
| `04-pepper.png` | Bell pepper strips |
| `05-tomato.png` | Tomato |
| `06-corn.png` | Sweet corn |
| `07-paneer.png` | Roasted paneer |
| `08-chana.png` | Chana |

**Tuning a layer:** in `lib/layers.ts` each layer has

- `w`: width as a % of the stage
- `ar`: width / height of the PNG
- `rest`: vertical position (% of stage height) when assembled
- `open`: vertical position when fully exploded

**Replacing an image:** crop the new PNG tight to the subject, keep the file name, and update `ar` to match. If a file is missing, a labelled placeholder is shown instead.

**Scroll behaviour**

- Desktop (1024px and wider): the whole hero is a tall scroll track with a sticky frame.
- Mobile: the text scrolls normally, then the bowl pins on screen and only pulls apart after you have seen it assembled.
- With `prefers-reduced-motion`, the layers are shown exploded and static.

`LAYER_PROMPTS.md` has the image-generation prompts and the workflow for producing matching layers.

## Deployment

Pushes to `main` deploy automatically on Vercel. To deploy your own copy, import the repository in Vercel. No environment variables are needed, and the root directory is the repo root.

## Brand

| Colour | Hex |
|---|---|
| Linen | `#F7F3E8` |
| Pine | `#2E3A33` |
| Sage / Sage Mist | `#A9C0A6` / `#DCE6D9` |
| Butter | `#F2D27A` |
| Clay / Clay Deep | `#B5654A` / `#A4553B` |
