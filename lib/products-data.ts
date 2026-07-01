// ─────────────────────────────────────────────────────────────────────────────
// GLASS PRODUCTS CATALOGUE — Master Data File
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO CHANGE / ADD A PRODUCT IMAGE:
//   1. Drop your image file into /public/services/ or any /public/ subfolder
//   2. Update the `images` array: images: ["/services/my-product.webp"]
//   3. Save — the dev server hot-reloads automatically.
//   Multiple images: images: ["/services/img1.webp", "/services/img2.webp"]
// ─────────────────────────────────────────────────────────────────────────────

export type Spec = { label: string; value: string };

export type SubCategory = { id: string; label: string };

export type Category = {
  id: string;
  label: string;
  subCategories: SubCategory[];
};

export type Product = {
  id: string;
  categoryId: string;
  subCategoryId: string;
  name: string;
  description: string;
  specs: Spec[];
  images: string[];
  imageFit?: "contain" | "cover";
};

// ─── CATEGORIES ───────────────────────────────────────────────────────────────

export const CATEGORIES: Category[] = [
  {
    id: "plain",
    label: "Plain Glass",
    subCategories: [
      { id: "clear", label: "Clear" },
      { id: "tinted", label: "Tinted" },
      { id: "one-way", label: "One Way" },
    ],
  },
  {
    id: "mirror",
    label: "Mirror",
    subCategories: [
      { id: "normal", label: "Normal" },
      { id: "coloured", label: "Coloured" },
      { id: "grooved", label: "Grooved" },
    ],
  },
  {
    id: "pattern",
    label: "Pattern Glass",
    subCategories: [
      { id: "figured", label: "Figured / Patterned" },
    ],
  },
  {
    id: "toughened",
    label: "Toughened / Safety",
    subCategories: [
      { id: "annealed", label: "Annealed" },
      { id: "tempered", label: "Tempered" },
      { id: "laminated", label: "Laminated" },
    ],
  },
  {
    id: "decorative",
    label: "Decorative Glass",
    subCategories: [
      { id: "led-mirror", label: "LED Mirror" },
      { id: "bend", label: "Bend Glass" },
      { id: "lacquered", label: "Lacquered" },
    ],
  },
  {
    id: "other",
    label: "Other Products",
    subCategories: [
      { id: "blocks", label: "Glass Blocks" },
      { id: "vetropieno", label: "Vetropieno Brick" },
      { id: "murals", label: "Glass Murals" },
    ],
  },
];

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  // ── PLAIN GLASS ──────────────────────────────────────────────────────────
  {
    id: "clear-float-glass",
    categoryId: "plain",
    subCategoryId: "clear",
    name: "Clear Float Glass",
    description: "Optically flat, high-clarity float glass for windows, doors, and general architectural use. Distortion-free surface with excellent light transmission.",
    specs: [
      { label: "Thickness", value: "2 mm – 12 mm" },
      { label: "Light Transmission", value: "Up to 90%" },
      { label: "Finish", value: "Smooth, polished" },
      { label: "Use Case", value: "Windows, doors, shelves" },
    ],
    images: ["/products/float-glass1.webp", "/products/floatglass2.webp", "/products/float-glass3.webp", "/products/float-glass4.webp"],
  },
  {
    id: "clear-glass-sheets",
    categoryId: "plain",
    subCategoryId: "clear",
    name: "Glass Sheets",
    description: "Standard clear glass sheets available in custom cut-to-size dimensions. Ideal for furniture, display cases, and framing.",
    specs: [
      { label: "Thickness", value: "3 mm – 10 mm" },
      { label: "Cut", value: "Custom to size" },
      { label: "Surface", value: "Smooth edges" },
      { label: "Use Case", value: "Furniture, displays, frames" },
    ],
    images: ["/products/glass-sheets1.webp", "/products/glass-sheets2.webp"],
  },
  {
    id: "tinted-glass",
    categoryId: "plain",
    subCategoryId: "tinted",
    name: "Tinted Glass",
    description: "Body-tinted glass in bronze, grey, blue and green shades. Reduces solar heat gain while adding aesthetic character to facades.",
    specs: [
      { label: "Shades", value: "Bronze, Grey, Blue, Green" },
      { label: "Thickness", value: "4 mm – 12 mm" },
      { label: "Solar Control", value: "Reduces heat gain" },
      { label: "Use Case", value: "Windows, facades, partitions" },
    ],
    images: ["/products/tinted-glass1.webp", "/products/tinted-glass2.webp", "/products/tinted-glass3.webp"],
  },
  {
    id: "one-way-glass",
    categoryId: "plain",
    subCategoryId: "one-way",
    name: "One-Way Reflective Glass",
    description: "Mirror-like exterior with clear visibility from inside. Perfect for privacy, office facades, and security applications.",
    specs: [
      { label: "Visibility", value: "One-way (inside view)" },
      { label: "Reflectivity", value: "High exterior mirror" },
      { label: "UV Protection", value: "Yes" },
      { label: "Use Case", value: "Office facades, security" },
    ],
    images: ["/products/oneway-glass1.webp", "/products/oneway-glass2.webp", "/products/oneway-glass3.webp"],
    imageFit: "contain",
  },

  // ── MIRROR ───────────────────────────────────────────────────────────────
  {
    id: "designer-mirror",
    categoryId: "mirror",
    subCategoryId: "normal",
    name: "Designer Mirror",
    description: "Bespoke wall mirrors with copper-free backing for lasting clarity. Custom geometric cuts to elevate any interior space.",
    specs: [
      { label: "Backing", value: "Copper-free, rust-proof" },
      { label: "Thickness", value: "4 mm – 6 mm" },
      { label: "Finish", value: "Silver / Antique" },
      { label: "Use Case", value: "Living rooms, hotels, gyms" },
    ],
    images: ["/products/designer-mirror1.webp", "/products/designer-mirror2.webp", "/products/designer-mirror3.webp"],
    imageFit: "contain",
  },
  {
    id: "bathroom-mirror",
    categoryId: "mirror",
    subCategoryId: "normal",
    name: "Bathroom Mirror",
    description: "Moisture-resistant bathroom mirrors with corrosion-proof edges and optional LED backlighting.",
    specs: [
      { label: "Resistance", value: "Moisture & humidity" },
      { label: "Options", value: "Plain / LED / Anti-fog" },
      { label: "Edge", value: "Polished / bevelled" },
      { label: "Use Case", value: "Bathrooms, vanities" },
    ],
    images: ["/products/bathroom-mirror1.webp", "/products/bathroom-mirror2.webp"],
    imageFit: "contain",
  },
  {
    id: "coloured-mirror",
    categoryId: "mirror",
    subCategoryId: "coloured",
    name: "Coloured / Tinted Mirror",
    description: "Mirrors with tinted backing in bronze, grey, rose gold and more — a distinctive statement for any interior.",
    specs: [
      { label: "Colours", value: "Bronze, Grey, Rose Gold" },
      { label: "Thickness", value: "4 mm – 6 mm" },
      { label: "Finish", value: "Tinted reflective" },
      { label: "Use Case", value: "Accent walls, salons, retail" },
    ],
    images: ["/products/color-mirror1.webp", "/products/color-mirror2.webp"],
  },
  {
    id: "grooved-mirror",
    categoryId: "mirror",
    subCategoryId: "grooved",
    name: "Grooved / Etched Mirror",
    description: "Decorative mirrors with precision-cut grooves or sandblasted etched patterns. Custom designs available.",
    specs: [
      { label: "Pattern", value: "Custom groove / etched" },
      { label: "Finish", value: "Frosted / clear combo" },
      { label: "Custom Design", value: "Yes" },
      { label: "Use Case", value: "Feature walls, lobbies" },
    ],
    images: ["/products/groove1.webp", "/products/groove2.webp"],
  },

  // ── PATTERN GLASS ─────────────────────────────────────────────────────────
  {
    id: "figured-glass",
    categoryId: "pattern",
    subCategoryId: "figured",
    name: "Figured / Patterned Glass",
    description: "Textured glass that diffuses light beautifully while maintaining privacy. Available in multiple patterns.",
    specs: [
      { label: "Patterns", value: "Flora, Delta, Wired, Reeded" },
      { label: "Thickness", value: "4 mm – 6 mm" },
      { label: "Privacy", value: "Semi-opaque" },
      { label: "Use Case", value: "Bathrooms, doors, partitions" },
    ],
    images: ["/products/pattern1.webp", "/products/pattern2.webp", "/products/pattern3.webp", "/products/pattern4.webp"],
  },

  // ── TOUGHENED / SAFETY GLASS ──────────────────────────────────────────────
  {
    id: "annealed-glass",
    categoryId: "toughened",
    subCategoryId: "annealed",
    name: "Annealed Glass",
    description: "Standard annealed float glass — the base for further processing such as toughening or laminating.",
    specs: [
      { label: "Thickness", value: "3 mm – 19 mm" },
      { label: "Processing", value: "Base for toughening" },
      { label: "Strength", value: "Standard" },
      { label: "Use Case", value: "Interior, low-risk glazing" },
    ],
    images: ["/products/annealed1.webp", "/products/annealed2.webp"],
  },
  {
    id: "tempered-glass",
    categoryId: "toughened",
    subCategoryId: "tempered",
    name: "Toughened / Tempered Glass",
    description: "Up to 5× stronger than standard glass. Shatters into blunt granules — the safety standard for doors and railings.",
    specs: [
      { label: "Strength", value: "5× standard glass" },
      { label: "Thickness", value: "4 mm – 19 mm" },
      { label: "Break Pattern", value: "Blunt granules (safe)" },
      { label: "Use Case", value: "Doors, facades, railings" },
    ],
    images: ["/products/tough1.webp", "/products/tough2.webp", "/products/tough3.webp", "/products/tough4.webp", "/products/tough5.webp", "/products/tough6.webp", "/products/tough7.webp"],
  },
  {
    id: "laminated-glass",
    categoryId: "toughened",
    subCategoryId: "laminated",
    name: "Laminated Safety Glass",
    description: "Two panes bonded with a PVB interlayer — stays intact when broken. Preferred for skylights and structural glazing.",
    specs: [
      { label: "Interlayer", value: "PVB / SGP" },
      { label: "Thickness", value: "6.4 mm – 25 mm" },
      { label: "Break Pattern", value: "Holds together" },
      { label: "Use Case", value: "Skylights, canopies, floors" },
    ],
    images: ["/products/laminated1.webp", "/products/laminated2.webp", "/products/laminated3.webp"],
  },

  // ── DECORATIVE GLASS ─────────────────────────────────────────────────────
  {
    id: "led-sensor-mirror",
    categoryId: "decorative",
    subCategoryId: "led-mirror",
    name: "LED Sensor Mirror",
    description: "Premium smart mirrors with integrated LED lighting, touch and motion sensor controls, and anti-fog technology for luxury spaces.",
    specs: [
      { label: "Lighting", value: "Integrated LED strip" },
      { label: "Control", value: "Touch / motion sensor" },
      { label: "Anti-fog", value: "Yes" },
      { label: "Use Case", value: "Luxury bathrooms, hotels" },
    ],
    images: ["/products/led-miror1.webp", "/products/led-mirror2.webp"],
  },
  {
    id: "bend-glass",
    categoryId: "decorative",
    subCategoryId: "bend",
    name: "Bend Glass",
    description: "Precision-curved glass for architectural features, curved partitions, display cases, and bespoke furniture applications.",
    specs: [
      { label: "Radius", value: "Custom curve" },
      { label: "Thickness", value: "4 mm – 12 mm" },
      { label: "Processing", value: "Heat-bent / cold-bent" },
      { label: "Use Case", value: "Facades, display, furniture" },
    ],
    images: ["/products/bend-glass1.webp"],
  },
  {
    id: "lacquered-glass",
    categoryId: "decorative",
    subCategoryId: "lacquered",
    name: "Lacquered Glass",
    description: "Back-painted glass with a high-gloss lacquered finish in any RAL or custom colour. Opaque, vibrant, and easy to clean.",
    specs: [
      { label: "Colours", value: "Any RAL / custom" },
      { label: "Finish", value: "High-gloss lacquer" },
      { label: "Thickness", value: "4 mm – 10 mm" },
      { label: "Use Case", value: "Kitchen splashbacks, feature walls" },
    ],
    images: ["/products/lacquered1.webp", "/products/lacquered2.webp",],
  },

  // ── OTHER GLASS PRODUCTS ──────────────────────────────────────────────────
  {
    id: "glass-blocks",
    categoryId: "other",
    subCategoryId: "blocks",
    name: "Glass Blocks",
    description: "Solid glass blocks for decorative walls, partitions, and light-diffusing architectural features. Thermal and acoustic insulation included.",
    specs: [
      { label: "Sizes", value: "190×190 / 240×240 mm" },
      { label: "Light Transmission", value: "High" },
      { label: "Insulation", value: "Thermal & acoustic" },
      { label: "Use Case", value: "Feature walls, bathrooms" },
    ],
    images: ["/products/glassblock1.webp", "/products/glassblock2.webp"],
  },
  {
    id: "vetropieno-glass-brick",
    categoryId: "other",
    subCategoryId: "vetropieno",
    name: "Vetropieno Glass Brick",
    description: "Full solid glass bricks — heavy-duty transparent architectural elements with exceptional light diffusion for luxury applications.",
    specs: [
      { label: "Type", value: "Full solid glass" },
      { label: "Light", value: "Maximum diffusion" },
      { label: "Finish", value: "Polished edges" },
      { label: "Use Case", value: "Luxury walls, facades, floors" },
    ],
    images: ["/products/vetropieno1.webp", "/products/vetropieno2.webp"],
  },
  {
    id: "decorative-mural-glass",
    categoryId: "other",
    subCategoryId: "murals",
    name: "Decorative & Mural Glass",
    description: "Frosted, etched, or digitally printed glass for artistic and branding applications. Custom graphics printed directly on glass.",
    specs: [
      { label: "Techniques", value: "Digital print / sandblast" },
      { label: "Custom Design", value: "Yes" },
      { label: "Substrate", value: "Clear or frosted base" },
      { label: "Use Case", value: "Feature walls, branding, art" },
    ],
    images: ["/services/decorative-glass.webp"],
  },
];
