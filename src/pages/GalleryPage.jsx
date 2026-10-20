import React, { useState } from 'react';
import { ZoomIn, Info, ShieldCheck, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';

export default function GalleryPage({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Treatment Room', 'Reception & Lounge', 'Equipment', 'Team', 'Clinic Environment'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const amenities = [
    { title: "Ergonomic Dental Operatories", desc: "Contoured patient chairs with quiet hydraulic positioning for maximum neck and back support." },
    { title: "Class-B Autoclave Sterilization", desc: "Hospital-grade vacuum autoclaving ensuring 100% sterile tools for every individual appointment." },
    { title: "Relaxing Waiting Lounge", desc: "Air-conditioned reception space with soothing atmosphere designed to ease pre-visit anxiety." },
    { title: "Kadugodi Transit Accessibility", desc: "Conveniently situated in Kadugodi, Whitefield (560067) near metro and bus links." },
  ];

  return (
    <main className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>Clinic Tour & Facilities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0e2a47] tracking-tight">
            Inside Ekadantha Dental Care
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore our clinical space, state-of-the-art sterilization area, patient operatory, and comfortable waiting environment.
          </p>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 inline-flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Owner Notice:</strong> All imagery below represents high-resolution sample placeholders. Real photographs of your Kadugodi clinic will be embedded here.
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0e2a47] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-200 cursor-pointer group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0e2a47]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#0e2a47] flex items-center justify-center shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-[#0e2a47]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {item.category}
                </span>
              </div>

              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0e2a47] group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-amber-700 font-medium">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinic Amenities Overview */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0e2a47]">
              Facility & Comfort Highlights
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Designed for a gentle and stress-free patient visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((a, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0e2a47]">
                  {a.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
