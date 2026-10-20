# Ekadantha Dental Care — Premium Dental Clinic Website Demo

> **Client Demo Prototype**: Designed and developed for **Ekadantha Dental Care**, located in **Kadugodi, Whitefield, Bengaluru, Karnataka 560067**.  
> **Notice**: This is an unofficial, high-fidelity developer prototype designed to present to the clinic owner for a potential paid website project. Unverified clinical credentials, phone numbers, and street address placeholders are clearly marked and ready for quick personalization.

---

## 🌟 Key Highlights & Design System

- **Clean Healthcare Aesthetic**: Crisp white backgrounds, deep navy blue (`#0e2a47`) headings, soft teal (`#14b8a6` / `#0d9488`) highlights, and light slate card containers.
- **Conversion-Driven Architecture**:
  - Prominent "Book Appointment" CTAs in navigation and hero.
  - Floating WhatsApp chat launcher with pre-configured consultation messages.
  - Mobile bottom tactile action bar (**Call**, **WhatsApp**, **Book Visit**).
  - Service-specific enquiry buttons that pre-populate the appointment modal.
  - Interactive Google Maps integration with Kadugodi directions.
- **Zero Medical Misinformation**:
  - No fake patient testimonials or fabricated 5-star ratings.
  - Transparent placeholder fields for Doctor Name, BDS/MDS Degrees, and Karnataka Dental Council Registration.
  - Non-claim-based practice benefits (clear service info, easy booking, convenient Kadugodi location, gentle patient communication).
- **Interactive Client Pitch Tools**:
  - **Owner Launch Checklist Modal**: Built directly into the website header and footer so the clinic owner can review the 8 simple items required to go live.
  - **Interactive Appointment Simulation**: Full client-side validation for Indian 10-digit mobile numbers and date checks, with simulation modal and direct WhatsApp testing.

---

## 🛠️ Technology Stack

- **Framework**: React 19 (JavaScript, ES Modules)
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing**: React Router DOM (`react-router-dom` v7)
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: Plus Jakarta Sans (Google Fonts)

---

## 📂 Project Structure

```
ekadantha-dental-care/
├── index.html                   # SEO Meta Tags, Geo Tags (Kadugodi, 560067), Favicon, OpenGraph
├── vite.config.js               # Vite config with React & Tailwind CSS plugins
├── package.json                 # Dependencies and scripts
├── public/
│   └── favicon.svg              # Dental medical tooth & sparkle brand icon
└── src/
    ├── main.jsx                 # Entry point with BrowserRouter
    ├── App.jsx                  # Main router, global state, modals & layout
    ├── index.css                # Tailwind imports & custom brand styles
    ├── data/
    │   └── clinicData.js        # Single source of truth for services, doctor placeholders, gallery, timings
    ├── components/
    │   ├── AnnouncementBar.jsx  # Top locality bar & Owner Checklist launcher
    │   ├── Navbar.jsx           # Responsive header with mobile hamburger drawer
    │   ├── Footer.jsx           # Comprehensive footer with demo disclaimer & quick links
    │   ├── HeroSection.jsx      # Above-the-fold hero with Kadugodi trust highlights
    │   ├── ServicesSection.jsx  # 6 editable dental service cards
    │   ├── AboutSection.jsx     # Doctor credentials placeholder & ethos
    │   ├── WhyChooseSection.jsx # 4 verified non-claim practice commitments
    │   ├── GallerySection.jsx   # Interactive facility gallery with category filters
    │   ├── AppointmentSection.jsx # Inline booking form with client-side validation
    │   ├── ContactSection.jsx   # Locality, phone/WhatsApp placeholders, Google Maps embed
    │   ├── FloatingWhatsApp.jsx # Sticky WhatsApp chat launcher
    │   ├── MobileActionBar.jsx  # Fixed mobile bottom bar (Call, WhatsApp, Book)
    │   ├── AppointmentModal.jsx # Accessible popup booking modal
    │   ├── OwnerChecklistModal.jsx # Pitch checklist modal for the clinic owner
    │   ├── PrivacyPolicyModal.jsx # Patient privacy & data confidentiality policy
    │   ├── LightboxModal.jsx    # Fullscreen image viewer for gallery photos
    │   └── ScrollToTop.jsx      # Automatic scroll-to-top on route change
    └── pages/
        ├── HomePage.jsx         # Full conversion-optimized homepage
        ├── ServicesPage.jsx     # Detailed dental procedure breakdown & patient FAQs
        ├── AboutPage.jsx        # 4-step sterilization protocols & doctor qualifications
        ├── GalleryPage.jsx      # Clinic tour with filter tabs & amenities breakdown
        ├── ContactPage.jsx      # Kadugodi transit directions (Metro/Bus) & map
        └── BookAppointmentPage.jsx # Dedicated booking page with first-visit guidance
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended; v24 installed)
- npm (v9 or higher)

### Installation & Run
```bash
# Navigate to the project directory
cd "C:\Users\ayush\.gemini\antigravity\scratch\ekadantha-dental-care"

# Install dependencies (already completed)
npm install

# Start the Vite development server
npm run dev

# Open in your browser
http://localhost:5173
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📋 Clinic Owner Launch Checklist (Handover Guide)

Before publishing this website to a live domain (e.g., `ekadanthadentalcare.in`), verify and update the following in `src/data/clinicData.js`:

| # | Item | Current Demo Placeholder | Owner Verification Action |
|---|------|-------------------------|---------------------------|
| 1 | **Doctor Credentials** | `[Dr. Name — Lead Dental Surgeon]` | Confirm doctor's official name, degrees (`BDS` / `MDS`), and Karnataka Dental Council registration number. |
| 2 | **Clinic Phone** | `+91 98XXX XXXXX (Pending)` | Provide the official clinic reception landline or mobile number for direct calls. |
| 3 | **WhatsApp Business** | `+91 98XXX XXXXX` | Provide the official WhatsApp Business mobile number to receive instant patient queries. |
| 4 | **Street Address & GPS** | `Kadugodi Main Road, Whitefield 560067` | Provide exact building name, shop number, floor, landmark, and exact Google Maps pin. |
| 5 | **Consultation Timings**| `Mon-Sat: 10:00 AM – 8:30 PM (Pending)` | Confirm consultation hours for weekdays and Sundays. |
| 6 | **Services Offered** | 6 standard dental treatments | Confirm if all 6 services are offered or if specialized procedures (e.g., aligners, implants) should be added. |
| 7 | **Real Clinic Photos** | Sample Unsplash medical imagery | Provide high-res photos of doctor, dental chairs, reception area, and exterior signage. |
| 8 | **Appointment Alerts** | Demo simulation | Choose whether appointment form submissions should trigger an instant WhatsApp message, an email alert (`info@...`), or direct CRM integration. |

---

## 🛡️ Compliance & Safety Notice

This project complies strictly with ethical medical advertising practices:
- **No unverified medical claims**: Does not promise specific treatment results or pain-free guarantees without clinical context.
- **No fake reviews**: Avoids fabricated Google reviews, star ratings, or invented patient testimonials.
- **Privacy First**: Appointment forms collect only essential scheduling information (Name, Phone, Date, Time Slot). No sensitive medical history is collected over standard forms.
