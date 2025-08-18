'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import FilterSidebar from '@/components/FilterSidebar';
import MapView from '@/components/MapView';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Grid, Map, SlidersHorizontal } from 'lucide-react';

export default function ListingsPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
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
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Listings</h1>
            <p className="text-gray-600">{filteredProperties.length} properties available</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
            
            <div className="flex bg-white rounded-lg border p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
              >
                <Map className="w-4 h-4" />
              </Button>
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
                <MapView properties={filteredProperties} />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}