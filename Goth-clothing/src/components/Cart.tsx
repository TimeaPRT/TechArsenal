import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-zinc-900 border-l border-red-900/30 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-red-900/30">
            <h2 
              className="text-xl font-bold text-red-500"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Your Dark Collection
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center text-gray-400 mt-8">
                <p style={{ fontFamily: 'Cinzel, serif' }}>Your cart is empty</p>
                <p className="text-sm mt-2" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Add some dark treasures to begin
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="bg-zinc-800 rounded-lg p-4 border border-red-900/20">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
                          {item.name}
                        </h3>
                        <p className="text-gray-400 text-xs mt-1">Size: {item.selectedSize}</p>
                        <p className="text-red-400 font-semibold">${item.price}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(`${item.id}-${item.selectedSize}`)}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(`${item.id}-${item.selectedSize}`, Math.max(0, item.quantity - 1))}
                          className="bg-zinc-700 hover:bg-zinc-600 text-white p-1 rounded transition-colors duration-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-white text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(`${item.id}-${item.selectedSize}`, item.quantity + 1)}
                          className="bg-zinc-700 hover:bg-zinc-600 text-white p-1 rounded transition-colors duration-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-white font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-red-900/30 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-white" style={{ fontFamily: 'Cinzel, serif' }}>
                  Total: ${total.toFixed(2)}
                </span>
              </div>
              <button 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;