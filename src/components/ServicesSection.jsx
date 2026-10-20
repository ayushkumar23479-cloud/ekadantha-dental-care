import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Sparkles, ShieldCheck, Activity, Smile, HeartHandshake, ArrowRight, Calendar, Info } from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';

export default function ServicesSection({ onSelectService }) {
  const iconMap = {
    Stethoscope: <Stethoscope className="w-6 h-6 text-teal-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-teal-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-600" />,
    Activity: <Activity className="w-6 h-6 text-teal-600" />,
    Smile: <Smile className="w-6 h-6 text-teal-600" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-teal-600" />,
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>Comprehensive Dental Treatments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2a47] tracking-tight">
            Our Dental Care Services
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            From routine preventive check-ups to restorative care, we strive to keep your teeth healthy and pain-free.
          </p>

          {/* Editable Demo Disclaimer Banner */}
          <div className="inline-flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 text-left mt-2">
            <Info className="w-4 h-4 text-teal-600 shrink-0" />
            <span>
              <strong>Demo notice for clinic owner:</strong> The 6 services below represent standard dental practice offerings. All procedures, packages, and descriptions can be customized prior to launch.
            </span>
          </div>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-700 shadow-xs">
                  {service.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-3">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-[#0e2a47] group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-500">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA & Notice */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0e2a47] hover:bg-[#153e67] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-teal-300" />
                    <span>Enquire for this Service</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-400 italic">
                    {service.demoNotice}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
          >
            <span>Learn more about dental procedures & FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
