'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { X } from 'lucide-react';

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
  const handlePriceChange = (value: [number, number]) => {
    setFilters({ ...filters, priceRange: value });
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
        <Card className="h-full lg:h-auto rounded-none lg:rounded-lg border-0 lg:border">
          <CardHeader className="flex flex-row items-center justify-between lg:block border-b pb-4">
            <CardTitle className="text-lg font-semibold">Filters</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            {/* Price range */}
            <div>
              <label className="text-sm font-medium mb-3 block">Price Range</label>
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceChange}
                max={10000000}
                min={0}
                step={100000}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-gray-600">
                <span>${filters.priceRange[0].toLocaleString()}</span>
                <span>${filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-sm font-medium mb-3 block">Property Type</label>
              <Select
                value={filters.propertyType}
                onValueChange={(value) => handleFilterChange('propertyType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Condo">Condo</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium mb-3 block">Location</label>
              <Select
                value={filters.location}
                onValueChange={(value) => handleFilterChange('location', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Manhattan">Manhattan</SelectItem>
                  <SelectItem value="Brooklyn">Brooklyn</SelectItem>
                  <SelectItem value="Beverly Hills">Beverly Hills</SelectItem>
                  <SelectItem value="Miami">Miami</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="text-sm font-medium mb-3 block">Bedrooms</label>
              <Select
                value={filters.bedrooms}
                onValueChange={(value) => handleFilterChange('bedrooms', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="text-sm font-medium mb-3 block">Bathrooms</label>
              <Select
                value={filters.bathrooms}
                onValueChange={(value) => handleFilterChange('bathrooms', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clear button */}
            <Button
              variant="outline"
              onClick={clearFilters}
              className="w-full"
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}