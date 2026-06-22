"use client";

import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { Box } from "@mui/material";

interface AnimatedContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedContainer({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialVariant = shouldReduceMotion 
    ? { opacity: 1, x: 0, y: 0 } 
    : { opacity: 0, ...directionOffset[direction] };
    
  const whileInViewVariant = { opacity: 1, x: 0, y: 0 };
  
  const transition = shouldReduceMotion 
    ? { duration: 0 } 
    : { duration: 0.7, delay, ease: "easeOut" };

  return (
    <Box
      component={motion.div}
      initial={initialVariant}
      whileInView={whileInViewVariant}
      viewport={{ once: true, margin: "-100px" }}
      transition={transition}
      className={cn(className)}
      {...(props as any)}
    >
      {children}
    </Box>
  );
}
