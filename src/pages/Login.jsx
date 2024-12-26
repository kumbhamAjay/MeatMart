import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import im from '../Assets/meat2.jpg'
import { context } from '../App';
import toast from 'react-hot-toast';
export default function Login() {
  const {isLogin, setIsLogin,users,setUsers,setCurrentUser}= useContext(context);
  const[isLoginPage,setIsLoginPage]=useState(true)
  const[userDetails,setUserDetails]=useState({
    name:"",
    mail:"",
    phone:"",
    password:""
  })
  const[loginDetails,setLoginDetails]=useState({
    mail:"",
    password:""
  })
  const navigate=useNavigate()
  const loginHanlder=()=>{ 
    let login=false
    for(let i of users){
      if(i.mail==loginDetails.mail&&i.password==loginDetails.password){
        setCurrentUser(i)
        setIsLogin(true)
        toast.success("login Successfull")
        navigate('/')
        login=true

      }
    }
    if(!login){
      toast.error("Invalid Credentials")
    }

  }
  const signUpHandler=(e)=>{
    
    // console.log(users)
    // console.log(userDetails)
    setUsers([...users,userDetails])
    setUserDetails({
      name:"",
      mail:"",
      password:""
    })
    toast.success("Signup successfull! Login Now")
    setIsLoginPage(!isLoginPage)

  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{backgroundImage:"url(im)"}}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLoginPage ? 'Login to your account' : 'Create a new account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
            {
              !isLoginPage&&<>
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <div className="mt-1">
                <input
                onChange={(e)=>setUserDetails({...userDetails,name:e.target.value})}
                  id="name"
                  name="name"
                  type="text"
                  value={userDetails.name}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                onChange={(e)=>setUserDetails({...userDetails,phone:e.target.value})}
                  id="phone"
                  name="phone"
                  type="text"
                  value={userDetails.phone}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              </>
            }
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                onChange={isLoginPage?(e)=>setLoginDetails({...loginDetails,mail:e.target.value}):(e)=>setUserDetails({...userDetails,mail:e.target.value})}
                  id="email"
                  name="email"
                  value={isLoginPage?loginDetails.mail:userDetails.mail}
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                onChange={isLoginPage?(e)=>setLoginDetails({...loginDetails,password:e.target.value}):(e)=>setUserDetails({...userDetails,password:e.target.value})}
                 value={isLoginPage?loginDetails.password:userDetails.password}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <button
              onClick={isLoginPage?loginHanlder:signUpHandler}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {isLoginPage ? 'Login' : 'Sign up'}
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isLoginPage ? 'New to Meat Mart?' : 'Already have an account?'}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setIsLoginPage(!isLoginPage)}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                {isLoginPage ? 'Create an account' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
