'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Facial Procedures',
      description: 'Enhance your natural beauty with our advanced facial procedures',
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg',
      procedures: ['Rhinoplasty', 'Facelift', 'Brow Lift', 'Eyelid Surgery'],
      price: 'Starting from $8,000'
    },
    {
      title: 'Breast Enhancement',
      description: 'Achieve your ideal silhouette with our breast procedures',
      image: 'https://images.pexels.com/photos/5473556/pexels-photo-5473556.jpeg',
      procedures: ['Breast Augmentation', 'Breast Lift', 'Breast Reduction', 'Breast Reconstruction'],
      price: 'Starting from $10,000'
    },
    {
      title: 'Body Contouring',
      description: 'Sculpt and refine your body with our advanced techniques',
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg',
      procedures: ['Tummy Tuck', 'Liposuction', 'Brazilian Butt Lift', 'Mommy Makeover'],
      price: 'Starting from $12,000'
    },
    {
      title: 'Non-Surgical Treatments',
      description: 'Refresh your appearance without surgery',
      image: 'https://images.pexels.com/photos/5473301/pexels-photo-5473301.jpeg',
      procedures: ['Botox', 'Dermal Fillers', 'Chemical Peels', 'Laser Treatments'],
      price: 'Starting from $500'
    },
    {
      title: 'Reconstructive Surgery',
      description: 'Restore function and appearance with precision',
      image: 'https://images.pexels.com/photos/4154782/pexels-photo-4154782.jpeg',
      procedures: ['Skin Cancer Reconstruction', 'Trauma Reconstruction', 'Burn Reconstruction'],
      price: 'Insurance Accepted'
    },
    {
      title: 'Men\'s Procedures',
      description: 'Specialized treatments designed for men',
      image: 'https://images.pexels.com/photos/8413299/pexels-photo-8413299.jpeg',
      procedures: ['Male Rhinoplasty', 'Gynecomastia', 'Hair Transplant', 'Facial Rejuvenation'],
      price: 'Starting from $6,000'
    }
  ];

  return (
    <section id="services" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Our <span className="text-rose-gold">Signature</span> Procedures
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of procedures, each tailored to enhance your natural beauty 
            and boost your confidence with the highest standards of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-navy-900 group-hover:text-rose-gold transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-navy-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-800 mb-3">Popular Procedures:</h4>
                  <ul className="space-y-2">
                    {service.procedures.map((procedure, idx) => (
                      <li key={idx} className="text-navy-600 flex items-center">
                        <div className="w-2 h-2 bg-rose-gold rounded-full mr-3"></div>
                        {procedure}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-rose-gold">{service.price}</span>
                  <Button className="text-navy-700 hover:text-rose-gold group p-0 bg-transparent hover:bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            View All Procedures
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;