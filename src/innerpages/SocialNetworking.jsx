import React from 'react';
import socialNetworkingImage from '../assets/social-networking.png'; 
import './HealthcareWellness.css'; 
import Offer from '../components/Offer';
import About from './About';
import { NavLink } from 'react-router-dom';

const SocialNetworking = () => {
  const text =
    'Connect, share, and engage with our Social Networking platform. Build meaningful connections, share your stories, and stay connected with friends and communities. Join us in shaping the future of social interaction.';

  return (
    <>
     <div className="relative overflow-hidden">
  <div className="shooting-stars">
    <div className="shooting-star" />
    <div className="shooting-star" />
    <div className="shooting-star" />
  </div>
      <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-8 text-white rounded-lg shadow-lg mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-4">
            <h1 className="text-3xl font-bold mb-4">Social Networking</h1>
            <p className="mb-6">{text}</p>
          </div>
          <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden relative">
              <img
                src={socialNetworkingImage}
                alt="Social Networking"
                className="w-full h-full object-cover transition-transform duration-1000 transform rotate-45 hover:rotate-0"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <NavLink to='/contact-us' className="bg-white text-indigo-500 px-6 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300">
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

export default SocialNetworking;
