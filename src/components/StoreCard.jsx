import React from 'react';
import { Star } from 'lucide-react';

export default function StoreCard({ store }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={store.image} 
        alt={store.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{store.name}</h3>
        <p className="text-gray-600 mt-1">{store.address}</p>
        <div className="mt-2 flex items-center space-x-2">
          <Star className="text-yellow-400 fill-current" size={20} />
          <span>{store.rating}</span>
          <span className="text-gray-500">• {store.distance} away</span>
        </div>
        <button className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800">
          Visit Store
        </button>
      </div>
    </div>
  );
}
