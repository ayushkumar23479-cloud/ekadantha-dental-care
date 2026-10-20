import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2, AlertCircle, Info, Send, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_SERVICES } from '../data/clinicData';

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    reason: 'General Dental Check-up',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 letters).';
    }

    const cleanPhone = formData.phone.replace(/[\s\-]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!cleanPhone) {
      newErrors.phone = 'Please provide your 10-digit mobile number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid Indian mobile number (e.g. 9845012345).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = 'Date cannot be in the past. Please choose today or later.';
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

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context, Working Hours & Location */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
              <span>Appointment Request</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2a47] tracking-tight">
              Request Your Dental Consultation Slot
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We look forward to welcoming you at our Kadugodi clinic. Submit your requested visit time below, and our clinic reception will contact you to confirm.
            </p>

            {/* Quick Practice Info Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">
                Clinic Consultation Schedule (Kadugodi)
              </h4>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="font-medium">Monday – Saturday:</span>
                  <span className="font-mono text-slate-800">[10:00 AM – 8:30 PM (Pending)]</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium">Sunday:</span>
                  <span className="font-mono text-slate-800">[By Appointment Only]</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Timings subject to confirmation with the clinic owner.
              </p>
            </div>

            {/* Privacy & Safety Promise */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-teal-50/70 border border-teal-200/70 text-xs text-teal-900">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Safe & Confidential</p>
                <p className="text-slate-600 mt-0.5">
                  Your contact details are used strictly for appointment verification and clinic directions. No medical history is asked on this form.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              
              {/* Form Title & Demo Notice */}
              <div className="border-b border-slate-200 pb-4 mb-6 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#0e2a47]">
                    Patient Appointment Form
                  </h3>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    Interactive Demo
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Structure built for instant WhatsApp/Email backend integration upon project launch.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                  
                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="sec-fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Patient Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="sec-fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: null });
                          }}
                          placeholder="e.g. Ananya Rao"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-colors ${
                            errors.fullName
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-slate-300 focus:ring-teal-500'
                          }`}
                          aria-invalid={errors.fullName ? 'true' : 'false'}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="sec-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="sec-phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: null });
                          }}
                          placeholder="10 digits (e.g. 9845012345)"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-colors ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-slate-300 focus:ring-teal-500'
                          }`}
                          aria-invalid={errors.phone ? 'true' : 'false'}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="sec-preferredDate" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="sec-preferredDate"
                        name="preferredDate"
                        min={todayStr}
                        required
                        value={formData.preferredDate}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredDate: e.target.value });
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: null });
                        }}
                        className={`w-full px-3 py-2.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-colors ${
                          errors.preferredDate
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-slate-300 focus:ring-teal-500'
                        }`}
                        aria-invalid={errors.preferredDate ? 'true' : 'false'}
                      />
                      {errors.preferredDate && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label htmlFor="sec-preferredTime" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Time Slot <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="sec-preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Reason for Visit */}
                  <div>
                    <label htmlFor="sec-reason" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Reason for Consultation
                    </label>
                    <select
                      id="sec-reason"
                      name="reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
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
                    <label htmlFor="sec-notes" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="sec-notes"
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any specific timing preferences or questions?"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0e2a47] hover:bg-[#153f6a] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-teal-300" />
                      <span>Submit Appointment Request (Demo)</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      * Demo note: No actual booking is made. This form tests data validation.
                    </p>
                  </div>

                </form>
              ) : (
                /* Demo Success Summary */
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-[#0e2a47]">
                    Demo Validation Passed!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{submittedData.fullName}</strong>. Below is the validated appointment summary:
                  </p>

                  <div className="bg-white rounded-xl p-4 text-left text-xs border border-slate-200 space-y-2 max-w-md mx-auto shadow-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Patient:</span>
                      <span className="font-semibold text-slate-800">{submittedData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Phone:</span>
                      <span className="font-semibold text-slate-800">{submittedData.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Preferred Date:</span>
                      <span className="font-semibold text-slate-800">{submittedData.preferredDate}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Time Slot:</span>
                      <span className="font-semibold text-slate-800">{submittedData.preferredTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-slate-800">{submittedData.reason}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 max-w-md mx-auto text-left">
                    <strong>Demo Clarification:</strong>
                    <p className="mt-0.5 text-slate-600">
                      As requested, this demo does NOT record fake appointments. In production, this can send automated WhatsApp notifications to the clinic reception.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                    <button
                      onClick={handleTestWhatsApp}
                      className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Test WhatsApp Direct Link</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex-1 py-2.5 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
                    >
                      Reset Form Demo
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
