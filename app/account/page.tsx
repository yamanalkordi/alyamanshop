import Link from "next/link"
import { ArrowLeft, ChevronRight, CreditCard, HelpCircle, LogOut, Settings, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function AccountPage() {
  const menuItems = [
    {
      icon: <User className="w-5 h-5" />,
      label: "Personal Information",
      href: "/account/personal-info",
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      label: "My Orders",
      href: "/account/orders",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      label: "Payment Methods",
      href: "/account/payment",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      href: "/account/settings",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Help & Support",
      href: "/account/support",
    },
    {
      icon: <LogOut className="w-5 h-5" />,
      label: "Logout",
      href: "/logout",
      danger: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-auto">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-medium">My Account</h1>
          <div className="ml-auto w-10"></div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6">
            <Avatar className="w-16 h-16 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold text-lg">John Doe</h2>
              <p className="text-gray-500">john.doe@example.com</p>
            </div>
          </div>

          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <div
                  className={`flex items-center justify-between p-4 rounded-lg border ${item.danger ? "text-red-500" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <MobileNavigation />
    </div>
  )
}
