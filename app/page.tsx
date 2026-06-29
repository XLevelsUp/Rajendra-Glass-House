import { Hero } from "@/components/sections/Hero";
import { BrandPartners } from "@/components/sections/BrandPartners";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ShowroomVideo } from "@/components/sections/ShowroomVideo";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajendra Glass House | Saint Gobain Glass in Coimbatore – Toughened Glass, Mirrors & Glass Partitions in RS Puram",
  description:
    "Rajendra Glass House is Coimbatore's trusted glass shop near RS Puram, offering Saint Gobain glass, toughened glass, LED mirrors, shower enclosures, glass railings & partitions. Call 098898 82014.",
  keywords: [
    "glass shop near me Coimbatore",
    "glass shop in Coimbatore",
    "best glass shop in Coimbatore",
    "glass dealers Coimbatore",
    "Saint Gobain glass dealer Coimbatore",
    "glass house Coimbatore",
    "glass shop RS Puram",
    "toughened glass",
    "bathroom mirror",
    "tempered glass",
    "glass doors Coimbatore"
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandPartners />
      <AboutSnippet />
      <ServicesGrid />
      <WhyChooseUs />
      <ShowroomVideo />
      <ProductGallery />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
