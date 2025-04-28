import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function SearchPage() {
  const recentSearches = ["wireless earbuds", "smart watch", "bluetooth speaker"]

  const popularProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 79.99,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Power Bank",
      price: 39.99,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-2">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search products..." className="pl-9 h-10 w-full" />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">Recent Searches</h2>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search) => (
                <Button key={search} variant="outline" size="sm">
                  {search}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">Popular Products</h2>
            <div className="space-y-4">
              {popularProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="flex gap-4 p-2 rounded-lg hover:bg-gray-50">
                    <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-500">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation />
    </div>
  )
}
