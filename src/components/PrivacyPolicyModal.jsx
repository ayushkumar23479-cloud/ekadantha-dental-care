import React from 'react';
import { X, ShieldCheck, Lock, Eye } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100 animate-fadeIn">
        
        {/* Header */}
        <div className="bg-[#0e2a47] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Close privacy policy"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Patient Privacy Standards</span>
          </div>
          
          <h3 id="privacy-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            Privacy Policy & Data Principles
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Ekadantha Dental Care Demo • Kadugodi, Whitefield, Bengaluru
          </p>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 text-xs text-slate-600 leading-relaxed">
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 font-medium">
            Demo Disclaimer: This website is an unofficial developer demonstration. In this demo state, no patient data is transmitted to external servers or stored in any database.
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-teal-600" />
              1. Information Collection for Appointments
            </h4>
            <p>
              When production mode is activated, contact information (name, phone number, and preferred appointment time) is collected solely to schedule and confirm dental appointments. No unnecessary medical history or sensitive records are solicited through standard web forms.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-teal-600" />
              2. Confidentiality & No Third-Party Sharing
            </h4>
            <p>
              Patient confidentiality is paramount. Contact details are never sold, rented, or shared with third-party advertisers. Information is strictly utilized by clinic staff for direct communication regarding appointments, follow-ups, and dental queries.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              3. Secure Communications
            </h4>
            <p>
              Any future integration with messaging platforms such as WhatsApp or SMS gateways will adhere to end-to-end encryption and Indian data protection regulations.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              4. Contact for Privacy Inquiries
            </h4>
            <p>
              For queries regarding clinic privacy standards, contact the clinic administration at Kadugodi, Whitefield, Bengaluru, PIN 560067.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#0e2a47] hover:bg-[#163f69] text-white text-xs font-semibold transition-colors"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
}
