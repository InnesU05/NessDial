import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DemoSection from './components/DemoSection';
import Services from './components/Services';
import Footer from './components/Footer';
import { LegalDoc } from './components/LegalDocs';
import About from './components/About';
import QuoteForm from './components/QuoteForm';

type ViewState = 'home' | 'about' | 'quote' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (view: 'home' | 'services' | 'demo' | 'features' | 'about' | 'quote' | 'terms' | 'privacy') => {
    if (['terms', 'privacy', 'about', 'quote'].includes(view)) {
      setCurrentView(view as ViewState);
      window.scrollTo(0, 0);
      return;
    }

    setCurrentView('home');
    
    setTimeout(() => {
      let elementId = '';
      if (view === 'services') elementId = 'services';
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
          <div id="home"><Hero onGetQuote={() => handleNavigate('quote')} /></div>
          <div id="features"><Features /></div>
          <HowItWorks />
          <div id="demo"><DemoSection /></div>
          <div id="services"><Services onGetQuote={() => handleNavigate('quote')} /></div>
          <Footer onNavigate={handleNavigate} onGetStarted={() => handleNavigate('quote')} />
        </>
      )}

      {currentView === 'about' && (
        <About onBack={() => setCurrentView('home')} />
      )}

      {currentView === 'quote' && (
        <QuoteForm onBack={() => setCurrentView('home')} />
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