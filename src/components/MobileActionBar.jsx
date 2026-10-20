import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function MobileActionBar({ onOpenAppointment }) {
  const handleCall = () => {
    alert("Demo Mode: This button triggers a direct phone call to Ekadantha Dental Care's verified reception number once approved by the owner.");
  };

  const handleWhatsApp = () => {
    const rawNumber = CLINIC_CONFIG.unverifiedDetails.whatsapp.rawNumber;
    const msg = encodeURIComponent(CLINIC_CONFIG.unverifiedDetails.whatsapp.defaultMessage);
    window.open(`https://wa.me/${rawNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-2 md:hidden shadow-lg">
      {/* Call button */}
      <button
        onClick={handleCall}
        className="flex-1 py-2 px-3 rounded-xl border border-slate-300 text-slate-700 bg-slate-50 flex items-center justify-center gap-1.5 text-xs font-semibold active:bg-slate-100"
      >
        <Phone className="w-3.5 h-3.5 text-teal-600" />
        <span>Call</span>
      </button>

      {/* WhatsApp button */}
      <button
        onClick={handleWhatsApp}
        className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 text-white flex items-center justify-center gap-1.5 text-xs font-semibold shadow-xs active:bg-emerald-700"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </button>

      {/* Book button */}
      <button
        onClick={onOpenAppointment}
        className="flex-1 py-2 px-3 rounded-xl bg-[#0e2a47] text-white flex items-center justify-center gap-1.5 text-xs font-semibold shadow-xs active:bg-[#163f69]"
      >
        <Calendar className="w-3.5 h-3.5 text-teal-300" />
        <span>Book Visit</span>
      </button>
    </div>
  );
}
