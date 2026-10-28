import { MENU } from '@/lib/menu';
import { SITE } from '@/lib/config';

export default function Menu() {
  return (
    <section
      id="menu"
      className="mx-auto flex max-w-[1240px] flex-col gap-10 px-[clamp(20px,5vw,56px)] py-[clamp(64px,9vw,120px)]"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[clamp(44px,6vw,80px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          The <span className="accent">Bowls</span>
        </h2>
        <p className="max-w-[360px] text-[17px] leading-[1.5] text-ink-muted">
          Every bowl comes with seasonal veggies and house spices.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
        {MENU.map((it, i) => (
          <article
            key={it.name}
            className="flex flex-col overflow-hidden rounded-[24px] bg-card shadow-[0_0_0_1px_rgba(46,58,51,.08)]"
          >
            {/* Replace with <Image> once the client supplies photos */}
            <div className="flex h-[200px] items-center justify-center bg-sage-mist px-4 text-center text-sm font-semibold text-ink-muted">
              {it.name} photo
            </div>
            <div className="flex flex-1 flex-col gap-2 px-[22px] pb-6 pt-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="accent text-[28px] leading-none text-clay-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {SITE.showPrices && (
                  <span className="text-[22px] font-extrabold text-clay-deep">₹ ___</span>
                )}
              </div>
              <h3 className="text-2xl font-extrabold leading-[1.1] tracking-[-0.01em]">{it.name}</h3>
              <p className="text-pretty text-base leading-[1.45] text-ink-muted">{it.desc}</p>
              {it.tag && (
                <span className="mt-auto self-start rounded-full bg-butter px-3 py-[5px] text-[13px] font-bold uppercase tracking-[0.08em]">
                  {it.tag}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
