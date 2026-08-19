import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { FAQ_ITEMS, DEVELOPMENTS_DATA } from '../data/developments';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50/50 border-b border-gray-100 text-[#111827]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-12">
          <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-geometric text-black tracking-tight">
            Tire Suas Dúvidas
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 font-normal">
            Informações sobre o processo de compra na planta, fluxo de financiamento e agendamentos.
          </p>
        </div>

        {/* Geometric Accordion List */}
        <div className="border-t border-gray-200 divide-y divide-gray-200">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white transition-colors">
                <button
                  onClick={() => toggleAccordion(idx)}
                  id={`faq-toggle-${idx}`}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-black text-sm sm:text-base hover:bg-gray-50/60 transition-colors"
                >
                  <span className="font-geometric">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-black shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Access Quick Box */}
        <div className="mt-12 p-8 bg-white border border-gray-200 text-center shadow-xs">
          <h4 className="text-lg font-bold text-black font-geometric">
            Pronto para dar o próximo passo?
          </h4>
          <p className="text-xs text-gray-600 mt-1 max-w-md mx-auto">
            Acesse o formulário oficial do empreendimento de seu interesse para receber atendimento personalizado com a equipe de vendas:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {DEVELOPMENTS_DATA.map((dev) => (
              <a
                key={dev.id}
                href={dev.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`faq-cta-${dev.id}`}
                className="px-5 py-3 bg-black hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Formulário {dev.neighborhood}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
