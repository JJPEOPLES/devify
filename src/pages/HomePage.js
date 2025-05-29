import React from 'react';
import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedCourses />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;