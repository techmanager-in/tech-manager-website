import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import HammerForgeInteractive from './components/HammerForgeInteractive';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import Approach from './components/Approach';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import HammerCursor from './components/HammerCursor';

export default function App() {
  const [soundActive, setSoundActive] = useState(false);

  return (
    <div className="app-container">
      {/* Dynamic Hammer Cursor Layer */}
      <HammerCursor soundActive={soundActive} />

      {/* Background Fractal Noise Overlay */}
      <div className="noise" aria-hidden="true" />

      {/* Main Navigation Header */}
      <Header soundActive={soundActive} setSoundActive={setSoundActive} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Continuous Marquee */}
        <TrustMarquee />

        {/* Creative Hammer Interactive Feature: System Forge */}
        <HammerForgeInteractive />

        {/* 5 Core Services with 3D Tilt & Spotlights */}
        <Services />

        {/* Selected Work Portfolio */}
        <WorkShowcase />

        {/* 4-Step Methodology */}
        <Approach />

        {/* Brand Culture & Values */}
        <About />

        {/* Contact / Brief Submission Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
