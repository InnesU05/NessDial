import React from 'react';

interface LegalDocProps {
  type: 'terms' | 'privacy';
  onBack: () => void;
}

export const LegalDoc: React.FC<LegalDocProps> = ({ type, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="text-slate-500 hover:text-blue-600 mb-6 flex items-center font-medium transition-colors">
          &larr; Back to Home
        </button>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-8 md:p-12">
          {type === 'terms' ? (
            <>
              <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
              <div className="prose prose-blue max-w-none text-slate-600 space-y-4">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">1. Introduction</h3>
                <p>Welcome to NessDial. By accessing our website and using our automation services, you agree to be bound by these Terms and Conditions.</p>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">2. Service Description</h3>
                <p>NessDial provides workflow automation and review generation services for businesses. While we strive for maximum uptime, we rely on third-party integrations and telecommunications networks.</p>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">3. Subscription and Billing</h3>
                <p>Services are billed on a monthly rolling basis. You may cancel your subscription at any time. Cancellations will take effect at the end of the current billing cycle.</p>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">4. User Responsibilities</h3>
                <p>You agree to provide accurate information when registering. You are responsible for ensuring your use of our service complies with all local laws and regulations regarding marketing communications and customer data.</p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
              <div className="prose prose-blue max-w-none text-slate-600 space-y-4">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">1. Data Collection</h3>
                <p>We collect information you provide directly to us, such as your name, email address, phone number, and business details. We also process necessary client data to facilitate the automated workflows on your behalf.</p>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">2. Use of Information</h3>
                <p>We use your information to operate, maintain, and improve our services. We do not sell your personal or client data to third parties.</p>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">3. Data Processing</h3>
                <p>Your data is processed securely to generate automated messaging. This data is encrypted in transit and at rest.</p>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">4. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at nessdialai@gmail.com.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};