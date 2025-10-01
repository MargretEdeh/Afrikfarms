"use client"
import { useEffect } from 'react';
import Header from "./components/Header"
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturedFarms from './components/FeaturedFarms';
import TestimonialsSection from './components/TestimonialsSection';
import ImpactSection from './components/ImpactSection';
import PartnersSection from './components/ParthnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturedFarms />
        <TestimonialsSection />
        <ImpactSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
