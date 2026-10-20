import React from 'react';
import AppointmentSection from '../components/AppointmentSection';
import { Calendar, Clock, ShieldCheck, HeartPulse, CheckSquare } from 'lucide-react';

export default function BookAppointmentPage() {
  const prepTips = [
    { title: "Bring Any Previous Dental Records", desc: "If you have recent dental X-rays or treatment notes from another clinic, feel free to bring them along." },
    { title: "List of Current Medications", desc: "Let our dentist know if you are taking any blood thinners, diabetic medicines, or having allergies." },
    { title: "Arrive 10 Minutes Early", desc: "This allows time for comfortable registration and preliminary consultation discussion." },
  ];

  return (
    <main className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>Online Appointment Request</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0e2a47] tracking-tight">
            Schedule Your Dental Visit
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ekadantha Dental Care, Kadugodi, Whitefield (560067). Complete the request form below to choose your convenient time slot.
          </p>
        </div>

        {/* Appointment Form Component */}
        <AppointmentSection />

        {/* First-time Patient Guidance */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl font-bold text-[#0e2a47]">
              Preparing for Your Visit
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              A few simple suggestions to make your appointment smooth and relaxing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prepTips.map((tip, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold mb-1">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold text-[#0e2a47]">
                  {tip.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
