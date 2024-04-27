import React from 'react';
import healthcareImage from '../assets/healthcare-wellness.png'; 
import './HealthcareWellness.css'; 
import Offer from '../components/Offer';
import About from './About';
import { NavLink } from 'react-router-dom';

const HealthcareWellness = () => {
  const text =
    'Prioritize your well-being with our Healthcare & Wellness platform. We offer personalized solutions to enhance your health journey. Join us in promoting a healthier lifestyle and well-being for individuals and communities.';

  return (
    <>
      <div className="relative overflow-hidden">
  <div className="shooting-stars">
    <div className="shooting-star" />
    <div className="shooting-star" />
    <div className="shooting-star" />
  </div>
        <div className="bg-gradient-to-r from-green-300 to-blue-500 p-8 text-white rounded-lg shadow-lg mt-24 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">Healthcare & Wellness</h1>
              <p className="mb-6">{text}</p>
              <div className="flex justify-center md:justify-start">
                <NavLink to='/contact-us' className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition duration-300">
                  Explore Services
                </NavLink>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={healthcareImage}
                alt="Healthcare & Wellness"
                className="w-full h-full object-cover transition-transform duration-500 transform scale-105 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default HealthcareWellness;
