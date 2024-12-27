import React, { useContext } from 'react'
import { context } from '../App'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Profile = () => {
    const{currentUser,setCurrentUser,setIsLogin,cartItems,setCartItems,orders}=useContext(context)
    const navigate=useNavigate()
    const logoutHandler=()=>{
        setCurrentUser(null)
        setIsLogin(false)
        setCartItems([])
        navigate('/')
        toast.success("Logout Successfull")
    }
  return (
    <div className="max-w-7xl mx-auto px-4 my-10 sm:px-6 lg:px-8 py-8">
       <h1 className="text-2xl font-bold mb-8">Profile</h1>
       <div>
        {
            currentUser&&
            <div className="p-4 bg-gray-100 rounded-md shadow-md">
  <p className="text-lg font-semibold text-gray-700">
    Name: <span className="font-normal">{currentUser.name}</span>
  </p>
  <p className="text-lg font-semibold text-gray-700">
    Mail: <span className="font-normal">{currentUser.mail}</span>
  </p>
  <p className="text-lg font-semibold text-gray-700">
    Phone Number: <span className="font-normal">{currentUser.phone}</span>
  </p>
  <p
    className="text-lg font-semibold text-blue-600 cursor-pointer hover:underline"
    onClick={() => navigate('/cart')}
  >
    Cart: <span className="font-normal">{cartItems.length}</span>
  </p>
  <p
    className="text-lg font-semibold text-blue-600 cursor-pointer hover:underline"
    onClick={() => navigate('/orders')}
  >
    Orders: <span className="font-normal">{orders.length}</span>
  </p>
  <button
    className="mt-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
    onClick={logoutHandler}
  >
    Log Out
  </button>
</div>

        }
        
       </div>


    </div>
  )
}

export default Profile
