"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Box } from "@mui/material";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <Box
      className={cn(
        "glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300",
        hoverEffect && "hover:-translate-y-2 hover:border-brand-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]",
        className
      )}
      {...props}
    >
      <Box className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none" />
      {hoverEffect && (
        <Box className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <Box className="relative z-10">{children}</Box>
    </Box>
  );
}
