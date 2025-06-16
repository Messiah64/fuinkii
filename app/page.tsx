import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Pickaxe, ChevronRight, Clock, Package, Sparkles, Leaf, Diamond, Palette, Hammer, Recycle } from "lucide-react"
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
                <span>Meticulously engineered. Masterfully finished. Exclusively yours.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-black font-minecraft-body text-lg px-8 py-6 shadow-2xl border-2 border-amber-500 hover:border-amber-400 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="https://lantern.fillout.com/buy">ACQUIRE YOURS — $80 SGD</Link>
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
                quality={65}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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
                In an era of mass production and disposable goods, we dared to ask:
                <span className="text-amber-400">
                  {" "}
                  What if we could manifest digital dreams into tangible masterpieces?
                </span>
              </p>

              <p>
                FŪINKII emerged from an unwavering philosophy — that true luxury lies not in excess, but in
                <span className="text-amber-400"> uncompromising craftsmanship</span>. Each lantern is a testament to
                the marriage between virtual inspiration and physical perfection.
              </p>

              <p>
                This transcends mere recreation. This is about{" "}
                <span className="text-amber-400">honoring the artisan's touch</span>,
                <span className="text-amber-400"> championing sustainable luxury</span>, and creating heirloom pieces
                that will be treasured across generations.
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
                    <h3 className="font-minecraft-heading text-xl mb-2">16 Hours of Artisan Devotion</h3>
                    <p className="font-minecraft-body text-gray-300">
                      Every component undergoes meticulous individual crafting. From precision 3D fabrication to the
                      final hand-polished details, each lantern receives a full 16 hours of undivided artisan attention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-minecraft-heading text-xl mb-2">Consciously Luxurious Materials</h3>
                    <p className="font-minecraft-body text-gray-300">
                      Exclusively crafted from premium repurposed sugarcane and corn biomass. Zero compromise on
                      quality, zero impact on conscience. True luxury respects both craft and planet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-minecraft-heading text-xl mb-2">Precision Engineering + Artisan Soul</h3>
                    <p className="font-minecraft-body text-gray-300">
                      Born from robotic precision, elevated by human mastery. Each piece embodies the perfect synthesis
                      of technological excellence and time-honored craftsmanship traditions.
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
                  loading="lazy"
                  quality={60}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
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
                Pixel-perfect authenticity, elevated to museum-quality artistry. Where digital fantasy meets physical
                perfection.
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
                Bespoke amber illumination with signature pixel-flicker technology that transforms any space into an
                enchanted realm.
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
                Museum-grade presentation in individually numbered, archival-quality packaging with certificate of
                authenticity.
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
                  loading="lazy"
                  quality={60}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
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
            To acquire a Fūinkii is to possess more than an object — it is to own a piece of digital history,
            transformed through artisan mastery into tangible luxury.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-amber-700/30 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
              <Sparkles className="h-16 w-16 mx-auto mb-4" />
              <h3 className="font-minecraft-heading text-lg mb-2">Curate your space with meaning</h3>
              <p className="font-minecraft-body text-sm opacity-80">
                Curate your sanctuary with pieces that command respect and spark conversation.
              </p>
            </div>

            <div className="bg-amber-700/30 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
              <Palette className="h-16 w-16 mx-auto mb-4" />
              <h3 className="font-minecraft-heading text-lg mb-2">Choose art, not mass production</h3>
              <p className="font-minecraft-body text-sm opacity-80">
                Invest in singular artistry over soulless mass production — each piece bears the maker's signature.
              </p>
            </div>

            <div className="bg-amber-700/30 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
              <Leaf className="h-16 w-16 mx-auto mb-4" />
              <h3 className="font-minecraft-heading text-lg mb-2">Support sustainability, not superficiality</h3>
              <p className="font-minecraft-body text-sm opacity-80">
                Champion conscious luxury crafted from premium sustainable biomaterials with natural pigmentation.
              </p>
            </div>

            <div className="bg-amber-700/30 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
              <Diamond className="h-16 w-16 mx-auto mb-4" />
              <h3 className="font-minecraft-heading text-lg mb-2">Own what only 49 others ever will</h3>
              <p className="font-minecraft-body text-sm opacity-80">
                Join an exclusive circle of 50 collectors worldwide — a privilege that can never be replicated.
              </p>
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
              className="bg-amber-600 hover:bg-amber-700 text-black font-minecraft-body text-xl px-12 py-8 shadow-2xl border-2 border-amber-500 hover:border-amber-400 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="https://lantern.fillout.com/buy" className="flex items-center gap-3">
                CLAIM YOUR MASTERPIECE — $80 SGD <ChevronRight size={24} />
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
              <span>Price: $80 SGD</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
