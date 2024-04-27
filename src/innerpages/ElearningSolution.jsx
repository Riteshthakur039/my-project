import React from 'react';
import eLearningImage from '../assets/elearning.png'; 
import Offer from '../components/Offer';
import About from './About';
import { NavLink } from 'react-router-dom';

const ElearningSolution = () => {
  const text =
    'Our e-learning solution empowers educators and learners with a platform that facilitates seamless online education. With features such as interactive lessons, quizzes, and collaborative tools, we make learning engaging and accessible anytime, anywhere. Join us in revolutionizing the way we learn and teach.';

  return (
    <>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 text-white rounded-lg shadow-lg mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-4">
            <h1 className="text-3xl font-bold mb-4">E-Learning Solution</h1>
            <p className="mb-6">{text}</p>
          </div>
          <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden">
              <img
                src={eLearningImage}
                alt="E-Learning Solution"
                className="w-full h-full object-cover transform scale-105 transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <NavLink to='/contact-us' className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition duration-300">
            Try Now
          </NavLink>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default ElearningSolution;
