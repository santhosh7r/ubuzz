"use client"
import React, { useEffect, useRef } from "react"
import { motion, animate, useInView, useMotionValue, useTransform } from "framer-motion"

export function AnimatedNumber({ value, suffix, decimals = 0 }: { value: number, suffix?: string, decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => 
    parseFloat(latest.toFixed(decimals)).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + (suffix || "")
  );

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, value, count, decimals, suffix]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
