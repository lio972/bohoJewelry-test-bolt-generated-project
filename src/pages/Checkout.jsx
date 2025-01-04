import React, { useState } from 'react'
import { useCartStore } from '../store/cartStore'
import { products } from '../data/products'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const navigate = useNavigate()
  const { items, clearCart } = useCartStore()
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  })

  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  // Get related products for upsell/cross-sell
  const relatedProducts = products
    .filter(p => !items.some(i => i.id === p.id))
    .slice(0, 3)

  const handlePayment = async (e) => {
    e.preventDefault()
    setPaymentProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    clearCart()
    setPaymentProcessing(false)
    navigate('/thank-you')
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleUpsellAdd = (product) => {
    useCartStore.getState().addItem({ ...product, quantity: 1 })
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total</h3>
              <p className="text-xl">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Shipping and Payment Form */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handlePayment} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full p-2 border rounded"
                    placeholder="John Doe"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-2 border rounded"
                  placeholder="123-456-7890"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 border rounded"
                  placeholder="123 Main St"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    className="w-full p-2 border rounded"
                    placeholder="New York"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium mb-2">State</label>
                  <input
                    type="text"
                    id="state"
                    className="w-full p-2 border rounded"
                    placeholder="NY"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium mb-2">ZIP</label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full p-2 border rounded"
                    placeholder="10001"
                    required
                    value={formData.zip}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">Payment Information</h2>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full p-2 border rounded"
                  placeholder="1234 5678 9012 3456"
                  pattern="[0-9]{16}"
                  required
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium mb-2">Expiration</label>
                  <input
                    type="text"
                    id="expiry"
                    className="w-full p-2 border rounded"
                    placeholder="MM/YY"
                    pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                    required
                    value={formData.expiry}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium mb-2">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    className="w-full p-2 border rounded"
                    placeholder="CVC"
                    pattern="[0-9]{3}"
                    required
                    value={formData.cvc}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={paymentProcessing}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors w-full mt-6"
              >
                {paymentProcessing ? 'Processing...' : 'Pay Now'}
              </button>
            </form>
          </div>

          {/* Upsell/Cross-sell Section */}
          {relatedProducts.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Complete Your Look</h2>
              <div className="grid grid-cols-1 gap-4">
                {relatedProducts.map(product => (
                  <div key={product.id} className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                    <button
                      className="ml-auto bg-boho-accent text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90"
                      onClick={() => handleUpsellAdd(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
