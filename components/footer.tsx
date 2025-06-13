import Link from "next/link"
import { Pickaxe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Pickaxe className="h-6 w-6 text-amber-600 mr-2" />
              <span className="font-minecraft text-xl">FŪINKII</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Where gaming meets gallery.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="font-minecraft text-sm mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#gallery" className="hover:text-amber-600">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Specifications
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-minecraft text-sm mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-minecraft text-sm mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Fūinkii. All rights reserved.</p>
          <p className="mt-2">Made with passion for the gaming community. Not affiliated with Mojang or Microsoft.</p>
        </div>
      </div>
    </footer>
  )
}
