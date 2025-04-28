import Link from "next/link"
import { Home, Search, ShoppingBag, Heart, User } from "lucide-react"

export function MobileNavigation() {
  return (
    <div className="sticky bottom-0 z-10 w-full bg-white border-t">
      <div className="grid grid-cols-5 h-16">
        <Link href="/" className="flex flex-col items-center justify-center text-xs">
          <Home className="w-5 h-5 mb-1" />
          <span>Home</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center justify-center text-xs">
          <Search className="w-5 h-5 mb-1" />
          <span>Search</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center justify-center text-xs">
          <ShoppingBag className="w-5 h-5 mb-1" />
          <span>Cart</span>
        </Link>
        <Link href="/wishlist" className="flex flex-col items-center justify-center text-xs">
          <Heart className="w-5 h-5 mb-1" />
          <span>Wishlist</span>
        </Link>
        <Link href="/account" className="flex flex-col items-center justify-center text-xs">
          <User className="w-5 h-5 mb-1" />
          <span>Account</span>
        </Link>
      </div>
    </div>
  )
}
