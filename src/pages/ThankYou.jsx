import React from 'react'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-serif font-bold mb-4">Thank You!</h1>
      <p className="text-xl mb-8">Your order has been successfully placed.</p>
      <Link 
        to="/"
        className="bg-boho-accent text-white px-6 py-3 rounded-full hover:bg-opacity-90"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
