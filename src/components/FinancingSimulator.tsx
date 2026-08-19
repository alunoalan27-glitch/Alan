import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { DEVELOPMENTS_DATA } from '../data/developments';

export const FinancingSimulator: React.FC = () => {
  const [selectedDevId, setSelectedDevId] = useState<string>('mooca');
  const [propertyPrice, setPropertyPrice] = useState<number>(650000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [constructionMonths, setConstructionMonths] = useState<number>(36);

  const selectedDev = DEVELOPMENTS_DATA.find((d) => d.id === selectedDevId) || DEVELOPMENTS_DATA[0];

  // Calculations
  const downPaymentTotal = (propertyPrice * downPaymentPercent) / 100;
  const initialEntry = downPaymentTotal * 0.3;
  const constructionInstallmentsTotal = downPaymentTotal * 0.7;
  const monthlyConstructionPayment = constructionInstallmentsTotal / constructionMonths;
  const remainingForBankFinancing = propertyPrice - downPaymentTotal;

  // Preset prices based on development
  const handleDevChange = (devId: string) => {
    setSelectedDevId(devId);
    if (devId === 'vila-ema') {
      setPropertyPrice(380000);
    } else if (devId === 'mooca') {
      setPropertyPrice(680000);
    } else if (devId === 'tatuape') {
      setPropertyPrice(1450000);
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 bg-gray-50/50 border-b border-gray-100 text-[#111827]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl mb-12">
          <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
            Planejamento Financeiro
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-geometric text-black tracking-tight">
            Simulador de Condições de Lançamento
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 font-normal">
            Entenda como funciona o fluxo facilitado de pagamento durante as obras até a entrega das chaves.
          </p>
        </div>

        <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6">
            {/* Step 1: Select Development */}
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                1. Escolha o Empreendimento
              </label>
              <div className="grid grid-cols-3 gap-2">
                {DEVELOPMENTS_DATA.map((dev) => (
                  <button
                    key={dev.id}
                    onClick={() => handleDevChange(dev.id)}
                    id={`sim-dev-btn-${dev.id}`}
                    className={`p-3 border text-center transition-all ${
                      selectedDevId === dev.id
                        ? 'border-black bg-black text-white font-bold'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs'
                    }`}
                  >
                    <span className="text-xs font-bold block uppercase tracking-wider">{dev.neighborhood}</span>
                    <span className={`text-[10px] block truncate ${selectedDevId === dev.id ? 'text-gray-300' : 'text-gray-500'}`}>
                      {dev.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Value Range */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                  2. Valor Estimado da Unidade
                </label>
                <span className="text-base font-bold text-black font-geometric">
                  {formatCurrency(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min={300000}
                max={3000000}
                step={20000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 appearance-none cursor-pointer accent-black"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">
                <span>R$ 300 mil</span>
                <span>R$ 1.5 mi</span>
                <span>R$ 3.0 mi</span>
              </div>
            </div>

            {/* Step 3: Down Payment during construction */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                  3. Entrada total durante as obras (%)
                </label>
                <span className="text-xs font-bold text-black font-geometric">
                  {downPaymentPercent}% ({formatCurrency(downPaymentTotal)})
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 appearance-none cursor-pointer accent-black"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">
                <span>15% (Mínimo)</span>
                <span>30% (Padrão)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Step 4: Construction Months */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                  4. Prazo do Fluxo de Obras
                </label>
                <span className="text-xs font-bold text-black font-geometric">
                  {constructionMonths} meses
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[24, 30, 36].map((months) => (
                  <button
                    key={months}
                    onClick={() => setConstructionMonths(months)}
                    className={`py-2 text-xs font-bold uppercase tracking-wider border transition-all ${
                      constructionMonths === months
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {months} Meses
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Breakdown Box (5 cols) */}
          <div className="lg:col-span-5 bg-black text-white p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">
                Resumo da Proposta Estimada
              </span>
              <h3 className="text-2xl font-bold font-geometric text-white mt-1">
                {selectedDev.name}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">{selectedDev.neighborhood} • {selectedDev.city}</p>
            </div>

            {/* Price Breakdown cards */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-gray-900 border border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Ato / Entrada Inicial</span>
                  <span className="text-[11px] text-gray-400">No fechamento do contrato</span>
                </div>
                <span className="text-base font-bold text-white font-geometric">
                  {formatCurrency(initialEntry)}
                </span>
              </div>

              <div className="p-3.5 bg-gray-900 border border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Mensais durante Obras</span>
                  <span className="text-[11px] text-gray-400">{constructionMonths} parcelas</span>
                </div>
                <span className="text-base font-bold text-white font-geometric">
                  {formatCurrency(monthlyConstructionPayment)}/mês
                </span>
              </div>

              <div className="p-3.5 bg-gray-900 border border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Saldo nas Chaves</span>
                  <span className="text-[11px] text-gray-400">Financiamento / Recursos</span>
                </div>
                <span className="text-base font-bold text-white font-geometric">
                  {formatCurrency(remainingForBankFinancing)}
                </span>
              </div>
            </div>

            <div className="text-[10px] text-gray-400 leading-relaxed pt-1">
              * Valores meramente exemplificativos para fins de simulação inicial. As condições exatas dependem da unidade e da política comercial.
            </div>

            {/* Direct Google Form CTA */}
            <div className="pt-2">
              <a
                href={selectedDev.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`sim-cta-submit-${selectedDev.id}`}
                className="w-full py-4 bg-white hover:bg-gray-100 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors text-center shadow-xs"
              >
                <span>Solicitar Proposta ({selectedDev.neighborhood})</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
