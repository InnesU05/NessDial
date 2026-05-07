import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onGetStarted?: () => void;
  onNavigate: (view: 'home' | 'pricing' | 'demo' | 'features' | 'terms' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onGetStarted, onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-8 md:pt-16 pb-8 relative">
       {/* Pre-footer CTA */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-2xl">
              <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to modernise your follow-ups?</h3>
                  <p className="text-blue-100 text-lg">Start collecting 5-star Google reviews on autopilot today.</p>
              </div>
              <button 
                onClick={onGetStarted}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-slate-50 transition-colors shadow-lg flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
          </div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
               <img src="/logo.png" alt="NessDial" className="w-8 h-8 mr-2 object-contain bg-white rounded-md" />
               <span className="font-bold text-xl">NessDial</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Helping service businesses automate their workflows, capture more reviews, and save time on manual admin.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('demo')} className="hover:text-white transition-colors">How it Works</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <a href="mailto:nessdialai@gmail.com" className="hover:text-white transition-colors">nessdialai@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <a href="tel:07401236302" className="hover:text-white transition-colors">07401236302</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span>Aberdeen, Scotland</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} NessDial. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;