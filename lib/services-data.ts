// ─────────────────────────────────────────────────────────────────────────────
// GLASS SERVICES CATALOGUE — Master Data File
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO CHANGE / ADD A SERVICE IMAGE:
//   1. Drop your image into /public/services/ (any subfolder works too)
//   2. Update the `images` array: images: ["/services/my-image.webp"]
//   3. Save — hot-reloads automatically.
//   Multiple images: images: ["/services/img1.webp", "/services/img2.webp"]
// ─────────────────────────────────────────────────────────────────────────────

export type Spec = { label: string; value: string };

export type ServiceCategory = "residential" | "commercial" | "both";

export type Service = {
  id: string;
  categoryId: ServiceCategory;
  name: string;
  description: string;
  specs: Spec[];
  images: string[];
};

export type FinishingService = {
  id: string;
  icon: string; // Lucide icon name
  name: string;
  description: string;
};

// ─── SERVICES ─────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  // ─── RESIDENTIAL SERVICES ─────────────────────────────────────────────────────
  {
    id: "frameless-balcony-railing",
    categoryId: "residential",
    name: "Frameless Balcony Railing",
    description:
      "Ultra-minimal frameless balcony glass with standoff or channel-fixed systems. The cleanest modern look for premium residential projects.",
    specs: [
      { label: "System", value: "Standoff / channel fixed" },
      { label: "Thickness", value: "15 mm – 19 mm" },
      { label: "Finish", value: "Full transparency" },
      { label: "Application", value: "Premium villas, penthouses" },
    ],
    images: ["/services/glass-railing.webp"],
  },
  {
    id: "villa-staircase-glass",
    categoryId: "residential",
    name: "Villa Staircase Glass",
    description:
      "Full-height glass staircase panels for luxury villas. Custom-cut toughened glass with polished or bevelled edges and designer fittings.",
    specs: [
      { label: "Glass Type", value: "Toughened / Laminated" },
      { label: "Edge Finish", value: "Polished / bevelled" },
      { label: "Custom Cut", value: "Yes" },
      { label: "Application", value: "Luxury villas" },
    ],
    images: ["/services/glass-railing.webp"],
  },
  {
    id: "luxury-shower-enclosure",
    categoryId: "residential",
    name: "Luxury Shower Enclosure",
    description:
      "Bespoke frameless shower enclosures with ultra-clear low-iron glass and concealed fittings. The pinnacle of bathroom luxury.",
    specs: [
      { label: "Glass", value: "Low-iron ultra-clear" },
      { label: "Thickness", value: "10 mm – 12 mm" },
      { label: "Door", value: "Frameless pivot / inline" },
      { label: "Application", value: "Luxury bathrooms, hotels" },
    ],
    images: ["/services/shower-enclosures.webp"],
  },
  {
    id: "smart-led-mirror",
    categoryId: "residential",
    name: "Smart LED Mirror Installation",
    description:
      "Professional supply and installation of LED smart mirrors with touch controls, anti-fog heating, and ambient lighting.",
    specs: [
      { label: "Lighting", value: "Warm / cool / daylight" },
      { label: "Features", value: "Touch sensor, anti-fog" },
      { label: "Custom Size", value: "Yes" },
      { label: "Application", value: "Bathrooms, dressing rooms" },
    ],
    images: ["/services/led-smart-mirrors.webp"],
  },
  {
    id: "gym-mirror-walls",
    categoryId: "residential",
    name: "Gym Mirror Walls",
    description:
      "Full-wall gym mirrors with safety backing and shatterproof lamination. Floor-to-ceiling installation with minimal fixings.",
    specs: [
      { label: "Backing", value: "Safety film (shatterproof)" },
      { label: "Thickness", value: "4 mm – 6 mm" },
      { label: "Fixings", value: "Minimal / frameless" },
      { label: "Application", value: "Home gyms, fitness studios" },
    ],
    images: ["/services/designer-wall-mirror.webp"],
  },
  {
    id: "glass-block-feature-wall",
    categoryId: "residential",
    name: "Glass Block Feature Wall",
    description:
      "Decorative glass block walls for interior spaces — diffuse natural light while maintaining privacy and visual interest.",
    specs: [
      { label: "Block Size", value: "190×190 / 240×240 mm" },
      { label: "Light", value: "High diffusion" },
      { label: "Custom Pattern", value: "Yes" },
      { label: "Application", value: "Feature walls, partitions" },
    ],
    images: ["/services/glass-blocks.webp"],
  },
  {
    id: "lacquered-glass-res",
    categoryId: "residential",
    name: "Lacquered Glass Installation",
    description:
      "Modern back-painted kitchen splashbacks, wardrobe glass doors, and writing boards using premium opaque coloured glass.",
    specs: [
      { label: "Colours", value: "RAL palette / custom shades" },
      { label: "Finish", value: "High-gloss opaque" },
      { label: "Applications", value: "Kitchen, wardrobe, wall panels" },
      { label: "Safety", value: "Optional safety backing" },
    ],
    images: ["/services/decorative-glass.webp"],
  },
  {
    id: "wall-mirror-res",
    categoryId: "residential",
    name: "Custom Wall Mirrors",
    description:
      "Tailor-made silver, bronze, and antique mirrors designed and installed to expand visual depth and brighten home spaces.",
    specs: [
      { label: "Types", value: "Silver, Bronze, Grey, Antique" },
      { label: "Edges", value: "Bevelled, flat-polished" },
      { label: "Lamination", value: "Safety film backing included" },
      { label: "Application", value: "Dining, living rooms, foyers" },
    ],
    images: ["/services/designer-wall-mirror.webp"],
  },
  {
    id: "glass-pillars-res",
    categoryId: "residential",
    name: "Decorative Glass Pillars",
    description:
      "Aesthetic structural & semi-structural glass pillars, textured bubbles, and crystal-finish columns for partition accent lines.",
    specs: [
      { label: "Style", value: "Bubble column / solid crystal" },
      { label: "Diameter", value: "50 mm – 150 mm custom" },
      { label: "Lighting", value: "Integrated LED compatible" },
      { label: "Application", value: "Pooja rooms, foyer dividers" },
    ],
    images: ["/services/glass-blocks.webp"],
  },
  {
    id: "glass-pergola-installation",
    categoryId: "both",
    name: "Glass Pergola Installation",
    description:
      "Toughened laminated glass canopy systems for outdoor decks, open sit-outs, and balconies. Superior safety under high structural loads.",
    specs: [
      { label: "Glass Type", value: "Clear / Tinted Laminated" },
      { label: "Thickness", value: "11.5 mm – 17.5 mm SGP" },
      { label: "Structure", value: "Mild steel / aluminum alloy" },
      { label: "Application", value: "Terraces, porticos, sit-outs" },
    ],
    images: ["/services/glass-partition.webp"],
  },

  // ─── COMMERCIAL SERVICES ──────────────────────────────────────────────────
  {
    id: "structural-glazing",
    categoryId: "commercial",
    name: "Structural Glazing",
    description:
      "High-performance structural glazing systems for commercial facades, curtain walls, and feature elevations. Full supply and installation.",
    specs: [
      { label: "System", value: "SSG / DGU curtain wall" },
      { label: "Glass Type", value: "Low-E / reflective" },
      { label: "Thermal", value: "High insulation" },
      { label: "Application", value: "Office towers, facades" },
    ],
    images: ["/services/reflective-glass.webp"],
  },
  {
    id: "spider-fitting",
    categoryId: "commercial",
    name: "Spider Fitting Glazing",
    description:
      "Cantilevered spider fitting glass systems for dramatic frameless facades. Maximum transparency with structural integrity.",
    specs: [
      { label: "Fitting Type", value: "4-arm / 2-arm spider" },
      { label: "Glass", value: "Toughened / laminated" },
      { label: "Thickness", value: "10 mm – 19 mm" },
      { label: "Application", value: "Showrooms, lobbies" },
    ],
    images: ["/services/glass-partition.webp"],
  },
  {
    id: "automatic-sensor-glass",
    categoryId: "commercial",
    name: "Automatic Sensor Doors",
    description:
      "Automatic sliding glass door systems with sensor activation. Toughened safety glass with aluminium or stainless steel frames.",
    specs: [
      { label: "Activation", value: "Motion / presence sensor" },
      { label: "Glass", value: "Toughened safety" },
      { label: "Frame", value: "Aluminium / SS" },
      { label: "Application", value: "Retail, offices, hospitals" },
    ],
    images: ["/services/glass-partition.webp"],
  },
  {
    id: "executive-office-partitions",
    categoryId: "commercial",
    name: "Executive Office Partitions",
    description:
      "Floor-to-ceiling frameless glass office partitions with acoustic glazing options. Single and double-glazed configurations.",
    specs: [
      { label: "Frame", value: "Frameless / slim-frame" },
      { label: "Acoustic", value: "Up to 42 dB" },
      { label: "Glass Options", value: "Clear / frosted / tinted" },
      { label: "Application", value: "Offices, boardrooms" },
    ],
    images: ["/services/glass-partition.webp"],
  },
  {
    id: "showroom-facade",
    categoryId: "commercial",
    name: "Showroom Facade",
    description:
      "Large-span structural glass facades for retail and commercial showrooms. Floor-to-ceiling vision glass panels with minimal framing for maximum display impact.",
    specs: [
      { label: "Glass Size", value: "Custom large-format" },
      { label: "System", value: "Structural / spider" },
      { label: "UV Control", value: "Solar control coating" },
      { label: "Application", value: "Showrooms, commercial fronts" },
    ],
    images: ["/services/reflective-glass.webp"],
  },
  {
    id: "hotel-lobby-skylight",
    categoryId: "commercial",
    name: "Hotel Lobby Skylight",
    description:
      "Bespoke glass skylight systems for hotel lobbies and atriums. Laminated safety glass with thermal control coatings and aluminium framework.",
    specs: [
      { label: "Glass Type", value: "Laminated / DGU" },
      { label: "Thermal", value: "Solar control coating" },
      { label: "Frame", value: "Aluminium / steel" },
      { label: "Application", value: "Hotels, atriums, malls" },
    ],
    images: ["/services/floor-glass-sheet.webp"],
  },
  {
    id: "restaurant-glass-partition",
    categoryId: "commercial",
    name: "Restaurant Glass Partition",
    description:
      "Elegant glass partitions for restaurant space dividers, bar fronts, and wine display walls. Frosted or clear options with decorative film.",
    specs: [
      { label: "Style", value: "Frameless / framed" },
      { label: "Glass", value: "Clear / frosted / patterned" },
      { label: "Decorative Film", value: "Optional" },
      { label: "Application", value: "Restaurants, bars, cafes" },
    ],
    images: ["/services/glass-partition.webp"],
  },
];

// ─── FINISHING / CRAFT SERVICES ───────────────────────────────────────────────

export const FINISHING_SERVICES: FinishingService[] = [
  {
    id: "glass-colouring",
    icon: "Palette",
    name: "Glass Colouring",
    description: "Back-painted & tinted glass in any custom colour.",
  },
  {
    id: "glass-etching",
    icon: "Pen",
    name: "Glass Etching",
    description: "Precision sandblasted etching for decorative patterns.",
  },
  {
    id: "acid-finish",
    icon: "Droplets",
    name: "Acid Finish on Glass",
    description: "Uniform satin acid-etched finish for privacy and elegance.",
  },
  {
    id: "glass-bevelling",
    icon: "Diamond",
    name: "Glass Bevelling",
    description: "Angled polished edges for mirrors and decorative panels.",
  },
  {
    id: "glass-polishing",
    icon: "Sparkles",
    name: "Glass Polishing",
    description: "Machine & hand polishing for flawless, scratch-free edges.",
  },
  {
    id: "template-cutting",
    icon: "Scissors",
    name: "Template Cutting",
    description: "Custom-shape cutting from templates for bespoke glass panels.",
  },
  {
    id: "toughened-fitting",
    icon: "ShieldCheck",
    name: "Toughened Glass Fitting",
    description: "Expert on-site fitting of toughened & safety glass.",
  },
];
