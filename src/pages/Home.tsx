import React from 'react';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Stats from '../components/Stats';
import ValueProposition from '../components/ValueProposition';
import Newsletter from '../components/Newsletter';
const Home = () => {
  return <div className="min-h-screen">
      <Hero />
      {/* <FeaturedWork /> */}
      <Stats />
      <ValueProposition />
      <Newsletter />
    </div>;
};
export default Home;