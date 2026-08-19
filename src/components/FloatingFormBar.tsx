import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { DEVELOPMENTS_DATA } from '../data/developments';

export const FloatingFormBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      aria-label="Acesso rápido aos formulários de interesse"
      id="floating-cta-bar"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-black text-white border border-gray-800 p-4 shadow-xl"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white">
          Formulários Oficiais
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-gray-400 hover:text-white p-1 transition-colors"
          aria-label="Fechar aviso"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-[11px] text-gray-300 mb-3">
        Selecione a região para abrir o formulário correspondente:
      </p>

      <div className="grid grid-cols-3 gap-2">
        {DEVELOPMENTS_DATA.map((dev) => (
          <a
            key={dev.id}
            href={dev.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`floating-btn-${dev.id}`}
            className="p-2 bg-gray-900 hover:bg-white hover:text-black border border-gray-800 text-center transition-colors group"
          >
            <span className="text-[11px] font-bold block uppercase tracking-wider">{dev.neighborhood}</span>
            <span className="text-[9px] text-gray-400 group-hover:text-gray-700 block truncate">
              {dev.status}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
};
