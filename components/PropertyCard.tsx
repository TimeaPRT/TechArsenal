"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  variant?: "default" | "compact";
}

export default function PropertyCard({ property, variant = "default" }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite
        ? "Property removed from your favorites"
        : "Property added to your favorites",
    });
  };

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
      variant === "compact" ? "max-w-md" : ""
    }`}>
      <div className={`relative ${variant === "compact" ? "aspect-video" : "aspect-[4/3]"} overflow-hidden`}>
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={property.status === "For Sale" ? "default" : "secondary"}>
            {property.status}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-4 right-4 bg-white/80 hover:bg-white ${
            isFavorite ? "text-red-500" : "text-gray-600"
          }`}
          onClick={handleFavorite}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>

        {variant === "default" && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Link href={`/property/${property.id}`}>
              <Button
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                size="sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Link>
          </div>
        )}
      </div>

      <CardContent className={`${variant === "compact" ? "p-4" : "p-6"}`}>
        <div className={`flex items-center justify-between ${variant === "compact" ? "mb-1" : "mb-2"}`}>
          <h3 className={`font-semibold ${variant === "compact" ? "text-base" : "text-lg"} text-gray-900 group-hover:text-blue-600 transition-colors`}>
            <Link href={`/property/${property.id}`}>{property.title}</Link>
          </h3>
          <div className={`${variant === "compact" ? "text-lg" : "text-xl"} font-bold text-blue-600`}>
            ${property.price.toLocaleString()}
            {property.status === "For Rent" && (
              <span className="text-sm font-normal text-gray-500">/mo</span>
            )}
          </div>
        </div>

        <div className={`flex items-center text-gray-600 ${variant === "compact" ? "mb-2 text-xs" : "mb-3 text-sm"}`}>
          <MapPin className={`${variant === "compact" ? "w-3 h-3" : "w-4 h-4"} mr-1`} />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className={`flex items-center ${variant === "compact" ? "gap-2 text-xs" : "gap-4 text-sm"} text-gray-600 ${variant === "compact" ? "mb-2" : "mb-3 py-2 border-t border-b border-gray-100"}`}>
          <div className="flex items-center gap-1">
            <Bed className={`${variant === "compact" ? "w-3 h-3" : "w-4 h-4"}`} />
            <span>{property.bedrooms} {variant === "compact" ? "bd" : "beds"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className={`${variant === "compact" ? "w-3 h-3" : "w-4 h-4"}`} />
            <span>{property.bathrooms} {variant === "compact" ? "ba" : "baths"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className={`${variant === "compact" ? "w-3 h-3" : "w-4 h-4"}`} />
            <span>{property.size.toLocaleString()} sq ft</span>
          </div>
        </div>

        {variant === "default" && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className={`text-gray-500 ${variant === "compact" ? "text-xs" : "text-sm"}`}>
            Listed by {property.agent.name}
          </div>
          <Link href={`/property/${property.id}`}>
            <Button variant="outline" size={variant === "compact" ? "sm" : "default"}>
              {variant === "compact" ? "Details" : "View Details"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}