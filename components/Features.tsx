import { motion } from 'framer-motion';
import { MessageSquare, Star, Settings } from 'lucide-react';

const features = [
  {
    name: 'Automated SMS & Email',
    description: 'Reach your clients exactly when it matters. We set up automated messages that send shortly after a job is completed.',
    icon: MessageSquare,
  },
  {
    name: 'Frictionless Reviews',
    description: 'Stop hoping for reviews and start collecting them. Direct satisfied customers straight to your Google profile with a single tap.',
    icon: Star,
  },
  {
    name: 'Bespoke Admin Workflows',
    description: 'From lead capture to CRM syncing, we connect your favourite tools so you spend less time on paperwork.',
    icon: Settings,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Work smarter, not harder</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to standardise your follow-ups, save time, and grow your reputation automatically.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-slate-600 leading-relaxed flex-1">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}