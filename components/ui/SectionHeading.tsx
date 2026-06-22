"use client";
import { cn } from "@/lib/utils";
import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
  return (
    <Box className={cn("mb-12", centered && "text-center", className)}>
      {subtitle && (
        <Typography component="span" className="text-brand-400 font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </Typography>
      )}
      <Typography variant="h2" component="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-500 tracking-tight">
        {title}
      </Typography>
      <Box className={cn("w-20 h-1 bg-brand-500 mt-6", centered && "mx-auto")} />
    </Box>
  );
}
