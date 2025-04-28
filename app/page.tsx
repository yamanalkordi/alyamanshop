import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ProductCategories } from "@/components/product-categories"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="text-xl font-bold">
            ElectroStore
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-6 bg-gray-50">
          <div className="container px-4">
            <h1 className="mb-6 text-2xl font-bold">Welcome to ElectroStore</h1>
            <div className="relative h-40 overflow-hidden rounded-lg mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center p-6">
                <div className="text-white">
                  <h2 className="text-xl font-bold mb-2">Summer Sale</h2>
                  <p className="mb-4">Up to 40% off on selected items</p>
                  <Button size="sm" variant="secondary">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>

            <ProductCategories />

            <div className="mt-8">
              <h2 className="mb-4 text-xl font-bold">Featured Products</h2>
              <FeaturedProducts />
            </div>
          </div>
        </section>
      </main>

      <MobileNavigation />
    </div>
  )
}
