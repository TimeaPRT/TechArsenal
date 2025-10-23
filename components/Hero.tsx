'use client'


import { Search, MapPin, Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your <span className="text-blue-600">Dream Home</span>
            <br />
            <span className="text-2xl md:text-4xl font-medium text-gray-700">
              In the Perfect Location
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover luxury properties, modern condos, and family homes with our advanced search and filtering system.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location Input */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="pl-10 h-12 w-full rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Property Type Select */}
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="h-12 w-full rounded-full border border-gray-300 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="apartment">Apartment</option>
                <option value="townhouse">Townhouse</option>
              </select>

              {/* Price Range Select */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="h-12 w-full rounded-full border border-gray-300 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Price Range</option>
                <option value="0-500000">$0 - $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000+">$2M+</option>
              </select>

              {/* Search Button */}
              <Link href="/listings">
                <button className="w-full h-12 bg-blue-600 text-white rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">500+ Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-gray-700">Market Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-purple-600" />
              <span className="text-gray-700">Prime Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
