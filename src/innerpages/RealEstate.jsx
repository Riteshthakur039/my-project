import React from 'react';
import realEstateImage from '../assets/real-estate.png'; 
import Offer from '../components/Offer';
import About from './About';
import './HealthcareWellness.css'; 
import { NavLink } from 'react-router-dom';

const RealEstate = () => {
  const text =
    'Discover your dream home with our Real Estate services. From cozy apartments to luxurious estates, we help you find the perfect property. Let us guide you through the real estate journey and turn your housing dreams into reality.';

  return (
    <>
    <div className="relative overflow-hidden">
  <div className="shooting-stars">
    <div className="shooting-star" />
    <div className="shooting-star" />
    <div className="shooting-star" />
  </div>
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-8 text-white rounded-lg shadow-lg mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-4">
            <h1 className="text-3xl font-bold mb-4">Real Estate</h1>
            <p className="mb-6">{text}</p>
          </div>
          <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden relative">
              <img
                src={realEstateImage}
                alt="Real Estate"
                className="w-full h-full object-cover transition-transform duration-1000 transform scale-105 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <NavLink to='/contact-us' className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            Try Now
          </NavLink>
        </div>
      </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default RealEstate;
