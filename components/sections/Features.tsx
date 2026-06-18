import * as React from "react"
import { Feature } from "@/types"
import { Zap, Shield, Smartphone, Globe } from "lucide-react"

const features: Feature[] = [
  {
    title: "Lightning Fast",
    description: "Built on Next.js 14 App Router for incredible page load speeds and optimal core web vitals.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security built into the core, protecting your users and their data.",
    icon: Shield,
  },
  {
    title: "Mobile Optimized",
    description: "Flawless responsive design that looks perfect on any device, from phones to desktops.",
    icon: Smartphone,
  },
  {
    title: "Global Edge Network",
    description: "Deploy globally to the edge for minimal latency no matter where your users are.",
    icon: Globe,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-brand-50/50 dark:bg-brand-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to scale
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Our platform provides all the tools necessary to build, deploy, and scale your application effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-start p-6 bg-background rounded-2xl border border-border shadow-sm">
                <div className="p-3 bg-brand-100 dark:bg-brand-900 rounded-lg mb-4 text-brand-600 dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
