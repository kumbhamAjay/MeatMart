import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import meat1 from "../Assets/meat1.avif";
import meat2 from "../Assets/meat2.jpg";
import meat3 from "../Assets/meat3.jpg";
import meat4 from "../Assets/meat4.jpg";
import Carousel from "../components/Cauresel";
import ManualCarousel from "../components/ManualCauresel";
import CurvedText from "../components/CurvedText";
import CircleTextComponent from "../components/CurvedText";
import CircleLayout from "../components/CurvedText";
import CircleDesign from "../components/CircleDesign";
import AboutCarausel from "../components/AboutCarausel";
import { context } from "../App";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const featuredProducts = [
  {
    id: "1",
    name: "Premium Chicken Breast",
    price: 299,
    image: meat1,
    description: "Fresh, boneless chicken breast",
    category: "chicken",
    quantity: 1,
  },
  {
    id: "2",
    name: "Lamb Chops",
    price: 599,
    image: meat2,
    description: "Premium cut lamb chops",
    category: "lamb",
    quantity: 1,
  },
  {
    id: "3",
    name: "Lamb Chops",
    price: 599,
    image: meat3,
    description: "Premium cut lamb chops",
    category: "lamb",
    quantity: 1,
  },
  {
    id: "4",
    name: "Premium Chicken Breast",
    price: 299,
    image: meat1,
    description: "Fresh, boneless chicken breast",
    category: "chicken",
    quantity: 1,
  },
  {
    id: "5",
    name: "Lamb Chops",
    price: 599,
    image: meat2,
    description: "Premium cut lamb chops",
    category: "lamb",
    quantity: 1,
  },
  {
    id: "6",
    name: "Lamb Chops",
    price: 599,
    image: meat3,
    description: "Premium cut lamb chops",
    category: "lamb",
    quantity: 1,
  },
  ,
  {
    id: "7",
    name: "Lamb Chops",
    price: 599,
    image: meat2,
    description: "Premium cut lamb chops",
    category: "lamb",
    quantity: 1,
  },
  {
    id: "8",
    name: "Lamb Chops",
    price: 599,
    image: meat3,
    description: "Premium cut lamb chops",
    category: "lamb",
    quantity: 1,
  },
];

export default function Home() {
  const { cartItems, setCartItems ,isLogin} = useContext(context);
  const navigate=useNavigate()
  const handleAddToCart = (product) => {
    if (cartItems.length === 0) {
      setCartItems([...cartItems, product]);
      toast.success("Added to cart!");
    } else {
      let found = false;
      for (let i of cartItems) {
        if (i.id === product.id) {
          found = true;
          toast.error("Already in cart! Visit Cart");
          break;
        }
      }
      if (!found) {
        setCartItems([...cartItems, product]);
        toast.success("Added to cart!");
      }
    }
  };

  return (
    <div className="min-h-screen ">
      <ManualCarousel />
    
      <div className="container bg-sky-100  py-10 lg:px-8">
      <h1 className="text-2xl font-bold mx-8 mb-10">Featured Products</h1>
        <div className="grid grid-cols-2 mx-auto lg:grid-cols-4 gap-4 p-4">
          {featuredProducts.map((product) => (
            <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden w-full h-54 sm:h-80 lg:h-96 flex"
          >
            <ProductCard
              quantity={product.quantity}
              product={product}
              onAddToCart={isLogin ? handleAddToCart : () => navigate('/login')}
              className="w-full h-full"
            />
          </div>
          ))}
        </div>
      </div>

    
      <AboutCarausel />

    </div>
  );
}
