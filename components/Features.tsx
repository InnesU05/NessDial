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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Work smarter, not harder</h2>
          <p className="mt-4 text-lg text-slate-600">Everything you need to standardise your follow-ups and grow your reputation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}