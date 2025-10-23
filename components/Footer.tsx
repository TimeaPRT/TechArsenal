'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">
            Elite<span className="text-rose-gold">Aesthetics</span>
          </h3>
          <p className="text-white/70 text-sm">
            Redefining natural beauty with expert precision.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <button
            onClick={() => handleScroll('about')}
            className="text-white/70 hover:text-rose-gold transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleScroll('services')}
            className="text-white/70 hover:text-rose-gold transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll('gallery')}
            className="text-white/70 hover:text-rose-gold transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="text-white/70 hover:text-rose-gold transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-rose-gold transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-rose-gold transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-rose-gold transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-rose-gold transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-white/60 text-sm">
        © 2025 Elite Aesthetics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
