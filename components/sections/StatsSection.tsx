"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { Box, Typography } from "@mui/material";


const stats = [
  { value: "1977", label: "Established" },
  { value: "10,000+", label: "Projects Completed" },
  { value: "45+", label: "Years of Trust" },
  { value: "50+", label: "Expert Professionals" },
];

export function StatsSection() {
  return (
    <Box component="section" className="py-16 bg-white border-t border-b border-ink-100">
      <Box className="max-w-7xl mx-auto px-6 lg:px-10">
        <Box className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-100 border border-ink-100 rounded-xl overflow-hidden">
          {stats.map((s, i) => (
            <AnimatedContainer key={s.label} delay={i * 0.1}>
              <Box className="bg-white py-10 px-8 text-center hover:bg-[#F8FAFC] transition-colors h-full">
                <Box className="font-serif text-4xl text-gold font-bold mb-1">{s.value}</Box>
                <Box className="text-[11px] text-ink-600 font-semibold tracking-widest uppercase">{s.label}</Box>
              </Box>
            </AnimatedContainer>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
