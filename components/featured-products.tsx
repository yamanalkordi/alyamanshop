import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 79.99,
      image: "/placeholder.svg?height=200&width=200",
      discount: true,
      oldPrice: 99.99,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image: "/placeholder.svg?height=200&width=200",
      discount: false,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "/placeholder.svg?height=200&width=200",
      discount: true,
      oldPrice: 79.99,
    },
    {
      id: 4,
      name: "Power Bank",
      price: 39.99,
      image: "/placeholder.svg?height=200&width=200",
      discount: false,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-square">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.discount && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium truncate">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold">${product.price}</span>
                {product.discount && <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
