'use client';

import { useEffect, useRef, useState } from 'react';
import { BOWL, LAYERS, type Layer } from '@/lib/layers';

const clamp = (x: number) => Math.max(0, Math.min(1, x));
const inOutCubic = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

/** One slot: the real PNG when present, otherwise a labelled placeholder. */
function LayerSlot({ layer, z }: { layer: Layer; z: number }) {
  // Placeholder until the PNG is confirmed to load (SSR'd <img> errors can fire before hydration).
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setReady(true);
    probe.onerror = () => setReady(false);
    probe.src = layer.src;
  }, [layer.src]);
  return (
    <div
      data-layer={layer.id}
      className="absolute left-1/2 will-change-transform"
      style={{
        top: `${layer.rest}%`,
        width: `${layer.w}%`,
        aspectRatio: String(layer.ar),
        zIndex: z,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {!ready ? (
        <div
          className="flex h-full w-full items-center justify-center rounded-[999px] border-2 border-dashed border-pine/30 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-pine/70"
          style={{ background: layer.color + 'CC' }}
        >
          {layer.label}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={layer.src}
          alt={layer.label}
          draggable={false}
          className="h-full w-full object-contain"
          style={{ filter: 'drop-shadow(0 10px 12px rgba(46,58,51,.22))' }}
        />
      )}
    </div>
  );
}

export default function ExplodedBowl() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const desktop = window.matchMedia('(min-width: 1024px)');
    const trackSelector = () => (desktop.matches ? '[data-hero-wrap]' : '[data-track-mobile]');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = new Map<string, HTMLElement>();
    stage.querySelectorAll<HTMLElement>('[data-layer]').forEach((n) => {
      nodes.set(n.dataset.layer as string, n);
    });
    const all = [...LAYERS, BOWL];
    const stagger = 0.035;
    let raf = 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const t = (now - t0) / 1000;
      const H = stage.offsetHeight;
      let p = 1;
      const wrap = stage.closest<HTMLElement>(trackSelector());
      if (!reduce && wrap) {
        const r = wrap.getBoundingClientRect();
        const range = Math.max(1, r.height - window.innerHeight);
        p = clamp(-r.top / range / 0.8);
      }
      all.forEach((layer, i) => {
        const node = nodes.get(layer.id);
        if (!node) return;
        // Top layers lift first; the bowl settles last.
        const order = layer.id === 'bowl' ? LAYERS.length : i;
        const k = inOutCubic(clamp((p - order * stagger) / (1 - LAYERS.length * stagger)));
        const dy = ((layer.open - layer.rest) / 100) * H * k;
        const bob = reduce ? 0 : Math.sin(t * 1.2 + i * 0.9) * 0.004 * H * k;
        node.style.transform = `translate(-50%, -50%) translateY(${dy + bob}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative mx-auto aspect-[5/8] h-[min(62vh,640px)] lg:h-[min(78vh,780px)]"
      role="img"
      aria-label="A Leafy Bowl salad pulled apart into its vertical layers"
    >
      {/* Butter disc, one per graphic */}
      <div className="absolute left-[-6%] top-[24%] aspect-square w-[112%] rounded-full bg-butter" />
      <LayerSlot layer={BOWL} z={0} />
      {[...LAYERS].reverse().map((l, i) => (
        <LayerSlot key={l.id} layer={l} z={i + 1} />
      ))}
    </div>
  );
}
