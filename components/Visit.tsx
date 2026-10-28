import { SITE } from '@/lib/config';

export default function Visit() {
  return (
    <section
      id="visit"
      className="bg-pine px-[clamp(20px,5vw,56px)] pb-10 pt-[clamp(64px,9vw,120px)] text-linen"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div className="flex flex-[1_1_420px] flex-col gap-7">
            <h2 className="text-[clamp(48px,7vw,96px)] font-extrabold leading-[0.92] tracking-[-0.045em]">
              Hungry? <span className="accent text-butter">Message us.</span>
            </h2>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[10px] self-start rounded-full bg-butter px-[30px] py-5 text-[19px] font-extrabold text-pine transition-colors hover:bg-linen"
            >
              Order on WhatsApp <span>→</span>
            </a>
          </div>
          <div className="grid flex-[1_1_420px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
            <div className="flex flex-col gap-2">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-sage">
                Call · Keyuri Patel
              </div>
              <a href={SITE.phoneHref} className="text-[26px] font-extrabold">
                {SITE.phone}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-sage">Find us</div>
              <a href={SITE.mapsHref} target="_blank" rel="noreferrer" className="text-lg leading-[1.45]">
                {SITE.address}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-linen/20 pt-6 text-sm text-rule">
          <div>© Leafy Bowl · 100% veg</div>
          <div>Fresh bowls, tossed to order in Anand</div>
        </div>
      </div>
    </section>
  );
}
