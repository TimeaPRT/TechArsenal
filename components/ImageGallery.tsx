'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<number>(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxImage((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-96 lg:h-[500px]">
        {/* Main Image */}
        <div className="lg:col-span-3 relative overflow-hidden rounded-lg">
          <Image
            src={images[currentImage]}
            alt={`Property image ${currentImage + 1}`}
            fill
            className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(currentImage)}
          />
          
          {/* Maximize Button */}
          <button
            className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-md transition duration-200"
            onClick={() => openLightbox(currentImage)}
          >
            {/* Maximize SVG */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
          </button>
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-md transition duration-200"
                onClick={prevImage}
              >
                {/* ChevronLeft SVG */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-md transition duration-200"
                onClick={nextImage}
              >
                {/* ChevronRight SVG */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="hidden lg:grid grid-cols-1 gap-4 max-h-[500px] overflow-y-auto">
          {images.slice(0, 8).map((image: string, index: number) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer ${
                index === currentImage ? 'ring-2 ring-blue-600' : ''
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
          
          {/* Show More Thumbnail */}
          {images.length > 8 && (
            <div 
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100 flex items-center justify-center"
              onClick={() => openLightbox(8)}
            >
              <span className="text-gray-600 font-medium">
                +{images.length - 8} more
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={images[lightboxImage]}
              alt={`Property image ${lightboxImage + 1}`}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
            />
            
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-md transition duration-200"
              onClick={closeLightbox}
            >
              {/* X SVG */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Lightbox Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-white hover:bg-white/20 rounded-md transition duration-200"
                  onClick={prevLightboxImage}
                >
                  {/* ChevronLeft SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white hover:bg-white/20 rounded-md transition duration-200"
                  onClick={nextLightboxImage}
                >
                  {/* ChevronRight SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            {/* Lightbox Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {lightboxImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}