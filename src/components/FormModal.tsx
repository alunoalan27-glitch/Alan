import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { DEVELOPMENTS_DATA } from '../data/developments';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
  title: string;
}

export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  formUrl,
  title
}) => {
  if (!isOpen) return null;

  const currentDev = DEVELOPMENTS_DATA.find((d) => d.formUrl === formUrl) || DEVELOPMENTS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-black p-8 text-[#111827] shadow-2xl">
        <button
          onClick={onClose}
          id="close-form-modal"
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-black text-white">
            Formulário Oficial
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            {currentDev.neighborhood}
          </span>
        </div>

        <h3 className="text-2xl font-bold font-geometric text-black mb-2">
          {title || currentDev.name}
        </h3>

        <p className="text-xs text-gray-600 mb-6 leading-relaxed">
          Para garantir atendimento prioritário e envio imediato do book completo de plantas e tabela de preços de lançamento, acesse o formulário oficial:
        </p>

        {/* Action card */}
        <div className="p-6 bg-gray-50 border border-gray-200 space-y-4 mb-6">
          <div className="text-xs text-gray-600 space-y-1">
            <p className="font-bold text-black uppercase tracking-wider text-[10px]">Atendimento Direto & Seguro</p>
            <p>O formulário é hospedado com segurança pelo Google Forms e direcionado diretamente para a equipe oficial de vendas.</p>
          </div>

          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="modal-open-external-btn"
            className="w-full py-3.5 px-6 bg-black hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <span>Abrir Formulário do Google ({currentDev.neighborhood})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Quick links to other 2 developments */}
        <div className="border-t border-gray-100 pt-4">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2 font-bold">
            Ou acesse o formulário de outra região:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {DEVELOPMENTS_DATA.filter((d) => d.formUrl !== formUrl).map((otherDev) => (
              <a
                key={otherDev.id}
                href={otherDev.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs text-black flex items-center justify-between transition-colors"
              >
                <span className="font-bold uppercase tracking-wider text-[11px]">{otherDev.neighborhood}</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
