"use client";
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button as MuiButton } from "@mui/material"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-500 text-dark-900 hover:bg-brand-400 font-semibold shadow-[0_0_15px_rgba(194,164,68,0.3)] hover:shadow-[0_0_25px_rgba(194,164,68,0.5)] transition-all duration-300",
        outline: "border border-brand-500 bg-transparent hover:bg-brand-500/10 text-brand-500 transition-all duration-300",
        ghost: "hover:bg-brand-500/10 hover:text-brand-400 text-gray-200 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <MuiButton
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as any}
        {...(props as any)}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
