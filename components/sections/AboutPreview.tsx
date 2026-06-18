import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="py-28 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <AnimatedContainer direction="left" className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545464333-9cbd1f263054?q=80&w=2000&auto=format&fit=crop"
                alt="Rajendra Glass House showroom Coimbatore"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Year badge */}
            <div className="absolute -bottom-5 -right-5 bg-gold text-ink-950 px-6 py-4 rounded-sm">
              <div className="font-serif text-3xl font-bold leading-none">1977</div>
              <div className="text-[10px] font-semibold tracking-[0.15em] uppercase mt-1">Established</div>
            </div>
          </AnimatedContainer>

          {/* Text */}
          <AnimatedContainer direction="right">
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-sand font-bold mb-6 leading-tight">
              A Legacy Built on Glass
            </h2>
            <span className="gold-line mb-8 block" />
            <div className="space-y-4 text-ink-200 text-[15px] leading-relaxed mb-10">
              <p>
                Established in 1977 at R.S. Puram, Coimbatore, Rajendra Glass House has spent
                over four decades transforming residential, commercial and hospitality spaces
                across Tamil Nadu.
              </p>
              <p>
                As an authorized Saint Gobain glass dealer, we guarantee authentic premium
                architectural glass — backed by the world&apos;s leading glass manufacturer.
                From custom glass cutting to professional installation, we handle it all.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                ["10,000+", "Projects completed"],
                ["Saint Gobain", "Authorized dealer"],
                ["45+", "Years in business"],
                ["Tamil Nadu", "Wide service area"],
              ].map(([num, text]) => (
                <div key={text} className="border-l border-gold/30 pl-4">
                  <div className="font-serif text-xl text-gold font-bold">{num}</div>
                  <div className="text-[12px] text-ink-400 tracking-wide mt-0.5">{text}</div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sand border border-white/20 px-6 py-3 rounded hover:bg-white/5 transition-colors"
            >
              Our Story →
            </Link>
          </AnimatedContainer>

        </div>
      </div>
    </section>
  );
}
