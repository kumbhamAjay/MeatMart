import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../App";
import phonepe from '../Assets/phonepe.jpeg'
import gpay from '../Assets/gpay.png'
import cards from '../Assets/cards.jpeg'

export default function Payment({budget}) {
  const [selectedOption, setSelectedOption] = useState("");
  const[paymentSucces,setPaymentSuccess]=useState(false)
  const{cartItems,setCartItems,orders,setOrders}=useContext(context)
  const navigate=useNavigate()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePay=()=>{
    setPaymentSuccess(true)
    setOrders([...orders,...cartItems])
    setCartItems([])


  }
  console.log(orders)
  

  const renderPaymentFields = () => {
    switch (selectedOption) {
      case "phonepe":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="PhonePe UPI ID"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        );
      case "googlepay":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Google Pay UPI ID"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        );
      case "debitcard":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="password"
                placeholder="CVV"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    
    
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4">
      {
        paymentSucces?<>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Payment Successfull....
        </h1>
        <button onClick={()=>navigate('/orders')}>go to Orders</button>
        </>:<div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Payment Page
        </h1>
        <form className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-700">
              Choose Payment Method
            </h2>
            <h3>Total Payment:{budget}</h3>
            <div className="flex flex-col space-y-3">
              <label
                className={`flex items-center p-3 border rounded-md cursor-pointer transition ${
                  selectedOption === "phonepe" ? "bg-purple-100 border-purple-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value="phonepe"
                  checked={selectedOption === "phonepe"}
                  onChange={handleOptionChange}
                  className="hidden"
                />
                <img
                  src={phonepe}
                  alt="PhonePe"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-gray-700 font-medium">PhonePe</span>
              </label>
              <label
                className={`flex items-center p-3 border rounded-md cursor-pointer transition ${
                  selectedOption === "googlepay" ? "bg-blue-100 border-blue-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value="googlepay"
                  checked={selectedOption === "googlepay"}
                  onChange={handleOptionChange}
                  className="hidden"
                />
                <img
                  src={gpay}
                  alt="Google Pay"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-gray-700 font-medium">Google Pay</span>
              </label>
              <label
                className={`flex items-center p-3 border rounded-md cursor-pointer transition ${
                  selectedOption === "debitcard" ? "bg-green-100 border-green-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value="debitcard"
                  checked={selectedOption === "debitcard"}
                  onChange={handleOptionChange}
                  className="hidden"
                />
                <img
                  src={cards}
                  alt="Debit Card"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-gray-700 font-medium">Debit Card</span>
              </label>
            </div>
          </div>

          {renderPaymentFields()}

          <button
          onClick={handlePay}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-800 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-blue-600 transition duration-200 font-medium"
          >
            Proceed to Pay
          </button>
          <button
    className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    onClick={()=>navigate('/cart')}
  >
    back
  </button>
        </form>
      </div>
      }
      
    </div>
  );
}