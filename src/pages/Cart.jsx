import React, { useState } from 'react';
import CartItem from '../components/CartItem';

const cartItems = [
  {
    product: {
      id: '1',
      name: 'Chicken Curry Cut',
      price: 249,
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80',
      description: 'Fresh chicken curry cut pieces',
      category: 'chicken'
    },
    quantity: 2
  }
];

export default function Cart() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id, newQuantity) => {
    setItems(items.map(item => 
      item.product.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.product.id !== id));
  };

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 my-10 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {items.map(({ product, quantity }) => (
            <CartItem
              key={product.id}
              product={product}
              quantity={quantity}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
          
          <div className="mt-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">₹{total}</span>
            </div>
            <button className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
