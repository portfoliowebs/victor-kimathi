import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { profileData } from '../utils/data';

const Hero: FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/80" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-50"
          style={{ backgroundBlendMode: 'multiply' }}
        />
        {/* Blueprint overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634469875582-a0637d4249ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-10" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
            {profileData.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-white font-light mb-6">
            {profileData.tagline}
          </h2>
          <p className="text-xl text-white/90 mb-8 font-medium">
            {profileData.shortBio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={profileData.callToActionLink}
              className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center justify-center sm:justify-start"
              aria-label="Explore my portfolio"
            >
              {profileData.callToActionText}
              <ArrowRight size={18} className="ml-2" aria-hidden="true" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center sm:justify-start"
              aria-label="Download resume"
            >
              Download Resume
              <Download size={18} className="ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        role="region"
        aria-label="Scroll indicator"
      >
        <span className="text-white/70 text-sm mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;