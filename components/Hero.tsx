import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onGetQuote }: { onGetQuote: () => void }) {
  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      {/* Ambient Tech Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-transparent rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Mobile-optimised heading: scales down slightly on mobile, always breaks lines neatly */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight md:leading-tight">
            Automate Your Follow-Ups.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Skyrocket Your Reviews.</span>
          </h1>
          
          {/* Mobile-optimised paragraph: slightly smaller text and side padding on small screens */}
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 px-2 sm:px-0">
            We build bespoke automation workflows for service businesses. Turn every happy customer into a 5-star Google review and eliminate manual admin on autopilot.
          </p>
          
          {/* Mobile-optimised buttons: full width on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-2 sm:px-0">
            <button 
              onClick={onGetQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-200 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={scrollToDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all shadow-sm"
            >
              See How It Works
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}