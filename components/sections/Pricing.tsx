"use client";
import * as React from "react"
import { PricingPlan } from "@/types"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Box, Typography } from "@mui/material";


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
    <Box component="section" id="pricing" className="py-24 bg-brand-50/50 dark:bg-brand-950/20">
      <Box className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Box className="text-center mb-16">
          <Typography variant="h2" component="h2" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, transparent pricing
          </Typography>
          <Typography component="p" className="max-w-2xl mx-auto text-lg text-foreground/70">
            Choose the plan that best fits your needs. No hidden fees.
          </Typography>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "p-8 relative",
                plan.isPopular ? "border-brand-500 shadow-lg md:-translate-y-4" : ""
              )}
            >
              {plan.isPopular && (
                <Box className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge variant="default" className="px-3 py-1 text-xs">
                    Most Popular
                  </Badge>
                </Box>
              )}
              <Box className="mb-8">
                <Typography variant="h3" component="h3" className="text-2xl font-bold mb-2">{plan.name}</Typography>
                <Typography component="p" className="text-foreground/60 text-sm h-10">{plan.description}</Typography>
                <Box className="mt-6 flex items-baseline gap-1">
                  <Typography component="span" className="text-4xl font-extrabold">{plan.price}</Typography>
                  {plan.price !== "Custom" && <Typography component="span" className="text-foreground/60">/month</Typography>}
                </Box>
              </Box>
              <Box component="ul" className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <Box component="li" key={i} className="flex items-center gap-3 text-foreground/80">
                    <Check className="h-5 w-5 text-brand-500 shrink-0" />
                    <Typography component="span">{feature}</Typography>
                  </Box>
                ))}
              </Box>
              <Button 
                variant={plan.isPopular ? "default" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
