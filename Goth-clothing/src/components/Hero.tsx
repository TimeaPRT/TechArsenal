import React from 'react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-zinc-900 to-black py-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-5xl md:text-7xl font-bold text-red-500 mb-6 tracking-wide"
          style={{ fontFamily: 'Nosifer, cursive' }}
        >
          Embrace the Darkness
        </h1>
        <p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Crimson Text, serif' }}
        >
          Discover your dark aesthetic with our exclusive collection of gothic fashion. 
          From elegant corsets to dramatic capes, unleash your inner darkness.
        </p>
        <button 
          onClick={scrollToProducts}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Enter the Realm
        </button>
      </div>
    </section>
  );
};

export default Hero;