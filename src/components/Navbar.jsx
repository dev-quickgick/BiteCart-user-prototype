'use client'

import { Link } from "react-router-dom"
import { ShoppingCart, Clock, HelpCircle, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Navbar() {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-[#E84E1B]">BiteCart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative hover:bg-orange-50">
                <ShoppingCart className="h-5 w-5 mr-2 text-[#8B4513]" />
                <span className="text-[#8B4513]">Cart</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#E84E1B] text-[10px] font-medium text-white flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/previous-orders">
              <Button variant="ghost" size="sm" className="hover:bg-orange-50">
                <Clock className="h-5 w-5 mr-2 text-[#8B4513]" />
                <span className="text-[#8B4513]">Orders</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="hover:bg-orange-50">
              <HelpCircle className="h-5 w-5 mr-2 text-[#8B4513]" />
              <span className="text-[#8B4513]">Help</span>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Cart - Always Visible on Mobile */}
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative hover:bg-orange-50">
                <ShoppingCart className="h-5 w-5 text-[#8B4513]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#E84E1B] text-[10px] font-medium text-white flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-orange-50">
                  <Menu className="h-5 w-5 text-[#8B4513]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l-orange-100">
                <SheetHeader>
                  <SheetTitle className="text-left text-[#E84E1B]">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/previous-orders" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" size="lg" className="w-full justify-start hover:bg-orange-50">
                      <Clock className="h-5 w-5 mr-2 text-[#8B4513]" />
                      <span className="text-[#8B4513]">Previous Orders</span>
                    </Button>
                  </Link>
                  <Button variant="ghost" size="lg" className="w-full justify-start hover:bg-orange-50">
                    <HelpCircle className="h-5 w-5 mr-2 text-[#8B4513]" />
                    <span className="text-[#8B4513]">Help & Support</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

