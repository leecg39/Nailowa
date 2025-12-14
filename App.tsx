import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AiNailStudio from './components/AiNailStudio';
import Price from './components/Price';
import Contact from './components/Contact';
import Admin from './components/Admin';
import { GalleryImage, CategoryType } from './types';

// Initial Data moved from Gallery.tsx
const initialGalleryImages: string[] = [
    "https://images.unsplash.com/photo-1596913735158-294747809935?q=80&w=800&auto=format&fit=crop", // Red/Burgundy Nails
    "https://images.unsplash.com/photo-1509923880529-6b583f707f15?q=80&w=800&auto=format&fit=crop", // Autumn Leaves
    "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=800&auto=format&fit=crop", // Holding Coffee/Cozy
    "https://images.unsplash.com/photo-1519017712384-1d53f6032774?q=80&w=800&auto=format&fit=crop", // Pedicure/Red
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop", // Pink/Clean
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop", // Dark/Green/Art
    "https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=800&auto=format&fit=crop", // Nude/Simple
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", // Wedding/White
    "https://images.unsplash.com/photo-1599692994968-3e4b787c8802?q=80&w=800&auto=format&fit=crop", // Glitter/Fancy
    "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=800&auto=format&fit=crop", // Care/Holding Oil
    "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=800&auto=format&fit=crop", // Red/Elegant
    "https://images.unsplash.com/photo-1629213803454-e67c8702b851?q=80&w=800&auto=format&fit=crop"  // Detail/Macro
];

const createInitialItems = (): GalleryImage[] => {
  return initialGalleryImages.map((src, i) => {
    let cat: CategoryType = 'SIMPLE';
    if (i === 3) cat = 'PEDI'; 
    else if (i === 7) cat = 'WEDDING'; 
    else if (i === 0 || i === 5 || i === 8 || i === 10) cat = 'FANCY'; 
    
    return {
      id: `img-${i}`,
      category: cat,
      src: src,
      alt: `Nail Art Design ${i + 1}`
    };
  });
};

const App: React.FC = () => {
  const [view, setView] = useState<'app' | 'admin'>('app');
  const [galleryItems, setGalleryItems] = useState<GalleryImage[]>(createInitialItems);

  if (view === 'admin') {
    return (
      <Admin 
        onBack={() => setView('app')} 
        images={galleryItems}
        setImages={setGalleryItems}
      />
    );
  }

  return (
    <div className="min-h-screen font-sans bg-stone-50 text-stone-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery items={galleryItems} />
      <AiNailStudio />
      <Price />
      <Contact onAdminClick={() => setView('admin')} />
    </div>
  );
};

export default App;