import React from 'react';
import { NavLink } from '../types';

const Price: React.FC = () => {
  return (
    <section id={NavLink.PRICE} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900">Price List</h2>
          <p className="text-stone-500 font-light mt-4">투명하고 합리적인 정찰제 운영</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Care & Color */}
          <div>
            <h3 className="text-xl font-bold font-serif border-b border-stone-200 pb-4 mb-6 text-stone-800">Care & Color</h3>
            <ul className="space-y-6">
              {[
                { name: "손 기본 케어 (Basic)", price: "30,000" },
                { name: "발 기본 케어 (Basic)", price: "40,000" },
                { name: "젤 기본 (One Color)", price: "50,000" },
                { name: "젤 프렌치 / 그라데이션", price: "60,000" },
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-baseline group">
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors font-light">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-stone-300 mx-4"></div>
                  <span className="text-stone-800 font-sans font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Art & Special */}
          <div>
            <h3 className="text-xl font-bold font-serif border-b border-stone-200 pb-4 mb-6 text-stone-800">Art & Special</h3>
            <ul className="space-y-6">
              {[
                { name: "이달의 아트 (Monthly Art)", price: "79,000 ~" },
                { name: "커스텀 디자인 (Custom)", price: "상담 후 결정" },
                { name: "웨딩 풀 패키지 (Wedding)", price: "150,000" },
                { name: "프리미엄 스파 페디", price: "80,000" },
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-baseline group">
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors font-light">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-stone-300 mx-4"></div>
                  <span className="text-stone-800 font-sans font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-stone-50 p-8 text-center border border-stone-100">
          <h4 className="font-serif text-lg mb-2 text-stone-800 font-bold">Membership</h4>
          <p className="text-stone-500 font-light text-sm leading-relaxed">
            멤버십 가입 시 모든 시술 10% 할인 및 젤 제거비 무료 혜택을 드립니다.<br/>
            (20만원 / 30만원 / 50만원 권)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Price;