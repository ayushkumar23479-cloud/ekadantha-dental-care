import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn, Info, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';

export default function GallerySection({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Treatment Room', 'Reception & Lounge', 'Equipment', 'Team', 'Clinic Environment'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-slate-50/60 border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>Clinic Tour & Facility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2a47] tracking-tight">
            Inside Ekadantha Dental Care
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Take a visual tour of our treatment operatories, modern sterilization hygiene, and comfortable reception environment.
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200 mt-1">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              Sample visuals shown below. Clinic owner can replace with genuine clinic photos.
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0e2a47] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#0e2a47]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#0e2a47] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-200">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-[#0e2a47]/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {item.category}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0e2a47] group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-amber-700 font-medium">
                  {item.label}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View all on dedicated gallery page */}
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
          >
            <span>Explore full clinic gallery & facility overview</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
