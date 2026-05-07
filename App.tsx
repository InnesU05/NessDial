import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { LegalDoc } from './components/LegalDocs';

type ViewState = 'home' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (view: 'home' | 'pricing' | 'demo' | 'features' | 'terms' | 'privacy') => {
    if (view === 'terms' || view === 'privacy') {
      setCurrentView(view);
      window.scrollTo(0, 0);
      return;
    }

    setCurrentView('home');
    
    setTimeout(() => {
      let elementId = '';
      if (view === 'pricing') elementId = 'pricing';
      else if (view === 'demo') elementId = 'demo';
      else if (view === 'features') elementId = 'features';
      
      if (elementId) {
        const el = document.getElementById(elementId);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {currentView === 'home' && (
        <>
          <Navbar onNavigate={handleNavigate} />
          <div id="home"><Hero /></div>
          <div id="features"><Features /></div>
          <div id="demo"><DemoSection /></div>
          <div id="pricing"><Pricing /></div>
          <Footer onNavigate={handleNavigate} onGetStarted={() => handleNavigate('pricing')} />
        </>
      )}

      {currentView === 'terms' && (
        <LegalDoc type="terms" onBack={() => setCurrentView('home')} />
      )}

      {currentView === 'privacy' && (
        <LegalDoc type="privacy" onBack={() => setCurrentView('home')} />
      )}
    </div>
  );
};

export default App;