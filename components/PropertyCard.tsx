'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MapPin, Bed, Bath, Square, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Agent {
  name: string;
}

interface Property {
  id: string | number;
  title: string;
  images: string[];
  status: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  description: string;
  agent: Agent;
}

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'compact';
}

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites',
      description: isFavorite
        ? 'Property removed from your favorites'
        : 'Property added to your favorites',
    });
  };

  return (
    <div className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border rounded-lg ${
      variant === 'compact' ? 'max-w-md' : ''
    }`}>
      <div className={`relative overflow-hidden ${variant === 'compact' ? 'aspect-video' : 'aspect-[4/3]'}`}>
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Status Badge */}
        <span className={`absolute top-4 left-4 px-2 py-1 text-xs font-semibold rounded ${
          property.status === 'For Sale' ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-700'
        }`}>
          {property.status}
        </span>

        {/* Favorite Button */}
        <button
          className={`absolute top-4 right-4 p-1 rounded-full bg-white/80 hover:bg-white transition-colors ${
            isFavorite ? 'text-red-500' : 'text-gray-600'
          }`}
          onClick={handleFavorite}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {variant === 'default' && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-colors duration-300">
            <Link href={`/property/${property.id}`} className="opacity-0 group-hover:opacity-100 flex items-center gap-2 px-3 py-1 bg-white rounded shadow text-sm font-medium">
              <Eye className="w-4 h-4" />
              View Details
            </Link>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className={`${variant === 'compact' ? 'p-4' : 'p-6'}`}>
        <div className={`flex items-center justify-between ${variant === 'compact' ? 'mb-1' : 'mb-2'}`}>
          <h3 className={`font-semibold ${variant === 'compact' ? 'text-base' : 'text-lg'} text-gray-900 group-hover:text-blue-600 transition-colors`}>
            <Link href={`/property/${property.id}`}>{property.title}</Link>
          </h3>
          <div className={`${variant === 'compact' ? 'text-lg' : 'text-xl'} font-bold text-blue-600`}>
            ${property.price.toLocaleString()}
            {property.status === 'For Rent' && <span className="text-sm font-normal text-gray-500">/mo</span>}
          </div>
        </div>

        <div className={`flex items-center text-gray-600 ${variant === 'compact' ? 'mb-2 text-xs' : 'mb-3 text-sm'}`}>
          <MapPin className={`${variant === 'compact' ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className={`flex items-center ${variant === 'compact' ? 'gap-2 text-xs' : 'gap-4 text-sm'} text-gray-600 ${variant === 'compact' ? 'mb-2' : 'mb-3 py-2 border-t border-b border-gray-100'}`}>
          <div className="flex items-center gap-1">
            <Bed className={`${variant === 'compact' ? 'w-3 h-3' : 'w-4 h-4'}`} />
            <span>{property.bedrooms} {variant === 'compact' ? 'bd' : 'beds'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className={`${variant === 'compact' ? 'w-3 h-3' : 'w-4 h-4'}`} />
            <span>{property.bathrooms} {variant === 'compact' ? 'ba' : 'baths'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className={`${variant === 'compact' ? 'w-3 h-3' : 'w-4 h-4'}`} />
            <span>{property.size.toLocaleString()} sq ft</span>
          </div>
        </div>

        {variant === 'default' && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
        )}

        <div className="flex items-center justify-between">
          <div className={`text-gray-500 ${variant === 'compact' ? 'text-xs' : 'text-sm'}`}>
            Listed by {property.agent.name}
          </div>
          <Link href={`/property/${property.id}`}>
            <button className={`px-3 py-1 rounded border ${variant === 'compact' ? 'text-sm border-gray-300' : 'text-base border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
              {variant === 'compact' ? 'Details' : 'View Details'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
