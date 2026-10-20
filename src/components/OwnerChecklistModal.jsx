import React from 'react';
import { X, CheckSquare, Clock, ShieldCheck, MapPin, Phone, Camera, Stethoscope, Sparkles } from 'lucide-react';
import { OWNER_LAUNCH_CHECKLIST, CLINIC_CONFIG } from '../data/clinicData';

export default function OwnerChecklistModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const icons = [
    <Stethoscope className="w-4 h-4 text-teal-600" />,
    <Phone className="w-4 h-4 text-teal-600" />,
    <Phone className="w-4 h-4 text-emerald-600" />,
    <MapPin className="w-4 h-4 text-teal-600" />,
    <Clock className="w-4 h-4 text-teal-600" />,
    <ShieldCheck className="w-4 h-4 text-teal-600" />,
    <Camera className="w-4 h-4 text-teal-600" />,
    <Sparkles className="w-4 h-4 text-teal-600" />,
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checklist-title"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100 animate-fadeIn">
        
        {/* Header */}
        <div className="bg-[#0e2a47] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Close checklist"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-1">
            <CheckSquare className="w-4 h-4" />
            <span>Developer Pitch & Handover Guide</span>
          </div>
          
          <h3 id="checklist-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            Clinic Owner Launch Checklist
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Everything in this demo is structured for rapid launch. Here is the checklist of items the clinic owner provides to publish live:
          </p>
        </div>

        {/* Checklist Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-3">
          {OWNER_LAUNCH_CHECKLIST.map((item, idx) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 mt-0.5">
                {icons[idx] || <CheckSquare className="w-4 h-4 text-teal-600" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Step {item.id}</span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    Pending Owner Input
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-700 mt-0.5">
                  {item.item}
                </p>
              </div>
            </div>
          ))}

          {/* Quick Notice */}
          <div className="mt-4 p-4 rounded-xl bg-teal-50/80 border border-teal-200 text-xs text-teal-900 space-y-1">
            <p className="font-semibold">Turnaround Time:</p>
            <p className="text-slate-600">
              Once the clinic owner confirms these 8 details, the website can be deployed to a custom domain (e.g., <code className="bg-teal-100 px-1 py-0.5 rounded text-teal-900">ekadanthadentalcare.in</code>) within 24 to 48 hours.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#0e2a47] hover:bg-[#163f69] text-white text-xs font-semibold transition-colors"
          >
            Got it, Back to Demo
          </button>
        </div>

      </div>
    </div>
  );
}
