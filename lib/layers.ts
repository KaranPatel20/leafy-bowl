/**
 * Exploded-bowl layers, listed top to bottom.
 * Drop a transparent PNG at `src` and it replaces the placeholder automatically.
 *
 * w     – layer width as % of stage width
 * ar    – width / height of the PNG (also sizes the placeholder)
 * rest  – vertical centre (% of stage height) when assembled, sitting in the bowl
 * open  – vertical centre (% of stage height) when fully exploded
 * color – placeholder colour only
 */
export type Layer = {
  id: string;
  label: string;
  src: string;
  w: number;
  ar: number;
  rest: number;
  open: number;
  color: string;
};

export const LAYERS: Layer[] = [
  { id: 'peanuts',  label: 'Roasted peanuts',     src: '/layers/01-peanuts.png',  w: 40, ar: 2.676, rest: 61, open: 5,  color: '#C9925A' },
  { id: 'greens',   label: 'Fresh greens',        src: '/layers/02-greens.png',   w: 58, ar: 1.801, rest: 62, open: 16, color: '#6FA25A' },
  { id: 'cucumber', label: 'Cucumber slices',     src: '/layers/03-cucumber.png', w: 50, ar: 1.805, rest: 63, open: 27, color: '#8DB56B' },
  { id: 'pepper',   label: 'Bell pepper strips',  src: '/layers/04-pepper.png',   w: 52, ar: 2.242, rest: 64, open: 37, color: '#D0452F' },
  { id: 'tomato',   label: 'Tomato',              src: '/layers/05-tomato.png',   w: 52, ar: 1.969, rest: 65, open: 47, color: '#E2603F' },
  { id: 'corn',     label: 'Sweet corn',          src: '/layers/06-corn.png',     w: 52, ar: 2.058, rest: 66, open: 57, color: '#F2C94C' },
  { id: 'paneer',   label: 'Roasted paneer',      src: '/layers/07-paneer.png',   w: 46, ar: 1.629, rest: 66.5, open: 66, color: '#EAD9B0' },
  { id: 'chana',    label: 'Chana',               src: '/layers/08-chana.png',    w: 50, ar: 1.782, rest: 67, open: 75, color: '#BF8A4F' },
];

export const BOWL: Layer = {
  id: 'bowl',
  label: 'Bowl',
  src: '/layers/00-bowl.png',
  w: 70,
  ar: 1.566,
  rest: 71,
  open: 85,
  color: '#2E3A33',
};
