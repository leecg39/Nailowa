import React from 'react';
import { NavLink } from '../types';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/800x1000/e7e5e4/78716c?text=NAILOWA+Image";
  };

  return (
    <section id={NavLink.ABOUT} className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-12 grid-rows-6 gap-4 h-[500px] md:h-[600px]">
            {/* Main Interior Shot */}
            <div className="col-span-8 row-span-6 overflow-hidden relative bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
            {/* Detail Shot */}
            <div className="col-span-4 row-start-2 row-span-4 overflow-hidden relative shadow-xl -ml-8 lg:-ml-12 z-10 border-8 border-white bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" 
                alt="Nail Art Detail" 
                className="w-full h-full object-cover"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <span className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Brand Story</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-stone-900 leading-tight break-keep">
              프라이빗하고 편안한,<br/> <span className="italic text-stone-600">감각적인 공간</span>
            </h2>
            
            <p className="text-stone-600 mb-10 leading-loose font-light border-l-2 border-stone-200 pl-6 break-keep">
              NAILOWA는 100% 예약제로 운영되는 프라이빗한 시술 공간을 제공합니다. 
              단순히 손톱을 관리하는 것을 넘어, 온전한 휴식과 나만의 아름다움을 발견하는 시간을 선사합니다.
            </p>

            <ul className="space-y-8">
              {[
                { title: "Perfect Hygiene", sub: "철저한 위생 관리", desc: "모든 시술 도구 1인 1회 사용 원칙 (일회용 키트 사용) 및 병원급 멸균 시스템을 가동합니다." },
                { title: "Professional Artists", sub: "전문 아티스트 시술", desc: "국가 자격증을 보유한 5년 이상 경력의 전문 아티스트가 섬세하게 시술합니다." },
                { title: "Eco-Friendly Products", sub: "친환경 프리미엄 제품", desc: "임산부도 사용 가능한 무독성 친환경 비건 젤 제품만을 엄선하여 사용합니다." }
              ].map((item, idx) => (
                <li key={idx} className="flex flex-col group">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xl font-serif italic text-stone-800 group-hover:text-stone-500 transition-colors">{item.title}</span>
                    <span className="text-xs font-bold text-stone-500 tracking-wider uppercase">{item.sub}</span>
                  </div>
                  <span className="text-sm text-stone-500 font-light leading-relaxed break-keep">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;