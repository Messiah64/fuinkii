"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Background layers */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-900 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent z-10"></div>
        <Image
          src="/images/minecraft-background.jpg"
          alt="Minecraft Background"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl space-y-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-minecraft-title text-amber-500 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            FŪINKII
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl font-minecraft-heading text-white/90 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Artisan Minecraft Lantern
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-minecraft-body text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            16 hours of handcrafted excellence. Made from sustainable materials. Limited to 50 pieces forever.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-black font-minecraft-body text-lg px-10 py-6 premium-glow"
            >
              <Link href="https://lantern.fillout.com/buy">BUY NOW — $100 SGD</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-600/50 text-amber-400 hover:bg-amber-600/10 hover:border-amber-600 font-minecraft-body text-lg px-10 py-6 backdrop-blur-sm"
            >
              <button
                onClick={() => {
                  const galleryElement = document.getElementById("gallery")
                  if (galleryElement) {
                    galleryElement.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                }}
              >
                See The Lantern
              </button>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-amber-600/60 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 bg-amber-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
