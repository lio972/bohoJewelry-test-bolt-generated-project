import React from 'react'
    import { Link } from 'react-router-dom'

    export default function ProductCard({ product }) {
      return (
        <div className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="p-4">
              <h3 className="font-serif text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="ml-2 text-sm text-gray-500">(24)</span>
              </div>
            </div>
          </Link>
        </div>
      )
    }
