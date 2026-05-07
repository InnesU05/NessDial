import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { track } from '@vercel/analytics';

export default function QuoteForm({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === 'string' && e.data.includes('Tally.FormSubmitted')) {
        try {
          const eventData = JSON.parse(e.data);
          if (eventData.event === 'Tally.FormSubmitted') {
            track('Quote Form Submitted', {
              formId: eventData.payload.formId
            });
          }
        } catch (err) {
          // Ignore any irrelevant messages
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-blue-200">
      {/* Soft blue ambient glow in the top right corner */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <button onClick={onBack} className="text-slate-500 hover:text-blue-600 mb-8 flex items-center font-medium transition-colors group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        {/* Crisp white container to make the form highly readable */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-4 md:p-8 overflow-hidden">
          <iframe 
            data-tally-src="https://tally.so/embed/ODdD8p?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" 
            loading="lazy" 
            width="100%" 
            height="540" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Get a Custom Quote"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}