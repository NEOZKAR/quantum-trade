import { Button } from '@/components/ui/button';
import { BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthModal } from '@/components/auth/auth-modal';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'login',
  });

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthModal({ isOpen: true, mode });
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl">QuantumTrade</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/features" className="text-gray-700 hover:text-gray-900">Features</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Button variant="outline" size="sm" onClick={() => openAuthModal('login')}>
                Login
              </Button>
              <Button size="sm" onClick={() => openAuthModal('register')}>
                Sign Up
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/features"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                About
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => openAuthModal('login')}
                >
                  Login
                </Button>
                <Button
                  className="w-full"
                  onClick={() => openAuthModal('register')}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />
    </>
  );
}