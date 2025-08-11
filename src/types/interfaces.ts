
export interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    years: string;
    responsibilities: string[];
  }
  
  export interface EducationItem {
    institution: string;
    degree: string;
    graduated: string;
  }
  
  export interface PortfolioItem {
    id: string;
    image: string;
    title: string;
    description: string;
    pdfLink: string;
  }
  
  export interface Service {
    id: string;
    title: string;
    description: string;
    icon?: string;
    features?: string[];
  }
  
  export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    title: string;
    company: string;
    image?: string;
  }
  
  export interface QuickLink {
    name: string;
    path: string;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }
  
  export interface ProfileData {
    name: string;
    tagline: string;
    profileImage: string;
    shortBio: string;
    summary: string;
    address: string;
    email: string;
    experience: ExperienceItem[];
    education: EducationItem[];
    skills: string[];
    callToActionText: string;
    callToActionLink: string;
  }
  
  export interface ContactData {
    title: string;
    description: string;
    cardTitle: string;
    email: {
      label: string;
      value: string;
      link: string;
    };
    address: {
      label: string;
      value: string;
    };
    phone?: {
      label: string;
      value: string;
      link: string;
    };
    footerNote: string;
  }
  
  export interface FooterContent {
    companyName: string;
    tagline: string;
    slogan: string;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    quickLinks: QuickLink[];
    socialLinks: SocialLink[];
  }
  
  export interface StatItem {
    value: string;
    label: string;
    description: string;
    icon: string;
  }
  
  export interface ValuePropItem {
    title: string;
    description: string;
    icon: string;
  }