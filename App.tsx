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

// Expanded Image Data
const initialGalleryImages: string[] = [
    "https://images.unsplash.com/photo-1596913735158-294747809935?q=80&w=800&auto=format&fit=crop", // Red
    "https://images.unsplash.com/photo-1509923880529-6b583f707f15?q=80&w=800&auto=format&fit=crop", // Leaves
    "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=800&auto=format&fit=crop", // Cozy
    "https://images.unsplash.com/photo-1519017712384-1d53f6032774?q=80&w=800&auto=format&fit=crop", // Feet
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop", // Pink
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop", // Dark Art
    "https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=800&auto=format&fit=crop", // Nude
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", // Wedding
    "https://images.unsplash.com/photo-1599692994968-3e4b787c8802?q=80&w=800&auto=format&fit=crop", // Glitter
    "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=800&auto=format&fit=crop", // Care
    "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=800&auto=format&fit=crop", // Elegant
    "https://images.unsplash.com/photo-1629213803454-e67c8702b851?q=80&w=800&auto=format&fit=crop", // Macro
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", // Men
    "https://images.unsplash.com/photo-1601055903647-87e16f81ad84?q=80&w=800&auto=format&fit=crop", // Art
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop", // Clean
    "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop", // Pedi
    "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop", // Abstract
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop", // Skin
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop", // Extension
    "https://images.unsplash.com/photo-1457972851104-4fd469440bf9?q=80&w=800&auto=format&fit=crop", // Flowers
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop", // Clean
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop", // Bright
    "https://images.unsplash.com/photo-1560130958-69324d56d782?q=80&w=800&auto=format&fit=crop", // Green
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop", // Fashion
    "https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=800&auto=format&fit=crop", // Nude 2
    "https://images.unsplash.com/photo-1629213803454-e67c8702b851?q=80&w=800&auto=format&fit=crop", // Macro 2
    "https://images.unsplash.com/photo-1519017712384-1d53f6032774?q=80&w=800&auto=format&fit=crop", // Feet 2
    "https://images.unsplash.com/photo-1633391219080-87a275464195?q=80&w=800&auto=format&fit=crop", // Process
];

const createInitialItems = (): GalleryImage[] => {
  return initialGalleryImages.map((src, i) => {
    let cat: CategoryType = 'SIMPLE';
    
    // Distribute categories for variety
    if (i % 4 === 0) cat = 'FANCY';
    else if (i % 4 === 1) cat = 'SIMPLE';
    else if (i % 4 === 2) cat = 'WEDDING';
    else if (i % 4 === 3) cat = 'PEDI';

    // Specific overrides for known images to match visually
    if (i === 3 || i === 15 || i === 26) cat = 'PEDI';
    if (i === 7 || i === 10 || i === 19) cat = 'WEDDING';
    if (i === 0 || i === 8 || i === 13) cat = 'FANCY';

    return {
      id: `img-${i}`,
      category: cat,
      src: src,
      alt: `Nail Art Collection ${i + 1}`
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