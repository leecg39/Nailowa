import React, { useState } from 'react';
import { NavLink } from '../types';

const categories = [
  { id: 'ALL', label: '전체' },
  { id: 'SIMPLE', label: '심플' },
  { id: 'FANCY', label: '화려함' },
  { id: 'WEDDING', label: '웨딩' },
  { id: 'PEDI', label: '페디' }
];

// Updated to match the "Instagram Feed" aesthetic from the screenshot
// Keywords: Red/Burgundy, Autumn/Leaves, Coffee/Cozy, Pedicure, Nude/Clean
const galleryImages = [
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

const galleryItems = galleryImages.map((src, i) => {
  let cat = 'SIMPLE';
  if (i === 3) cat = 'PEDI'; // The pedicure image
  else if (i === 7) cat = 'WEDDING'; // The wedding image
  else if (i === 0 || i === 5 || i === 8 || i === 10) cat = 'FANCY'; // Red/Dark/Glitter
  
  return {
    id: `img-${i}`,
    category: cat,
    src: src,
    alt: `Nail Art Design ${i + 1}`
  };
});

// Individual Gallery Item Component to handle loading state
const GalleryItem = ({ item }: { item: typeof galleryItems[0] }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x800/e7e5e4/78716c?text=Gallery+Item";
    // If error occurs, we consider loading 'done' so the placeholder shows the error image
    setIsLoaded(true);
  };

  return (
    <div className="relative aspect-[3/4] group overflow-hidden bg-stone-200 cursor-pointer shadow-sm">
      {/* Loading Skeleton / Blur Effect */}
      <div 
        className={`absolute inset-0 bg-stone-300 z-10 transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'
        }`} 
      />

      {/* Image with Blur-up transition */}
      <img 
        src={item.src} 
        alt={item.alt} 
        className={`w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
      />
      
      {/* Overlay and Text */}
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500 flex items-center justify-center z-20">
        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
          <span className="text-white font-serif tracking-[0.2em] text-xs md:text-sm border border-white/80 px-6 py-2 backdrop-blur-[2px]">
            VIEW
          </span>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredItems = activeCategory === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id={NavLink.GALLERY} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Portfolio</h2>
            <p className="text-stone-500 font-light tracking-wide">NAILOWA의 감각적인 아트를 만나보세요</p>
          </div>
          
          <div className="flex gap-6 mt-8 md:mt-0 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm tracking-widest transition-all pb-2 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'text-stone-900 font-bold border-b-2 border-stone-900' 
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;