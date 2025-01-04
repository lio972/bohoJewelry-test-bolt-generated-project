import React from 'react'
    import { useCartStore } from '../store/cartStore'

    export default function Cart() {
      const { items, removeItem, clearCart } = useCartStore(state => ({
        items: state.items,
        removeItem: state.removeItem,
        clearCart: state.clearCart
      }))

      const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-serif font-bold mb-8">Your Cart</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            e.target.src = 'https://placehold.co/100?text=Image+Not+Available'
                          }}
                        />
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">${item.price} x {item.quantity}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Total</h3>
                    <p className="text-xl">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="mt-4 space-x-2">
                    <button
                      onClick={clearCart}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                    >
                      Clear Cart
                    </button>
                    <button
                      onClick={() => alert('Checkout functionality coming soon!')}
                      className="bg-boho-accent text-white px-4 py-2 rounded hover:bg-opacity-90"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )
    }
