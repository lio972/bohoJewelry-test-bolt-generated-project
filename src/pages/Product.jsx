import React from 'react'
    import { useParams } from 'react-router-dom'
    import { products } from '../data/products'
    import { useCartStore } from '../store/cartStore'

    export default function Product() {
      const { id } = useParams()
      const addItem = useCartStore(state => state.addItem)
      const product = products.find(p => p.id === Number(id))

      if (!product) {
        return <div>Product not found</div>
      }

      const handleAddToCart = () => {
        addItem(product)
        alert(`${product.name} added to cart!`)
      }

      return (
        <div className="max-w-4xl mx-auto py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400?text=Image+Not+Available'
                }}
              />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-boho-primary font-semibold mb-4">${product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <button 
                onClick={handleAddToCart}
                className="bg-boho-accent text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )
    }
