"use client";
import * as React from "react"
import { Button } from "@/components/ui/Button"
import { Box, Typography } from "@mui/material";


export function CTA() {
  return (
    <Box component="section" className="py-24 relative overflow-hidden">
      <Box className="absolute inset-0 bg-brand-600 dark:bg-brand-900" />
      <Box className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Box className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <Typography variant="h2" component="h2" className="text-3xl font-bold tracking-tight text-brand-500 sm:text-4xl lg:text-5xl mb-6">
          Ready to supercharge your workflow?
        </Typography>
        <Typography component="p" className="max-w-2xl mx-auto text-xl text-brand-100 mb-10">
          Join thousands of developers building the future of the web. Start your free trial today.
        </Typography>
        <Box className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="default" className="w-full sm:w-auto bg-brand-500 text-brand-900 hover:bg-brand-50 dark:bg-brand-500 dark:text-brand-900 dark:hover:bg-brand-50">
            Get Started for Free
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-brand-500 border-white hover:bg-brand-500/10 dark:text-brand-500 dark:border-white dark:hover:bg-brand-500/10">
            Talk to Sales
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
