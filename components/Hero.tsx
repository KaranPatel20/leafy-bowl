import ExplodedBowl from './ExplodedBowl';
import { SITE } from '@/lib/config';

/**
 * Scroll tracks (read by ExplodedBowl):
 *  - desktop (lg+): the whole hero is a 260vh track with a sticky 100vh frame.
 *  - mobile: the text scrolls normally, then the bowl column is its own track
 *    and pins on screen, so the bowl is seen assembled before it separates.
 */
export default function Hero() {
  return (
    <section
      data-hero-wrap
      className="relative bg-linen lg:h-[260vh] motion-reduce:lg:h-auto"
    >
      <div className="flex flex-col lg:sticky lg:top-0 lg:min-h-screen lg:overflow-hidden">
        <nav className="relative z-10 mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-[clamp(20px,5vw,56px)] py-5">
          <div className="text-[28px] font-extrabold tracking-[-0.03em]">
            Leafy <span className="accent">Bowl</span>
          </div>
          <div className="flex items-center gap-[clamp(14px,3vw,32px)] text-base font-semibold">
            <a href="#menu">Menu</a>
            <a href="#build">Build a bowl</a>
            <a href="#visit">Visit</a>
          </div>
        </nav>

        <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-wrap items-center gap-[clamp(24px,4vw,56px)] px-[clamp(20px,5vw,56px)] pb-12 pt-2">
          <div className="relative z-[2] flex flex-[1_1_380px] flex-col gap-6">
            <div className="eyebrow flex items-center gap-3 !text-[15px]">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] border-2 border-veg">
                <span className="h-[9px] w-[9px] rounded-full bg-veg" />
              </span>
              100% veg · Vallabh Vidyanagar
            </div>
            <h1 className="text-balance text-[clamp(52px,7.6vw,104px)] font-extrabold leading-[0.92] tracking-[-0.045em]">
              Fresh bowls, <span className="accent tracking-[-0.02em]">tossed</span> to order.
            </h1>
            <p className="max-w-[480px] text-[clamp(18px,1.6vw,21px)] leading-[1.5] text-ink-muted">
              Ten protein-packed salads, made the moment you order. Dressings and toppings your way.
            </p>
            <div className="flex flex-wrap items-center gap-[14px]">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-[10px] rounded-full bg-pine px-7 py-[18px] text-lg font-bold text-linen transition-colors hover:bg-[#1F2823]"
              >
                Order on WhatsApp <span>→</span>
              </a>
              <a
                href="#menu"
                className="px-2 py-[18px] text-lg font-bold underline underline-offset-[5px]"
              >
                See the menu
              </a>
            </div>
          </div>

          {/* Mobile scroll track for the bowl; a no-op wrapper on desktop */}
          <div
            data-track-mobile
            className="relative flex-[1_1_380px] h-[220vh] lg:h-auto motion-reduce:h-auto"
          >
            <div className="sticky top-4 flex flex-col items-center gap-3 lg:static">
              <ExplodedBowl />
              <div className="eyebrow !tracking-[0.12em] motion-reduce:hidden">
                Scroll to pull apart ↓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
