import React, { useEffect } from 'react';
import { X, Info } from 'lucide-react';

export default function LightboxModal({ image, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col">
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-full max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs uppercase font-semibold text-teal-400 tracking-wider">
              {image.category}
            </span>
            <h4 className="text-base sm:text-lg font-bold">{image.title}</h4>
            <p className="text-xs text-slate-400 mt-0.5">{image.description}</p>
          </div>

          <div className="text-[11px] text-amber-300 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full flex items-center gap-1.5 shrink-0">
            <Info className="w-3.5 h-3.5" />
            <span>Sample photo (replace with real clinic photo)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
