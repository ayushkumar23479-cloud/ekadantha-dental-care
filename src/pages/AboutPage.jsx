import React from 'react';
import { ShieldCheck, UserCheck, Stethoscope, Sparkles, AlertCircle, HeartHandshake, CheckSquare, Calendar } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function AboutPage({ onOpenAppointment, onOpenChecklist }) {
  const doc = CLINIC_CONFIG.doctorProfile;

  const hygieneProtocols = [
    {
      step: "01",
      title: "Ultrasonic Pre-Cleaning",
      desc: "Instruments undergo enzymatic and ultrasonic debris cleaning prior to high-temperature sterilization."
    },
    {
      step: "02",
      title: "Class-B Autoclave Sterilization",
      desc: "High-pressure saturated steam sterilization to completely eradicate all microbial spores and pathogens."
    },
    {
      step: "03",
      title: "Sterile Sealed Pouches",
      desc: "Cleaned instruments are packed into medical-grade pouches and opened only in the patient's presence."
    },
    {
      step: "04",
      title: "Disposable Clinical Barriers",
      desc: "Single-use suction tips, patient bibs, gloves, and protective covers replaced between every appointment."
    }
  ];

  return (
    <main className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>About Our Practice</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0e2a47] tracking-tight">
            Gentle, Evidence-Based Dental Care in Kadugodi
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ekadantha Dental Care was conceived with a clear vision: providing Whitefield and Kadugodi families with trustworthy, transparent, and comfortable dental consultations.
          </p>
        </div>

        {/* Doctor Details & Credentials Card */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-10 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden bg-slate-200 h-96 relative border border-slate-300">
                <img
                  src={doc.photo}
                  alt="Doctor photograph placeholder"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-3 rounded-xl border border-slate-200 text-left">
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200 uppercase">
                    Sample Photo Placeholder
                  </span>
                  <p className="text-xs text-slate-600 mt-1">
                    To be replaced with verified photo of the chief dentist.
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div>
                <span className="text-xs font-bold text-teal-700 tracking-wider uppercase block mb-1">
                  Lead Clinical Practitioner
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e2a47]">
                  {doc.name}
                </h2>
                <p className="text-sm font-semibold text-teal-700">
                  {doc.title}
                </p>
              </div>

              {/* Editable Credential Boxes */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Professional Registration & Credentials
                  </span>
                  <button
                    onClick={onOpenChecklist}
                    className="text-teal-700 hover:text-teal-900 text-xs font-semibold cursor-pointer underline"
                  >
                    Owner Checklist
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                    <span className="text-slate-400 block text-[11px]">Degrees & Specialization:</span>
                    <span className="font-mono font-bold text-slate-800">{doc.degrees}</span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                    <span className="text-slate-400 block text-[11px]">Dental Council Reg. No.:</span>
                    <span className="font-mono font-bold text-slate-800">{doc.regNumber}</span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                    <span className="text-slate-400 block text-[11px]">Years of Practice:</span>
                    <span className="font-mono font-bold text-slate-800">{doc.experienceYears}</span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                    <span className="text-slate-400 block text-[11px]">Clinic Locality:</span>
                    <span className="font-semibold text-slate-800">Kadugodi, Whitefield (560067)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {doc.bio}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {doc.specialties.map((spec, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-800 border border-teal-200">
                    <CheckSquare className="w-3.5 h-3.5 text-teal-600" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* 4-Step Sterilization & Hygiene Protocol */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0e2a47]">
              Our Strict 4-Step Sterilization Standard
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Your safety is non-negotiable. Every instrument and contact surface is cleaned and sterilized under hospital-grade infection control protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hygieneProtocols.map((p) => (
              <div
                key={p.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-left space-y-3"
              >
                <div className="text-2xl font-black text-teal-600">
                  {p.step}
                </div>
                <h4 className="text-base font-bold text-[#0e2a47]">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-[#0e2a47] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Experience Gentle Dental Care?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Contact our clinic in Kadugodi, Whitefield to request your preferred check-up or treatment time.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#0e2a47] font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                Book Your Appointment
              </button>
              <button
                onClick={onOpenChecklist}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors cursor-pointer"
              >
                Owner Launch Checklist
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
