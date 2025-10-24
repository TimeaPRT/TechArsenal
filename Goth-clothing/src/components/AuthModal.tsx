import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  onAuth: (email: string, password: string, name?: string) => void;
  onSwitchType: (type: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  type,
  onAuth,
  onSwitchType
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth(email, password, name);
    setEmail('');
    setPassword('');
    setName('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-zinc-900 border border-red-900/30 shadow-xl rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 
              className="text-2xl font-bold text-red-500"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              {type === 'login' ? 'Enter the Realm' : 'Join the Darkness'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {type === 'signup' && (
              <div>
                <label 
                  className="block text-gray-300 text-sm font-medium mb-2"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-zinc-800 border border-red-900/30 text-white rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label 
                className="block text-gray-300 text-sm font-medium mb-2"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-zinc-800 border border-red-900/30 text-white rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label 
                className="block text-gray-300 text-sm font-medium mb-2"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-zinc-800 border border-red-900/30 text-white rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300 pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {type === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400" style={{ fontFamily: 'Cinzel, serif' }}>
              {type === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => onSwitchType(type === 'login' ? 'signup' : 'login')}
                className="ml-1 text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                {type === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;