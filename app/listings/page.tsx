'use client';

import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import FilterSidebar from '@/components/FilterSidebar';
import MapView from '@/components/MapView';
import { properties } from '@/data/properties';

// Define proper types for our filters
interface Filters {
  priceRange: [number, number];
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
}

export default function ListingsPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 10000000] as [number, number],
    propertyType: 'all',
    location: 'all',
    bedrooms: 'all',
    bathrooms: 'all'
  });

  useEffect(() => {
    let filtered = properties;

    // Apply price filter
    filtered = filtered.filter(property => 
      property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]
    );

    // Apply property type filter
    if (filters.propertyType !== 'all') {
      filtered = filtered.filter(property => property.type === filters.propertyType);
    }

    // Apply location filter
    if (filters.location !== 'all') {
      filtered = filtered.filter(property => property.location.includes(filters.location));
    }

    // Apply bedrooms filter
    if (filters.bedrooms !== 'all') {
      filtered = filtered.filter(property => property.bedrooms >= parseInt(filters.bedrooms));
    }

    // Apply bathrooms filter
    if (filters.bathrooms !== 'all') {
      filtered = filtered.filter(property => property.bathrooms >= parseInt(filters.bathrooms));
    }

    setFilteredProperties(filtered);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Listings</h1>
            <p className="text-gray-600">{filteredProperties.length} properties available</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Filters Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition duration-200 lg:hidden ${
                showFilters 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm">⚙️</span>
              Filters
            </button>
            
            {/* View Mode Toggle */}
            <div className="flex bg-white rounded-lg border p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center justify-center w-10 h-10 rounded-md transition duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-sm">◼️</span>
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center justify-center w-10 h-10 rounded-md transition duration-200 ${
                  viewMode === 'map' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-sm">🗺️</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isVisible={showFilters}
            onClose={() => setShowFilters(false)}
          />
          
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="h-[600px] rounded-lg overflow-hidden">
                <MapView properties={filteredProperties as any} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}