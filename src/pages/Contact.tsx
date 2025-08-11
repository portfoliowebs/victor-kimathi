import React, { FC } from "react";
import { contactData } from '../utils/data';


const Contact: FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-100 p-6 md:p-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mt-8 mb-4">
        {contactData.title}
      </h1>
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        {contactData.description}
      </p>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {contactData.cardTitle}
        </h2>

        <div className="space-y-4">
          <p className="text-xl text-gray-700">
            <span className="font-semibold block sm:inline">
              {contactData.email.label}:
            </span>{" "}
            <a
              href={contactData.email.link}
              className="text-blue-600 hover:underline break-words"
            >
              {contactData.email.value}
            </a>
          </p>
          <p className="text-xl text-gray-700">
            <span className="font-semibold block sm:inline">
              {contactData.address.label}:
            </span>{" "}
            {contactData.address.value}
          </p>

          {/* Uncomment to display phone number */}
          {/* {contactData.phone && (
            <p className="text-xl text-gray-700">
              <span className="font-semibold block sm:inline">
                {contactData.phone.label}:
              </span>{" "}
              <a
                href={contactData.phone.link}
                className="text-blue-600 hover:underline"
              >
                {contactData.phone.value}
              </a>
            </p>
          )} */}
        </div>

        <p className="text-md text-gray-600 mt-8">{contactData.footerNote}</p>
      </div>
    </div>
  );
};

export default Contact;
