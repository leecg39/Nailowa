import React, { useState } from 'react';
import { NavLink, GalleryImage } from '../types';

const categories = [
  { id: 'ALL', label: '전체' },
  { id: 'SIMPLE', label: '심플' },
  { id: 'FANCY', label: '화려함' },
  { id: 'WEDDING', label: '웨딩' },
  { id: 'PEDI', label: '페디' }
];

// Individual Gallery Item Component to handle loading state
const GalleryItem = ({ item }: { item: GalleryImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x800/e7e5e4/78716c?text=Gallery+Item";
    setIsLoaded(true);
  };

  return (
    <div className="relative aspect-[3/4] group overflow-hidden bg-stone-100 cursor-pointer shadow-sm">
      {/* Sophisticated Loading Placeholder */}
      <div 
        className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`} 
      >
        {/* Warm Shimmer Gradient */}
        <div 
           className="absolute inset-0 w-full h-full bg-gradient-to-r from-stone-100 via-[#e7e5e4] to-stone-100 animate-shimmer"
           style={{ backgroundSize: '200% 100%' }}
        />
        
        {/* Subtle Minimalist Spinner */}
        <div className="relative z-10 text-stone-400/40">
           <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
           </svg>
        </div>
      </div>

      {/* Image with Enhanced Blur-up & Scale Effect */}
      <img 
        src={item.src} 
        alt={item.alt} 
        className={`w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 transform ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-2xl scale-110'
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