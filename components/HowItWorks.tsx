import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'We map your process',
    description: 'We learn exactly how a customer moves through your business, from booking to payment, to find the perfect follow-up moments.'
  },
  {
    number: '02',
    title: 'We build the engine',
    description: 'We connect your tools and build automated workflows behind the scenes. No new software for you to learn, no passwords to manage.'
  },
  {
    number: '03',
    title: 'You collect reviews',
    description: 'When a job is done, our system automatically sends highly personalised, timed messages driving your clients straight to Google.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it actually works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We handle the technical heavy lifting so you can focus on providing the actual service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10"
            >
              <div className="text-5xl font-extrabold text-blue-50 mb-4 tracking-tighter">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}