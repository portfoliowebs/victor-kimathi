import React, { FC } from 'react';
import { Wrench, Pen, Gauge, LucideIcon } from 'lucide-react';
import { ValuePropItem, valuePropsData } from '../utils/data';


// Map icon names to Lucide React components
const iconMap: { [key: string]: LucideIcon } = {
  Wrench,
  Pen,
  Gauge,
};

const ValueProposition: FC = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">My Unique Approach</h2>
          <p className="text-xl text-blue-100">
            I don't just write about cars—I understand them from the ground up
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePropsData.map((prop: ValuePropItem, index: number) => {
            const Icon = iconMap[prop.icon] || Wrench; // Fallback to Wrench if icon not found
            return (
              <div
                key={index}
                className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                role="region"
                aria-labelledby={`prop-title-${index}`}
              >
                <div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Icon className="text-white" size={24} aria-hidden="true" />
                </div>
                <h3 id={`prop-title-${index}`} className="text-xl font-bold mb-3">
                  {prop.title}
                </h3>
                <p className="text-blue-100">{prop.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;