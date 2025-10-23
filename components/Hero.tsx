'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/60 z-10"></div>
        <img
          src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg"
          alt="Luxury medical spa"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-rose-gold" />
              <span className="text-sm">Board Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-rose-gold" />
              <span className="text-sm">20+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-rose-gold" />
              <span className="text-sm">5.0 Rating</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Redefine Your
            <span className="block text-rose-gold">Natural Beauty</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Experience world-class plastic surgery with our board-certified surgeons.
            Combining artistry with advanced medical techniques for stunning, natural results.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Schedule Consultation — scrolls to Contact section */}
            <a href="#contact">
              <Button className="bg-rose-gold text-white px-8 py-4 text-lg font-semibold rounded-full group">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            {/* View Work — scrolls to Gallery section */}
            <a href="#gallery">
              <Button className="bg-white text-navy-900 px-8 py-4 text-lg font-semibold rounded-full">
                View Our Work
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-gold mb-2">2,500+</div>
              <div className="text-white/80">Successful Procedures</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-gold mb-2">98%</div>
              <div className="text-white/80">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-gold mb-2">15</div>
              <div className="text-white/80">Specialized Procedures</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-gold/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-gold/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
