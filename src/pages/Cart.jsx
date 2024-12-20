import React, { useContext, useState } from 'react';
import CartItem from '../components/CartItem';
import { context } from '../App';



export default function Cart() {
 const{cartItems,setCartItems}=useContext(context)

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.product.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total =cartItems.length>0? cartItems.reduce((sum, item) => sum + (item.price ), 0):0

  return (
    <div className="max-w-7xl mx-auto px-4 my-10 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
          
          <div className="mt-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between cartItems-center">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">₹{total}</span>
            </div>
            <button className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
