import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full  h-auto flex flex-col">
    <img 
      src={product.image} 
      alt={product.name}
      className="w-full h-32 sm:h-48 object-cover"
    />
    <div className="p-2 sm:p-4 flex flex-col flex-1">
      <h3 className="text-sm sm:text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 mt-1 text-xs sm:text-sm flex-1">{product.description}</p>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-base sm:text-xl font-bold">₹{product.price}</span>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-green-600 text-white px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-lg hover:bg-green-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  


  );
}

