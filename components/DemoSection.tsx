import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function DemoSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              The perfect message, at the perfect time.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We design workflows that trigger the moment you mark a job as complete. No manual typing, no forgotten follow-ups. Just a seamless experience that your customers will appreciate.
            </p>
            <ul className="space-y-4">
              {['Customisable messaging templates', 'Smart delay timing', 'Direct links to your review platforms'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 lg:mt-0 relative"
          >
            {/* Simple CSS Phone Mockup */}
            <div className="relative mx-auto w-full max-w-[320px] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-50 shadow-2xl h-[600px] overflow-hidden flex flex-col">
              <div className="w-full h-16 bg-slate-900 flex items-center justify-center rounded-t-3xl">
                <div className="w-32 h-6 bg-black rounded-full"></div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-end space-y-4 bg-slate-100">
                <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm w-5/6">
                  <p className="text-sm text-slate-800">Hi John! Thanks for choosing us today. If you were happy with the service, we'd hugely appreciate a quick review here: <span className="text-blue-600 underline">g.page/review</span></p>
                  <p className="text-[10px] text-slate-400 mt-2">14:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}