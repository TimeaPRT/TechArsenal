import { useState, useRef, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onAuthClick: (type: 'login' | 'signup') => void;
  onCartClick: () => void;
  cartItemsCount: number;
  user: any;
  onLogout: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header = ({
  onAuthClick,
  onCartClick,
  cartItemsCount,
  user,
  onLogout,
  currentPage,
  onPageChange
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [isMobileCollectionOpen, setIsMobileCollectionOpen] = useState(false);
  const [isMobilePoliciesOpen, setIsMobilePoliciesOpen] = useState(false);

  // Refs for dropdown containers
  const policiesRef = useRef<HTMLDivElement>(null);
  const collectionRef = useRef<HTMLDivElement>(null);
  const policiesButtonRef = useRef<HTMLButtonElement>(null);
  const collectionButtonRef = useRef<HTMLButtonElement>(null);

  const navigation = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' }
  ];

  const policiesItems = [
    { name: 'Shipping', page: 'shipping' },
    { name: 'Returns', page: 'returns' }
  ];

  const collectionItems = [
    { name: 'Women', category: 'women' },
    { name: 'Men', category: 'men' },
    { name: 'Corsets', category: 'corsets' },
    { name: 'Accessories', category: 'accessories' },
    { name: 'Footwear', category: 'footwear' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (policiesRef.current && !policiesRef.current.contains(event.target as Node) && 
          policiesButtonRef.current && !policiesButtonRef.current.contains(event.target as Node)) {
        setIsPoliciesOpen(false);
      }
      if (collectionRef.current && !collectionRef.current.contains(event.target as Node) &&
          collectionButtonRef.current && !collectionButtonRef.current.contains(event.target as Node)) {
        setIsCollectionOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-zinc-950 border-b border-red-900/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-xl sm:text-2xl font-bold text-red-500 cursor-pointer"
              style={{ fontFamily: 'Creepster, cursive' }}
              onClick={() => onPageChange('home')}
            >
              Shadow Realm
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => onPageChange(item.page)}
                className={`transition-colors duration-300 ${
                  currentPage === item.page
                    ? 'text-red-400'
                    : 'text-gray-300 hover:text-red-400'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {item.name}
              </button>
            ))}
            
            {/* Policies Dropdown */}
            <div className="relative" ref={policiesRef}>
              <button
                ref={policiesButtonRef}
                onMouseEnter={() => setIsPoliciesOpen(true)}
                onMouseLeave={() => setTimeout(() => setIsPoliciesOpen(false), 200)}
                onClick={() => setIsPoliciesOpen(!isPoliciesOpen)}
                className={`flex items-center space-x-1 transition-colors duration-300 ${
                  policiesItems.some(item => currentPage === item.page)
                    ? 'text-red-400'
                    : 'text-gray-300 hover:text-red-400'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <span>Policies</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPoliciesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPoliciesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-red-900/20 rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setIsPoliciesOpen(true)}
                  onMouseLeave={() => setTimeout(() => setIsPoliciesOpen(false), 200)}
                >
                  {policiesItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        onPageChange(item.page);
                        setIsPoliciesOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 transition-colors duration-300 ${
                        currentPage === item.page
                          ? 'bg-zinc-800 text-red-400'
                          : 'text-gray-300 hover:bg-zinc-800 hover:text-red-400'
                      }`}
                      style={{ fontFamily: 'Crimson Text, serif' }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Profile Link (only show when user is logged in) */}
            {user && (
              <button
                onClick={() => onPageChange('profile')}
                className={`transition-colors duration-300 ${
                  currentPage === 'profile'
                    ? 'text-red-400'
                    : 'text-gray-300 hover:text-red-400'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Profile
              </button>
            )}
            
            {/* Collection Dropdown */}
            <div className="relative" ref={collectionRef}>
              <button
                ref={collectionButtonRef}
                onMouseEnter={() => setIsCollectionOpen(true)}
                onMouseLeave={() => setTimeout(() => setIsCollectionOpen(false), 200)}
                onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-red-400 transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <span>Collection</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCollectionOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCollectionOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-red-900/20 rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setIsCollectionOpen(true)}
                  onMouseLeave={() => setTimeout(() => setIsCollectionOpen(false), 200)}
                >
                  {collectionItems.map((item) => (
                    <button
                      key={item.name}
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-zinc-800 hover:text-red-400 transition-colors duration-300"
                      style={{ fontFamily: 'Crimson Text, serif' }}
                      onClick={() => {
                        console.log('Selected category:', item.category);
                        setIsCollectionOpen(false);
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right section - Search, Profile, Cart */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Show on medium screens and up */}
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dark treasures..."
                className="bg-zinc-800 border border-red-900/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none w-48 lg:w-64 transition-colors duration-300"
                style={{ fontFamily: 'Crimson Text, serif' }}
              />
            </div>

            {/* Mobile Search Button */}
            <button className="md:hidden text-gray-300 hover:text-red-400 transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Profile */}
            {user ? (
              <div className="hidden sm:flex items-center space-x-3">
                <span className="text-gray-300 text-sm hidden lg:block" style={{ fontFamily: 'Cinzel, serif' }}>
                  Welcome, {user.name}
                </span>
                <button
                  onClick={onLogout}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => onAuthClick('login')}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300"
              >
                <User className="w-5 h-5" />
              </button>
            )}

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative text-gray-300 hover:text-red-400 transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-red-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-red-900/20 py-4 bg-zinc-950">
            <nav className="flex flex-col space-y-4">
              {/* Main Navigation */}
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileLinkClick(item.page)}
                  className={`text-left py-3 px-4 rounded-lg transition-colors duration-300 ${
                    currentPage === item.page
                      ? 'bg-red-900/20 text-red-400 border border-red-900/30'
                      : 'text-gray-300 hover:bg-zinc-800 hover:text-red-400'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Policies in Mobile */}
              <div className="border-t border-red-900/20 pt-4">
                <button
                  onClick={() => setIsMobilePoliciesOpen(!isMobilePoliciesOpen)}
                  className="flex items-center justify-between w-full text-left py-3 px-4 text-gray-300 hover:text-red-400 transition-colors duration-300"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  <span>Policies</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobilePoliciesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobilePoliciesOpen && (
                  <div className="flex flex-col space-y-2 pl-6 mt-2">
                    {policiesItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleMobileLinkClick(item.page)}
                        className={`text-left py-2 px-4 rounded transition-colors duration-300 ${
                          currentPage === item.page
                            ? 'text-red-400 bg-red-900/10'
                            : 'text-gray-300 hover:text-red-400 hover:bg-zinc-800'
                        }`}
                        style={{ fontFamily: 'Crimson Text, serif' }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Profile Link in Mobile (only show when user is logged in) */}
              {user && (
                <button
                  onClick={() => handleMobileLinkClick('profile')}
                  className={`text-left py-3 px-4 rounded-lg transition-colors duration-300 ${
                    currentPage === 'profile'
                      ? 'bg-red-900/20 text-red-400 border border-red-900/30'
                      : 'text-gray-300 hover:bg-zinc-800 hover:text-red-400'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Profile
                </button>
              )}
              
              {/* Mobile Collection Dropdown */}
              <div className="border-t border-red-900/20 pt-4">
                <button
                  onClick={() => setIsMobileCollectionOpen(!isMobileCollectionOpen)}
                  className="flex items-center justify-between w-full text-left py-3 px-4 text-gray-300 hover:text-red-400 transition-colors duration-300"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  <span>Collection</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileCollectionOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileCollectionOpen && (
                  <div className="flex flex-col space-y-2 pl-6 mt-2">
                    {collectionItems.map((item) => (
                      <button
                        key={item.name}
                        className="text-left py-2 px-4 rounded text-gray-300 hover:text-red-400 hover:bg-zinc-800 transition-colors duration-300"
                        style={{ fontFamily: 'Crimson Text, serif' }}
                        onClick={() => {
                          console.log('Selected category:', item.category);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Auth in Mobile */}
              {!user && (
                <div className="border-t border-red-900/20 pt-4">
                  <button
                    onClick={() => {
                      onAuthClick('login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left py-3 px-4 text-gray-300 hover:text-red-400 transition-colors duration-300"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    Login / Sign Up
                  </button>
                </div>
              )}

              {/* Mobile Search */}
              <div className="border-t border-red-900/20 pt-4">
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search dark treasures..."
                    className="w-full bg-zinc-800 border border-red-900/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;