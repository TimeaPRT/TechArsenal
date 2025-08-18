'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  useEffect(() => {
    // In a real app, this would come from user's saved favorites
    // For demo purposes, we'll show first 3 properties
    setFavoriteProperties(properties.slice(0, 3));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-red-500 fill-current" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Favorites</h1>
            <p className="text-gray-600">{favoriteProperties.length} saved properties</p>
          </div>
        </div>

        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No favorites yet</h2>
            <p className="text-gray-500">Start browsing properties and save your favorites here.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}