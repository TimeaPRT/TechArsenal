import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FAQ from './components/FAQ';
import About from './components/About';
import ShippingInfo from './components/ShippingInfo';
import Returns from './components/Returns';
import Profile from './components/Profile';
import SizeGuide from './components/SizeGuide';
import AuthModal from './components/AuthModal';
import Cart from './components/Cart';
import SizeModal from './components/SizeModal';
import Footer from './components/Footer';
import { Product, CartItem, User, UserProfile } from './types';

function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, type: 'login' as 'login' | 'signup' });
  const [cartOpen, setCartOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [sizeModal, setSizeModal] = useState({ isOpen: false, product: null as Product | null });

  const handleAuth = (email: string, _password: string, name?: string) => {
    const newUser: User = { 
      id: Math.random().toString(36), 
      email, 
      name: name || email.split('@')[0],
      profile: {
        firstName: name?.split(' ')[0] || email.split('@')[0],
        lastName: name?.split(' ')[1] || '',
        joinDate: new Date().toISOString(),
        preferences: {
          newsletter: true,
          smsNotifications: false,
          darkMode: true,
          sizePreference: ''
        }
      }
    };
    setUser(newUser);
    setAuthModal({ isOpen: false, type: 'login' });
  };

  const handleUpdateProfile = (updatedProfile: UserProfile) => {
    if (user) {
      setUser({
        ...user,
        profile: updatedProfile
      });
    }
  };

  const handleAddToCart = (product: Product) => {
    console.log('Adding to cart:', product.name);
    setSizeModal({ isOpen: true, product });
  };

  const handleSizeConfirm = (size: string) => {
    console.log('Size selected:', size);
    if (sizeModal.product) {
      const itemKey = `${sizeModal.product.id}-${size}`;
      const existingItem = cartItems.find(item => `${item.id}-${item.selectedSize}` === itemKey);

      if (existingItem) {
        setCartItems(cartItems.map(item => 
          `${item.id}-${item.selectedSize}` === itemKey ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        const newItem: CartItem = { ...sizeModal.product, quantity: 1, selectedSize: size };
        setCartItems([...cartItems, newItem]);
      }
    }
    setSizeModal({ isOpen: false, product: null });
  };

  const handleUpdateQuantity = (itemKey: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => `${item.id}-${item.selectedSize}` !== itemKey));
    } else {
      setCartItems(cartItems.map(item => 
        `${item.id}-${item.selectedSize}` === itemKey ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveItem = (itemKey: string) => {
    setCartItems(cartItems.filter(item => `${item.id}-${item.selectedSize}` !== itemKey));
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    console.log('Category selected from footer:', category);
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <div className="bg-zinc-900 border-y border-red-900/20 py-4">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-300 underline"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  Need help with sizing? Check our comprehensive Size Guide
                </button>
              </div>
            </div>
            <ProductGrid 
              onAddToCart={handleAddToCart} 
              selectedCategory={selectedCategory} 
              onCategoryChange={setSelectedCategory} 
            />
            <FAQ />
          </>
        );
      case 'about':
        return <About onPageChange={setCurrentPage} />;
      case 'shipping':
        return <ShippingInfo onPageChange={setCurrentPage} />;
      case 'returns':
        return <Returns onPageChange={setCurrentPage} />;
      case 'profile':
        return user ? (
          <Profile 
            user={user} 
            onUpdateProfile={handleUpdateProfile}
            onPageChange={setCurrentPage} 
          />
        ) : (
          <div className="py-20 text-center">
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-red-500 mb-4" style={{ fontFamily: 'Creepster, cursive' }}>
                Access Denied
              </h2>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
                Please log in to view your profile.
              </p>
              <button
                onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Log In
              </button>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <ProductGrid 
              onAddToCart={handleAddToCart} 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header
        onAuthClick={(type) => setAuthModal({ isOpen: true, type })}
        onCartClick={() => setCartOpen(true)}
        cartItemsCount={totalCartItems}
        user={user}
        onLogout={() => setUser(null)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      {renderContent()}
      
      <Footer 
        onPageChange={setCurrentPage}
        onSizeGuideOpen={() => setSizeGuideOpen(true)}
        onCategorySelect={handleCategorySelect} 
      />

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ isOpen: false, type: 'login' })}
        type={authModal.type}
        onAuth={handleAuth}
        onSwitchType={(type) => setAuthModal({ isOpen: true, type })}
      />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <SizeModal
        isOpen={sizeModal.isOpen}
        onClose={() => setSizeModal({ isOpen: false, product: null })}
        product={sizeModal.product}
        onConfirm={handleSizeConfirm}
      />

      <SizeGuide
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </div>
  );
}

export default App;