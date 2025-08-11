import React, { useState } from 'react';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const featuredArticles = [{
  id: 1,
  title: 'The Evolution of Electric Performance: Beyond the Quarter Mile',
  excerpt: 'How electric vehicles are redefining performance metrics and changing enthusiast culture.',
  image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  publication: 'EV Enthusiast',
  date: 'March 2023',
  category: 'Electric Vehicles'
}, {
  id: 2,
  title: 'Restoration Revolution: Digital Tools Changing Classic Car Rebuilds',
  excerpt: 'How 3D scanning and printing are solving the parts shortage problem for vintage vehicles.',
  image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  publication: 'Classic Driver',
  date: 'January 2023',
  category: 'Classic Cars'
}, {
  id: 3,
  title: 'The Aerodynamic Revolution: How Wind Tunnels Shaped Modern Racing',
  excerpt: 'From crude shapes to computational fluid dynamics: the science that changed motorsport forever.',
  image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  publication: 'Motorsport Technical',
  date: 'November 2022',
  category: 'Motorsport'
}];
const FeaturedWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex(current => (current + 1) % featuredArticles.length);
  };
  const prevSlide = () => {
    setActiveIndex(current => (current - 1 + featuredArticles.length) % featuredArticles.length);
  };
  const currentArticle = featuredArticles[activeIndex];
  return <section id="featured-work" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
          Featured Work
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Selected articles showcasing my expertise across the automotive
          landscape
        </p>
        <div className="relative">
          <div className="lg:flex gap-8 items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                <img src={currentArticle.image} alt={currentArticle.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="inline-block bg-red-600 text-white text-xs font-medium px-2 py-1 rounded mb-2">
                    {currentArticle.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-1">
                    {currentArticle.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {currentArticle.publication} • {currentArticle.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {featuredArticles.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-red-600' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`}></button>)}
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-800 font-medium">
                {currentArticle.publication}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mt-2 mb-4">
                {currentArticle.title}
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                {currentArticle.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <a href="#" className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors">
                  Read Full Article
                  <ArrowRightIcon size={18} className="ml-2" />
                </a>
                <div className="flex space-x-2">
                  <button onClick={prevSlide} className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors" aria-label="Previous article">
                    <ChevronLeftIcon size={20} />
                  </button>
                  <button onClick={nextSlide} className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors" aria-label="Next article">
                    <ChevronRightIcon size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="/portfolio" className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900 transition-colors">
            View Complete Portfolio
            <ArrowRightIcon size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>;
};
export default FeaturedWork;