import React from 'react';
import educationTrainingImage from '../assets/education-training.png'; 
import Offer from '../components/Offer';
import About from './About';
import { NavLink } from 'react-router-dom';

const EducationTraining = () => {
  const text =
    'Transform education with our innovative training platform. Our dynamic approach integrates cutting-edge technology, fostering interactive learning experiences. Join us in revolutionizing education and empowering learners worldwide.';

  return (
    <>
      <div className="bg-blue-500 p-8 text-white rounded-lg shadow-lg mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-4">Education Training</h1>
            <p className="mb-6">{text}</p>
            <div className="flex justify-center md:justify-start">
              <NavLink to='/contact-us' className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                Try Now
              </NavLink>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden relative">
            <img
              src={educationTrainingImage}
              alt="Education Training"
              className="w-full h-full object-cover transition-transform duration-500 transform scale-105 hover:scale-110"
            />
          </div>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default EducationTraining;
