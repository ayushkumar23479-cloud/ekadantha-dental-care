import React from 'react';
import { MapPin, Phone, AlertCircle, Sparkles, CheckSquare } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function AnnouncementBar({ onOpenChecklist }) {
  return (
    <div className="bg-[#0b1f36] text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-700/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left: Location & Identity */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
          <div className="flex items-center gap-1.5 text-teal-400 font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Kadugodi, Whitefield, Bengaluru (560067)</span>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-slate-300">
            <span className="text-slate-500">•</span>
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-slate-300">
              Tel: <span className="font-mono text-slate-200">{CLINIC_CONFIG.unverifiedDetails.phone.display}</span>
            </span>
          </div>
        </div>

        {/* Center / Right: Demo Badge & Owner Action */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <AlertCircle className="w-3 h-3" />
            <span>Developer Demo Preview</span>
          </span>

          <button
            onClick={onOpenChecklist}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-teal-600/30 hover:bg-teal-600/50 text-teal-300 border border-teal-500/50 transition-colors cursor-pointer"
            title="View details required before clinic launch"
          >
            <CheckSquare className="w-3 h-3" />
            <span>Owner Launch Checklist</span>
          </button>
        </div>
      </div>
    </div>
  );
}
