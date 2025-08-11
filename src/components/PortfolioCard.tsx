// src/components/PortfolioCard.tsx

import React, { FC } from 'react';
import { PortfolioItem } from '../utils/data';

// import { PortfolioItem } from '../data/portfolioData'; // Import the interface

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ item }) => {
  return (
    <a
      href={item.pdfLink}
      target="_blank" // Opens the PDF in a new tab
      rel="noopener noreferrer" // Security best practice for target="_blank"
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">
        <span className="text-sm font-medium">View PDF</span>
        </button>
      </div>
    </a>
  );
};

export default PortfolioCard;