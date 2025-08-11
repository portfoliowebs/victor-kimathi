// src/pages/Testimonials.tsx

import React, { FC } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonialsData } from '../utils/data';

// import { testimonialsData } from '../data/testimonialsData'; // Import your dummy data

const Testimonials: FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-100 p-6 md:p-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mt-8 mb-4">
        What My Clients Say
      </h1>
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        Hear directly from those I've collaborated with. Their words reflect the quality and impact of my automotive content.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;