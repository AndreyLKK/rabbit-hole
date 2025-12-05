import React, { useEffect, useState } from 'react';
import { Prize, PrizeType } from '../types';
import { RotateCcw, Globe, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface PrizeRevealProps {
  prize: Prize;
  onReset: () => void;
}

export const PrizeReveal: React.FC<PrizeRevealProps> = ({ prize, onReset }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
      <div className="glass-panel rounded-3xl p-8 max-w-lg mx-auto text-center border-t border-purple-500 shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)]">
        
        <div className="mb-6 flex justify-center">
          <div className={`w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center shadow-lg animate-bounce ${
            prize.type === PrizeType.CUTE_ANIMAL ? 'from-pink-400 to-rose-500' : 'from-blue-400 to-indigo-500'
          }`}>
            {prize.type === PrizeType.WEBSITE_LINK ? (
              <Globe size={40} className="text-white" />
            ) : (
              <Heart size={40} className="text-white" />
            )}
          </div>
        </div>

        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-2">
          {prize.type === PrizeType.CUTE_ANIMAL ? "МИЛОТА!" : "ОТКРЫТИЕ!"}
        </h2>
        <p className="text-purple-300 mb-8 uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-2">
           <Sparkles size={14} />
          {prize.type === PrizeType.CUTE_ANIMAL && 'Вы получили порцию дофамина'}
          {prize.type === PrizeType.WEBSITE_LINK && 'Вы нашли секретный уголок интернета'}
           <Sparkles size={14} />
        </p>

        <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-700 mb-8 relative group overflow-hidden">
          {/* Shine effect */}
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
          
          <h3 className="text-lg font-medium text-white mb-4">{prize.label}</h3>
          
          {prize.type === PrizeType.WEBSITE_LINK && (
            <a 
              href={prize.content}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-4 rounded-lg font-bold text-lg text-blue-400 border border-blue-500/30 flex items-center justify-center gap-3 cursor-pointer hover:bg-slate-800/80 hover:text-blue-300 transition-colors"
            >
              Перейти на сайт <ExternalLink size={20} />
            </a>
          )}

          {prize.type === PrizeType.CUTE_ANIMAL && (
            <div className="rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
              <img src={prize.content} alt={prize.label} className="w-full h-auto object-cover max-h-64 hover:scale-105 transition-transform duration-700" />
            </div>
          )}
        </div>

        <Button onClick={onReset} variant="secondary" className="w-full">
          <RotateCcw size={18} />
          Испытать удачу снова
        </Button>
      </div>
    </div>
  );
};