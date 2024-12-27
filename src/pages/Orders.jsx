import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import { context } from '../App';
import { Link } from 'react-router-dom';



export default function Orders() {
  const{isLogin,orders}=useContext(context)
  return (
    <div className="max-w-7xl mx-auto px-4 my-10 sm:px-6 lg:px-8 py-8">
      {isLogin?<><h1 className="text-2xl font-bold mb-8">Non-Veg Varieties</h1>
      
      <div className="space-y-4">
        {orders.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
      </>:<h1>Please Login <Link to={"/login"}><button className='bg-green-500'>Go to Login</button></Link></h1>}
    </div>
  );
}
