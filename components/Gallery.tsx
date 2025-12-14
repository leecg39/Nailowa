import React, { useState } from 'react';
import { NavLink } from '../types';

const categories = [
  { id: 'ALL', label: '전체' },
  { id: 'SIMPLE', label: '심플' },
  { id: 'FANCY', label: '화려함' },
  { id: 'WEDDING', label: '웨딩' },
  { id: 'PEDI', label: '페디' }
];

// Verified high-quality Unsplash images
const galleryImages = [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599692994968-3e4b787c8802?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1629213803454-e67c8702b851?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519017712384-1d53f6032774?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600063711905-1c58661bd3cb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505312362089-a29d5d289cb9?q=80&w=800&auto=format&fit=crop"
];

const galleryItems = galleryImages.map((src, i) => ({
  id: `img-${i}`,
  category: i % 4 === 0 ? 'WEDDING' : i % 3 === 0 ? 'FANCY' : i % 2 === 0 ? 'PEDI' : 'SIMPLE',
  src: src,
  alt: `Nail Art Design ${i + 1}`
}));

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredItems = activeCategory === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x800/e7e5e4/78716c?text=Gallery+Item";
  };

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative aspect-[3/4] group overflow-hidden bg-stone-200 cursor-pointer shadow-sm">
              {/* Image with Zoom Effect */}
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                loading="lazy"
                onError={handleImageError}
              />
              
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                  <span className="text-white font-serif tracking-[0.2em] text-xs md:text-sm border border-white/80 px-6 py-2 backdrop-blur-[2px]">
                    VIEW
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;