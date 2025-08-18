'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';
import { Home, Search, Heart, Menu, X, User, Phone } from 'lucide-react';
import clsx from 'clsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Listings', href: '/listings' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="backdrop-blur-xl bg-white/80 shadow-sm border-b sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Home className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
              PremiumHomes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'relative pb-1 transition-colors',
                  pathname === item.href
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                )}
              >
                {item.name}
                <span
                  className={clsx(
                    'absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300',
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex gap-4 items-center">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search properties..."
                className="pl-10 w-64 rounded-full focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Icons */}
            <Link href="/favorites">
              <Button variant="ghost" size="sm" className="hover:bg-blue-50 rounded-full">
                <Heart className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/login">
              <Button variant="ghost" size="sm" className="hover:bg-blue-50 rounded-full">
                <User className="w-4 h-4" />
              </Button>
            </Link>

            {/* Contact Info */}
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Phone className="w-4 h-4" />
              (123) 456-7890
            </div>

            {/* Contact Button */}
            <Link href="/contact">
              <Button
                size="sm"
                className="ml-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-md"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={clsx(
          'fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <Home className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-bold text-gray-900 tracking-tight">
            PremiumHomes
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'py-2 px-3 rounded-md hover:bg-blue-50 transition-colors',
                pathname === item.href ? 'text-blue-600 font-medium' : 'text-gray-700'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search..." className="pl-10 w-full rounded-full" />
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <Link href="/favorites" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" size="sm" className="hover:bg-blue-50 rounded-full">
              <Heart className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" size="sm" className="hover:bg-blue-50 rounded-full">
              <User className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Contact block */}
        <div className="flex flex-col gap-3 pt-4 border-t">
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="w-4 h-4" />
            <span>(123) 456-7890</span>
          </div>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-md">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
