import React from 'react';
import { NavLink } from '../types';

const services = [
  {
    title: "시그니처 젤 아트",
    eng: "Signature Gel Art",
    desc: "매달 트렌드를 반영한 '이달의 아트' 및 고객 맞춤형 커스텀 디자인 시술",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "프리미엄 케어",
    eng: "Premium Care",
    desc: "손상된 손톱 복구 및 큐티클 정리를 위한 영양 집중 케어 프로그램",
    img: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "스파 페디큐어",
    eng: "Spa Pedicure",
    desc: "위생적인 풋 스파 시스템과 각질 관리를 포함한 릴랙싱 페디큐어",
    img: "https://images.unsplash.com/photo-1519017712384-1d53f6032774?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "웨딩 & 이벤트",
    eng: "Wedding & Event",
    desc: "웨딩 촬영 및 본식, 휴가 등 특별한 날을 위한 스페셜 디자인 패키지",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "젤 연장",
    eng: "Gel Extension",
    desc: "짧은 손톱을 원하는 길이와 쉐입으로 연장하는 프리미엄 스컬프쳐",
    img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "드릴 케어",
    eng: "Drill Care",
    desc: "전용 드릴 머신을 사용하여 굳은살과 큐티클을 자극 없이 깔끔하게 제거",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "맨즈 케어",
    eng: "Men's Care",
    desc: "남성을 위한 깔끔한 손/발톱 정리 및 각질 관리 프로그램",
    img: "https://images.unsplash.com/photo-1613431818276-80f089163a3d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "문제성 발톱",
    eng: "Ingrown Toenail",
    desc: "파고드는 발톱, 무좀 발톱 등을 전문적인 기술로 교정 및 관리",
    img: "https://images.unsplash.com/photo-1519415510236-718bdfcd4788?q=80&w=800&auto=format&fit=crop"
  }
];

const Services: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x800/e7e5e4/78716c?text=Service+Image";
  };

  return (
    <section id={NavLink.SERVICES} className="py-32 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-6 text-stone-900">NAILOWA SERVICES</h2>
          <div className="w-10 h-px bg-stone-300 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {services.map((svc, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-8 aspect-[4/5] relative shadow-md bg-stone-200">
                <img 
                  src={svc.img} 
                  alt={svc.eng} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-1 group-hover:text-stone-500 transition-colors text-center">
                {svc.title}
              </h3>
              <p className="text-xs text-stone-400 uppercase tracking-widest text-center mb-4 font-serif">{svc.eng}</p>
              <p className="text-sm text-stone-500 font-light leading-relaxed text-center px-2 break-keep">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;