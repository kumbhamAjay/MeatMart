import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stores from './pages/Stores';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer';
import { Toaster, useToasterStore } from 'react-hot-toast';
import Profile from './pages/Profile';
export const context=createContext()


function App() {
  const [cartItems,setCartItems]=useState([])
  const[users,setUsers]=useState([{name:"Ajay",mail:"ajay@gmail.com",password:"1234",phone:"9876543211"}]);
  const [currentUser,setCurrentUser]=useState(null)
  const[isLogin,setIsLogin]=useState(false)
  return (
    <context.Provider value={{cartItems,setCartItems,users,setUsers,isLogin,setIsLogin,currentUser,setCurrentUser}}>
      <Router>
      <div className="min-h-screen bg-gray-50 ">
        <Toaster  position="top-center"/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </context.Provider>
    
  );
}

export default App;
