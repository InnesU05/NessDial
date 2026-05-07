import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '£99',
    description: 'Perfect for small teams looking to generate more reviews.',
    features: ['Automated SMS review requests', 'Google Business Profile linking', 'Basic monthly reporting'],
  },
  {
    name: 'Growth',
    price: '£199',
    description: 'Advanced workflows to manage client retention.',
    features: ['Everything in Starter', 'Email & SMS sequences', 'Basic CRM integration', 'Rebooking reminders'],
    popular: true,
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-400">Invest in automation that pays for itself in new business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col h-full rounded-2xl p-8 border shadow-2xl ${
                tier.popular 
                  ? 'bg-gradient-to-b from-blue-600 to-blue-800 border-blue-400/50 relative transform md:-translate-y-2' 
                  : 'bg-slate-800/80 border-slate-700 backdrop-blur-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p className={`mb-6 ${tier.popular ? 'text-blue-100' : 'text-slate-400'}`}>{tier.description}</p>
              <div className="mb-8 border-b border-white/10 pb-8">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={tier.popular ? 'text-blue-200' : 'text-slate-400'}>/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`h-5 w-5 mr-3 shrink-0 mt-0.5 ${tier.popular ? 'text-blue-200' : 'text-blue-500'}`} />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={`mailto:nessdialai@gmail.com?subject=Enquiry about the ${tier.name} Plan`} 
                className={`block text-center w-full py-3.5 px-6 rounded-lg font-bold transition-all mt-auto ${
                  tier.popular 
                    ? 'bg-white text-blue-700 hover:bg-slate-50 shadow-md hover:shadow-lg' 
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                Enquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}