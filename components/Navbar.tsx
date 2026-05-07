import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'services' | 'demo' | 'features' | 'about' | 'quote') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3 overflow-hidden border border-blue-100">
              <img src="/logo.png" alt="NessDial Logo" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">NessDial</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => onNavigate('features')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Features</button>
            <button onClick={() => onNavigate('demo')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">How it Works</button>
            <button onClick={() => onNavigate('services')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Services</button>
            <button onClick={() => onNavigate('about')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">About Us</button>
            <button 
              onClick={() => onNavigate('quote')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get a Quote
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => { onNavigate('features'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50">Features</button>
            <button onClick={() => { onNavigate('demo'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50">How it Works</button>
            <button onClick={() => { onNavigate('services'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50">Services</button>
            <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50">About Us</button>
            <button onClick={() => { onNavigate('quote'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md font-bold text-blue-600 bg-blue-50">Get a Quote</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;