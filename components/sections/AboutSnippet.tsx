"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const images = [
  { src: "/about/lacquered-glass.webp", label: "Lacquered glass", aspect: "aspect-[4/3]", href: "/products#lacquered-glass" },
  { src: "/about/groove-mirror-glass.webp", label: "Groove mirror glass", aspect: "aspect-[3/4]", href: "/products#grooved-mirror" },
  { src: "/about/glass-pillars.webp", label: "Glass pillars", aspect: "aspect-[4/3] lg:aspect-[16/10]", href: "/products#glass-blocks" },
  { src: "/about/vetropieno-glass-brick.webp", label: "Vetropieno glass brick", aspect: "aspect-[16/9]", href: "/products#vetropieno-glass-brick" },
];

const ImageBlock = ({ img, className = "" }: { img: any, className?: string }) => (
  <Link href={img.href} className={`flex flex-col gap-3 group/link block ${className}`}>
    <Box className={`relative w-full bg-ink-200 overflow-hidden ${img.aspect} group cursor-pointer`}>
      {/* Placeholder Background */}
      <Box className="absolute inset-0 bg-ink-100 flex items-center justify-center p-6 text-center border border-ink-200/60 transition-colors group-hover:bg-ink-100/80">
        <Typography component="span" className="font-serif text-ink-600 font-medium text-lg capitalize">
          [Image: {img.label}]
        </Typography>
      </Box>

      {/* Actual Image Tag */}
      <Image src={img.src} alt={img.label} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px" className="object-cover relative z-10" /> 

      {/* Plus Icon Overlay - Removed as requested */}
    </Box>
    <Typography component="p" className="text-[15px] text-ink-950 font-medium tracking-wide group-hover/link:text-gold transition-colors">
      {img.label}
    </Typography>
  </Link>
);

export function AboutSnippet() {
  return (
    <Box component="section" className="py-24 md:py-32 bg-[#FAF9F6]">
      <Box className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <Box className="grid md:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Column */}
          <Box className="flex flex-col gap-12 lg:gap-24">
            <AnimatedContainer>
              <ImageBlock img={images[0]} />
            </AnimatedContainer>
            <AnimatedContainer delay={0.1}>
              <ImageBlock img={images[1]} />
            </AnimatedContainer>
          </Box>

          {/* Right Column */}
          <Box className="flex flex-col gap-12 lg:gap-24">

            {/* Text Block */}
            <AnimatedContainer delay={0.2} className="md:-mt-2">
              <Typography variant="h2" component="h2" className="font-serif text-[2.5rem] md:text-[3.2rem] text-ink-950 font-bold leading-[1.15] mb-8 tracking-tight">
                Crafting Excellence<br />
                Since 1977
              </Typography>

              <Box className="space-y-6 text-[1.05rem] leading-[1.7] font-medium max-w-[90%] text-ink-800">
                <Typography component="p">
                  As the premier Glass Suppliers in Tamil Nadu, we merge decades of architectural glass expertise with modern designs and the highest quality materials.
                </Typography>

                <Typography component="p">
                  Whether you are outfitting a luxury residence or a corporate high-rise, our premium glass solutions ensure durability, elegance, and unparalleled craftsmanship.
                </Typography>
              </Box>

              <Box className="mt-8">
                <Link
                  href="/about"
                  className="inline-block text-[15px] font-bold uppercase tracking-wider text-gold hover:text-gold-dark transition-colors"
                  style={{ borderBottom: '2px solid #C9A84C', paddingBottom: '2px' }}
                >
                  Learn more about us
                </Link>
              </Box>
            </AnimatedContainer>

            <AnimatedContainer delay={0.3}>
              <ImageBlock img={images[2]} />
            </AnimatedContainer>

            <AnimatedContainer delay={0.4}>
              <ImageBlock img={images[3]} />
            </AnimatedContainer>

          </Box>

        </Box>
      </Box>
    </Box>
  );
}
