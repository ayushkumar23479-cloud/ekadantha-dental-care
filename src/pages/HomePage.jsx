import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import WhyChooseSection from '../components/WhyChooseSection';
import GallerySection from '../components/GallerySection';
import AppointmentSection from '../components/AppointmentSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenAppointment, onOpenChecklist, onOpenLightbox, onSelectService }) {
  return (
    <main>
      <HeroSection onOpenAppointment={onOpenAppointment} />
      <ServicesSection onSelectService={onSelectService} />
      <AboutSection onOpenChecklist={onOpenChecklist} />
      <WhyChooseSection />
      <GallerySection onOpenLightbox={onOpenLightbox} />
      <AppointmentSection />
      <ContactSection onOpenChecklist={onOpenChecklist} />
    </main>
  );
}
