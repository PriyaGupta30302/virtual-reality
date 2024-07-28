// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';

const App = () => {
  return (
    
    <Router>
      <Navbar />
     
      <div id="top" className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <section id="Features">
              <FeatureSection />
              </section>
              <section id="Workflow">
              <Workflow />
              </section>
              <section id="Pricing">
              <Pricing />
              </section>
              <section id="Testimonials">
              <Testimonials />
              </section>
              <Footer />
            </>
          } />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
      
    </Router>
     
  );
};

export default App;
