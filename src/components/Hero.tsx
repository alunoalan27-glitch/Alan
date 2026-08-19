import React from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { DEVELOPMENTS_DATA } from '../data/developments';

interface HeroProps {
  onSelectDevelopment: (id: string) => void;
  onOpenFormModal: (formUrl: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectDevelopment, onOpenFormModal }) => {
  const getGeometricTag = (id: string) => {
    switch (id) {
      case 'mooca': return 'Tradição';
      case 'tatuape': return 'Vertical';
      case 'vila-ema': return 'Conexão';
      default: return 'Exclusivo';
    }
  };

  const getWatermarkLetter = (id: string) => {
    switch (id) {
      case 'mooca': return 'M';
      case 'tatuape': return 'T';
      case 'vila-ema': return 'E';
      default: return 'SP';
    }
  };

  return (
    <section className="bg-white text-[#111827] pt-20 border-b border-gray-100">
      {/* Top Banner Statement */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-2">
            Lançamentos Exclusivos 2024
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight font-geometric text-black leading-tight">
            Seu próximo endereço em <span className="font-medium italic">São Paulo</span>
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md font-normal leading-relaxed">
          Arquitetura autoral, metragens pensadas para o seu estilo de vida e o melhor custo-benefício da Zona Leste.
        </p>
      </div>

      {/* 3 Geometric Columns */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {DEVELOPMENTS_DATA.map((dev, idx) => {
            const watermark = getWatermarkLetter(dev.id);
            const geoTag = getGeometricTag(dev.id);
            const isLast = idx === DEVELOPMENTS_DATA.length - 1;

            return (
              <div
                key={dev.id}
                id={`hero-card-${dev.id}`}
                className={`flex flex-col justify-between group bg-white ${
                  !isLast ? 'md:border-r border-gray-100' : ''
                } border-b md:border-b-0 border-gray-100 hover:bg-gray-50/50 transition-colors`}
              >
                {/* Visual Header with Architectural Letter Watermark */}
                <div className="h-64 sm:h-72 bg-gray-100 relative overflow-hidden">
                  <img
                    src={dev.heroImage}
                    alt={dev.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  {/* Subtle dark tint */}
                  <div className="absolute inset-0 bg-[#111827]/30" />

                  {/* Architectural Geometric Letter Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center text-8xl sm:text-9xl font-black text-white/20 select-none pointer-events-none font-geometric">
                    {watermark}
                  </div>

                  {/* Corner Geometric Badge */}
                  <div className="absolute bottom-6 left-6 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black shadow-xs">
                    {geoTag}
                  </div>

                  {/* Top Status */}
                  <div className="absolute top-4 right-4 bg-black/90 text-white px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                    {dev.status}
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                        {dev.overview.areaRange}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-black">
                        {dev.overview.bedrooms}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black font-geometric mb-2">
                      {dev.neighborhood}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {dev.description}
                    </p>

                    {/* Minimal Specs */}
                    <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5">
                      <div className="text-[11px] text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black shrink-0" />
                        <span className="line-clamp-1">{dev.highlights[0]}</span>
                      </div>
                      <div className="text-[11px] text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black shrink-0" />
                        <span className="line-clamp-1">{dev.location.pointsOfInterest[0].title}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={dev.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`hero-form-btn-${dev.id}`}
                      className="w-full py-4 bg-black text-white text-center text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 block shadow-xs active:scale-99"
                    >
                      <span>Saiba Mais ({dev.neighborhood})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => onSelectDevelopment(dev.id)}
                      id={`hero-details-btn-${dev.id}`}
                      className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Ver Plantas & Lazer</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Geometric Trust Bar */}
      <div className="border-t border-gray-100 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border-r last:border-r-0 border-gray-200">
            <div className="text-xl sm:text-2xl font-bold font-geometric text-black">3 POLOS</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 font-bold">Zona Leste SP</div>
          </div>
          <div className="border-r last:border-r-0 border-gray-200">
            <div className="text-xl sm:text-2xl font-bold font-geometric text-black">36 A 220M²</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 font-bold">Studios a 4 Suítes</div>
          </div>
          <div className="border-r last:border-r-0 border-gray-200">
            <div className="text-xl sm:text-2xl font-bold font-geometric text-black">100% LAZER</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 font-bold">Áreas Equipadas</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-geometric text-black">DIRETO</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 font-bold">Com a Construtora</div>
          </div>
        </div>
      </div>
    </section>
  );
};
