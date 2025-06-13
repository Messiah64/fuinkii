"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/images/lantern-collection.jpg",
    alt: "FŪINKII Minecraft Lantern in gaming collection display",
    caption: "Perfect centerpiece for your gaming collection setup",
  },
  {
    src: "/images/lantern-ambient.jpg",
    alt: "FŪINKII Minecraft Lantern close-up with ambient lighting",
    caption: "Precision crafted with meticulous attention to detail",
  },
  {
    src: "/images/lantern-crystal.jpg",
    alt: "FŪINKII Minecraft Lantern with crystal pyramid",
    caption: "Creates a magical ambiance in any space",
  },
  {
    src: "/images/lantern-corner.jpg",
    alt: "FŪINKII Minecraft Lantern corner construction detail",
    caption: "Robust construction with premium materials",
  },
  {
    src: "/images/lantern-flowers.jpg",
    alt: "FŪINKII Minecraft Lantern surrounded by flowers",
    caption: "Elegant design that complements any aesthetic",
  },
]

export default function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div id="gallery" className="relative max-w-5xl mx-auto">
      {/* Main carousel container */}
      <div className="premium-carousel p-8">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative aspect-[16/10]"
            >
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-contain premium-glow"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/60 border-amber-600/50 hover:bg-amber-600/20 hover:border-amber-600 text-white rounded-full backdrop-blur-md transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/60 border-amber-600/50 hover:bg-amber-600/20 hover:border-amber-600 text-white rounded-full backdrop-blur-md transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>

          {/* Image counter */}
          <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-amber-600/30">
            <span className="font-minecraft-body text-sm text-amber-400">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-6">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-minecraft-body text-lg text-gray-300"
          >
            {images[currentIndex].caption}
          </motion.p>
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex justify-center mt-8 gap-3 px-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? "border-amber-600 scale-110"
                : "border-gray-600 hover:border-amber-600/50 opacity-70 hover:opacity-100"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-amber-600" : "w-4 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
