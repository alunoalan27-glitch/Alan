import React, { useState } from 'react';
import {
  MapPin,
  ExternalLink,
  Waves,
  Dumbbell,
  Sparkles,
  Check,
  UtensilsCrossed,
  Briefcase,
  HeartHandshake,
  Smile,
  Trophy,
  Sun,
  Wine,
  Package,
  Sparkle,
  ShoppingBag,
  Mic,
  Flame,
  Bike,
  Share2
} from 'lucide-react';
import { Development } from '../types';

interface DevelopmentSectionProps {
  development: Development;
  onOpenFormModal: (formUrl: string, title: string) => void;
  index: number;
}

export const DevelopmentSection: React.FC<DevelopmentSectionProps> = ({
  development,
  onOpenFormModal,
  index
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeFloorPlanId, setActiveFloorPlanId] = useState(development.floorPlans[0]?.id || '');
  const [copiedLink, setCopiedLink] = useState(false);

  const activeFloorPlan = development.floorPlans.find((p) => p.id === activeFloorPlanId) || development.floorPlans[0];

  const handleShare = () => {
    const text = `Confira o lançamento ${development.name} na ${development.neighborhood}! Cadastre-se no formulário oficial: ${development.formUrl}`;
    if (navigator.share) {
      navigator.share({
        title: development.name,
        text: text,
        url: development.formUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(development.formUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const getAmenityIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 shrink-0 text-black" };
    switch (iconName) {
      case 'Waves': return <Waves {...props} />;
      case 'Dumbbell': return <Dumbbell {...props} />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Trophy': return <Trophy {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Wine': return <Wine {...props} />;
      case 'Package': return <Package {...props} />;
      case 'Sparkle': return <Sparkle {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Mic': return <Mic {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Bike': return <Bike {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section
      id={development.id}
      className={`py-16 sm:py-24 border-b border-gray-100 ${index % 2 === 1 ? 'bg-white' : 'bg-gray-50/40'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header with Geometric Balance */}
        <div className="mb-10 pb-6 border-b border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                {development.status}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-black" />
                {development.neighborhood} • {development.city}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                id={`share-btn-${development.id}`}
                className="px-3.5 py-2 border border-gray-200 bg-white hover:bg-gray-100 text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1.5 transition-colors"
                title="Compartilhar empreendimento"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Compartilhar</span>
                  </>
                )}
              </button>

              <a
                href={development.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`top-form-link-${development.id}`}
                className="px-4 py-2 bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
              >
                <span>Acessar Formulário</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-geometric text-black tracking-tight">
            {development.name}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-3xl font-normal">
            {development.tagline}
          </p>
        </div>

        {/* Visual Gallery and Main Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Gallery Viewer (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative h-80 sm:h-[420px] bg-gray-900 border border-gray-200 overflow-hidden group">
              <img
                src={development.galleryImages[selectedImageIndex]?.url || development.heroImage}
                alt={development.galleryImages[selectedImageIndex]?.caption || development.name}
                className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-black text-white inline-block mb-1">
                  {development.galleryImages[selectedImageIndex]?.category}
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/95 line-clamp-2 bg-black/60 p-2 backdrop-blur-xs">
                  {development.galleryImages[selectedImageIndex]?.caption}
                </p>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-5 gap-2">
              {development.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative h-16 sm:h-20 overflow-hidden border transition-all ${
                    selectedImageIndex === idx
                      ? 'border-black opacity-100 ring-2 ring-black/20'
                      : 'border-gray-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover grayscale" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Overview & Highlights Box (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 sm:p-7 border border-gray-200 bg-white shadow-xs space-y-6">
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">
                  Visão Geral do Projeto
                </div>
                <h3 className="text-2xl font-bold font-geometric text-black">
                  Ficha Técnica & Destaques
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Previsão de Entrega: <strong className="text-black">{development.estimatedDelivery}</strong>
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                    Metragem
                  </span>
                  <span className="text-sm font-bold text-black font-geometric block mt-0.5">
                    {development.overview.areaRange}
                  </span>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                    Dormitórios
                  </span>
                  <span className="text-sm font-bold text-black font-geometric block mt-0.5">
                    {development.overview.bedrooms}
                  </span>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                    Suítes
                  </span>
                  <span className="text-sm font-bold text-black font-geometric block mt-0.5">
                    {development.overview.suites}
                  </span>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                    Vagas
                  </span>
                  <span className="text-sm font-bold text-black font-geometric block mt-0.5">
                    {development.overview.parkingSpots}
                  </span>
                </div>
              </div>

              {/* Bullet highlights */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                {development.highlights.slice(0, 4).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-1.5" />
                    <span className="text-xs sm:text-sm text-gray-700 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Box inside sidebar */}
              <div className="pt-2">
                <a
                  href={development.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cta-btn-main-${development.id}`}
                  className="w-full py-4 bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Receber Apresentação & Tabela</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-wider font-semibold mt-2">
                  Atendimento direto via Google Forms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections: Plantas, Lazer & Localização */}
        <div className="space-y-12">
          {/* 1. Floor Plans Interactive Section */}
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                  Opções de Plantas
                </span>
                <h3 className="text-2xl font-bold font-geometric text-black">
                  Plantas Inteligentes & Ambientes Planejados
                </h3>
              </div>

              {/* Floor Plan Selector Pills */}
              <div className="flex flex-wrap gap-1.5">
                {development.floorPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setActiveFloorPlanId(plan.id)}
                    id={`plan-tab-${plan.id}`}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                      activeFloorPlanId === plan.id
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Floor Plan Details */}
            {activeFloorPlan && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 relative border border-gray-200 bg-gray-50">
                  <img
                    src={activeFloorPlan.image}
                    alt={activeFloorPlan.name}
                    className="w-full h-72 sm:h-84 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {activeFloorPlan.size}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-black font-geometric">
                      {activeFloorPlan.name} — {activeFloorPlan.size}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      {activeFloorPlan.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2">
                    <div className="p-3 bg-gray-50 border border-gray-100 text-center">
                      <span className="text-[10px] uppercase font-bold text-gray-500 block">Dormitórios</span>
                      <span className="text-xs sm:text-sm font-bold text-black font-geometric">{activeFloorPlan.bedrooms}</span>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-100 text-center">
                      <span className="text-[10px] uppercase font-bold text-gray-500 block">Suítes</span>
                      <span className="text-xs sm:text-sm font-bold text-black font-geometric">{activeFloorPlan.suites}</span>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-100 text-center">
                      <span className="text-[10px] uppercase font-bold text-gray-500 block">Vagas</span>
                      <span className="text-xs sm:text-sm font-bold text-black font-geometric">{activeFloorPlan.parking}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-black block">
                      Diferenciais desta planta:
                    </span>
                    {activeFloorPlan.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-black shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={development.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                      <span>Solicitar Planta em Alta Resolução</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Amenities Showcase */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-gray-100">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  Lazer & Conforto
                </span>
                <h3 className="text-2xl font-bold font-geometric text-black">
                  Itens de Resort e Convivência Exclusivos
                </h3>
              </div>
              <p className="text-xs text-gray-500">
                Áreas comuns entregues totalmente equipadas e decoradas
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {development.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-gray-200 hover:border-black transition-colors flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                      {getAmenityIcon(item.icon)}
                    </div>
                    <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-black leading-snug">
                      {item.name}
                    </h5>
                    {item.description && (
                      <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Location & Nearby Points of Interest */}
          <div className="p-6 sm:p-8 bg-black text-white space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-800">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Localização Privilegiada
                </span>
                <h3 className="text-2xl font-bold font-geometric text-white mt-1">
                  Viva próximo de tudo o que você precisa na {development.neighborhood}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl">
                  {development.location.neighborhoodDescription}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-gray-400">Endereço:</span>
                <span className="text-xs font-bold text-white bg-gray-900 px-3 py-1.5 border border-gray-700">
                  {development.location.address}
                </span>
              </div>
            </div>

            {/* Points of Interest list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              {development.location.pointsOfInterest.map((poi, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-gray-900 border border-gray-800 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">
                      {poi.type}
                    </span>
                    <span className="text-xs font-extrabold text-white bg-black px-2 py-0.5">
                      {poi.time}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-gray-200 line-clamp-2">
                    {poi.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Prominent Final CTA Card for the Development */}
          <div className="p-8 sm:p-10 border border-gray-200 bg-white shadow-xs">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl text-center lg:text-left">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-1">
                  Atendimento Exclusivo — {development.neighborhood}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-geometric text-black">
                  Gostou do {development.name}?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Preencha o formulário oficial em menos de 1 minuto para receber as tabelas com valores de lançamento, book com todas as plantas e agendamento de visita.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
                <a
                  href={development.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`bottom-form-cta-${development.id}`}
                  className="w-full sm:w-auto px-8 py-4 bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-99"
                >
                  <span>Preencher Formulário da {development.neighborhood}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
