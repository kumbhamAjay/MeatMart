import React, { useContext } from 'react'
import { context } from '../App'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Profile = () => {
    const{currentUser,setCurrentUser,setIsLogin,cartItems}=useContext(context)
    const navigate=useNavigate()
    const logoutHandler=()=>{
        setCurrentUser(null)
        setIsLogin(false)
        navigate('/')
        toast.success("Logout Successfull")
    }
  return (
    <div className="max-w-7xl mx-auto px-4 my-10 sm:px-6 lg:px-8 py-8">
       <h1 className="text-2xl font-bold mb-8">Profile</h1>
       <div>
        {
            currentUser&&
            <>
            <p>Name:{currentUser.name}</p>
            <p>Mail:{currentUser.mail}</p>
            <p>Phone Number:{currentUser.phone}</p>
            <p onClick={()=>navigate('/cart')}>Cart:&nbsp;&nbsp;&nbsp;&nbsp;{cartItems.length}</p>
            <button onClick={logoutHandler}>LogOut</button>
            </>
        }
        
       </div>


    </div>
  )
}

export default Profile
