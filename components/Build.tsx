const Chip = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <span className={`rounded-full px-[14px] py-2 text-[15px] font-bold ${className}`}>{children}</span>
);

export default function Build() {
  return (
    <section
      id="build"
      className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,56px)] pb-[clamp(64px,9vw,120px)]"
    >
      <div className="flex flex-col gap-9 rounded-[36px] bg-sage-mist p-[clamp(32px,5vw,64px)]">
        <h2 className="text-[clamp(40px,5vw,64px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          Make it <span className="accent">yours.</span>
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          <div className="flex flex-col gap-[14px] rounded-[24px] bg-linen p-7">
            <div className="eyebrow !tracking-[0.16em]">Step 1</div>
            <h3 className="text-[26px] font-extrabold">Pick a bowl</h3>
            <p className="text-base leading-[1.5] text-ink-muted">
              Choose any of our ten bowls, from chana chaat to quinoa.
            </p>
          </div>
          <div className="flex flex-col gap-[14px] rounded-[24px] bg-linen p-7">
            <div className="eyebrow">Step 2</div>
            <h3 className="text-[26px] font-extrabold">Choose a dressing</h3>
            <div className="flex flex-wrap gap-2">
              {['Curd', 'Mayonnaise', 'Olive Oil'].map((c) => (
                <Chip key={c} className="bg-sage">{c}</Chip>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[14px] rounded-[24px] bg-linen p-7">
            <div className="eyebrow">Step 3</div>
            <h3 className="text-[26px] font-extrabold">Add a topping</h3>
            <div className="flex flex-wrap gap-2">
              {['Roasted Paneer', 'Roasted Peanut'].map((c) => (
                <Chip key={c} className="bg-butter">{c}</Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
