import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartStore } from '../store/cartStore'

export default function Header() {
  const items = useCartStore(state => state.items)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-boho-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-wider">
          <span className="text-boho-accent">Boho</span> Jewelry Co.
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:underline">Shop</Link>
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {totalItems}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
