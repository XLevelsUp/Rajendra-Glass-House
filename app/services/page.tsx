"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "plywoods",
    title: "Premium Plywoods",
    subtitle: "Structural Integrity",
    desc: "Premium grade plywood for durable and aesthetic structural applications.",
    features: ["Boiling Water Proof (BWP)", "Termite Resistant", "High Load Bearing", "Smooth Surface Finish"],
    image: "https://images.unsplash.com/photo-1534015606478-f7b6058e3f94?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "glass-sheets",
    title: "Glass Sheets",
    subtitle: "Crystal Clear Quality",
    desc: "High-clarity standard glass sheets for general architectural use.",
    features: ["Distortion-free clarity", "Available in 2mm to 12mm", "Custom cut to size", "Smooth edges"],
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "designer-door-glass",
    title: "Designer Door Glass",
    subtitle: "Elegant Entrances",
    desc: "Elegant, customized door glass to make a grand entrance.",
    features: ["Acid Etched Designs", "Frosted Privacy Glass", "Beveled Edges", "Toughened Safety Options"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "floor-glass",
    title: "Floor Glass Sheet",
    subtitle: "Walk on Air",
    desc: "Ultra-strong structural glass designed specifically for luxury flooring.",
    features: ["Laminated Safety Glass", "Anti-slip coatings available", "Heavy load capacity", "Scratch resistant"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "wall-mirror",
    title: "Designer Wall Mirror",
    subtitle: "Expand Your Space",
    desc: "Bespoke, aesthetically pleasing mirrors that expand and brighten any space.",
    features: ["Copper-free backing", "Custom geometric cuts", "Antique and Tinted options", "Distortion-free reflection"],
    image: "https://images.unsplash.com/photo-1618220179428-22790b46a013?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "shower-enclosures",
    title: "Shower Enclosures",
    subtitle: "Luxury Bathrooms",
    desc: "Frameless and semi-frameless luxury glass shower cubicles.",
    features: ["Anti-stain coating", "Rust-proof 304 grade hardware", "Sliding or hinge doors", "Water-tight seals"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "wall-glass",
    title: "Wall Glass",
    subtitle: "Sleek Cladding",
    desc: "Sleek wall cladding glass for modern interior statements.",
    features: ["Lacquered Glass Colors", "Easy to clean", "Seamless joint installation", "Highly durable"],
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "float-glass",
    title: "Float Glass",
    subtitle: "Perfectly Flat",
    desc: "Perfectly flat and clear glass essential for windows and displays.",
    features: ["Uniform thickness", "High light transmission", "Flawless surface", "Versatile applications"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "figured-glass",
    title: "Figured Glass",
    subtitle: "Textured Privacy",
    desc: "Patterned glass allowing light transmission while maintaining privacy.",
    features: ["Multiple texture patterns", "Diffuses direct sunlight", "Enhances interior design", "Maintains natural light"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "reflective-glass",
    title: "Reflective Glass",
    subtitle: "Energy Efficiency",
    desc: "Energy-efficient glass reducing heat gain and glare for facades.",
    features: ["Solar control", "Mirror-like exterior finish", "UV protection", "Reduces cooling costs"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "bathroom-mirrors",
    title: "Bathroom Mirrors",
    subtitle: "Moisture Resistant",
    desc: "Moisture-resistant, high-definition mirrors for your vanity.",
    features: ["Anti-fog capabilities", "Corrosion resistant edges", "LED backlighting ready", "Perfect clarity"],
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "toughened-glass",
    title: "Toughened Glass",
    subtitle: "Safety & Strength",
    desc: "Up to 5x stronger than standard glass. Essential for facades and frameless doors.",
    features: ["Shatters into blunt pieces", "High thermal resistance", "Heavy duty strength", "Standard safety compliance"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "decorative-glass",
    title: "Decorative Glass",
    subtitle: "Artistic Touch",
    desc: "Frosted, etched, or tinted glass for specialized artistic applications.",
    features: ["Custom graphics", "Sandblasted designs", "Tinted colors", "Unique visual appeal"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
  }
];

const faqs = [
  { q: "Do you provide installation services?", a: "Yes, we have a dedicated team of expert installers for all our products across Coimbatore and surrounding regions." },
  { q: "Is your glass authentic Saint Gobain?", a: "Absolutely. We are an authorized dealer and provide genuine Saint Gobain glass with brand marking and warranty." },
  { q: "How long does a custom shower enclosure take?", a: "From final measurement to installation, it typically takes 5 to 7 working days depending on the complexity." },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-20">
      
      {/* Hero */}
      <section className="py-24 border-b border-ink-200 text-center bg-white relative overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-gold/5 blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimatedContainer>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Our Catalog</p>
            <h1 className="font-serif text-5xl md:text-7xl text-ink-950 font-bold mb-8 leading-[1.1]">
              Products & Services
            </h1>
            <p className="text-ink-600 text-lg max-w-2xl mx-auto font-medium">
              Explore our comprehensive range of 13 premium architectural solutions. 
              Find exactly what you need and request a custom quote instantly.
            </p>
          </AnimatedContainer>
        </div>
      </section>

      {/* Services List - One by One Alternating Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-32">
          {products.map((service, idx) => (
            <AnimatedContainer key={service.id} id={service.id}>
              <div className={cn("grid lg:grid-cols-2 gap-16 items-center", idx % 2 !== 0 && "lg:grid-cols-[1fr_1fr]")}>
                
                <div className={cn("order-2", idx % 2 !== 0 ? "lg:order-1" : "lg:order-2")}>
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-white shadow-sm border border-ink-100">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

                <div className={cn("order-1", idx % 2 !== 0 ? "lg:order-2" : "lg:order-1")}>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4 block">{service.subtitle}</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink-950 font-bold mb-6">{service.title}</h2>
                  <p className="text-ink-600 font-medium text-lg leading-relaxed mb-8">{service.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map(f => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                        <span className="text-sm text-ink-600 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center text-sm font-bold tracking-wide text-white bg-gold px-8 py-3.5 rounded-xl hover:bg-gold-dark hover:scale-105 transition-all shadow-md shadow-gold/20"
                  >
                    Request Quote
                  </Link>
                </div>
                
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-ink-200 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-ink-950 font-bold mb-4">Frequently Asked Questions</h2>
          </AnimatedContainer>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className="border border-ink-200 bg-[#F8FAFC] rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className={cn("font-semibold text-sm md:text-base pr-4 transition-colors", openFaq === i ? "text-gold" : "text-ink-900")}>
                      {faq.q}
                    </span>
                    <ChevronDown className={cn("w-5 h-5 text-ink-400 transition-transform duration-300 flex-shrink-0", openFaq === i && "rotate-180 text-gold")} />
                  </button>
                  <div className={cn("px-6 overflow-hidden transition-all duration-300", openFaq === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0")}>
                    <p className="text-ink-600 font-medium text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
