"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";

const products = [
  { name: "Premium Plywoods", icon: "🪵" },
  { name: "Glass Doors Coimbatore", icon: "🚪" },
  { name: "Tempered Glass", icon: "🛡️" },
  { name: "Glass Partition", icon: "🏢" },
  { name: "Wall Mirror", icon: "🪞" },
  { name: "Shower Enclosure", icon: "🚿" },
  { name: "Glass Railing", icon: "🪜" },
  { name: "Float Glass", icon: "💠" },
  { name: "LED Mirror", icon: "💡" },
  { name: "Bathroom Mirror", icon: "🛁" },
  { name: "Toughened Glass", icon: "🔨" },
  { name: "Decorative Glass", icon: "🌟" },
  { name: "Glass Sheets", icon: "🪟" },
];

export function ProductsGrid() {
  return (
    <section id="products" className="py-24 bg-ink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedContainer delay={0.1}>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink-950 mb-6">
              Our Products
            </h2>
          </AnimatedContainer>
          <AnimatedContainer delay={0.2}>
            <p className="text-ink-600 text-lg">
              Explore our extensive collection of premium glass and plywood solutions, engineered for both aesthetic brilliance and structural durability.
            </p>
          </AnimatedContainer>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {products.map((product, index) => (
            <AnimatedContainer
              key={product.name}
              delay={0.1 + (index * 0.05)}
              className="w-[calc(50%-0.5rem)] sm:w-[200px] lg:w-[220px]"
            >
              <Link href={`/contact?service=${encodeURIComponent(product.name)}`} className="block h-full">
                <div className="group modern-glass bg-white flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-ink-100 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full cursor-pointer">
                  <span className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                    {product.icon}
                  </span>
                  <h3 className="font-semibold text-ink-900 group-hover:text-gold-dark transition-colors">
                    {product.name}
                  </h3>
                </div>
              </Link>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
