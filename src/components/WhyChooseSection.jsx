import React from 'react';
import { CalendarCheck, FileText, MapPin, HeartPulse, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

export default function WhyChooseSection() {
  const iconMap = {
    CalendarCheck: <CalendarCheck className="w-7 h-7 text-teal-600" />,
    FileText: <FileText className="w-7 h-7 text-teal-600" />,
    MapPin: <MapPin className="w-7 h-7 text-teal-600" />,
    HeartPulse: <HeartPulse className="w-7 h-7 text-teal-600" />,
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>Patient-Centered Practice</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2a47] tracking-tight">
            Why Choose Ekadantha Dental Care
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            We focus on genuine healthcare values: clear guidance, easy access, and a gentle dental experience for every patient.
          </p>
        </div>

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-teal-200 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-teal-50 border border-slate-200 group-hover:border-teal-200 flex items-center justify-center mb-5 transition-colors shadow-xs">
                  {iconMap[item.icon]}
                </div>

                <div className="text-[11px] font-bold text-teal-700 tracking-wider uppercase mb-1">
                  Commitment 0{idx + 1}
                </div>

                <h3 className="text-lg font-bold text-[#0e2a47] group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Patient-focused standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Non-claim assurance footnote */}
        <div className="mt-10 text-center text-xs text-slate-400">
          <p>
            * These points represent our core practice standards and consultation values. No unverified clinical claims, fake testimonials, or artificial ratings are used on this website.
          </p>
        </div>

      </div>
    </section>
  );
}
