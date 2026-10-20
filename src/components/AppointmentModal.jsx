import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, FileText, CheckCircle2, AlertCircle, Info, Send } from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_SERVICES } from '../data/clinicData';

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    reason: initialService || 'General Dental Check-up',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Update reason if initialService changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, reason: initialService }));
    }
  }, [initialService]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 letters).';
    }

    const cleanPhone = formData.phone.replace(/[\s\-]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!cleanPhone) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number (e.g. 9876543210).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date for your visit.';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = 'Please choose today or an upcoming date.';
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Demo simulation
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      reason: 'General Dental Check-up',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  const handleTestWhatsApp = () => {
    if (!submittedData) return;
    const text = `*New Appointment Enquiry Demo - Ekadantha Dental Care*\n` +
      `• Patient Name: ${submittedData.fullName}\n` +
      `• Phone: ${submittedData.phone}\n` +
      `• Preferred Date: ${submittedData.preferredDate}\n` +
      `• Time Slot: ${submittedData.preferredTime}\n` +
      `• Reason for visit: ${submittedData.reason}\n` +
      (submittedData.notes ? `• Notes: ${submittedData.notes}\n` : '') +
      `[Kadugodi, Whitefield Clinic Demo]`;

    const rawNumber = CLINIC_CONFIG.unverifiedDetails.whatsapp.rawNumber;
    window.open(`https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Get minimum date (today) in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-fadeIn">
        
        {/* Header */}
        <div className="bg-[#0e2a47] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Close appointment modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-1">
            <Calendar className="w-4 h-4" />
            <span>Ekadantha Dental Care • Kadugodi</span>
          </div>
          
          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            Request an Appointment
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Fill in your preferred date and time. Our team will contact you to confirm your slot.
          </p>
        </div>

        {/* Demo Mode Banner */}
        <div className="bg-amber-50 border-b border-amber-200/80 px-6 py-2.5 flex items-start gap-2.5 text-xs text-amber-800">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Interactive Prototype Demo:</strong> Submitting this form tests client-side validation. No real appointment will be stored or booked until the clinic connects their official backend.
          </p>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-colors ${
                      errors.fullName
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                        : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                    }`}
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                </div>
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                    placeholder="10-digit mobile number (e.g. 9845012345)"
                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-colors ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                        : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                    }`}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      min={todayStr}
                      required
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: null });
                      }}
                      className={`w-full px-3 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-colors ${
                        errors.preferredDate
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                          : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                      }`}
                      aria-invalid={errors.preferredDate ? 'true' : 'false'}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Reason for Visit */}
              <div>
                <label htmlFor="reason" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Reason for Visit / Treatment
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                >
                  <option value="General Dental Check-up">General Dental Check-up</option>
                  <option value="Teeth Cleaning & Scaling">Teeth Cleaning & Scaling</option>
                  <option value="Dental Fillings & Restorations">Dental Fillings & Restorations</option>
                  <option value="Root Canal Treatment">Root Canal Treatment</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry / Teeth Whitening</option>
                  <option value="Preventive Dental Care">Preventive Dental Care</option>
                  <option value="Tooth Pain / Emergency Consultation">Tooth Pain / Emergency Consultation</option>
                  <option value="Other Dental Enquiry">Other Dental Enquiry</option>
                </select>
              </div>

              {/* Optional Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific symptoms or questions? (No medical history needed)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#0e2a47] hover:bg-[#153f6a] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-teal-300" />
                  <span>Submit Demo Enquiry</span>
                </button>
              </div>

            </form>
          ) : (
            /* Demo Success State */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-[#0e2a47]">
                  Demo Request Validated!
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  This confirms the form validation works accurately. Notice that no actual booking occurred, ensuring compliance with demo requirements.
                </p>
              </div>

              {/* Submitted Data Summary Box */}
              <div className="bg-slate-50 rounded-xl p-4 text-left text-xs text-slate-700 border border-slate-200 space-y-2">
                <div className="font-semibold text-slate-900 border-b border-slate-200 pb-1 mb-2 flex justify-between">
                  <span>Simulated Patient Enquiry</span>
                  <span className="text-teal-700">Validated</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-medium text-slate-900">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-medium text-slate-900">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Requested Date:</span>
                  <span className="font-medium text-slate-900">{submittedData.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Time Slot:</span>
                  <span className="font-medium text-slate-900">{submittedData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-medium text-slate-900">{submittedData.reason}</span>
                </div>
              </div>

              {/* Production Integration Explainer */}
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900 text-left">
                <strong>How this works in production:</strong>
                <p className="mt-0.5 text-slate-600">
                  When the clinic approves this site, submissions can trigger an instant SMS to the patient and dispatch a notification directly to the clinic reception WhatsApp or email.
                </p>
              </div>

              {/* WhatsApp Demo Test Button */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={handleTestWhatsApp}
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Test Direct WhatsApp Link</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
                >
                  Close & Reset Demo
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
