import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

export function WhyChooseUs() {
  const reasons = [
    { title: "Premium Quality Materials", desc: "Sourcing only the finest architectural glass and luxury plywood for unparalleled excellence.", icon: "💎" },
    { title: "Modern Designs", desc: "Staying ahead of trends to provide sleek, contemporary solutions that elevate any space.", icon: "✨" },
    { title: "Durable & Long-lasting", desc: "Engineered for resilience, ensuring your investment retains its beauty and structural integrity for decades.", icon: "🛡️" },
    { title: "Trusted by Architects", desc: "We provide the best custom glass cutting in Coimbatore for top builders and architects, delivering on complex specifications with precision.", icon: "🏛️" },
  ];

  return (
    <section className="py-28 bg-white border-t border-ink-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatedContainer className="mb-16 text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3 font-semibold">Our Advantage</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-950 font-bold mb-6">Why Choose Us</h2>
          <p className="text-ink-600 text-[15px] leading-relaxed max-w-2xl mx-auto font-medium">We combine decades of technical expertise with premium materials to deliver architectural glass and plywood solutions that stand the test of time.</p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {reasons.map((item, i) => (
            <AnimatedContainer key={item.title} delay={i * 0.1}>
              <div className="group h-full flex flex-col md:flex-row items-start gap-6 bg-[#F8FAFC] border border-ink-100 p-8 rounded-2xl hover:border-gold hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-ink-100 flex items-center justify-center text-2xl group-hover:border-gold group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink-900 font-semibold mb-3 group-hover:text-gold-dark transition-colors">{item.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
