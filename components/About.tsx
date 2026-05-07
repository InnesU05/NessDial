import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Instagram, Linkedin, Code2, Wrench } from 'lucide-react';

export default function About({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-blue-200">
      {/* Ambient background styling */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button 
          onClick={onBack} 
          className="text-slate-500 hover:text-blue-600 mb-8 flex items-center font-medium transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12 md:px-16 md:py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 relative z-10">
              Engineering Better Business.
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl relative z-10">
              The story behind NessDial and our mission to streamline local businesses.
            </p>
          </div>

          {/* Story Section */}
          <div className="px-8 py-12 md:px-16 md:py-16 text-slate-700 text-lg leading-relaxed space-y-8">
            <p>
              Hi, I'm Innes. I'm an engineering student based in Aberdeen. Throughout my studies, I've always been fascinated by systems—how they work, where they bottleneck, and most importantly, how they can be optimised.
            </p>
            
            <div className="flex items-start bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <Wrench className="w-8 h-8 text-blue-500 mr-4 shrink-0 mt-1" />
              <p className="text-slate-600 italic">
                "I started noticing a recurring theme among local businesses in our community: incredible tradespeople and business owners who were absolute masters of their craft, but were being weighed down by the administrative burden of chasing leads, following up with customers, and managing their online reputation."
              </p>
            </div>

            <p>
              NessDial was built to bridge that exact gap. I set out to take the analytical, problem-solving mindset from my engineering background and apply it to these real-world frustrations. 
            </p>
            <p>
              By building bespoke automation workflows, my goal is simple: to give local business owners their time back. We handle the technical heavy lifting so you can focus entirely on what you do best, while the systems run quietly and efficiently in the background to grow your business.
            </p>
          </div>

          {/* Founder Contact Section */}
          <div className="bg-slate-50 border-t border-slate-100 px-8 py-10 md:px-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Code2 className="w-6 h-6 mr-3 text-blue-600" />
              Connect with me
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Instagram Card */}
              <a 
                href="https://instagram.com/innes_u05" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-pink-200 group flex-1"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Instagram</span>
                  <span className="font-semibold text-slate-800 group-hover:text-pink-600 transition-colors">@innes_u05</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-full group-hover:bg-pink-50 transition-colors">
                  <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Instagram className="w-6 h-6 text-slate-600 group-hover:text-pink-600 transition-colors" />
                  </motion.div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://linkedin.com/in/innes-urquhart" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-blue-300 group flex-1"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</span>
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Innes Urquhart</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                  <motion.div whileHover={{ rotate: -15, scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Linkedin className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                  </motion.div>
                </div>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}