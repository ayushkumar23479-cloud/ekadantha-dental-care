import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, HeartHandshake, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function HeroSection({ onOpenAppointment }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      
      {/* Background subtle dental geometric elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, CTAs, Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Locality & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Kadugodi, Whitefield • Dental Health Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#0e2a47] tracking-tight leading-[1.15]">
              {CLINIC_CONFIG.tagline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {CLINIC_CONFIG.shortDescription} Explore our preventive and restorative services, and request your consultation slot easily.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenAppointment()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0e2a47] hover:bg-[#163f69] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-150 transform active:scale-98 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-teal-300" />
                <span>Book an Appointment</span>
              </button>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-teal-600 text-slate-700 hover:text-teal-700 font-semibold text-base bg-white hover:bg-slate-50 transition-all duration-150 shadow-xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Verified Genuine Highlights (No fake awards/ratings) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/70">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-teal-50 text-teal-600 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0e2a47]">Strict Hygiene</h4>
                  <p className="text-[11px] text-slate-500">Sterilized instruments & clinical safety</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-teal-50 text-teal-600 shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0e2a47]">Gentle Care</h4>
                  <p className="text-[11px] text-slate-500">Patient-centered comfort approach</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-lg bg-teal-50 text-teal-600 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0e2a47]">Local Clinic</h4>
                  <p className="text-[11px] text-slate-500">Kadugodi Whitefield (PIN 560067)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor consulting with patient at dental clinic"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                />
                
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a47]/80 via-transparent to-transparent"></div>

                {/* Overlaid Clinic Banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-teal-600 block">
                        Kadugodi Dental Facility
                      </span>
                      <h4 className="text-sm font-bold text-[#0e2a47]">
                        Comfortable & Modern Consultation
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 text-[11px] font-semibold shrink-0">
                      Walk-ins & Booking
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Sample imagery • To be customized with official clinic photos upon onboarding.
                  </p>
                </div>
              </div>

              {/* Floating Badge top-left */}
              <div className="absolute -top-3 -left-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-bold text-[#0e2a47]">Family Dental Care</p>
                  <p className="text-[11px] text-slate-500">Adults & Children</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
