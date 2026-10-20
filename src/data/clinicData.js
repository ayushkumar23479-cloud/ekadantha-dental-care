// Clinic Configuration & Information
// Ekadantha Dental Care, Kadugodi, Whitefield, Bengaluru
// NOTE: This demo uses clearly marked placeholders for unverified details.

export const CLINIC_CONFIG = {
  isDemo: true,
  demoNotice: "Unofficial demo created for Ekadantha Dental Care. Details to be confirmed before launch.",
  
  // Basic Information
  name: "Ekadantha Dental Care",
  tagline: "Your Smile Deserves Expert Care",
  shortDescription: "A modern, welcoming dental clinic providing patient-centered dental care in Kadugodi, Whitefield, Bengaluru.",
  
  // Locality (Verified from prompt)
  locality: "Kadugodi, Whitefield, Bengaluru",
  city: "Bengaluru",
  state: "Karnataka",
  country: "India",
  pincode: "560067",
  
  // Placeholders for Unverified Details (To be verified with clinic owner)
  unverifiedDetails: {
    address: {
      isVerified: false,
      value: "[Building Name / Street Address to be verified], Kadugodi Main Road, Whitefield, Bengaluru, Karnataka 560067",
      short: "Kadugodi Main Road, Whitefield, Bengaluru - 560067",
      landmark: "[Landmark near Kadugodi Metro / Bus Depot - To be confirmed]",
    },
    phone: {
      isVerified: false,
      display: "+91 98XXX XXXXX (To be verified)",
      rawNumber: "919800000000",
      helper: "Owner's official clinic reception number will be linked here"
    },
    whatsapp: {
      isVerified: false,
      display: "+91 98XXX XXXXX (WhatsApp)",
      rawNumber: "919800000000",
      defaultMessage: "Hello Ekadantha Dental Care, I would like to enquire about a dental consultation at your Kadugodi clinic.",
    },
    email: {
      isVerified: false,
      display: "info@ekadanthadental.demo (To be verified)",
      value: "info@ekadanthadentalcare.com"
    },
    timings: {
      isVerified: false,
      schedule: [
        { days: "Monday - Saturday", hours: "[10:00 AM – 8:30 PM (To be confirmed)]" },
        { days: "Sunday", hours: "[10:00 AM – 1:30 PM (By Appointment)]" },
      ],
      note: "Exact consultation timings will be updated upon confirmation with the clinic."
    },
    googleMaps: {
      isVerified: false,
      // Direct search query for Kadugodi Whitefield Bengaluru 560067
      searchUrl: "https://www.google.com/maps/search/?api=1&query=Kadugodi+Whitefield+Bengaluru+560067",
      embedQuery: "Kadugodi, Whitefield, Bengaluru, Karnataka 560067",
    }
  },

  // Doctor Details Placeholders (No invented qualifications)
  doctorProfile: {
    isVerified: false,
    name: "[Dr. Name — Lead Dental Surgeon]",
    title: "Chief Dental Surgeon & Consultant",
    degrees: "[BDS / MDS — Specialty to be verified]",
    regNumber: "[Karnataka Dental Council Reg. No. Pending Verification]",
    experienceYears: "[Years of clinical experience to be added]",
    bio: "Passionate about gentle, evidence-based oral healthcare. Focused on patient comfort, thorough diagnostic evaluations, and personalized treatment plans in a clean, state-of-the-art clinic environment.",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    photoLabel: "Sample Doctor Profile Visual (To be replaced with real doctor photograph)",
    specialties: [
      "Patient-Friendly Dental Consultations",
      "Preventive & Restorative Dentistry",
      "Sterilization & Clinical Hygiene",
      "Modern Pain-Management Practices"
    ]
  }
};

// 6 Core Demo Services (clearly marked as editable examples)
export const CLINIC_SERVICES = [
  {
    id: "checkup",
    title: "General Dental Check-ups",
    shortDesc: "Comprehensive oral examinations, intraoral assessments, and preventive guidance for lifelong dental wellness.",
    fullDesc: "Regular check-ups detect hidden cavities, gum inflammation, and enamel wear before they cause pain. We conduct meticulous visual exams, evaluate bite alignment, and answer all your dental queries.",
    icon: "Stethoscope",
    category: "General",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    benefits: ["Early detection of tooth decay", "Gum health evaluation", "Personalized oral hygiene advice"],
    demoNotice: "Sample service card. Specific treatment scope, equipment, and fees to be confirmed by the clinic owner."
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning & Scaling",
    shortDesc: "Professional ultrasonic scaling and polishing to remove stubborn plaque, tartar, and surface stains gently.",
    fullDesc: "Daily brushing cannot remove hardened tartar (calculus). Our gentle scaling restores gum health, freshens breath, and protects against periodontal disease using comfortable ultrasonic technology.",
    icon: "Sparkles",
    category: "Preventive",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    benefits: ["Gentle tartar & plaque removal", "Helps stop gum bleeding", "Brighter, smoother smile feel"],
    demoNotice: "Sample service card. Procedure methods and pricing can be configured by the clinic owner."
  },
  {
    id: "fillings",
    title: "Dental Fillings & Restorations",
    shortDesc: "Durable, tooth-colored composite restorations designed to blend seamlessly with your natural teeth.",
    fullDesc: "Restore teeth damaged by decay or minor fractures. We use biocompatible, high-strength aesthetic composites that match your tooth shade, preserving natural tooth structure and function.",
    icon: "ShieldCheck",
    category: "Restorative",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    benefits: ["Natural tooth-colored composites", "Mercury-free modern materials", "Restores chewing strength"],
    demoNotice: "Sample service card. Material choices and guarantees to be verified by the dentist."
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    shortDesc: "Modern, gentle endodontic care to relieve tooth pain, resolve deep infections, and save your natural tooth.",
    fullDesc: "When tooth infection reaches the inner nerve pulp, root canal therapy cleans and seals the canals so you don't lose the tooth. Modern rotary endodontics and local anesthesia make this comfortable and predictable.",
    icon: "Activity",
    category: "Endodontics",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    benefits: ["Relieves acute toothache", "Saves natural tooth from extraction", "Comfortable, single/multi-sitting care"],
    demoNotice: "Sample service card. Root canal protocols and specialist availability to be verified with the clinic."
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    shortDesc: "Aesthetic smile enhancements including professional teeth whitening, cosmetic bonding, and smile makeovers.",
    fullDesc: "Enhance the appearance of discolored, chipped, or unevenly spaced teeth. We discuss conservative aesthetic options that bring out the natural radiance of your smile with precision and balance.",
    icon: "Smile",
    category: "Aesthetics",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80",
    benefits: ["Safe, enamel-friendly whitening", "Aesthetic composite bonding", "Personalized smile consultations"],
    demoNotice: "Sample service card. Specific cosmetic procedures and package details to be tailored by the clinic."
  },
  {
    id: "preventive",
    title: "Preventive Dental Care",
    shortDesc: "Protective fluoride therapies, pit and fissure sealants, and guidance for adults and children alike.",
    fullDesc: "Prevention is the foundation of great dentistry. We provide protective coatings, enamel remineralization treatments, and pediatric dental monitoring to keep your family's smiles cavity-free.",
    icon: "HeartHandshake",
    category: "Preventive",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    benefits: ["Cavity prevention sealants", "Enamel strengthening fluoride", "Child-friendly dental visits"],
    demoNotice: "Sample service card. Preventive plans and age-specific protocols to be confirmed by the clinic."
  }
];

// Why Choose Us (Editable, non-claim-based benefits)
export const WHY_CHOOSE_US = [
  {
    id: "easy-booking",
    title: "Easy Appointment Enquiries",
    description: "Request an appointment online with just a few clicks or send a direct message on WhatsApp. No complicated registration required.",
    icon: "CalendarCheck",
  },
  {
    id: "clear-info",
    title: "Clear Service Information",
    description: "We believe in transparent communication. Get straightforward explanations of procedures, care options, and what to expect during your visit.",
    icon: "FileText",
  },
  {
    id: "convenient-location",
    title: "Convenient Kadugodi Location",
    description: "Centrally situated in Kadugodi, Whitefield (PIN 560067) with straightforward access from nearby residential layouts, tech corridors, and metro links.",
    icon: "MapPin",
  },
  {
    id: "friendly-care",
    title: "Friendly Patient Communication",
    description: "Dental visits should feel comfortable and reassuring. Our team is committed to a courteous, gentle, and respectful patient experience.",
    icon: "HeartPulse",
  }
];

// Clinic Gallery Items (Realistic placeholder images, clearly labeled)
export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Modern Dental Operatory",
    category: "Treatment Room",
    description: "Ergonomic dental chair with sanitized instruments and modern operatory lighting.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    label: "Sample Operatory Setup (Replace with actual clinic photo)"
  },
  {
    id: "gal-2",
    title: "Welcoming Reception Area",
    category: "Reception & Lounge",
    description: "Clean, comfortable seating area designed to help patients feel relaxed before consultation.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    label: "Sample Reception Visual (Replace with actual reception photo)"
  },
  {
    id: "gal-3",
    title: "Sterilization & Diagnostic Tools",
    category: "Equipment",
    description: "Autoclave sterilization standards and diagnostic instruments ensuring patient safety.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    label: "Sample Equipment Visual (Replace with actual clinic equipment)"
  },
  {
    id: "gal-4",
    title: "Patient Consultation Room",
    category: "Consultation",
    description: "Dedicated space for private discussion of dental health and personalized treatment plans.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    label: "Sample Consultation Space (Replace with actual clinic photo)"
  },
  {
    id: "gal-5",
    title: "Professional Dental Team",
    category: "Team",
    description: "Dedicated dental professionals delivering compassionate patient care.",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80",
    label: "Sample Team Visual (Replace with real clinic doctor & staff photo)"
  },
  {
    id: "gal-6",
    title: "Clinic Facility & Hygiene",
    category: "Clinic Environment",
    description: "Bright, pristine clinical interiors adhering to strict hygiene standards.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    label: "Sample Clinic Interior (Replace with actual clinic photos)"
  }
];

// Launch Checklist for the Clinic Owner
export const OWNER_LAUNCH_CHECKLIST = [
  { id: 1, item: "Verify Doctor Name, Degrees (BDS/MDS), and Dental Council Reg. No.", status: "Pending" },
  { id: 2, item: "Confirm Official Clinic Phone Number for direct patient calls", status: "Pending" },
  { id: 3, item: "Confirm Official WhatsApp Business Number for patient chats", status: "Pending" },
  { id: 4, item: "Provide Full Street Address, Landmark & Exact Google Maps Pin in Kadugodi", status: "Pending" },
  { id: 5, item: "Confirm Weekly Working Hours & Consultation Timings", status: "Pending" },
  { id: 6, item: "Verify Listed Services (Checkups, Cleaning, Fillings, RCT, Cosmetic, Preventive)", status: "Pending" },
  { id: 7, item: "Provide Real Photographs of Doctor, Clinic Interior, and Reception", status: "Pending" },
  { id: 8, item: "Connect Appointment Form to Clinic's WhatsApp, Email, or SMS Gateway", status: "Pending" }
];
