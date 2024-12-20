import React from 'react';
import StoreCard from '../components/StoreCard';
import { MapPin } from 'lucide-react';
import shop1 from '../Assets/shop1.jpeg'
import shop2 from '../Assets/shop2.jpeg'
import shop3 from '../Assets/shop3.jpeg'
import shop4 from '../Assets/shop4.jpeg'

const nearbyStores = [
  {
    id: '1',
    name: 'Fresh Cuts Butcher Shop',
    address: 'kphb phase 2',
    rating: 4.5,
    distance: '0.5 km',
    image: shop1
  },
  {
    id: '2',
    name: 'Premium Meats & Co.',
    address: 'kphb phase 1',
    rating: 4.8,
    distance: '1 km',
    image: shop2
  },
  {
    id: '3',
    name: 'Premium Meats & Co.',
    address: 'kphb phase 3',
    rating: 4.8,
    distance: '2 km',
    image: shop3
  },
  {
    id: '4',
    name: 'Premium Meats & Co.',
    address: 'kphb phase 4',
    rating: 4.8,
    distance: '1.2 km',
    image: shop4
  }
];

export default function Stores() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <MapPin className="text-green-600" size={24} />
        <h1 className="text-2xl font-bold">Nearby Stores</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nearbyStores.map(store => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
