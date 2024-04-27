import React from 'react';
import mernImage from '../assets/mern-stack.png';
import responsiveWebAppsImage from '../assets/responsive-web-apps.png';
import reactNativeImage from '../assets/react-native.png';
import reactNextjsImage from '../assets/react-nextjs.jpeg';
import mongoFirebaseImage from '../assets/mongo-firebase.png';
import Offer from '../components/Offer';
import About from './About';

const TechnologyOverview = () => {
  const mernText =
    'The MERN stack (MongoDB, Express.js, React.js, Node.js) is a powerful and popular technology stack for building full-stack web applications. MongoDB serves as the NoSQL database, Express.js handles the server-side logic, React.js powers the user interface, and Node.js manages the server environment. Together, they offer a seamless and efficient development experience.';

  const responsiveWebAppsText =
    'Responsive Web Apps are designed to provide optimal viewing and interaction experiences across a wide range of devices, from desktops to smartphones. Using responsive design techniques, websites can adapt to different screen sizes and resolutions, ensuring a consistent and user-friendly experience for all users.';

  const reactNativeText =
    'React Native is a cross-platform framework for building mobile applications using React and JavaScript. Developers can write code once and deploy it on both iOS and Android platforms, saving time and resources. React Native offers a native-like performance and allows for a smooth development process.';

  const reactNextjsText =
    'React.js and Next.js are powerful tools for building modern web applications. React.js is a JavaScript library for building user interfaces, and Next.js is a React framework that adds server-side rendering, routing, and other features. Together, they enable the development of fast, dynamic, and SEO-friendly web applications.';

  const mongoFirebaseText =
    'MongoDB and Firebase are popular database solutions for web and mobile applications. MongoDB is a NoSQL database known for its flexibility and scalability. Firebase is a comprehensive platform that provides various services, including a real-time NoSQL database, authentication, hosting, and more. Both are essential for building modern, data-driven applications.';

  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 text-white rounded-lg shadow-lg mt-24">
        <h1 className="text-3xl font-bold mb-4 shadow-lg flex items-center justify-center">Technologies Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-6 p-6 animate-fade-in shadow-lg ">
            <img
              src={mernImage}
              alt="MERN Stack"
              className="w-full h-40 object-contain transition-transform duration-1000 transform scale-105 hover:scale-110 "
            />
            <h2 className="text-xl mt-6 font-semibold mb-2">MERN Stack</h2>
            <p className='mt-3'>{mernText}</p>
          </div>
          <div className="mb-6 p-6 animate-fade-in shadow-lg">
            <img
              src={responsiveWebAppsImage}
              alt="Responsive Web Apps"
              className="w-full h-40 object-contain transition-transform duration-1000 transform scale-105 hover:scale-110"
            />
            <h2 className="text-xl mt-6 font-semibold mb-2">Responsive Web Apps</h2>
            <p className='mt-3'>{responsiveWebAppsText}</p>
          </div>
          <div className="mb-6 p-6 animate-fade-in shadow-lg">
            <img
              src={reactNativeImage}
              alt="React Native"
              className="w-full h-40 object-none transition-transform duration-1000 transform scale-105 hover:scale-110"
            />
            <h2 className="text-xl mt-6 font-semibold mb-2">React Native</h2>
            <p className='mt-3'>{reactNativeText}</p>
          </div>
          <div className="mb-6 p-6 animate-fade-in shadow-lg">
            <img
              src={reactNextjsImage}
              alt="React.js/Next.js"
              className="w-full h-40 object-none transition-transform duration-1000 transform scale-105 hover:scale-110"
            />
            <h2 className="text-xl mt-6 font-semibold mb-2">React.js/Next.js</h2>
            <p className='mt-3'>{reactNextjsText}</p>
          </div>
          <div className="mb-6 p-6 animate-fade-in shadow-lg">
            <img
              src={mongoFirebaseImage}
              alt="MongoDB/Firebase"
              className="w-full h-40 object-none transition-transform duration-1000 transform scale-105 hover:scale-110" />
            <h2 className="text-xl mt-6 font-semibold mb-2">MongoDB/Firebase</h2>
            <p className='mt-3'>{mongoFirebaseText}</p>
          </div>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default TechnologyOverview;
