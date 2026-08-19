import React from 'react';
import { Check } from 'lucide-react';
import { NEIGHBORHOOD_COMPARISONS } from '../data/developments';

export const NeighborhoodGuide: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100 text-[#111827]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl mb-12">
          <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
            Localização & Região
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-geometric text-black tracking-tight">
            Por que Escolher a Zona Leste de São Paulo?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 font-normal">
            A união de qualidade de vida, bairros tradicionais e cosmopolitas, gastronomia renomada e expansão da mobilidade urbana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEIGHBORHOOD_COMPARISONS.map((item, idx) => {
            return (
              <div
                key={idx}
                className="p-8 border border-gray-200 bg-white flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-black text-white">
                      {item.neighborhood}
                    </span>
                    <span className="text-xs text-gray-400 font-bold font-geometric">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold font-geometric text-black mb-3">
                    {item.leadTitle}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="p-4 bg-gray-50 border border-gray-100 mb-6">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-gray-500 block mb-1">
                      Perfil Ideal:
                    </span>
                    <p className="text-xs font-semibold text-black">
                      {item.idealFor}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
