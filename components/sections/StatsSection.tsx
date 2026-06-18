"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

const stats = [
  { value: "1977", label: "Established" },
  { value: "10,000+", label: "Projects Completed" },
  { value: "45+", label: "Years of Trust" },
  { value: "50+", label: "Expert Professionals" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-white border-t border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-100 border border-ink-100 rounded-xl overflow-hidden">
          {stats.map((s, i) => (
            <AnimatedContainer key={s.label} delay={i * 0.1}>
              <div className="bg-white py-10 px-8 text-center hover:bg-[#F8FAFC] transition-colors h-full">
                <div className="font-serif text-4xl text-gold font-bold mb-1">{s.value}</div>
                <div className="text-[11px] text-ink-600 font-semibold tracking-widest uppercase">{s.label}</div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
