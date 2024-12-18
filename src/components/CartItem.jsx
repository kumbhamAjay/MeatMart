import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartItem({ product, quantity, onUpdateQuantity, onRemove }) {
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
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => quantity > 1 && onUpdateQuantity(product.id, quantity - 1)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>
            <span>{quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>
            <button 
              onClick={() => onRemove(product.id)}
              className="p-1 rounded-full hover:bg-gray-100 text-red-600"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
