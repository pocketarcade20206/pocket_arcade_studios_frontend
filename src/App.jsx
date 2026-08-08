import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GamesSection from './components/GamesSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="page-wrapper">
      {/* Interactive HTML5 Canvas Particle Grid Background */}
      <InteractiveBackground />

      {/* Top Sticky Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <HeroSection />
        <GamesSection />
        <AboutSection />
        <FAQSection />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
