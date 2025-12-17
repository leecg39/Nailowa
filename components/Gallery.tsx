import React, { useState } from 'react';
import { NavLink, GalleryImage } from '../types';

const categories = [
  { id: 'ALL', label: '전체' },
  { id: 'SIMPLE', label: '심플' },
  { id: 'FANCY', label: '화려함' },
  { id: 'WEDDING', label: '웨딩' },
  { id: 'PEDI', label: '페디' }
];

// Individual Gallery Item Component
const GalleryItem: React.FC<{ item: GalleryImage }> = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x800/e7e5e4/78716c?text=Gallery+Item";
    setIsLoaded(true);
  };

  return (
    <div className="relative aspect-[3/4] group overflow-hidden bg-stone-100 cursor-pointer">
      {/* Lighter Placeholder: Subtle pulse instead of complex shimmer/spinner */}
      <div 
        className={`absolute inset-0 z-10 bg-stone-100 flex items-center justify-center transition-opacity duration-500 ease-out pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      >
        <div className="w-full h-full bg-stone-200/50 animate-pulse" />
      </div>

      {/* Image with refined Blur-up effect */}
      <img 
        src={item.src} 
        alt={item.alt} 
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 transform ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-110'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
      />
      
      {/* Minimalist Overlay */}
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 flex items-center justify-center z-20">
        <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
          <span className="text-white font-serif tracking-[0.15em] text-xs border border-white/60 px-5 py-2 backdrop-blur-[1px]">
            VIEW
          </span>
        </div>
      </div>
    </div>
  );
};

interface GalleryProps {
  items: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredItems = activeCategory === 'ALL' 
    ? items 
    : items.filter(item => item.category === activeCategory);

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

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-stone-50 text-stone-400 font-light">
            해당 카테고리의 이미지가 없습니다.
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;