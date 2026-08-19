import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DEVELOPMENTS_DATA } from '../data/developments';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparativo" className="py-20 bg-white text-[#111827] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl mb-12">
          <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
            Guia Comparativo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-geometric text-black tracking-tight">
            Compare os 3 Empreendimentos
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 font-normal">
            Encontre a opção ideal para o seu momento de vida, seja para morar com a família, desfrutar de altíssimo padrão ou investir com rentabilidade.
          </p>
        </div>

        {/* Geometric Comparison Table */}
        <div className="overflow-x-auto border border-gray-200 shadow-xs">
          <table className="w-full min-w-[700px] text-left border-collapse bg-white">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-4 text-[10px] uppercase font-bold tracking-widest text-gray-500 w-1/4">
                  Especificações
                </th>
                {DEVELOPMENTS_DATA.map((dev) => (
                  <th key={dev.id} className="p-4 w-1/4 align-top border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block">
                        {dev.neighborhood}
                      </span>
                      <h4 className="text-base font-bold font-geometric text-black">
                        {dev.name}
                      </h4>
                      <span className="inline-block text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest bg-black text-white">
                        {dev.status}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
              {/* Metragens */}
              <tr className="hover:bg-gray-50/60 transition-colors">
                <td className="p-4 font-bold text-gray-700 text-[11px] uppercase tracking-wider bg-gray-50/40">
                  Metragens
                </td>
                <td className="p-4 font-bold text-black border-l border-gray-200">
                  58m² a 89m² (Duplex 132m²)
                </td>
                <td className="p-4 font-bold text-black border-l border-gray-200">
                  115m² a 168m² (Penthouse 220m²)
                </td>
                <td className="p-4 font-bold text-black border-l border-gray-200">
                  36m² a 64m² (Studios e 2 Dorms)
                </td>
              </tr>

              {/* Dormitórios & Suítes */}
              <tr className="hover:bg-gray-50/60 transition-colors">
                <td className="p-4 font-bold text-gray-700 text-[11px] uppercase tracking-wider bg-gray-50/40">
                  Dormitórios / Suítes
                </td>
                <td className="p-4 text-gray-700 border-l border-gray-200">
                  2 e 3 Dorms (1 ou 2 Suítes)
                </td>
                <td className="p-4 text-gray-700 border-l border-gray-200">
                  3 e 4 Suítes Plenas
                </td>
                <td className="p-4 text-gray-700 border-l border-gray-200">
                  Studio e 2 Dorms (1 Suíte)
                </td>
              </tr>

              {/* Vagas */}
              <tr className="hover:bg-gray-50/60 transition-colors">
                <td className="p-4 font-bold text-gray-700 text-[11px] uppercase tracking-wider bg-gray-50/40">
                  Vagas de Garagem
                </td>
                <td className="p-4 text-gray-700 border-l border-gray-200">
                  1 a 2 Vagas Cobertas + Depósito
                </td>
                <td className="p-4 text-gray-700 border-l border-gray-200">
                  2 a 4 Vagas Determinadas + Depósito
                </td>
                <td className="p-4 text-gray-700 border-l border-gray-200">
                  Opção de Vaga Coberta + Bicicletário
                </td>
              </tr>

              {/* Perfil Ideal */}
              <tr className="hover:bg-gray-50/60 transition-colors">
                <td className="p-4 font-bold text-gray-700 text-[11px] uppercase tracking-wider bg-gray-50/40">
                  Perfil Ideal
                </td>
                <td className="p-4 text-gray-600 text-xs leading-relaxed border-l border-gray-200">
                  Famílias que apreciam o charme, gastronomia e tradição da Mooca com lazer completo.
                </td>
                <td className="p-4 text-gray-600 text-xs leading-relaxed border-l border-gray-200">
                  Público de alto padrão que busca privacidade, quadra de tênis de saibro e hall privativo.
                </td>
                <td className="p-4 text-gray-600 text-xs leading-relaxed border-l border-gray-200">
                  Jovens casais, solteiros e investidores focados em mobilidade a 300m do metrô.
                </td>
              </tr>

              {/* Mobilidade & Metrô */}
              <tr className="hover:bg-gray-50/60 transition-colors">
                <td className="p-4 font-bold text-gray-700 text-[11px] uppercase tracking-wider bg-gray-50/40">
                  Metrô / Acesso
                </td>
                <td className="p-4 text-gray-700 text-xs border-l border-gray-200">
                  Metrô Juventus-Mooca (5 min)
                </td>
                <td className="p-4 text-gray-700 text-xs border-l border-gray-200">
                  Próximo Shopping Anália Franco & CERET
                </td>
                <td className="p-4 text-gray-700 text-xs border-l border-gray-200">
                  Estação São Lucas a 300m (Linha 15 / Verde)
                </td>
              </tr>

              {/* Lazer de Destaque */}
              <tr className="hover:bg-gray-50/60 transition-colors">
                <td className="p-4 font-bold text-gray-700 text-[11px] uppercase tracking-wider bg-gray-50/40">
                  Lazer de Destaque
                </td>
                <td className="p-4 text-gray-700 text-xs border-l border-gray-200">
                  Piscina com raia 25m, Rooftop e Pizza Bar
                </td>
                <td className="p-4 text-gray-700 text-xs border-l border-gray-200">
                  Quadra de Tênis de Saibro, Wine Cave e Spa
                </td>
                <td className="p-4 text-gray-700 text-xs border-l border-gray-200">
                  Sky Pool no 20º andar, OMO e Minimarket
                </td>
              </tr>

              {/* Ação / Links Oficiais */}
              <tr className="bg-gray-50/50">
                <td className="p-4 font-bold text-gray-700 text-[11px] uppercase tracking-wider bg-gray-50">
                  Formulário Oficial
                </td>
                {DEVELOPMENTS_DATA.map((dev) => (
                  <td key={dev.id} className="p-4 border-l border-gray-200">
                    <a
                      href={dev.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`compare-btn-${dev.id}`}
                      className="w-full py-3 px-3 bg-black hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors text-center shadow-xs"
                    >
                      <span>Formulário {dev.neighborhood}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
