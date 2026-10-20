import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, AlertCircle, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function ContactSection({ onOpenChecklist }) {
  const details = CLINIC_CONFIG.unverifiedDetails;

  const handleCall = () => {
    alert("Demo Mode: Official reception phone number is pending confirmation with the clinic owner. Once verified, this button directly dials the clinic.");
  };

  const handleWhatsApp = () => {
    const rawNumber = details.whatsapp.rawNumber;
    const msg = encodeURIComponent(details.whatsapp.defaultMessage);
    window.open(`https://wa.me/${rawNumber}?text=${msg}`, '_blank');
  };

  const handleDirections = () => {
    window.open(details.googleMaps.searchUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>Find & Contact Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2a47] tracking-tight">
            Clinic Location & Contact Details
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Conveniently located for Kadugodi, Whitefield, and surrounding East Bengaluru neighborhoods. Reach out to request a consultation or ask any questions.
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200 mt-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              Locality verified as Kadugodi, Whitefield (560067). Exact building and phone numbers to be confirmed by the clinic owner.
            </span>
          </div>
        </div>

        {/* 2-Column Grid: Contact Cards & Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & CTAs */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0e2a47]">Clinic Address (Kadugodi)</h3>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mt-0.5">
                    Placeholder • Pending Street Address
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {details.address.value}
              </p>
              <p className="text-[11px] text-slate-500">
                Landmark: {details.address.landmark}
              </p>
              <div className="pt-2">
                <button
                  onClick={handleDirections}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0e2a47] hover:bg-[#163f69] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-300" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Actions */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-[#0e2a47] border-b border-slate-100 pb-2">
                Direct Communication
              </h3>

              <div className="space-y-3">
                {/* Phone */}
                <div className="flex items-start justify-between gap-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 block">Phone Consultation:</span>
                      <span className="font-mono text-slate-500">{details.phone.display}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCall}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 hover:border-teal-600 text-slate-700 hover:text-teal-700 text-xs font-semibold transition-colors cursor-pointer shrink-0"
                  >
                    Call Now
                  </button>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start justify-between gap-3 text-xs pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 block">WhatsApp Enquiry:</span>
                      <span className="font-mono text-slate-500">{details.whatsapp.display}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleWhatsApp}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0e2a47]">Consultation Timings</h3>
                  <span className="text-[10px] text-slate-500">Subject to confirmation</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                {details.timings.schedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-slate-100 last:border-0">
                    <span className="font-medium text-slate-700">{item.days}:</span>
                    <span className="font-mono text-slate-800">{item.hours}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-400 italic">
                {details.timings.note}
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps & Transport Overview */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Map Frame */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-4 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span className="font-bold text-slate-800">
                    Kadugodi, Whitefield, Bengaluru Map Preview (560067)
                  </span>
                </div>
                <button
                  onClick={handleDirections}
                  className="text-teal-700 hover:text-teal-900 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative h-80 sm:h-96 w-full bg-slate-100">
                <iframe
                  title="Ekadantha Dental Care Kadugodi Map"
                  src="https://maps.google.com/maps?q=Kadugodi%2C%20Whitefield%2C%20Bengaluru%2C%20Karnataka%20560067&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Map Footer Note */}
              <div className="p-4 bg-slate-50 text-left text-xs text-slate-600 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="font-semibold text-slate-800">Local Connectivity:</span>
                  <p className="text-slate-500 mt-0.5">
                    Near Kadugodi Whitefield Metro Station & Kadugodi Bus Terminus corridor.
                  </p>
                </div>
                <button
                  onClick={onOpenChecklist}
                  className="px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold cursor-pointer shrink-0"
                >
                  Owner: Set Exact GPS Pin
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
