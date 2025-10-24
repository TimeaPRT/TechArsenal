import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface SizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onConfirm: (size: string) => void;
}

const SizeModal: React.FC<SizeModalProps> = ({ isOpen, onClose, product, onConfirm }) => {
  const [selectedSize, setSelectedSize] = useState('');

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="bg-zinc-900 rounded-lg border border-red-900/30 w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b border-red-900/30">
          <h3 className="text-xl font-bold text-red-500" style={{ fontFamily: 'Creepster, cursive' }}>
            Select Size
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-red-400">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-white font-medium mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
              {product.name}
            </h4>
            <p className="text-gray-400">${product.price}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 px-4 rounded-lg border transition-all ${
                  selectedSize === size ? 'border-red-500 bg-red-600 text-white' : 'border-red-900/30 bg-zinc-800 text-gray-300'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            onClick={() => selectedSize && onConfirm(selectedSize)}
            disabled={!selectedSize}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeModal;