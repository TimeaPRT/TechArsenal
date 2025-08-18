'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';

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
        <div className="lg:col-span-3 relative overflow-hidden rounded-lg">
          <Image
            src={images[currentImage]}
            alt={`Property image ${currentImage + 1}`}
            fill
            className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(currentImage)}
          />
          
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white"
            onClick={() => openLightbox(currentImage)}
          >
            <Maximize className="w-4 h-4" />
          </Button>
          
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
        
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
            
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
            
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={prevLightboxImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={nextLightboxImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {lightboxImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
