import { v4 as uuidv4 } from 'uuid';
import {
  ProfileData,
  ContactData,
  FooterContent,
  PortfolioItem,
  Service,
  Testimonial,
  StatItem,
  ValuePropItem,
} from '../types/interfaces';

export const profileData: ProfileData = {
  name: '',
  tagline: '',
  profileImage: '',
  shortBio: '',
  summary: '',
  address: '',
  email: '',
  experience: [
    {
      title: '',
      company: '',
      location: '',
      years: '',
      responsibilities: ['',''],
    },
  ],
  education: [
    {
      institution: '',
      degree: '',
      graduated: '',
    },
  ],
  skills: ['',''],
  callToActionText: '',
  callToActionLink: '/portfolio',
};

export const contactData: ContactData = {
  title: '',
  description: '',
  cardTitle: '',
  email: {
    label: '',
    value: '',
    link: '',
  },
  address: {
    label: '',
    value: '',
  },
  phone: undefined,
  footerNote: '',
};

export const footerContent: FooterContent = {
  companyName: '',
  tagline: '',
  slogan: '',
  contactEmail: '',
  contactPhone: '',
  contactAddress: '',
  quickLinks: [
    {
      name: '',
      path: '',
    },
  ],
  socialLinks: [
    {
      name: '',
      url: '',
      icon: '',
    },
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: uuidv4(),
    image: '',
    title: '',
    description: '',
    pdfLink: '',
  },
];

export const servicesData: Service[] = [
  {
    id: uuidv4(),
    title: '',
    description: '',
    icon: undefined,
    features: [],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: uuidv4(),
    quote: '',
    author: '',
    title: '',
    company: '',
    image: undefined,
  },
];

export const statsData: StatItem[] = [
  {
    value: '',
    label: '',
    description: '',
    icon: '',
  },
];

export const valuePropsData: ValuePropItem[] = [
  {
    title: '',
    description: '',
    icon: '',
  },
];