import * as React from "react"
import { PricingPlan } from "@/types"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small side projects and startups.",
    features: ["Up to 5 projects", "Basic analytics", "24-hour support response time", "Custom domains"],
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing teams that need more power.",
    features: ["Unlimited projects", "Advanced analytics", "1-hour support response time", "Custom domains", "Team collaboration"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations.",
    features: ["Everything in Pro", "Dedicated success manager", "SLA guarantee", "Custom integrations", "SSO"],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-50/50 dark:bg-brand-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Choose the plan that best fits your needs. No hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "p-8 relative",
                plan.isPopular ? "border-brand-500 shadow-lg md:-translate-y-4" : ""
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge variant="default" className="px-3 py-1 text-xs">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm h-10">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-foreground/60">/month</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <Check className="h-5 w-5 text-brand-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.isPopular ? "default" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
