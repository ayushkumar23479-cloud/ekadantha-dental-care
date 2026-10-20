import React from 'react';
import ContactSection from '../components/ContactSection';
import AppointmentSection from '../components/AppointmentSection';
import { Bus, Train, Car, Navigation, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function ContactPage({ onOpenChecklist }) {
  const directions = [
    {
      icon: <Train className="w-5 h-5 text-teal-600" />,
      title: "By Namma Metro",
      desc: "Conveniently accessible via the Purple Line (Kadugodi / Whitefield Metro Station). A short auto or cab ride brings you right to Kadugodi Main Road."
    },
    {
      icon: <Bus className="w-5 h-5 text-teal-600" />,
      title: "By BMTC Bus",
      desc: "Frequent buses connect from Majestic, KR Puram, ITPL, and Hope Farm to the Kadugodi Bus Station."
    },
    {
      icon: <Car className="w-5 h-5 text-teal-600" />,
      title: "By Car / Two-Wheeler",
      desc: "Easily reachable from Whitefield Main Road, Hope Farm Junction, and Channasandra. Parking guidance will be updated with exact building details."
    }
  ];

  return (
    <main className="py-8 bg-white">
      {/* Top Transit Directions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>Locality & Directions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0e2a47] tracking-tight">
            Visit Ekadantha Dental Care
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Located in Kadugodi, Whitefield, Bengaluru (560067). Accessible via metro, bus, and major arterial roads.
          </p>
        </div>

        {/* Transit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {directions.map((d, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-2 shadow-2xs">
                {d.icon}
              </div>
              <h3 className="text-sm font-bold text-[#0e2a47]">
                {d.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section with Phone, WhatsApp & Google Maps */}
      <ContactSection onOpenChecklist={onOpenChecklist} />

      {/* Embedded Appointment Form for ease of contact */}
      <div className="border-t border-slate-200">
        <AppointmentSection />
      </div>
    </main>
  );
}
