"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ } from "@/components/sections/FAQ";
import { Box, Typography } from "@mui/material";


const products = [
  {
    id: "glass-sheets",
    title: "Glass Sheets",
    subtitle: "Crystal Clear Quality",
    desc: "High-clarity standard glass sheets for general architectural use.",
    features: ["Distortion-free clarity", "Available in 2mm to 12mm", "Custom cut to size", "Smooth edges"],
    image: "/services/glass-sheets.webp"
  },
  {
    id: "designer-door-glass",
    title: "Designer Door Glass",
    subtitle: "Elegant Entrances",
    desc: "Elegant, customized glass doors in Coimbatore to make a grand entrance for your home or office.",
    features: ["Acid Etched Designs", "Frosted Privacy Glass", "Beveled Edges", "Toughened Safety Options"],
    image: "/services/designer-door-glass.webp"
  },
  {
    id: "floor-glass",
    title: "Floor Glass Sheet",
    subtitle: "Walk on Air",
    desc: "Ultra-strong structural glass designed specifically for luxury flooring.",
    features: ["Laminated Safety Glass", "Anti-slip coatings available", "Heavy load capacity", "Scratch resistant"],
    image: "/services/floor-glass-sheet.webp"
  },
  {
    id: "wall-mirror",
    title: "Designer Wall Mirror",
    subtitle: "Expand Your Space",
    desc: "Bespoke, aesthetically pleasing wall mirror installations that expand and brighten any space.",
    features: ["Copper-free backing", "Custom geometric cuts", "Antique and Tinted options", "Distortion-free reflection"],
    image: "/services/designer-wall-mirror.webp"
  },
  {
    id: "shower-enclosures",
    title: "Shower Enclosure",
    subtitle: "Luxury Bathrooms",
    desc: "Frameless and semi-frameless luxury glass shower enclosure and cubicles.",
    features: ["Anti-stain coating", "Rust-proof 304 grade hardware", "Sliding or hinge doors", "Water-tight seals"],
    image: "/services/shower-enclosures.webp"
  },
  {
    id: "glass-partition",
    title: "Glass Partition",
    subtitle: "Modern Office & Home",
    desc: "Sleek and professional glass partition systems for offices and residential spaces.",
    features: ["Soundproof options", "Frameless designs", "Frosted or clear", "Highly durable"],
    image: "/services/glass-partition.webp"
  },
  {
    id: "float-glass",
    title: "Float Glass",
    subtitle: "Perfectly Flat",
    desc: "Perfectly flat and clear glass essential for windows and displays.",
    features: ["Uniform thickness", "High light transmission", "Flawless surface", "Versatile applications"],
    image: "/services/float-glass.webp"
  },
  {
    id: "figured-glass",
    title: "Figured Glass",
    subtitle: "Textured Privacy",
    desc: "Patterned glass allowing light transmission while maintaining privacy.",
    features: ["Multiple texture patterns", "Diffuses direct sunlight", "Enhances interior design", "Maintains natural light"],
    image: "/services/figured-glass-mandala.webp"
  },
  {
    id: "reflective-glass",
    title: "Reflective Glass",
    subtitle: "Energy Efficiency",
    desc: "Energy-efficient glass reducing heat gain and glare for facades.",
    features: ["Solar control", "Mirror-like exterior finish", "UV protection", "Reduces cooling costs"],
    image: "/services/reflective-glass.webp"
  },
  {
    id: "bathroom-mirrors",
    title: "Bathroom Mirror",
    subtitle: "Moisture Resistant",
    desc: "Moisture-resistant bathroom mirror and smart LED mirror options for your vanity.",
    features: ["Anti-fog capabilities", "LED mirror backlighting", "Corrosion resistant edges", "Perfect clarity"],
    image: "/services/bathroom-mirror.webp"
  },
  {
    id: "toughened-glass",
    title: "Toughened Glass",
    subtitle: "Safety & Strength",
    desc: "Up to 5x stronger tempered glass. Essential for facades, partitions, and doors.",
    features: ["Shatters into blunt pieces", "High thermal resistance", "Heavy duty strength", "Standard safety compliance"],
    image: "/services/toughened-glass.webp"
  },
  {
    id: "glass-railing",
    title: "Glass Railing",
    subtitle: "Unobstructed Views",
    desc: "Premium frameless glass railing systems for balconies and staircases.",
    features: ["SGP Laminated Glass", "Stainless steel hardware", "Seamless views", "Architectural grade safety"],
    image: "/services/glass-railing.webp"
  },
  {
    id: "decorative-glass",
    title: "Decorative Glass",
    subtitle: "Artistic Touch",
    desc: "Frosted, etched, or tinted glass for specialized artistic applications.",
    features: ["Custom graphics", "Sandblasted designs", "Tinted colors", "Unique visual appeal"],
    image: "/services/decorative-glass.webp"
  },
  {
    id: "glass-blocks",
    title: "Glass Blocks",
    subtitle: "Architectural Elements",
    desc: "Aesthetic and functional glass blocks perfect for partitions, decorative walls, and allowing natural light while maintaining privacy.",
    features: ["High light transmission", "Thermal and sound insulation", "Durable and secure", "Various patterns and colors"],
    image: "/services/glass-blocks.webp"
  },
  {
    id: "led-smart-mirrors",
    title: "LED Smart Mirrors",
    subtitle: "Modern Illumination",
    desc: "Premium LED smart mirrors featuring integrated lighting, touch controls, and anti-fog technology for a luxurious experience.",
    features: ["Integrated LED lighting", "Touch sensor controls", "Anti-fog functionality", "Energy efficient"],
    image: "/services/led-smart-mirrors.webp"
  }
];

export default function ServicesPage() {
  return (
    <Box className="bg-[#F8FAFC] min-h-screen pt-20">

      {/* Hero */}
      <Box component="section" className="py-24 border-b border-ink-200 text-center bg-white relative overflow-hidden">
        <Box className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-gold/5 blur-[100px]" />
        <Box className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimatedContainer>
            <Typography component="p" className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Our Catalog</Typography>
            <Typography variant="h1" component="h1" className="font-serif text-5xl md:text-7xl text-ink-950 font-bold mb-8 leading-[1.1] tracking-tight">
              Products & Services
            </Typography>
            <Typography component="p" className="text-ink-600 text-lg max-w-2xl mx-auto font-medium">
              Explore our comprehensive range of premium architectural solutions. As the leading glass suppliers Tamil Nadu trusts, we offer expert installation and custom glass cutting in Coimbatore for any project size.
            </Typography>
          </AnimatedContainer>
        </Box>
      </Box>

      {/* Services List - One by One Alternating Layout */}
      <Box component="section" className="py-24">
        <Box className="max-w-7xl mx-auto px-6 lg:px-10 space-y-32">
          {products.map((service, idx) => (
            <Box key={service.id} id={service.id} className={cn("grid lg:grid-cols-2 gap-16 items-center", idx % 2 !== 0 && "lg:grid-cols-[1fr_1fr]")}>

                <AnimatedContainer 
                  direction={idx % 2 === 0 ? "left" : "right"}
                  delay={0.1}
                  className={cn("order-2", idx % 2 !== 0 ? "lg:order-1" : "lg:order-2")}
                >
                  <Box className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-ink-100 group">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx === 0}
                      className="object-contain group-hover:scale-105 transition-transform duration-700" 
                    />
                  </Box>
                </AnimatedContainer>

                <AnimatedContainer 
                  direction={idx % 2 === 0 ? "right" : "left"}
                  delay={0.3}
                  className={cn("order-1", idx % 2 !== 0 ? "lg:order-2" : "lg:order-1")}
                >
                  <Typography component="span" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">{service.subtitle}</Typography>
                  <Typography variant="h2" component="h2" className="font-serif text-3xl md:text-4xl text-ink-950 font-bold mb-6">{service.title}</Typography>
                  <Typography component="p" className="text-ink-600 font-medium text-lg leading-relaxed mb-8">{service.desc}</Typography>

                  <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map(f => (
                      <Box key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                        <Typography component="span" className="text-sm text-ink-600 font-medium">{f}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    aria-label={`Request quote for ${service.title}`}
                    className="inline-flex items-center text-sm font-bold tracking-wide text-ink-950 bg-gold px-8 py-3.5 rounded-xl hover:bg-gold-dark hover:scale-105 transition-all shadow-md shadow-gold/20"
                  >
                    Request Quote
                  </Link>
                </AnimatedContainer>

            </Box>
          ))}
        </Box>
      </Box>

      <FAQ />
    </Box>
  );
}
