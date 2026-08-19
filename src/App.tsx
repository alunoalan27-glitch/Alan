import React, { useState } from 'react';
import { DEVELOPMENTS_DATA } from './data/developments';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DevelopmentSection } from './components/DevelopmentSection';
import { ComparisonTable } from './components/ComparisonTable';
import { FinancingSimulator } from './components/FinancingSimulator';
import { NeighborhoodGuide } from './components/NeighborhoodGuide';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FormModal } from './components/FormModal';
import { FloatingFormBar } from './components/FloatingFormBar';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    formUrl: string;
    title: string;
  }>({
    isOpen: false,
    formUrl: '',
    title: ''
  });

  const handleOpenFormModal = (formUrl: string, title: string) => {
    setModalState({
      isOpen: true,
      formUrl,
      title
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToDevelopment = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Header / Navigation */}
      <Navbar onOpenFormModal={handleOpenFormModal} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSelectDevelopment={scrollToDevelopment}
          onOpenFormModal={handleOpenFormModal}
        />

        {/* 3 Detailed Development Sections: Mooca, Tatuapé, Vila Ema */}
        <div id="empreendimentos-list">
          {DEVELOPMENTS_DATA.map((dev, index) => (
            <DevelopmentSection
              key={dev.id}
              development={dev}
              onOpenFormModal={handleOpenFormModal}
              index={index}
            />
          ))}
        </div>

        {/* Neighborhood Guide */}
        <NeighborhoodGuide />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Financial & Mortgage Simulator */}
        <FinancingSimulator />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Quick Form Trigger */}
      <FloatingFormBar />

      {/* Form Modal */}
      <FormModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        formUrl={modalState.formUrl}
        title={modalState.title}
      />
    </div>
  );
}
