import React, { useState } from 'react';
import { LenisProvider } from './context/LenisContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsMarquee from './components/ToolsMarquee';
import Work from './components/Work';
import Disciplines from './components/Disciplines';
import Process from './components/Process';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';

/**
 * Main App Component for Pradeep Malla's Portfolio.
 * Wrapped in LenisProvider for smooth scroll across all sections.
 */
export default function App() {
  const [activeDiscipline, setActiveDiscipline] = useState('All');

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-bg text-text selection:bg-primary/30 selection:text-white">
        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Custom Precision Cursor — pointer:fine only (handled inside component) */}
        <Cursor />

        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Page Flow */}
        <main id="main-content">
          <Hero />
          <ToolsMarquee />
          <Work
            activeDiscipline={activeDiscipline}
            onSelectDiscipline={setActiveDiscipline}
          />
          <Disciplines onSelectDiscipline={setActiveDiscipline} />
          <Process />
          <Expertise />
          <Experience />
          <About />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LenisProvider>
  );
}
