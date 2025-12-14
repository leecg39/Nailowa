import React, { useState } from 'react';
import { NavLink } from '../types';
import { generateNailArtDesign } from '../services/geminiService';

const AiNailStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');
    setGeneratedImage(null);

    try {
      const result = await generateNailArtDesign(prompt);
      if (result) {
        setGeneratedImage(result);
      } else {
        setError('이미지를 생성하지 못했습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      setError('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={NavLink.AI_STUDIO} className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stone-800 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
            <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase block mb-4">
              Powered by Google Gemini
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Design Your <br/> <span className="text-stone-400 italic">Dream Nails</span>
            </h2>
            <p className="text-stone-300 font-light mb-8 leading-relaxed break-keep">
              NAILOWA AI Studio를 통해 당신만의 유니크한 네일 디자인을 상상해보세요. 
              원하는 스타일, 컬러, 분위기를 입력하면 AI 모델이 시안을 제안해드립니다.
              생성된 이미지를 저장해 예약 시 보여주세요.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Design Prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="예: 핑크빛 벚꽃 패턴, 골드 글리터가 들어간 우아한 웨딩 네일, 여름 바다 느낌의 시원한 블루 페디큐어..."
                  className="w-full bg-stone-800 border border-stone-700 p-4 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors h-32 resize-none rounded-sm text-sm"
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt.trim()}
                className={`w-full py-4 uppercase tracking-widest text-sm font-bold transition-all ${
                  loading 
                    ? 'bg-stone-700 cursor-wait text-stone-400' 
                    : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                }`}
              >
                {loading ? '디자인 생성 중...' : '디자인 생성하기 (GENERATE)'}
              </button>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-md bg-stone-800 border border-stone-700 flex items-center justify-center overflow-hidden rounded-sm shadow-2xl">
              {generatedImage ? (
                <img src={generatedImage} alt="AI Generated Nail Art" className="w-full h-full object-cover animate-fade-in" />
              ) : loading ? (
                 <div className="text-center">
                   <div className="w-12 h-12 border-2 border-stone-600 border-t-stone-200 rounded-full animate-spin mx-auto mb-4"></div>
                   <p className="text-stone-500 text-sm tracking-widest animate-pulse">CREATING ART...</p>
                 </div>
              ) : (
                <div className="text-center p-8">
                  <span className="text-5xl text-stone-700 mb-4 block font-serif">Ai</span>
                  <p className="text-stone-500 text-sm tracking-widest">NO IMAGE GENERATED YET</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiNailStudio;