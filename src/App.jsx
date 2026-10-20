import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileActionBar from './components/MobileActionBar';
import AppointmentModal from './components/AppointmentModal';
import OwnerChecklistModal from './components/OwnerChecklistModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import LightboxModal from './components/LightboxModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [lightboxModalOpen, setLightboxModalOpen] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  // Handlers
  const handleOpenAppointment = (serviceName = '') => {
    setSelectedService(serviceName || '');
    setAppointmentModalOpen(true);
  };

  const handleOpenLightbox = (imageObj) => {
    setActiveLightboxImage(imageObj);
    setLightboxModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <ScrollToTop />

      {/* Top Announcement Bar */}
      <AnnouncementBar onOpenChecklist={() => setChecklistModalOpen(true)} />

      {/* Responsive Navigation Bar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Page Routing */}
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenAppointment={handleOpenAppointment}
                onOpenChecklist={() => setChecklistModalOpen(true)}
                onOpenLightbox={handleOpenLightbox}
                onSelectService={(service) => handleOpenAppointment(service)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectService={(service) => handleOpenAppointment(service)}
                onOpenAppointment={() => handleOpenAppointment()}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenAppointment={() => handleOpenAppointment()}
                onOpenChecklist={() => setChecklistModalOpen(true)}
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <GalleryPage onOpenLightbox={handleOpenLightbox} />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage onOpenChecklist={() => setChecklistModalOpen(true)} />
            }
          />
          <Route
            path="/book-appointment"
            element={
              <BookAppointmentPage />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenChecklist={() => setChecklistModalOpen(true)}
      />

      {/* Conversion Floating Elements */}
      <FloatingWhatsApp />
      <MobileActionBar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialService={selectedService}
      />

      <OwnerChecklistModal
        isOpen={checklistModalOpen}
        onClose={() => setChecklistModalOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <LightboxModal
        isOpen={lightboxModalOpen}
        onClose={() => setLightboxModalOpen(false)}
        image={activeLightboxImage}
      />
    </div>
  );
}
