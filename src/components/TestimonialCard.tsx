// src/components/TestimonialCard.tsx

import React, { FC } from 'react';
import { Testimonial } from '../utils/data';


interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {testimonial.image && (
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-red-500"
        />
      )}
      <p className="text-gray-700 italic mb-4 text-lg">
        "{testimonial.quote}"
      </p>
      <div className="mt-auto"> {/* Pushes content to the bottom if cards have varying heights */}
        <h3 className="text-xl font-semibold text-gray-800">
          {testimonial.author}
        </h3>
        <p className="text-md text-gray-500">
          {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;