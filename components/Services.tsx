import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Bespoke Automation for Your Business</h2>
        <p className="text-lg text-slate-400 mb-12">
          We don't do cookie-cutter packages. Every service business operates differently, which is why we build custom workflows tailored precisely to how you work.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-left shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">What's included in a custom build?</h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Deep-dive audit of your current customer journey',
                  'Custom SMS & Email workflow architecture',
                  'Integration with your existing calendar or booking system',
                  'Direct Google Business Profile review routing',
                  '1-on-1 support and adjustments'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <CheckCircle2 className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 text-center">
              <h4 className="text-xl font-bold mb-3">Ready to save hours of admin?</h4>
              <p className="text-slate-400 mb-6 text-sm">
                Fill out a brief form about your business, and we'll provide a custom strategy and quote within 24 hours.
              </p>
              
              {/* New Pricing Callout Box */}
              <div className="bg-slate-800/80 rounded-xl p-4 mb-6 border border-slate-700">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="text-blue-400 font-bold block mb-1">Pricing Model</span>
                  We typically operate on a simple monthly retainer, plus a small initial setup fee. No hidden costs.
                </p>
              </div>

              <button 
                onClick={onGetQuote}
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}