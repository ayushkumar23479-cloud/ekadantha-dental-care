import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, AlertTriangle } from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_SERVICES } from '../data/clinicData';

export default function Footer({ onOpenPrivacy, onOpenChecklist }) {
  return (
    <footer className="bg-[#0b1c2e] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Clinic Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.5 2 6 4.5 6 7.5c0 2.5 1.2 4.5 2 7 1 3 2 5.5 4 5.5s3-2.5 4-5.5c.8-2.5 2-4.5 2-7C18 4.5 15.5 2 12 2z" />
                  <path d="M9.5 7.5a2.5 2.5 0 0 1 5 0" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {CLINIC_CONFIG.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Modern, compassionate dental care tailored for the residents and families of Kadugodi and Whitefield, Bengaluru.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-950/60 text-teal-300 border border-teal-800/50">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                Kadugodi • Whitefield (560067)
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Explore Clinic
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Dental Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Clinic & Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-white transition-colors">
                  Clinic Tour & Facility
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Location & Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenChecklist}
                  className="text-teal-400 hover:text-teal-300 transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>→ Owner Onboarding Checklist</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Dental Treatments
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {CLINIC_SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link to="/services" className="hover:text-white transition-colors">
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-teal-400 hover:text-teal-300 text-xs font-medium">
                  + View all dental care services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Timings Placeholders */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Locality & Timings
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Kadugodi, Whitefield, Bengaluru, Karnataka, India - 560067
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">Timings (To be confirmed):</p>
                  <p className="text-xs text-slate-400">Mon - Sat: 10:00 AM – 8:30 PM</p>
                  <p className="text-xs text-slate-400">Sunday: By Appointment</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-xs text-slate-400">
                  Phone: <span className="text-slate-300 font-mono">+91 98XXX XXXXX (Pending)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Box (Mandatory & Prominent) */}
        <div className="my-8 p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <p className="text-slate-200 font-medium">
              Demo Project Notice & Disclaimer:
            </p>
            <p className="text-slate-400 leading-relaxed">
              This is an unofficial website demonstration crafted by a frontend developer for presentation to the clinic owner of Ekadantha Dental Care in Kadugodi, Whitefield. It is not an officially commissioned or approved site. No treatment guarantees, awards, or medical claims are made. Doctor credentials, phone numbers, and exact address must be verified prior to launch.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Ekadantha Dental Care. Designed as a concept demo for Kadugodi, Whitefield.
          </p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer underline underline-offset-4"
            >
              Privacy & Patient Data Policy
            </button>
            <button
              onClick={onOpenChecklist}
              className="text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
            >
              Owner Launch Checklist
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
