import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stores from './pages/Stores';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer';
export const context=createContext()


function App() {
  const [cartItems,setCartItems]=useState([])
  return (
    <context.Provider value={{cartItems,setCartItems}}>
      <Router>
      <div className="min-h-screen bg-gray-50 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </context.Provider>
    
  );
}

export default App;
