'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Procedures' },
    { id: 'facial', name: 'Facial' },
    { id: 'breast', name: 'Breast' },
    { id: 'body', name: 'Body Contouring' },
    { id: 'nonsurgical', name: 'Non-Surgical' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'facial',
      procedure: 'Rhinoplasty',
      before: 'https://images.pexels.com/photos/5473363/pexels-photo-5473363.jpeg',
      after: 'https://images.pexels.com/photos/5473364/pexels-photo-5473364.jpeg',
      description: '6 months post-rhinoplasty showing natural refinement'
    },
    {
      id: 2,
      category: 'breast',
      procedure: 'Breast Augmentation',
      before: 'https://images.pexels.com/photos/6975485/pexels-photo-6975485.jpeg',
      after: 'https://images.pexels.com/photos/6975486/pexels-photo-6975486.jpeg',
      description: '3 months post-augmentation with natural results'
    },
    {
      id: 3,
      category: 'body',
      procedure: 'Tummy Tuck',
      before: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg',
      after: 'https://images.pexels.com/photos/6975475/pexels-photo-6975475.jpeg',
      description: '6 months post-abdominoplasty transformation'
    },
    {
      id: 4,
      category: 'facial',
      procedure: 'Facelift',
      before: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg',
      after: 'https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg',
      description: '1 year post-facelift showing natural rejuvenation'
    },
    {
      id: 5,
      category: 'nonsurgical',
      procedure: 'Dermal Fillers',
      before: 'https://images.pexels.com/photos/5473301/pexels-photo-5473301.jpeg',
      after: 'https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg',
      description: 'Immediate results with dermal filler enhancement'
    },
    {
      id: 6,
      category: 'breast',
      procedure: 'Breast Lift',
      before: 'https://images.pexels.com/photos/5069421/pexels-photo-5069421.jpeg',
      after: 'https://images.pexels.com/photos/5069422/pexels-photo-5069422.jpeg',
      description: '4 months post-mastopexy with beautiful lift'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Remarkable <span className="text-rose-gold">Transformations</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            See the beautiful, natural results our patients have achieved. Each transformation 
            tells a unique story of enhanced confidence and renewed self-image.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-rose-gold hover:bg-rose-gold/90 text-white'
                  : 'border border-navy-200 text-navy-700 hover:border-rose-gold hover:text-rose-gold'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.before}
                        alt="Before"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-navy-900/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Before
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={item.after}
                        alt="After"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-rose-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        After
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-navy-900 hover:bg-cream-50 px-4 py-2 text-sm"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.procedure}</h3>
                  <p className="text-navy-600 text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;