import React from 'react';
import onlineStoreImage from '../assets/online-store.png';
import Offer from '../components/Offer';
import About from './About';
import { NavLink } from 'react-router-dom';

const OnlineStoreDevelopment = () => {
  const text =
    'Take your business online with our custom online store development services. We create visually stunning and user-friendly e-commerce websites that enhance your brand and provide a seamless shopping experience. Elevate your online presence and boost sales with our tailored solutions.';

  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 text-white rounded-lg shadow-lg mt-24">
      <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-4">
            <h1 className="text-3xl font-bold mb-4">Online Store Development</h1>
            <p className="mb-6">{text}</p>
          </div>
          <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden">
              <img
                src={onlineStoreImage}
                alt="E-Learning Solution"
                className="w-full h-full object-cover transform scale-105 transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <NavLink to='/contact-us' className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition duration-300">
            Get Started
          </NavLink>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default OnlineStoreDevelopment;
