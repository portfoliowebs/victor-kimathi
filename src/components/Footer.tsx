// src/components/Footer.tsx

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LucideIcon // Import LucideIcon type
} from 'lucide-react'; // Ensure lucide-react is installed
import { footerContent } from '../utils/data';

// import { footerContent } from '../data/footerData'; // Import the footer data
 // Adjust the import path as necessary
// Map string icon names to actual Lucide React components
const iconMap: { [key: string]: LucideIcon } = {
  LinkedinIcon: LinkedinIcon,
  MailIcon: MailIcon,
  PhoneIcon: PhoneIcon,
  FacebookIcon: FacebookIcon,
  TwitterIcon: TwitterIcon,
  InstagramIcon: InstagramIcon,
};

const Footer: FC = () => {
  const {
    companyName,
    tagline,
    slogan,
    contactEmail,
    contactPhone,
    contactAddress,
    quickLinks,
    socialLinks,
  } = footerContent;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Section 1: Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-red-500 mb-3 tracking-wide">
              {companyName}
            </h3>
            <p className="text-gray-300 text-lg mb-2 leading-relaxed">
              {tagline}
            </p>
            <p className="text-gray-400 text-sm italic">
              "{slogan}"
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4 text-red-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4 text-red-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start text-gray-300">
                <MailIcon size={20} className="mr-3 text-red-300" />
                <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors text-lg">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-300">
                <PhoneIcon size={20} className="mr-3 text-red-300" />
                <a href={`tel:${contactPhone}`} className="hover:text-white transition-colors text-lg">
                  {contactPhone}
                </a>
              </li>
              <li className="text-gray-300 text-lg flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-red-300">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {contactAddress}
              </li>
            </ul>
          </div>

          {/* Section 4: Connect & Newsletter */}
       
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} {companyName}. All rights reserved.
          </p>
          <p className="mt-1">
            Designed and Developed by Paul Campbell (Example Portfolio)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;