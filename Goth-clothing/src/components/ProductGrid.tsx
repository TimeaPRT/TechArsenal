import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

interface ProductGridProps {
  onAddToCart: (product: any) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductGrid = ({ onAddToCart, selectedCategory, onCategoryChange }: ProductGridProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Grouped categories for better organization
  const categories = [
    'All',
    'Dresses & Gowns',
    'Tops & Blouses',
    'Outerwear',
    'Bottoms',
    'Specialty'
  ];
  
  // Map products to grouped categories
  const categoryMap = {
    'Dresses & Gowns': ['Dresses'],
    'Tops & Blouses': ['Tops', 'Bodysuits', 'Corsets'],
    'Outerwear': ['Coats', 'Blazers', 'Cardigans', 'Kimonos', 'Capes', 'Hoodies'],
    'Bottoms': ['Pants', 'Skirts'],
    'Specialty': ['Vests']
  };

  // Simulate loading state when category changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : selectedCategory in categoryMap
    ? products.filter(product => categoryMap[selectedCategory as keyof typeof categoryMap].includes(product.category))
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-red-500 mb-4"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Dark Collection
          </h2>
          <p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Explore our carefully curated selection of gothic fashion that speaks to your dark soul
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-red-400 hover:scale-105'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

            {/* Results Count */}
            <div className="mt-8 text-center">
              <p className="text-gray-400" style={{ fontFamily: 'Crimson Text, serif' }}>
                Showing {filteredProducts.length} of {products.length} items
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* No products message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-zinc-900 border border-red-900/20 rounded-lg p-8 max-w-md mx-auto">
                  <p className="text-gray-400 text-lg mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                    No products found in this category.
                  </p>
                  <button
                    onClick={() => onCategoryChange('All')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    View All Products
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;