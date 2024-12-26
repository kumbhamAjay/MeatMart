import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import { context } from '../App';
import { Link } from 'react-router-dom';

const products = [
  {
    id: '1',
    name: 'Chicken Curry Cut',
    price: 249,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh chicken curry cut pieces',
    category: 'chicken'
  },
  {
    id: '2',
    name: 'Mutton Biryani Cut',
    price: 549,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
    description: 'Premium cut mutton for biryani',
    category: 'mutton'
  }
];

export default function Orders() {
  const{isLogin}=useContext(context)
  return (
    <div className="max-w-7xl mx-auto px-4 my-10 sm:px-6 lg:px-8 py-8">
      {isLogin?<><h1 className="text-2xl font-bold mb-8">Non-Veg Varieties</h1>
      
      <div className="space-y-4">
        {products.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
      </>:<h1>Please Login <Link to={"/login"}><button className='bg-green-500'>Go to Login</button></Link></h1>}
    </div>
  );
}
