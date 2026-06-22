"use client";
import * as React from "react"
import { cn } from "@/lib/utils"
import { Card as MuiCard } from "@mui/material"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <MuiCard
      ref={ref as any}
      className={cn("rounded-xl border border-border bg-background text-foreground shadow-sm", className)}
      {...(props as any)}
    />
  )
)
Card.displayName = "Card"

export { Card }
