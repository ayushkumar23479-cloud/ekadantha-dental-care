import React, { useState } from 'react';
import { Calendar, Stethoscope, Sparkles, ShieldCheck, Activity, Smile, HeartHandshake, CheckCircle2, HelpCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { CLINIC_SERVICES, CLINIC_CONFIG } from '../data/clinicData';

export default function ServicesPage({ onSelectService, onOpenAppointment }) {
  const [openFaq, setOpenFaq] = useState(null);

  const iconMap = {
    Stethoscope: <Stethoscope className="w-6 h-6 text-teal-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-teal-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-600" />,
    Activity: <Activity className="w-6 h-6 text-teal-600" />,
    Smile: <Smile className="w-6 h-6 text-teal-600" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-teal-600" />,
  };

  const faqs = [
    {
      q: "How often should I schedule a routine dental check-up & cleaning?",
      a: "For most children and adults, a routine dental examination and professional ultrasonic cleaning is advised every six months. This helps catch minor cavities early and prevents plaque from hardening into calculus."
    },
    {
      q: "Is root canal treatment (RCT) painful?",
      a: "Modern root canal treatments are performed under effective local anesthesia, making the procedure virtually pain-free. Most patients report that having an RCT feels very similar to having a standard filling done, and it promptly relieves severe toothache caused by pulp infection."
    },
    {
      q: "What are tooth-colored composite fillings made of?",
      a: "Composite fillings are made from biocompatible dental resins mixed with microscopic glass particles. They are bonded directly to the remaining tooth structure and shaded precisely to match your natural tooth color."
    },
    {
      q: "Are professional teeth whitening treatments safe for tooth enamel?",
      a: "Yes, when performed or supervised by a qualified dentist using approved dental bleaching agents, professional teeth whitening is safe and does not damage enamel structure."
    },
    {
      q: "What should I do if I have a sudden dental emergency or sharp toothache?",
      a: "Contact our Kadugodi clinic immediately to request a same-day or priority consultation slot. Avoid placing crushed aspirin directly on the gums, rinse gently with warm saltwater, and seek clinical evaluation."
    }
  ];

  return (
    <main className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>Ekadantha Dental Care • Kadugodi, Bengaluru</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0e2a47] tracking-tight">
            Our Dental Care Services
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Personalized, gentle, and comprehensive dental treatments designed to protect your oral health and restore your smile.
          </p>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 inline-flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Owner Notice:</strong> Service list, clinical protocols, and pricing details will be customized to match your clinic's offerings.
            </span>
          </div>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-12">
          {CLINIC_SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className={`flex flex-col lg:flex-row gap-8 items-center bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-slate-200 h-64 sm:h-80 relative shadow-xs">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#0e2a47]/90 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  {srv.category}
                </span>
              </div>

              {/* Text & CTAs */}
              <div className="w-full lg:w-1/2 space-y-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {iconMap[srv.icon]}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0e2a47]">
                  {srv.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.fullDesc}
                </p>

                {/* Benefits */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Key Patient Benefits:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {srv.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => onSelectService(srv.title)}
                    className="py-2.5 px-5 rounded-xl bg-[#0e2a47] hover:bg-[#163f69] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-teal-300" />
                    <span>Enquire for {srv.title}</span>
                  </button>

                  <span className="text-[11px] text-slate-400 italic text-center sm:text-left">
                    * {srv.demoNotice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0e2a47]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers to common questions about dental visits and care.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 text-left">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-[#0e2a47] hover:text-teal-700 cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}
