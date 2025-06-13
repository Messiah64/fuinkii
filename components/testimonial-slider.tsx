"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Wei Ming L.",
    avatar: "W",
    role: "Minecraft Collector, Singapore",
    content:
      "The attention to detail is incredible. This lantern is the centerpiece of my gaming room now. The 16 hours of craftsmanship really shows - worth every penny!",
    rating: 5,
  },
  {
    name: "Priya S.",
    avatar: "P",
    role: "Interior Designer, Singapore",
    content:
      "I bought this for my client who's a gaming enthusiast. The sustainable materials and exceptional craftsmanship make it perfect for luxury gaming setups.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    avatar: "M",
    role: "Twitch Streamer, Singapore",
    content:
      "My viewers absolutely love this lantern in the background of my streams. The warm glow creates the perfect ambiance and the eco-friendly aspect is a huge plus.",
    rating: 5,
  },
  {
    name: "Li Hua C.",
    avatar: "L",
    role: "Tech Entrepreneur, Singapore",
    content:
      "As someone who appreciates both technology and sustainability, this lantern hits all the right notes. The corn and sugarcane materials are genius!",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="premium-carousel p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-500 fill-amber-500" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl font-minecraft-body text-gray-200 leading-relaxed max-w-3xl mx-auto">
              "{testimonials[current].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <Avatar className="h-16 w-16 border-2 border-amber-600">
                <AvatarFallback className="bg-amber-600 text-black font-minecraft-heading text-xl">
                  {testimonials[current].avatar}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-minecraft-heading text-lg text-amber-400">{testimonials[current].name}</p>
                <p className="font-minecraft-body text-sm text-gray-400">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 bg-gray-800/80 border-amber-600/30 hover:bg-amber-600/20 hover:border-amber-600 text-white rounded-full transition-all duration-300"
          onClick={prev}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 bg-gray-800/80 border-amber-600/30 hover:bg-amber-600/20 hover:border-amber-600 text-white rounded-full transition-all duration-300"
          onClick={next}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      {/* Testimonial indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-amber-600" : "w-2 bg-gray-600 hover:bg-amber-600/50"
            }`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
