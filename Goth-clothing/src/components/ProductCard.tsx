import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const handleClick = () => {
    console.log('Clicked product:', product.name);
    onAddToCart(product);
  };

  return (
    <div className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-red-900/20 hover:border-red-600/50 transition-all duration-300">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-zinc-800">
        <img src={product.image} alt={product.name} className="h-64 w-full object-cover object-center" />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-red-400 mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-white">${product.price}</span>
          <span className={`text-xs font-medium ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <button
          onClick={handleClick}
          disabled={!product.inStock}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          <ShoppingBag className="w-4 h-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;