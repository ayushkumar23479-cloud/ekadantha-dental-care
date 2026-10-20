import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, ShieldCheck, Heart, Award, AlertCircle, ArrowRight, Stethoscope } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function AboutSection({ onOpenChecklist }) {
  const doc = CLINIC_CONFIG.doctorProfile;

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>About Ekadantha Dental Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2a47] tracking-tight">
            Patient-Focused Dental Wellness in Kadugodi
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            We believe dental visits should be relaxing, transparent, and built on trust. Our clinic combines gentle techniques with modern safety standards.
          </p>
        </div>

        {/* 2-Column Doctor & Ethos Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">
          
          {/* Doctor Image Placeholder Column */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative group">
              <img
                src={doc.photo}
                alt="Doctor Profile Placeholder"
                className="w-full h-96 sm:h-[420px] object-cover object-top filter contrast-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              {/* Overlay Label for Placeholder */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-xs text-left shadow-md border border-slate-100">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mb-1">
                  <AlertCircle className="w-3 h-3" />
                  Owner Verification Required
                </span>
                <p className="text-xs text-slate-600">
                  {doc.photoLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Details & Credentials Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Doctor Name & Title Placeholder */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/60">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Lead Dental Practitioner</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0e2a47]">
                {doc.name}
              </h3>
              <p className="text-sm font-semibold text-teal-700">
                {doc.title}
              </p>
            </div>

            {/* Transparent Credentials Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Doctor Credentials (To be confirmed by owner):
                </span>
                <button
                  onClick={onOpenChecklist}
                  className="text-teal-700 hover:text-teal-800 text-xs font-semibold cursor-pointer underline"
                >
                  Verify Now
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Educational Degrees:</span>
                  <span className="text-slate-800 font-mono font-semibold bg-white px-2 py-1 rounded border border-slate-200 block mt-0.5">
                    {doc.degrees}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Dental Council Reg. No:</span>
                  <span className="text-slate-800 font-mono font-semibold bg-white px-2 py-1 rounded border border-slate-200 block mt-0.5">
                    {doc.regNumber}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Clinical Experience:</span>
                  <span className="text-slate-800 font-mono font-semibold bg-white px-2 py-1 rounded border border-slate-200 block mt-0.5">
                    {doc.experienceYears}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Clinic Locality:</span>
                  <span className="text-slate-800 font-semibold bg-white px-2 py-1 rounded border border-slate-200 block mt-0.5">
                    Kadugodi, Whitefield (560067)
                  </span>
                </div>
              </div>
            </div>

            {/* Care Philosophy */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {doc.bio}
            </p>

            {/* Practice Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {doc.specialties.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Read more CTA */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800"
              >
                <span>Read more about our clinic sterilization standards & ethos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
