import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicData';

export default function Navbar({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-[37px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Clinic Name */}
          <Link to="/" className="flex items-center gap-3 group text-left">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0e2a47] to-[#16426f] flex items-center justify-center text-teal-400 shadow-md group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.5 2 6 4.5 6 7.5c0 2.5 1.2 4.5 2 7 1 3 2 5.5 4 5.5s3-2.5 4-5.5c.8-2.5 2-4.5 2-7C18 4.5 15.5 2 12 2z" />
                <path d="M9.5 7.5a2.5 2.5 0 0 1 5 0" />
              </svg>
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-[#0e2a47] group-hover:text-teal-700 transition-colors">
                {CLINIC_CONFIG.name}
              </span>
              <span className="block text-xs font-medium text-teal-700 tracking-wide">
                Kadugodi, Whitefield • Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                    active
                      ? 'text-[#0e2a47] bg-slate-100/90'
                      : 'text-slate-600 hover:text-[#0e2a47] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenAppointment()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e2a47] hover:bg-[#163e67] text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-150 transform active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenAppointment()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e2a47] text-white text-xs font-semibold"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    active
                      ? 'text-[#0e2a47] bg-teal-50/70 border-l-4 border-teal-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-teal-600"></span>}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 rounded-xl bg-[#0e2a47] hover:bg-[#163e67] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Request Appointment</span>
            </button>
            
            <p className="text-xs text-center text-slate-500 mt-1">
              Kadugodi, Whitefield, Bengaluru • PIN: 560067
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
