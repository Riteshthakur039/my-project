import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Taxi from './innerpages/Taxi';
import Footer from './components/Footer';
import About from './innerpages/About';
import GoToTop from './components/GoToTop';
import ScrollToTop from './components/ScrollToTop';
import Food from './innerpages/Food';
import Saloon from './innerpages/Saloon';
import Estate from './innerpages/Estate';
import WebDesignComponent from './innerpages/WebDesignComponent';
import ECommerceSolution from './innerpages/ECommerceSolution';
import AppDevelopment from './innerpages/AppDevelopment';
import WebApplication from './innerpages/WebApplication';
import MobileApp from './innerpages/MobileApp';
import ElearningSolution from './innerpages/ElearningSolution';
import OnlineStoreDevelopment from './innerpages/OnlineStoreDevelopment';
import UIUXDesignApplication from './innerpages/UIUXDesignApplication';
import EducationTraining from './innerpages/EducationTraining';
import HealthcareWellness from './innerpages/HealthcareWellness';
import SocialNetworking from './innerpages/SocialNetworking';
import TravelTourism from './innerpages/TravelTourism';
import RealEstate from './innerpages/RealEstate';
import TechnologyOverview from './innerpages/TechnologyOverview';
import Contact from './components/Contact';
import CalendarPopup from './components/CalendarPopup';


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taxi-app" element={<Taxi />} />
          <Route path="/food-app" element={<Food />} />
          <Route path="/saloon-app" element={<Saloon />} />
          <Route path="/estate-app" element={<Estate />} />
          <Route path="/web-development" element={<WebDesignComponent />} />
          <Route path="/ecom-app" element={<ECommerceSolution />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/web-app" element={<WebApplication/>} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/elearning-app" element={<ElearningSolution />} />
          <Route path="/online-store" element={<OnlineStoreDevelopment />} />
          <Route path="/uiux-design" element={<UIUXDesignApplication />} />
          <Route path="/education-training" element={<EducationTraining />} />
          <Route path="/healthcare-wellness" element={<HealthcareWellness />} />
          <Route path="/social-networking" element={<SocialNetworking />} />
          <Route path="/travel-tourism" element={<TravelTourism />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/technologies" element={<TechnologyOverview />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/calendar" element={<CalendarPopup />} />
        </Routes>
        <Footer />
        <GoToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
