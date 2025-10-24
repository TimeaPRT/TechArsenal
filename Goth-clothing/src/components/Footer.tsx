import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
  onSizeGuideOpen: () => void;
  onCategorySelect: (category: string) => void;
}

const Footer = ({ onPageChange, onSizeGuideOpen, onCategorySelect }: FooterProps) => {
  const quickLinks = [
    { name: 'About Us', page: 'about' },
    { name: 'Size Guide', action: 'sizeGuide' },
    { name: 'Shipping Info', page: 'shipping' },
    { name: 'Returns', page: 'returns' }
  ];

  const categories = [
    { name: 'Dresses', value: 'Dresses' },
    { name: 'Corsets', value: 'Corsets' },
    { name: 'Coats', value: 'Coats' },
    { name: 'Accessories', value: 'Accessories' },
    { name: 'Jewelry', value: 'Jewelry' }
  ];

  const handleLinkClick = (link: { name: string; page?: string; action?: string }) => {
    if (link.action === 'sizeGuide') {
      onSizeGuideOpen();
    } else if (link.page) {
      onPageChange(link.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category: string) => {
    onPageChange('home');
    onCategorySelect(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand - Full width on mobile, spans 2 columns on larger screens */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 
              className="text-xl sm:text-2xl font-bold text-red-500 mb-3 sm:mb-4 cursor-pointer"
              style={{ fontFamily: 'Creepster, cursive' }}
              onClick={() => onPageChange('home')}
            >
              Shadow Realm
            </h3>
            <p 
              className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base max-w-md"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Embrace your dark side with our exclusive collection of gothic fashion. 
              Where darkness meets elegance, and shadows tell stories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-1">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-1">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-1">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-1">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-4 sm:mt-0">
            <h4 
              className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-left text-sm sm:text-base"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="mt-4 sm:mt-0">
            <h4 
              className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => handleCategoryClick(category.value)}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-left text-sm sm:text-base"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-900/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p 
            className="text-gray-400 text-xs sm:text-sm"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            © 2025 Shadow Realm. All rights reserved. Embrace the darkness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;