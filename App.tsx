import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AiNailStudio from './components/AiNailStudio';
import Price from './components/Price';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-stone-50 text-stone-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <AiNailStudio />
      <Price />
      <Contact />
    </div>
  );
};

export default App;