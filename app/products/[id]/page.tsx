import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally fetch product data based on the ID
  const product = {
    id: params.id,
    name: "Wireless Earbuds Pro",
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.5,
    reviews: 128,
    description:
      "High-quality wireless earbuds with noise cancellation, water resistance, and long battery life. Perfect for workouts and everyday use.",
    features: [
      "Active Noise Cancellation",
      "Water and Sweat Resistant",
      "8 Hour Battery Life",
      "Wireless Charging Case",
      "Touch Controls",
    ],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-auto">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-medium">Product Details</h1>
          <div className="ml-auto">
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="relative aspect-square mb-6 bg-gray-100 rounded-lg overflow-hidden">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
          </div>

          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <div key={index} className="relative w-20 h-20 flex-shrink-0 border rounded-md overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">${product.price}</span>
              <span className="text-gray-500 line-through">${product.oldPrice}</span>
              <span className="text-sm text-red-500 font-medium">
                {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <div className="sticky bottom-16 z-10 w-full bg-white border-t p-4">
        <Button className="w-full">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>

      <MobileNavigation />
    </div>
  )
}
