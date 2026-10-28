# Leafy Bowl – exploded view layer prompts

Goal: 9 separate, photorealistic images (the bowl + 8 salad layers) that the landing page pulls apart vertically on scroll.
Run each prompt in a free tool (Gemini app, Canva Magic Media, etc.), then save the result as a **transparent PNG** at the file name shown.

## Workflow

1. Run the **Style lock** + one layer prompt together, one layer per generation.
2. If the tool can't make transparency, keep the **flat pure white background** in the prompt, then remove the background with a free tool (remove.bg, Adobe Express, or Canva's background remover if you have access). Check the edges on greens and corn.
3. Crop tight to the subject (a few px of margin), export PNG, and save into `public/layers/` with the exact file name below.
4. Refresh the page. A layer that exists replaces its placeholder automatically.
5. If one layer looks wrong in the stack, adjust its `w`, `ar`, `rest` and `open` in `lib/layers.ts`.

Tip: after the first good image (start with the bowl), upload it as a reference for the rest and add "match the lighting, angle and colour palette of the reference image exactly".

## Style lock (paste at the start of every prompt)

> Photorealistic studio food photography, a single isolated element on a flat pure white (#FFFFFF) background, no gradient, no vignette, no cast shadow on the background. Camera at a consistent 25° elevation looking slightly down, centred, soft key light from the upper left with gentle fill, natural colour, crisp focus, appetising fresh texture with tiny water droplets. Veg-only salad. No text, no hands, no other objects, no plate, no bowl unless stated. Wide landscape framing with a little margin around the subject.

## File 00 – `00-bowl.png` (aspect about 1.6 : 1)

> Style lock. A single empty deep matte ceramic salad bowl in dark pine green (#2E3A33), wide round rim, seen from a 25° elevation so the clean empty interior is visible, subtle glaze highlights, no food inside, no saucer.

## File 01 – `01-peanuts.png` (about 2.2 : 1)

> Style lock. A loose, airy scatter of about 25 roasted peanuts in their skins, golden brown, some halved, forming a flat oval cluster hovering in mid-air, a few peanuts slightly apart from the rest.

## File 02 – `02-greens.png` (about 2.4 : 1)

> Style lock. A generous fluffy bed of fresh salad greens – crisp romaine, baby spinach and a little rocket – piled in a wide low mound about as wide as a salad bowl, glossy and crisp, floating in mid-air with no stems cut flat, leaves casting no shadow.

## File 03 – `03-cucumber.png` (about 3.0 : 1)

> Style lock. A flat, slightly overlapping fan of about 12 thin cucumber slices, pale green flesh with dark green skin rims and visible seeds, arranged as a low wide disc hovering in mid-air.

## File 04 – `04-pepper.png` (about 3.2 : 1)

> Style lock. A neat tangle of thin julienned bell pepper strips in red, yellow and orange, glossy skin, arranged as a wide low flat layer hovering in mid-air.

## File 05 – `05-tomato.png` (about 3.0 : 1)

> Style lock. A single layer of about 10 ripe red tomato slices and a few halved cherry tomatoes, juicy seeds visible, glossy, slightly overlapping in a wide low disc hovering in mid-air.

## File 06 – `06-corn.png` (about 3.4 : 1)

> Style lock. A dense flat layer of boiled sweet corn kernels, bright golden yellow, plump and glistening, forming a wide low oval hovering in mid-air, a few kernels loose at the edge.

## File 07 – `07-paneer.png` (about 3.2 : 1)

> Style lock. A single layer of about 12 roasted paneer cubes, creamy white with golden-brown seared edges and a light sprinkle of black pepper, arranged in a loose wide low oval hovering in mid-air.

## File 08 – `08-chana.png` (about 3.4 : 1)

> Style lock. A dense flat layer of cooked desi chana (chickpeas), warm tan and beige, slightly glossy with a hint of spice, forming a wide low oval hovering in mid-air.

## Quality checklist

- Same lighting direction and camera angle across all nine images.
- Each layer is wide and low (flat), so the layers read as slices of one salad when stacked.
- No bowl, plate or shadow baked into the salad layers.
- Edges are clean after background removal, with no white halo.
- Layers sit on a transparent background and are named exactly as above.

## Stack order (top to bottom on the page)

peanuts, greens, cucumber, pepper, tomato, corn, paneer, chana, bowl.
