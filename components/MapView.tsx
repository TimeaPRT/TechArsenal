"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";

interface Property {
  id: string | number;
  title: string;
  location: string;
  price: number;
  coordinates: [number, number];
}

interface MapViewProps {
  properties: Property[];
}

export default function MapView({ properties }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const initMap = () => {
      if (typeof window !== "undefined" && window.L) {
        const map = window.L.map(mapRef.current as HTMLElement).setView(
          [40.7128, -74.006],
          10
        );

        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
          }
        ).addTo(map);

        properties.forEach((property: Property) => {
          const marker: Marker = window.L.marker(property.coordinates).addTo(
            map
          );
          marker.bindPopup(`
            <div class="p-2">
              <h3 class="font-semibold">${property.title}</h3>
              <p class="text-sm text-gray-600">${property.location}</p>
              <p class="text-lg font-bold text-blue-600">$${property.price.toLocaleString()}</p>
              <a href="/property/${property.id}" class="text-blue-600 text-sm hover:underline">View Details</a>
            </div>
          `);
        });

        mapInstanceRef.current = map;
      }
    };

    if (!window.L) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [properties]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
}
