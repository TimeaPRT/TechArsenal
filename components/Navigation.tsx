'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-navy-900 cursor-pointer" onClick={() => handleScrollTo('home')}>
              Elite<span className="text-rose-gold">Aesthetics</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.href.replace('#', ''))}
                  className="text-navy-700 hover:text-rose-gold transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* ✅ Call Now Button */}
            <a
              href="tel:+15551234567"
              className="border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white px-4 py-2 text-sm rounded-md flex items-center transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>

            {/* ✅ Book Consultation Button */}
            <Button
              onClick={() => handleScrollTo('contact')}
              className="bg-rose-gold hover:bg-rose-gold/90 text-white px-4 py-2 flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button className="p-2 hover:bg-transparent" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleScrollTo(item.href.replace('#', ''));
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-navy-700 hover:text-rose-gold transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}

              <div className="flex flex-col space-y-2 px-3 pt-4">
                {/* ✅ Mobile Call Button */}
                <a
                  href="tel:+15551234567"
                  className="border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white px-4 py-2 text-sm rounded-md flex items-center justify-center transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>

                {/* ✅ Mobile Book Button */}
                <Button
                  onClick={() => {
                    handleScrollTo('contact');
                    setIsOpen(false);
                  }}
                  className="bg-rose-gold hover:bg-rose-gold/90 text-white px-4 py-2 flex items-center justify-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
