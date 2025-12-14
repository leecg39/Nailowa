import React from 'react';
import { NavLink } from '../types';

interface ContactProps {
  onAdminClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onAdminClick }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/800x400/e7e5e4/78716c?text=Location+Map";
  };

  return (
    <footer id={NavLink.CONTACT} className="bg-stone-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          
          <div className="lg:w-1/3">
            <div className="text-3xl font-serif tracking-widest mb-6 font-bold">NAILOWA</div>
            <p className="text-stone-500 mb-6 font-light leading-relaxed break-keep">
              NAILOWA는 당신만의 스타일을 완성하는 프리미엄 네일 살롱입니다. 
              최고의 기술과 엄선된 제품으로 품격 있는 아름다움을 약속드립니다.
            </p>
            <div className="space-y-2">
              <p className="text-stone-800 uppercase tracking-widest text-xs font-bold">Inquiries</p>
              <p className="text-stone-600 font-light">email@nailowa.com</p>
              <p className="text-stone-600 font-light">010-XXXX-XXXX</p>
            </div>
          </div>

          <div className="lg:w-1/3">
            <h4 className="text-lg font-serif mb-6 font-bold">Hours & Location</h4>
            <div className="flex gap-8 text-sm text-stone-600 font-light mb-8">
              <div>
                <span className="block font-bold text-stone-800 uppercase text-xs mb-1">평일 (Mon-Fri)</span>
                11:00 AM - 09:00 PM
              </div>
              <div>
                <span className="block font-bold text-stone-800 uppercase text-xs mb-1">주말 (Weekend)</span>
                10:00 AM - 07:00 PM
              </div>
            </div>
            <div className="w-full h-48 bg-stone-200 flex items-center justify-center relative group overflow-hidden cursor-pointer">
              {/* Map Placeholder Image from Unsplash */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                alt="Map Location" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity"
                loading="lazy"
                onError={handleImageError}
              />
              <span className="absolute bg-white px-4 py-2 text-xs uppercase tracking-widest shadow-sm">View on Map (지도 보기)</span>
            </div>
          </div>

          <div className="lg:w-1/3">
             <h4 className="text-lg font-serif mb-6 font-bold">Reservation</h4>
             <p className="text-stone-500 font-light mb-6 break-keep">
               100% 예약제로 운영됩니다. 방문 전 네이버 예약 또는 카카오톡으로 문의 부탁드립니다.
             </p>
             <button className="w-full py-4 bg-green-500 text-white font-bold text-sm tracking-widest hover:bg-green-600 transition-colors mb-4 shadow-sm">
               네이버 예약 바로가기
             </button>
             <button className="w-full py-4 bg-yellow-300 text-stone-900 font-bold text-sm tracking-widest hover:bg-yellow-400 transition-colors shadow-sm">
               카카오톡 상담하기
             </button>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 font-light">
          <p>&copy; 2024 NAILOWA. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0 uppercase tracking-wider">
            <span className="cursor-pointer hover:text-stone-600">Instagram</span>
            <span className="cursor-pointer hover:text-stone-600">Privacy Policy</span>
            <button onClick={onAdminClick} className="cursor-pointer hover:text-stone-900 font-bold text-stone-300 ml-4">
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;