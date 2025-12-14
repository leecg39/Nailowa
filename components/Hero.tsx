import React from 'react';
import { NavLink } from '../types';

const Hero: React.FC = () => {
  // Fallback image in case the main image fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/1920x1080/e7e5e4/78716c?text=NAILOWA+Premium+Salon";
  };

  return (
    <section id={NavLink.HOME} className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-stone-300">
        <img 
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" 
          alt="Elegant Nail Art Background" 
          className="w-full h-full object-cover"
          onError={handleImageError}
          // Removed loading="lazy" for the LCP (Largest Contentful Paint) element
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-stone-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in-up">
        <p className="text-xs md:text-sm font-sans uppercase tracking-[0.4em] mb-6 text-white/90">
          Premium Nail Salon
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-sm">
          Art at Your <br/> <span className="italic font-light">Fingertips</span>
        </h1>
        <div className="w-16 h-px bg-white/60 mx-auto mb-10"></div>
        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed font-serif tracking-wide break-keep">
          "당신의 손끝에 피어나는 예술, NAILOWA" <br/>
          <span className="text-sm md:text-base opacity-80 mt-4 block font-sans">
            1:1 맞춤형 디자인 & 프라이빗 프리미엄 케어
          </span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById(NavLink.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
            className="w-48 py-4 bg-white text-stone-900 font-sans text-sm font-bold tracking-[0.1em] hover:bg-stone-100 transition-all shadow-lg"
          >
            예약 문의
          </button>
          <button 
            onClick={() => document.getElementById(NavLink.GALLERY)?.scrollIntoView({behavior: 'smooth'})}
            className="w-48 py-4 border border-white text-white font-sans text-sm font-bold tracking-[0.1em] hover:bg-white hover:text-stone-900 transition-all backdrop-blur-sm"
          >
            포트폴리오
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;