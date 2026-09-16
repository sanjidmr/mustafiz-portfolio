import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { Tools } from './components/Tools';
import { DesignMarketingFlow } from './components/DesignMarketingFlow';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [prefilledService, setPrefilledService] = useState<string>('Brand Identity Design');

  const handleSelectService = (serviceName: string) => {
    setPrefilledService(serviceName);
  };

  const handleDiscussProject = (projectTitle: string) => {
    setPrefilledService(`Campaign Creative: ${projectTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F1115] font-sans antialiased selection:bg-[#FF5E1E]/20 selection:text-[#FF5E1E] flex flex-col">
      {/* Editorial Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Artistic & Minimalist Hero Section */}
        <Hero />

        {/* About Section: The Intersection of Design + Marketing Strategy */}
        <About />

        {/* 9 Creative Expertise Cards */}
        <Expertise onSelectService={handleSelectService} />

        {/* 9 Detailed Services Directory */}
        <Services onSelectService={handleSelectService} />

        {/* Portfolio / Creative Showcase (The Visual Centerpiece) */}
        <PortfolioShowcase onDiscussProject={handleDiscussProject} />

        {/* Technology & Creative Tools Stack */}
        <Tools />

        {/* Distinctive Design + Marketing Philosophy Section (Understand -> Improve) */}
        <DesignMarketingFlow />

        {/* 4 Editable Strategic Case Studies */}
        <CaseStudies onDiscussCaseStudy={handleDiscussProject} />

        {/* 6-Step Workflow: 01 Discover to 06 Optimize */}
        <Process />

        {/* Minimalist Client Testimonials */}
        <Testimonials />

        {/* Final Strong CTA & Contact Section */}
        <Contact prefilledService={prefilledService} />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
