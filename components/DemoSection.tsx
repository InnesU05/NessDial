import { motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, Mic, Plus } from 'lucide-react';

export default function DemoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-blue-200">
              Smart Triggers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              The perfect message,<br/>at the perfect time.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We design workflows that trigger the moment you mark a job as complete. No manual typing, no forgotten follow-ups. Just a seamless experience that your customers will appreciate.
            </p>
            <ul className="space-y-5">
              {['Customisable messaging templates', 'Smart delay timing to maximise open rates', 'Direct links to your preferred review platforms'].map((item, i) => (
                <li key={i} className="flex items-start text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mt-16 lg:mt-0 relative"
          >
            {/* High-Fidelity iPhone Mockup */}
            <div className="relative mx-auto w-full max-w-[320px] rounded-[3rem] border-[12px] border-slate-900 bg-white shadow-2xl h-[650px] overflow-hidden flex flex-col ring-4 ring-slate-100">
               {/* Dynamic Island */}
               <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                  <div className="w-28 h-7 bg-slate-900 rounded-b-3xl"></div>
               </div>
               
               {/* iMessage Header */}
               <div className="bg-slate-50/90 backdrop-blur-md pt-12 pb-3 px-4 border-b border-slate-200 flex items-center justify-between z-10">
                  <div className="flex items-center text-blue-500">
                     <ChevronLeft className="w-6 h-6 -ml-1" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 mb-1 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      ND
                    </div>
                    <span className="text-[11px] font-semibold text-slate-900 leading-none">NessDial System</span>
                  </div>
                  <div className="w-6"></div>
               </div>

               {/* Chat Interface */}
               <div className="flex-1 p-4 bg-white overflow-y-auto flex flex-col space-y-4">
                  <div className="text-center text-[10px] text-slate-400 font-medium my-2 uppercase tracking-wide">Today 14:30</div>
                  
                  {/* Received Bubble */}
                  <div className="bg-slate-100 text-slate-800 p-3.5 rounded-2xl rounded-bl-sm max-w-[85%] self-start text-sm shadow-sm border border-slate-200 leading-relaxed">
                     Hi John! Thanks for choosing us today. If you were happy with the service, we'd hugely appreciate a quick review here:<br/><br/>
                     <span className="text-blue-600 underline font-medium">g.page/review/123</span>
                  </div>
                  
                  {/* Sent Bubble */}
                  <div className="bg-blue-500 text-white p-3.5 rounded-2xl rounded-br-sm max-w-[80%] self-end text-sm shadow-sm leading-relaxed">
                     Will do, thanks! The service was brilliant.
                  </div>
               </div>

               {/* iMessage Input Bar */}
               <div className="bg-slate-50 px-3 py-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full text-slate-400 flex items-center justify-center">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div className="flex-1 h-9 rounded-full border border-slate-300 bg-white px-4 flex items-center text-sm text-slate-400 font-medium shadow-inner">
                    iMessage
                  </div>
                  <div className="w-8 h-8 text-blue-500 flex items-center justify-center">
                    <Mic className="w-6 h-6" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}