import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Rajendra Glass House – Coimbatore's Trusted Glass Dealers Since 1977",
  description:
    "Learn the story of Rajendra Glass House — Coimbatore's most trusted glass shop since 1977. Authorised Saint Gobain glass dealer and leading glass supplier across Tamil Nadu.",
  keywords: [
    "glass shop in Coimbatore",
    "Saint Gobain glass dealer Coimbatore",
    "glass dealers Coimbatore",
    "glass house Coimbatore",
    "glass suppliers Tamil Nadu",
    "Rajendra Glass House",
  ],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
