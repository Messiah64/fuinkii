import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FŪINKII: The Artisan Minecraft Lantern | Limited to 50 Pieces",
  description:
    "Handcrafted 3D printed Minecraft lanterns made from sustainable materials. 16 hours of meticulous craftsmanship per piece. Limited to 50 pieces only - never to be repeated. Game-accurate design with warm amber LED lighting. Ships from Singapore.",
  keywords: [
    "Minecraft lantern",
    "3D printed",
    "handmade",
    "limited edition",
    "gaming collectible",
    "sustainable materials",
    "artisan crafted",
    "Singapore",
    "FŪINKII",
    "collector's item",
  ],
  authors: [{ name: "FŪINKII" }],
  creator: "FŪINKII",
  publisher: "FŪINKII",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://fuinkii.com",
    siteName: "FŪINKII",
    title: "FŪINKII: The Artisan Minecraft Lantern | Limited to 50 Pieces",
    description:
      "Handcrafted 3D printed Minecraft lanterns made from sustainable materials. 16 hours of meticulous craftsmanship per piece. Limited to 50 pieces only - never to be repeated.",
    images: [
      {
        url: "/images/lantern-collection.jpg",
        width: 1200,
        height: 630,
        alt: "FŪINKII Minecraft Lantern in gaming collection display - Limited to 50 pieces",
        type: "image/jpeg",
      },
      {
        url: "/images/lantern-hero.jpg",
        width: 800,
        height: 600,
        alt: "FŪINKII Artisan Minecraft Lantern - Handcrafted with sustainable materials",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fuinkii",
    creator: "@fuinkii",
    title: "FŪINKII: The Artisan Minecraft Lantern | Limited to 50 Pieces",
    description:
      "Handcrafted 3D printed Minecraft lanterns made from sustainable materials. 16 hours of meticulous craftsmanship per piece. Limited to 50 pieces only.",
    images: ["/images/lantern-collection.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Gaming Collectibles",
  classification: "Limited Edition Gaming Collectible",
  other: {
    "price:amount": "100",
    "price:currency": "SGD",
    "product:availability": "limited_quantity",
    "product:condition": "new",
    "product:brand": "FŪINKII",
    "product:category": "Gaming Collectibles",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#d97706" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "FŪINKII: The Artisan Minecraft Lantern",
              description:
                "Handcrafted 3D printed Minecraft lanterns made from sustainable materials. 16 hours of meticulous craftsmanship per piece. Limited to 50 pieces only.",
              brand: {
                "@type": "Brand",
                name: "FŪINKII",
              },
              offers: {
                "@type": "Offer",
                price: "100",
                priceCurrency: "SGD",
                availability: "https://schema.org/LimitedAvailability",
                itemCondition: "https://schema.org/NewCondition",
                url: "https://lantern.fillout.com/buy",
              },
              image: ["/images/lantern-collection.jpg", "/images/lantern-hero.jpg", "/images/lantern-ambient.jpg"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "4",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Limited Edition",
                  value: "50 pieces only",
                },
                {
                  "@type": "PropertyValue",
                  name: "Crafting Time",
                  value: "16 hours per piece",
                },
                {
                  "@type": "PropertyValue",
                  name: "Material",
                  value: "Sustainable corn and sugarcane waste",
                },
              ],
            }),
          }}
        />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/minecraft.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
