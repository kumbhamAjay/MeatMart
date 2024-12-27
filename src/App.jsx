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
import PaymentPage from './pages/Payment';
import './styles/style.css'
export const context=createContext()

function App() {
  const [cartItems,setCartItems]=useState([])
  const[users,setUsers]=useState([{name:"Ajay",mail:"ajay@gmail.com",password:"1234",phone:"9876543211"}]);
  const[orders,setOrders]=useState([
    {
      id: '111',
      name: 'Chicken Curry Cut',
      price: 249,
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80',
      description: 'Fresh chicken curry cut pieces',
      category: 'chicken',
      quantity: 1,
    },
    {
      id: '211',
      name: 'Mutton Biryani Cut',
      price: 549,
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
      description: 'Premium cut mutton for biryani',
      category: 'mutton',
      quantity: 1,
    }
  ])
  const [currentUser,setCurrentUser]=useState(null)
  const[isLogin,setIsLogin]=useState(false)
  return (
    <context.Provider value={{cartItems,setCartItems,users,setUsers,isLogin,setIsLogin,currentUser,setCurrentUser,orders,setOrders}}>
      <Router>
      <div className="min-h-screen bg-sky-100 ">
        <Toaster  position="top-center"/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </context.Provider>
    
  );
}

export default App;
