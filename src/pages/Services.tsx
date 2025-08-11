// src/pages/Services.tsx

import React, { FC } from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../utils/data';

// import { servicesData } from '../data/servicesData'; // Import your dummy data

const Services: FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-100 p-6 md:p-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mt-8 mb-4">
        My Services
      </h1>
      <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
        As an automotive copywriter, I offer a range of specialized content creation services tailored to meet the unique needs of the automotive industry.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;