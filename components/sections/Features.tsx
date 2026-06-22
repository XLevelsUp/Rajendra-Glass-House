"use client";
import * as React from "react"
import { Feature } from "@/types"
import { Zap, Shield, Smartphone, Globe } from "lucide-react"
import { Box, Typography } from "@mui/material";


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
    <Box component="section" id="features" className="py-24 bg-brand-50/50 dark:bg-brand-950/20">
      <Box className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Box className="text-center mb-16">
          <Typography variant="h2" component="h2" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to scale
          </Typography>
          <Typography component="p" className="max-w-2xl mx-auto text-lg text-foreground/70">
            Our platform provides all the tools necessary to build, deploy, and scale your application effortlessly.
          </Typography>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Box key={index} className="flex flex-col items-start p-6 bg-background rounded-2xl border border-border shadow-sm">
                <Box className="p-3 bg-brand-100 dark:bg-brand-900 rounded-lg mb-4 text-brand-600 dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </Box>
                <Typography variant="h3" component="h3" className="text-xl font-semibold mb-2">{feature.title}</Typography>
                <Typography component="p" className="text-foreground/70">{feature.description}</Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
