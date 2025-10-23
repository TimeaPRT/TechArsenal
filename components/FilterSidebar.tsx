'use client';

import { useState } from 'react';

interface Filters {
  priceRange: [number, number];
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
}

interface FilterSidebarProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  isVisible: boolean;
  onClose: () => void;
}

export default function FilterSidebar({
  filters,
  setFilters,
  isVisible,
  onClose
}: FilterSidebarProps) {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPriceRange = [...filters.priceRange] as [number, number];
    newPriceRange[index] = parseInt(e.target.value);
    setFilters({ ...filters, priceRange: newPriceRange });
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 10000000],
      propertyType: 'all',
      location: 'all',
      bedrooms: 'all',
      bathrooms: 'all'
    });
  };

  return (
    <>
      {/* Mobile overlay */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed lg:sticky
          inset-y-0 left-0 
          w-80 lg:w-64 xl:w-80
          bg-white
          shadow-md lg:shadow-none
          transform
          ${isVisible ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          transition-transform duration-300
          z-50 lg:z-auto
          top-0 lg:top-20
          overflow-y-auto
        `}
      >
        <div className="h-full lg:h-auto rounded-none lg:rounded-lg border-0 lg:border bg-white">
          {/* Header */}
          <div className="flex flex-row items-center justify-between lg:block border-b pb-4 p-6">
            <h3 className="text-lg font-semibold">Filters</h3>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition duration-200"
            >
              {/* Simple X icon using SVG */}
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          {/* Filter Content */}
          <div className="space-y-6 pt-6 p-6">
            {/* Price range */}
            <div>
              <label className="text-sm font-medium mb-3 block">Price Range</label>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-xs text-gray-600 mb-1 block">Min Price</label>
                    <input
                      type="number"
                      value={filters.priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-600 mb-1 block">Max Price</label>
                    <input
                      type="number"
                      value={filters.priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>${filters.priceRange[0].toLocaleString()}</span>
                  <span>${filters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-sm font-medium mb-3 block">Property Type</label>
              <select
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
                <option value="Apartment">Apartment</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium mb-3 block">Location</label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Beverly Hills">Beverly Hills</option>
                <option value="Miami">Miami</option>
                <option value="San Francisco">San Francisco</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="text-sm font-medium mb-3 block">Bedrooms</label>
              <select
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="text-sm font-medium mb-3 block">Bathrooms</label>
              <select
                value={filters.bathrooms}
                onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Clear button */}
            <button
              onClick={clearFilters}
              className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}