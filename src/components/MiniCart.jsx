import React from 'react'
    import { useCartStore } from '../store/cartStore'
    import { Link } from 'react-router-dom'

    export default function MiniCart() {
      const items = useCartStore(state => state.items)
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

      return (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm">Cart ({totalItems})</span>
            <Link 
              to="/cart"
              className="bg-boho-accent text-white px-3 py-1 rounded-full text-sm"
            >
              View Cart
            </Link>
          </div>
        </div>
      )
    }
