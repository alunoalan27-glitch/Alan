import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DEVELOPMENTS_DATA } from '../data/developments';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-base font-geometric">
                ZL
              </div>
              <div>
                <span className="text-base font-bold font-geometric text-white block">
                  Lançamentos Zona Leste SP
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  Mooca • Tatuapé • Vila Ema
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Curadoria de empreendimentos imobiliários de destaque em São Paulo. Projetos com arquitetura contemporânea, alto padrão construtivo e excelente localização.
            </p>
          </div>

          {/* Col 3: Empreendimentos e Links para Formulários */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Formulários Oficiais de Atendimento
            </h4>
            <ul className="space-y-2 text-xs">
              {DEVELOPMENTS_DATA.map((dev) => (
                <li key={dev.id}>
                  <a
                    href={dev.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`footer-form-${dev.id}`}
                    className="p-3 bg-gray-950 hover:bg-gray-900 border border-gray-800 flex items-center justify-between text-gray-300 hover:text-white transition-colors"
                  >
                    <div>
                      <span className="font-bold text-white uppercase tracking-wider block text-xs">{dev.neighborhood}</span>
                      <span className="text-[10px] text-gray-400">{dev.name}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#mooca" className="hover:text-white transition-colors">
                  Reserva Mooca
                </a>
              </li>
              <li>
                <a href="#tatuape" className="hover:text-white transition-colors">
                  Icon Tatuapé
                </a>
              </li>
              <li>
                <a href="#vila-ema" className="hover:text-white transition-colors">
                  Origem Vila Ema
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-white transition-colors">
                  Tabela Comparativa
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador Financeiro
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Regulatory Notes */}
        <div className="pt-8 border-t border-gray-900 text-[10px] text-gray-500 leading-relaxed space-y-3">
          <p>
            <strong>Aviso Legal & Imobiliário:</strong> As informações, imagens e plantas apresentadas nesta landing page possuem caráter meramente informativo e ilustrativo. Os acabamentos, equipamentos e plantas finais serão entregues conforme o Memorial Descritivo de cada empreendimento aprovado pelos órgãos competentes. A intermediação imobiliária é realizada por corretores e imobiliárias credenciadas junto ao CRECI-SP.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-gray-600">
            <span>© {new Date().getFullYear()} Lançamentos Imobiliários SP. Todos os direitos reservados.</span>
            <span className="uppercase tracking-wider">São Paulo / SP • Zona Leste</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
