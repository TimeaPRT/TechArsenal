'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  procedure: string;
  rating: number;
  text: string;
  image: string;
  location: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      procedure: 'Rhinoplasty',
      rating: 5,
      text: "Dr. Smith and his team exceeded every expectation. The results are so natural that people can't pinpoint what changed - they just know I look refreshed and confident. The entire experience was professional, comfortable, and transformative.",
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      location: 'Beverly Hills, CA'
    },
    {
      name: 'Maria Rodriguez',
      procedure: 'Breast Augmentation',
      rating: 5,
      text: "I spent months researching surgeons, and I'm so glad I chose Elite Aesthetics. The attention to detail, the care throughout the process, and most importantly, the beautiful results have given me confidence I never had before.",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      location: 'Miami, FL'
    },
    {
      name: 'Jennifer Lee',
      procedure: 'Mommy Makeover',
      rating: 5,
      text: "After three kids, I thought I'd never feel like myself again. The mommy makeover has given me my body back and so much more. The team made me feel beautiful throughout the entire journey. Absolutely life-changing.",
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      location: 'New York, NY'
    },
    {
      name: 'Amanda Wilson',
      procedure: 'Facelift',
      rating: 5,
      text: "The natural results speak for themselves. I look like a younger, refreshed version of myself - exactly what I wanted. The recovery was smooth, and the staff was incredibly supportive throughout the process.",
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      location: 'Dallas, TX'
    },
    {
      name: 'Lisa Chen',
      procedure: 'Tummy Tuck',
      rating: 5,
      text: "I can't believe the transformation! The surgical technique and attention to detail resulted in a flat, natural-looking abdomen. The team's care and expertise made all the difference in my experience and results.",
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Rachel Brown',
      procedure: 'Non-Surgical Treatments',
      rating: 5,
      text: "The Botox and filler treatments have given me such natural, youthful results. The injector has an incredible eye for detail and truly understands facial anatomy. I always leave feeling beautiful and confident.",
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      location: 'Chicago, IL'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Patient <span className="text-rose-gold">Stories</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Read what our patients have to say about their transformative experiences 
            and the exceptional care they received at Elite Aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-rose-gold mb-4" />
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-rose-gold text-rose-gold" />
                  ))}
                </div>

                <p className="text-navy-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                    <p className="text-sm text-navy-600">{testimonial.procedure}</p>
                    <p className="text-xs text-navy-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-navy-600 mb-6">
              Join thousands of satisfied patients who chose Elite Aesthetics for their aesthetic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Scrolls to Contact Section */}
              <a href="#contact">
                <Button className="bg-rose-gold text-white px-8 py-4 rounded-full font-semibold text-lg">
                  Schedule Consultation
                </Button>
              </a>

              {/* Scrolls to Gallery Section */}
              <a href="#gallery">
                <Button className="border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-full font-semibold text-lg">
                  View More Results
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
