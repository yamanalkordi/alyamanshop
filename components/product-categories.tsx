import Link from "next/link"
import { Smartphone, Laptop, Headphones, Watch } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function ProductCategories() {
  const categories = [
    {
      name: "Phones",
      icon: <Smartphone className="w-6 h-6" />,
      href: "/category/phones",
    },
    {
      name: "Laptops",
      icon: <Laptop className="w-6 h-6" />,
      href: "/category/laptops",
    },
    {
      name: "Audio",
      icon: <Headphones className="w-6 h-6" />,
      href: "/category/audio",
    },
    {
      name: "Wearables",
      icon: <Watch className="w-6 h-6" />,
      href: "/category/wearables",
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-2">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <Card className="transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center justify-center p-3 text-center">
              {category.icon}
              <span className="mt-2 text-sm">{category.name}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
