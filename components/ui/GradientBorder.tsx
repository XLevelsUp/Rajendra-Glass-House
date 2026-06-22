"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Box } from "@mui/material";

export function GradientBorder({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <Box className={cn("relative p-[1px] rounded-2xl overflow-hidden group", containerClassName)}>
      <Box className="absolute inset-0 bg-gradient-to-r from-brand-400 via-brand-200 to-brand-600 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      <Box className={cn("relative h-full w-full bg-dark-900 rounded-2xl", className)}>
        {children}
      </Box>
    </Box>
  );
}
