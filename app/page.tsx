import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Pickaxe, ChevronRight, Clock, Package, Sparkles, Leaf, Diamond, Hammer, Recycle } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import ParallaxHero from "@/components/parallax-hero"
import PixelatedText from "@/components/pixelated-text"
import ProductGallery from "@/components/product-gallery"
import TestimonialSlider from "@/components/testimonial-slider"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <ParallaxHero />

      {/* Limited Edition Banner */}
      <div className="bg-amber-600 text-black py-4 px-4 text-center">
        <p className="text-sm md:text-base font-minecraft-body animate-pulse">
          🚨 LIMITED TO 50 PIECES ONLY — HANDMADE, NEVER REPEATED 🚨
        </p>
      </div>

      {/* Main Product Section */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-amber-600 text-black font-minecraft-body text-sm px-4 py-2">
              EXCLUSIVE COLLECTION
            </Badge>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-minecraft-title leading-tight">
                FŪINKII:
                <br />
                <span className="text-amber-500">The Artisan</span>
                <br />
                <span className="text-amber-400">Minecraft Lantern</span>
              </h1>

              <div className="flex items-center gap-3 text-lg md:text-xl font-minecraft-body text-gray-300">
                <Hammer className="text-amber-600 flex-shrink-0" size={24} />
                <span>Crafted by 3D printer with precision. Finished by hand. Owned by legends.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-black font-minecraft-body text-lg px-8 py-6 premium-glow"
              >
                <Link href="https://lantern.fillout.com/buy">BUY NOW — $100 SGD</Link>
              </Button>
              <div className="flex items-center gap-3 bg-gray-800/80 p-4 rounded-lg border border-amber-600/20">
                <Clock className="text-amber-600 flex-shrink-0" />
                <CountdownTimer />
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 p-6 rounded-xl border border-amber-600/20">
              <p className="text-amber-500 font-minecraft-heading text-lg mb-2">ONLY 50 EXIST. EVER.</p>
              <p className="font-minecraft-body text-gray-300">No restocks. No reruns. No second chances.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-amber-600/20 blur-3xl rounded-full"></div>
            <div className="relative z-10 premium-image">
              <Image
                src="/images/lantern-hero.jpg"
                alt="FŪINKII Minecraft Lantern"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-minecraft-title text-amber-500">
              <PixelatedText>The Story</PixelatedText>
            </h2>

            <div className="space-y-6 font-minecraft-body text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                In a world where mass production dominates, we asked ourselves:
                <span className="text-amber-400"> What if we could bring the digital realm into reality?</span>
              </p>

              <p>
                FŪINKII was born from a simple belief — that the objects we surround ourselves with should tell a story.
                Each lantern represents the bridge between the virtual worlds we love and the physical spaces we
                inhabit.
              </p>

              <p>
                This isn't just about recreating a Minecraft block. It's about{" "}
                <span className="text-amber-400">honoring the craft</span>,
                <span className="text-amber-400"> respecting our planet</span>, and creating something that will be
                treasured for generations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="text-black" size={28} />
                </div>
                <h3 className="font-minecraft-heading text-xl text-amber-400">16 Hours</h3>
                <p className="font-minecraft-body text-sm text-gray-400">Per lantern, handcrafted with precision</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto">
                  <Recycle className="text-black" size={28} />
                </div>
                <h3 className="font-minecraft-heading text-xl text-amber-400">100% Sustainable</h3>
                <p className="font-minecraft-body text-sm text-gray-400">Made from corn & sugarcane waste</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto">
                  <Diamond className="text-black" size={28} />
                </div>
                <h3 className="font-minecraft-heading text-xl text-amber-400">Limited Forever</h3>
                <p className="font-minecraft-body text-sm text-gray-400">Only 50 will ever exist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-minecraft-title text-center mb-16 text-amber-500">
            <PixelatedText>Craftsmanship in Every Block</PixelatedText>
          </h2>
          <ProductGallery />
        </div>
      </section>

      {/* Handmade & Sustainable Focus */}
      <section className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-minecraft-title text-amber-500">
                <PixelatedText>Handmade Excellence</PixelatedText>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-minecraft-heading text-xl mb-2">16 Hours of Dedication</h3>
                    <p className="font-minecraft-body text-gray-300">
                      Each component is meticulously manufactured individually. From the initial 3D print to the final
                      hand-finishing touches, every lantern receives 16 hours of focused craftsmanship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-minecraft-heading text-xl mb-2">Planet-First Materials</h3>
                    <p className="font-minecraft-body text-gray-300">
                      Crafted entirely from repurposed sugarcane and corn waste. Zero plastic, maximum impact. We
                      believe luxury shouldn't come at the planet's expense.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-minecraft-heading text-xl mb-2">Robotic Precision + Human Touch</h3>
                    <p className="font-minecraft-body text-gray-300">
                      3D printed with robotic precision, then hand-finished for that tactile, artisanal feel. The
                      perfect marriage of technology and traditional craftsmanship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-amber-600/20 blur-2xl rounded-full"></div>
              <div className="relative z-10 premium-image">
                <Image
                  src="/images/lantern-craftsmanship.jpg"
                  alt="Handcrafted FŪINKII Lantern Detail"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-minecraft-title text-center mb-16 text-amber-500">
          <PixelatedText>What You're Getting</PixelatedText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 border-amber-600/30 overflow-hidden group hover:border-amber-600/60 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-14 w-14 bg-amber-600 text-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Pickaxe size={28} />
              </div>
              <h3 className="text-xl font-minecraft-heading mb-3 text-amber-400">Game-Accurate Design</h3>
              <p className="font-minecraft-body text-gray-300 leading-relaxed">
                Game-accurate, yet artistically elevated to bring the digital fantasy into your physical space.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 border-amber-600/30 overflow-hidden group hover:border-amber-600/60 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-14 w-14 bg-amber-600 text-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-minecraft-heading mb-3 text-amber-400">Enchanting Light</h3>
              <p className="font-minecraft-body text-gray-300 leading-relaxed">
                Soft, warm amber LED with an enchanting pixel flicker that brings the Minecraft atmosphere to life.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 border-amber-600/30 overflow-hidden group hover:border-amber-600/60 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-14 w-14 bg-amber-600 text-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package size={28} />
              </div>
              <h3 className="text-xl font-minecraft-heading mb-3 text-amber-400">Premium Packaging</h3>
              <p className="font-minecraft-body text-gray-300 leading-relaxed">
                Individually numbered, foam-cushioned collectible box with a discreet Fūinkii seal of authenticity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-gray-900/80 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-minecraft-title text-center mb-16 text-amber-500">
            <PixelatedText>The Details</PixelatedText>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-amber-600 rounded-lg flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-minecraft-heading text-lg text-amber-400 mb-1">Size</h3>
                    <p className="font-minecraft-body text-gray-300">
                      Actual Lantern Dimensions from Minecraft, rendered in 3D form
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-amber-600 rounded-lg flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-minecraft-heading text-lg text-amber-400 mb-1">Weight</h3>
                    <p className="font-minecraft-body text-gray-300">
                      Hefty enough to feel premium, light enough to move
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-amber-600 rounded-lg flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-minecraft-heading text-lg text-amber-400 mb-1">Lighting</h3>
                    <p className="font-minecraft-body text-gray-300">
                      Soft, warm amber LED with an enchanting pixel flicker
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-amber-600 rounded-lg flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-minecraft-heading text-lg text-amber-400 mb-1">Power</h3>
                    <p className="font-minecraft-body text-gray-300">USB high quality 2.5m long cable included</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-amber-600 rounded-lg flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-minecraft-heading text-lg text-amber-400 mb-1">Branding</h3>
                    <p className="font-minecraft-body text-gray-300">Discreet Fūinkii seal of authenticity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-amber-600/20 blur-2xl rounded-full"></div>
              <div className="relative z-10 premium-image">
                <Image
                  src="/images/lantern-details.jpg"
                  alt="FŪINKII Minecraft Lantern Details"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-minecraft-title text-center mb-16 text-amber-500">
          <PixelatedText>What Legends Are Saying</PixelatedText>
        </h2>
        <TestimonialSlider />
      </section>

      {/* Ownership Statement */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-500 text-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-minecraft-title mb-8">
            <PixelatedText>What it Means to Own a Fūinkii</PixelatedText>
          </h2>
          <p className="text-lg md:text-xl font-minecraft-body mb-16 max-w-3xl mx-auto leading-relaxed">
            To buy a Fūinkii isn't to buy an object — it's to own a digital fantasy brought to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-amber-700/30 p-8 rounded-xl backdrop-blur-sm">
              <Sparkles className="h-16 w-16 mx-auto mb-4" />
              <h3 className="font-minecraft-heading text-lg mb-2">Curate your space with meaning</h3>
            </div>
            <div className="bg-amber-700/30 p-8 rounded-xl backdrop-blur-sm">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center text-4xl">🧠</div>
              <h3 className="font-minecraft-heading text-lg mb-2">Choose art, not mass production</h3>
            </div>
            <div className="bg-amber-700/30 p-8 rounded-xl backdrop-blur-sm">
              <Leaf className="h-16 w-16 mx-auto mb-4" />
              <h3 className="font-minecraft-heading text-lg mb-2">Support sustainability, not superficiality</h3>
            </div>
            <div className="bg-amber-700/30 p-8 rounded-xl backdrop-blur-sm">
              <Diamond className="h-16 w-16 mx-auto mb-4" />
              <h3 className="font-minecraft-heading text-lg mb-2">Own what only 49 others will ever have</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-minecraft-title text-amber-500 mb-6">
            <PixelatedText>This isn't decor.</PixelatedText>
          </h2>
          <p className="text-xl md:text-2xl font-minecraft-body mb-12">
            This is a collectible relic for the gamer generation.
          </p>

          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 p-10 rounded-2xl border border-amber-600/30 mb-8">
            <p className="text-amber-500 font-minecraft-heading text-xl mb-4">ONLY 50 EXIST. EVER.</p>
            <p className="font-minecraft-body text-gray-300 mb-8">No restocks. No reruns. No second chances.</p>
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-black font-minecraft-body text-xl px-12 py-8 premium-glow"
            >
              <Link href="https://lantern.fillout.com/buy" className="flex items-center gap-3">
                SECURE YOURS NOW <ChevronRight size={24} />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-minecraft-body text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Package size={16} />
              <span>Ships SG</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Limited Release</span>
            </div>
            <div className="flex items-center gap-2">
              <Diamond size={16} />
              <span>Price: $100 SGD</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
