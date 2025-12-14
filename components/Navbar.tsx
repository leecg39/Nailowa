import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navClass = `fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
    isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm text-stone-900' : 'bg-transparent py-6 text-stone-800'
  }`;

  // Mapping for Korean display names
  const menuItems = [
    { id: NavLink.ABOUT, label: '브랜드 소개' },
    { id: NavLink.SERVICES, label: '시술 안내' },
    { id: NavLink.GALLERY, label: '갤러리' },
    { id: NavLink.PRICE, label: '가격 안내' },
    { id: NavLink.AI_STUDIO, label: 'AI 디자인' },
    { id: NavLink.CONTACT, label: '오시는 길' },
  ];

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl md:text-3xl font-serif tracking-widest cursor-pointer font-bold"
          onClick={() => scrollToSection(NavLink.HOME)}
        >
          NAILOWA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm tracking-widest font-sans font-medium">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-stone-500 transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-1 left-0 w-0 h-px bg-stone-800 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl focus:outline-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 py-6 px-6 flex flex-col space-y-4 shadow-lg animate-fade-in z-50">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-sm tracking-widest font-bold text-stone-800 py-3 border-b border-stone-100 last:border-0 hover:bg-stone-50 px-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;