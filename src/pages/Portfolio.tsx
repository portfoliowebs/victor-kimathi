// src/pages/Portfolio.tsx

import React, { FC } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { portfolioItems } from '../utils/data';

// import { portfolioItems } from '../data/portfolioData
// ';
// import { portfolioItems } from '../data/portfolioData'; // Import the portfolio items data

const Portfolio: FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-100 p-6 md:p-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mt-8 mb-4">
        My  Portfolio
      </h1>
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        Explore a selection of my published articles and in-depth features . Click on any card to view the full PDF.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;