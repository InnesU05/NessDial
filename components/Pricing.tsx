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
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-400">Invest in automation that pays for itself in new business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border ${tier.popular ? 'bg-blue-600 border-blue-500' : 'bg-slate-800 border-slate-700'}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p className={`mb-6 ${tier.popular ? 'text-blue-100' : 'text-slate-400'}`}>{tier.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={tier.popular ? 'text-blue-200' : 'text-slate-400'}>/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 ${tier.popular ? 'text-white' : 'text-blue-400'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Mailto link acts as a simple lead capture for now */}
              <a 
                href={`mailto:nessdialai@gmail.com?subject=Enquiry about the ${tier.name} Plan`} 
                className={`block text-center w-full py-3 px-6 rounded-lg font-medium transition-colors ${tier.popular ? 'bg-white text-blue-600 hover:bg-slate-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
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