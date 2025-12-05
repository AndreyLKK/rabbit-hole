import React, { useState, useCallback } from 'react';
import { Sparkles, Loader2, Info, AlertCircle, Fingerprint, Ghost, Zap, Compass, Map, Radio } from 'lucide-react';
import { Button } from './components/Button';
import { PrizeReveal } from './components/PrizeReveal';
import { AppStatus, Prize } from './types';
import { CUTE_ANIMALS, INTERESTING_WEBSITES } from './constants';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>('IDLE');
  const [prize, setPrize] = useState<Prize | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  
  // History to track seen content and avoid repetitions
  const [history, setHistory] = useState<string[]>([]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyClick = async () => {
    setError(null);
    setIsConnecting(true);
    
    // --- BYPASS MODE ---
    // Simulating "Connection to the Matrix"
    setTimeout(() => {
        setIsConnecting(false);
        setStatus('VERIFYING');
        
        setTimeout(() => {
            handlePrizeReveal();
        }, 2000);
    }, 800);
  };

  const handlePrizeReveal = useCallback(() => {
    // Determine prize randomly from 2 categories
    const rand = Math.random();
    let collection: Prize[];
    
    // Weights:
    // 30% Cute Animals (Dopamine hit)
    // 70% Websites (The Rabbit Hole)
    if (rand < 0.30) {
      collection = CUTE_ANIMALS;
    } else {
      collection = INTERESTING_WEBSITES;
    }

    // Filter out prizes that are already in history
    let available = collection.filter(p => !history.includes(p.content));

    // If we've seen everything in this collection, reset/fallback to full collection
    if (available.length === 0) {
      available = collection;
    }

    const randomPrize = available[Math.floor(Math.random() * available.length)];
    
    setPrize(randomPrize);
    setHistory(prev => [...prev, randomPrize.content]);
    setStatus('REVEALED');
  }, [history]);

  const handleReset = () => {
    setStatus('IDLE');
    setPrize(null);
    setError(null);
    setIsConnecting(false);
  };

  return (
    <div className="min-h-screen relative bg-black text-white selection:bg-purple-500/50 overflow-hidden font-sans flex flex-col">
      
      {/* Cinematic Noise Texture (Hidden from screen readers) */}
      <div className="bg-noise" aria-hidden="true"></div>

      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      <header className="absolute top-0 left-0 w-full p-8 flex justify-center md:justify-between items-center z-50">
        <div className="flex items-center gap-2 font-black text-2xl tracking-widest opacity-80 hover:opacity-100 transition-opacity cursor-default select-none">
          <Ghost size={24} className="text-purple-500" aria-hidden="true" />
          RABBIT<span className="text-purple-500">HOLE</span>
        </div>
        <nav className="hidden md:block">
           <ul className="flex gap-6 text-xs uppercase tracking-widest text-slate-500 font-bold">
             <li 
               onClick={() => scrollToSection('start-point')} 
               className="hover:text-white transition-colors cursor-pointer"
             >
               Исследовать
             </li>
             <li 
               onClick={() => scrollToSection('about-section')} 
               className="hover:text-white transition-colors cursor-pointer"
             >
               О проекте
             </li>
           </ul>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto px-4 flex-grow flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* Status: IDLE */}
        {status === 'IDLE' && (
          <section id="start-point" className="text-center max-w-4xl animate-fade-in relative z-20 flex flex-col items-center w-full pt-20">
            
            <div className="mb-12 relative group cursor-pointer" onClick={handleBuyClick} role="button" aria-label="Начать путешествие">
              <div className="absolute inset-0 bg-purple-600 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <Fingerprint size={100} className="text-slate-200 relative z-10 animate-float opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={0.5} aria-hidden="true" />
            </div>
            
            {/* SEO OPTIMIZED H1: Using semantic markup but styling it creatively */}
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 text-glow">
              Rabbit Hole
              <span className="sr-only">: Генератор случайных сайтов и развлечений</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light tracking-widest text-purple-300 mb-8 normal-case font-mono opacity-80">
              Исследуй глубину интернета
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
              Интернет больше, чем кажется. Одна кнопка отделяет тебя от 
              <span className="text-purple-300 font-medium"> тайных координат</span>, 
              <span className="text-blue-300 font-medium"> странных экспериментов</span> и 
              цифровых артефактов.
            </p>

            {error && (
               <div className="mb-8 bg-red-900/20 border border-red-500/30 text-red-200 px-6 py-3 rounded-full text-sm backdrop-blur-md flex items-center gap-3" role="alert">
                 <AlertCircle size={16} />
                 {error}
               </div>
            )}

            <div className="relative z-50 group mb-20">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Button 
                onClick={handleBuyClick} 
                isLoading={isConnecting}
                className="relative text-xl px-16 py-6 bg-black border border-slate-800 text-white hover:bg-slate-900 transition-all uppercase tracking-widest font-bold w-full md:w-auto"
                aria-label="Нажать кнопку и открыть случайный сайт"
              >
                {!isConnecting && <Zap className="mr-3 text-purple-500" size={20} aria-hidden="true" />}
                {isConnecting ? "Инициализация..." : "Совершить прыжок"}
              </Button>
            </div>

            {/* Semantic Features List (Keyword Rich) */}
            <section id="about-section" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-left border-t border-slate-800 pt-12 pb-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-purple-400 font-bold uppercase tracking-wider text-xs">
                   <Compass size={16} />
                   <h3>Секретные места</h3>
                 </div>
                 <p className="text-slate-500 text-sm">Координаты Google Maps: кладбища самолетов, зоны отчуждения и геоглифы.</p>
               </div>
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-xs">
                   <Radio size={16} />
                   <h3>Live Камеры</h3>
                 </div>
                 <p className="text-slate-500 text-sm">Прямые эфиры с МКС, Таймс-сквер и дикой природы в 4K.</p>
               </div>
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-pink-400 font-bold uppercase tracking-wider text-xs">
                   <Sparkles size={16} />
                   <h3>Веб-Артефакты</h3>
                 </div>
                 <p className="text-slate-500 text-sm">Интерактивные симуляции, генераторы музыки и нейросетевые эксперименты.</p>
               </div>
            </section>

          </section>
        )}

        {/* Status: VERIFYING */}
        {status === 'VERIFYING' && (
          <div className="text-center animate-fade-in relative z-30 flex flex-col items-center justify-center" role="status">
            <div className="w-32 h-32 relative mx-auto mb-8">
              <div className="absolute inset-0 border-t-4 border-purple-500 rounded-full animate-spin"></div>
              <div className="absolute inset-4 border-b-4 border-blue-500 rounded-full animate-spin [animation-direction:reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <Ghost size={32} className="text-white opacity-50 animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-3 tracking-widest uppercase">Синхронизация</h2>
            <p className="text-slate-500 font-mono text-sm animate-pulse">Поиск стабильного канала связи...</p>
          </div>
        )}

        {/* Status: REVEALED */}
        {status === 'REVEALED' && prize && (
          <div className="relative z-30 w-full max-w-3xl animate-in fade-in zoom-in duration-500">
            <PrizeReveal prize={prize} onReset={handleReset} />
          </div>
        )}

      </main>

      <footer className="relative z-10 w-full py-8 text-center border-t border-slate-900 mt-auto bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-slate-600 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Rabbit Hole Project. All rights reserved.</p>
          <ul className="flex gap-4">
             <li className="hover:text-purple-400 cursor-pointer transition-colors">Privacy</li>
             <li className="hover:text-purple-400 cursor-pointer transition-colors">Terms</li>
             <li className="hover:text-purple-400 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;