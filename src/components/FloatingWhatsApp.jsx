import React, { useState } from 'react';
import { MessageSquare, X, Send, AlertCircle, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const rawNumber = CLINIC_CONFIG.unverifiedDetails.whatsapp.rawNumber;
  const defaultMsg = encodeURIComponent(CLINIC_CONFIG.unverifiedDetails.whatsapp.defaultMessage);
  const waUrl = `https://wa.me/${rawNumber}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn mb-2 z-50">
          {/* Card Header */}
          <div className="bg-[#0e2a47] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold">Ekadantha Dental Care</h4>
                <p className="text-xs text-emerald-300">Kadugodi, Whitefield Clinic</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg"
              aria-label="Close WhatsApp card"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 shadow-xs">
              <p className="font-medium text-slate-800 mb-1">
                👋 Hello! Have questions about dental checkups or treatments?
              </p>
              <p>
                Our team at Kadugodi is happy to assist you with consultation timings and service queries.
              </p>
            </div>

            {/* Demo Notice */}
            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Demo notice:</strong> Clinic owner's official WhatsApp number will be linked here upon onboarding.
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Demo WhatsApp Chat</span>
              <ExternalLink className="w-3 h-3 text-emerald-200" />
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer relative group"
        aria-label="Contact Ekadantha Dental Care on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-400 rounded-full border-2 border-white animate-pulse"></span>
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>

        {/* Desktop Tooltip */}
        <span className="hidden md:group-hover:block absolute right-16 bg-[#0e2a47] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
