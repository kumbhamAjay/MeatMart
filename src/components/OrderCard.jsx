import React from 'react';

export default function OrderCard({ product, quantity = 1 }) {
  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-bold">₹{product.price}</span>
          {quantity && <span className="text-gray-500">Quantity: {quantity}</span>}
        </div>
      </div>
    </div>
  );
}
