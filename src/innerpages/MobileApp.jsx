import React from 'react';
import mobileAppImage from '../assets/learn.png';
import Offer from '../components/Offer';
import About from './About';
import { NavLink } from 'react-router-dom';

const MobileApp = () => {
  const text =
    'Mobile app development is the process of creating software applications that run on mobile devices. Using frameworks like React Native or native development tools for iOS and Android, developers build apps that provide a seamless experience on smartphones and tablets. From concept to deployment, we turn your ideas into user-friendly mobile applications.';

  return (
    <>
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 text-white rounded-lg shadow-lg mt-24">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-4">
          <h1 className="text-3xl font-bold mb-4">Mobile App Development</h1>
          <p className="mb-6">{text}</p>
        </div>
        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <div className="rounded-lg overflow-hidden">
            <img src={mobileAppImage} alt="Mobile App Development" className="w-full h-full object-cover transform scale-105 transition-transform duration-500 hover:scale-110"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <NavLink to='/contact-us' className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
          Get Started
        </NavLink>
      </div>
    </div>
    <Offer />
    <About />
    </>
  );
};

export default MobileApp;
