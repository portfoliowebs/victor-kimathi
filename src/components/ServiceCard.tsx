// src/components/ServiceCard.tsx

import React, { FC } from 'react';
import { Service } from '../utils/data';


interface ServiceCardProps {
  service: Service;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        {service.icon && (
          <span className="text-4xl mr-4" role="img" aria-label={service.title}>
            {service.icon}
          </span>
        )}
        <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-gray-700 mb-4 flex-grow">{service.description}</p> {/* flex-grow to make descriptions uniform height */}

      {service.features && service.features.length > 0 && (
        <div className="mt-auto pt-4 border-t border-gray-200"> {/* Push features to bottom */}
          <h4 className="text-lg font-semibold text-gray-700 mb-2">What I offer:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;