import React from "react";
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
const featuredProducts = [
  {
    id: "1",
    name: "Premium Chicken Breast",
    price: 299,
    image: meat1,
    description: "Fresh, boneless chicken breast",
    category: "chicken",
  },
  {
    id: "2",
    name: "Lamb Chops",
    price: 599,
    image: meat2,
    description: "Premium cut lamb chops",
    category: "lamb",
  },
  {
    id: "3",
    name: "Lamb Chops",
    price: 599,
    image: meat3,
    description: "Premium cut lamb chops",
    category: "lamb",
  },
  {
    id: "1",
    name: "Premium Chicken Breast",
    price: 299,
    image: meat1,
    description: "Fresh, boneless chicken breast",
    category: "chicken",
  },
  {
    id: "2",
    name: "Lamb Chops",
    price: 599,
    image: meat2,
    description: "Premium cut lamb chops",
    category: "lamb",
  },
  {
    id: "3",
    name: "Lamb Chops",
    price: 599,
    image: meat3,
    description: "Premium cut lamb chops",
    category: "lamb",
  },
 
];

export default function Home() {
  const handleAddToCart = (product) => {
    // TODO: Implement cart functionality
    console.log("Added to cart:", product);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <ManualCarousel />
    {/* <CircleLayout/>  */}
      {/* <CurvedText radius={50} text={"ajayreddasdfghjkasdfghjksdfghy"} fontSize={20}/> */}

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
          {/* <CircleDesign/> */}
          <AboutCarausel/>
      {/* How It Works */}
      {/* <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Mission and Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Your Meat</h3>
              <p className="text-gray-600">
                Browse our selection of fresh meats
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Select Store</h3>
              <p className="text-gray-600">Choose from nearby stores</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Delivery</h3>
              <p className="text-gray-600">
                We'll pick you up and drop you back
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
