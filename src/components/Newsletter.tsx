import React from 'react';
const Newsletter = () => {
  return <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-800 p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-3">
                Stay in the Loop
              </h3>
              <p className="mb-4 text-blue-100">
                Get insights on automotive storytelling, industry trends, and
                exclusive content directly to your inbox.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Monthly automotive writing tips</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Early access to new articles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Industry insights and analysis</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Subscribe to the Newsletter
              </h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your.email@example.com" />
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to receive emails about automotive content and
                      industry insights.
                    </span>
                  </label>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors font-medium">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Newsletter;