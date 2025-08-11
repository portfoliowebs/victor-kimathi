import React, { FC } from 'react';
import { Calendar, Newspaper, PenTool, Award, LucideIcon } from 'lucide-react';
import { StatItem, statsData } from '../utils/data';

// Map icon names to Lucide React components
const iconMap: { [key: string]: LucideIcon } = {
  Calendar,
  Newspaper,
  PenTool,
  Award,
};

const Stats: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat: StatItem, index: number) => {
            const Icon = iconMap[stat.icon] || Calendar; // Fallback to Calendar if icon not found
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                role="region"
                aria-labelledby={`stat-title-${index}`}
              >
                <div className="bg-blue-100 p-3 rounded-full text-blue-800 mb-4">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 id={`stat-title-${index}`} className="text-4xl font-serif font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mb-2">{stat.label}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;