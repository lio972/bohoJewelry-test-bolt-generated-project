import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'

export default function Product() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore(state => state.addItem)
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const handleAddToCart = () => {
    addItem({ ...product, quantity })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} - View ${index + 1}`}
                className="w-full rounded-lg shadow cursor-pointer hover:opacity-80 transition-opacity"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-boho-primary font-semibold mb-6">${product.price}</p>
          
          {/* Product Description */}
          <div className="prose max-w-none mb-6">
            <p>{product.description}</p>
            <ul className="list-disc pl-5 mt-4">
              {product.details.map((detail, index) => (
                <li key={index} className="mb-2">{detail}</li>
              ))}
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 p-2 border rounded"
            >
              {[...Array(product.stock).keys()].map(num => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors w-full md:w-auto"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  )
}
