import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, MapPin } from 'lucide-react';
import goat from '../Assets/goat.jpg';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-red-600 text-white shadow-lg  fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={goat}
              alt="Meat Mart logo"
              className="w-20 h-16 rounded-full object-cover"
            />
            <span className="text-2xl font-bold">Meat Mart</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/stores" className="flex items-center space-x-1 hover:text-red-200">
              <MapPin size={20} />
              <span>Stores</span>
            </Link>
            <Link to="/orders" className="hover:text-red-200">Orders</Link>
            <Link to="/cart" className="flex items-center space-x-1 hover:text-red-200">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 hover:text-red-200">
              <User size={20} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-red-600 text-white px-4 py-2">
          <Link
            to="/stores"
            className="block py-2 hover:text-red-200"
            onClick={toggleMobileMenu}
          >
            Stores
          </Link>
          <Link
            to="/orders"
            className="block py-2 hover:text-red-200"
            onClick={toggleMobileMenu}
          >
            Orders
          </Link>
          <Link
            to="/cart"
            className="block py-2 hover:text-red-200"
            onClick={toggleMobileMenu}
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="block py-2 hover:text-red-200"
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
