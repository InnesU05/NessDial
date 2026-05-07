import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { track } from '@vercel/analytics';

export default function QuoteForm({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    // 1. Load the Tally script to ensure the form resizes itself beautifully
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // 2. Listen for form submissions to send to Vercel Analytics
    const handleMessage = (e: MessageEvent) => {
      // Ensure the message is from Tally
      if (typeof e.data === 'string' && e.data.includes('Tally.FormSubmitted')) {
        try {
          const eventData = JSON.parse(e.data);
          if (eventData.event === 'Tally.FormSubmitted') {
            // Send the custom event to your Vercel Analytics dashboard
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
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-blue-500/30">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600 via-slate-900 to-slate-900 pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <button onClick={onBack} className="text-slate-400 hover:text-white mb-8 flex items-center font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
        
        <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 p-4 md:p-8 overflow-hidden">
          {/* Tally Embed Iframe */}
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