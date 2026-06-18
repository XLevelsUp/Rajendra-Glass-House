import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

export function BrandPartners() {
  return (
    <section className="py-12 bg-white border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatedContainer className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
          <span className="text-[11px] tracking-[0.2em] uppercase text-ink-500 font-semibold flex-shrink-0">
            Official Partner
          </span>
          <div className="w-px h-8 bg-ink-200 hidden sm:block flex-shrink-0" />
          <div className="flex items-center gap-4">
            <div className="px-5 py-3 border border-ink-200 rounded flex items-center gap-3 bg-[#F8FAFC]">
              <div className="text-center">
                <h2 className="font-serif font-bold text-ink-900 text-base">Saint Gobain glass dealer Coimbatore</h2>
                <span className="block text-[9px] text-ink-600 font-medium tracking-widest uppercase mt-0.5">Authorized Dealer · Since 1977</span>
              </div>
            </div>
            <p className="text-sm text-ink-600 font-medium leading-relaxed max-w-xs hidden md:block">
              Every pane of glass we supply is 100% authentic Saint Gobain — the world&apos;s leading glass manufacturer.
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
