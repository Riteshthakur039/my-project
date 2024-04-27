import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Offer from '../components/Offer';
import banner from '../assets/ecom.png';
import About from './About';
import { NavLink } from 'react-router-dom';

const WebApplication = () => {
  const text =
    'Web application development involves the creation of interactive and dynamic websites that provide a rich user experience. Using technologies like React, Angular, or Vue.js, developers build scalable and responsive web applications. From e-commerce platforms to content management systems, we bring your ideas to life on the web.';

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg mt-24">
        <div className="md:w-1/2 md:pr-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Web Application Development</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
        </div>
        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <Card className="animate-pulse">
            <Card.Img variant="top" src={banner} alt="Web application development" className="w-full h-full object-cover rounded-lg" />
            <Card.Body>
              <Card.Title className='text-white'>Build Your Web App</Card.Title>
              <Card.Text className='text-white'>Create dynamic and responsive web applications with our development services.</Card.Text>
              <NavLink to='/contact-us' variant="primary" className='text-white'>Get Started</NavLink>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default WebApplication;
