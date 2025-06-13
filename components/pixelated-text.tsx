"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface PixelatedTextProps {
  children: ReactNode
}

export default function PixelatedText({ children }: PixelatedTextProps) {
  return (
    <motion.span
      initial={{ filter: "blur(4px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}
