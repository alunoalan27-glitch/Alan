import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink, MapPin } from 'lucide-react';
import { DEVELOPMENTS_DATA } from '../data/developments';

interface NavbarProps {
  onOpenFormModal: (formUrl: string, title: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFormModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs py-3.5 text-[#111827]'
          : 'bg-white border-b border-gray-100 py-4 text-[#111827]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Geometric Balance Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          id="brand-logo"
        >
          <div className="w-8 h-8 bg-black flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-4 h-4 border-2 border-white rotate-45" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tighter block font-geometric leading-none text-black">
              URBAN_VIBE
            </span>
            <span className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold block mt-0.5">
              Mooca • Tatuapé • Vila Ema
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Dropdown for Developments */}
          <div className="relative">
            <button
              id="dropdown-developments-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-black" />
              <span>Empreendimentos</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 shadow-xl p-2 z-50"
              >
                {DEVELOPMENTS_DATA.map((dev) => (
                  <button
                    key={dev.id}
                    id={`nav-dev-${dev.id}`}
                    onClick={() => scrollToSection(dev.id)}
                    className="w-full text-left p-3 hover:bg-gray-50 transition-colors flex flex-col group border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-black group-hover:text-black text-xs uppercase tracking-wider">
                        {dev.neighborhood}
                      </span>
                      <span className="text-[9px] px-2 py-0.5 font-bold uppercase tracking-wider bg-black text-white">
                        {dev.status}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 line-clamp-1">
                      {dev.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            id="nav-link-mooca"
            onClick={() => scrollToSection('mooca')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
          >
            Mooca
          </button>

          <button
            id="nav-link-tatuape"
            onClick={() => scrollToSection('tatuape')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
          >
            Tatuapé
          </button>

          <button
            id="nav-link-vila-ema"
            onClick={() => scrollToSection('vila-ema')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
          >
            Vila Ema
          </button>

          <button
            id="nav-link-comparativo"
            onClick={() => scrollToSection('comparativo')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
          >
            Comparativo
          </button>

          <button
            id="nav-link-simulador"
            onClick={() => scrollToSection('simulador')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
          >
            Simulador
          </button>

          <button
            id="nav-link-faq"
            onClick={() => scrollToSection('faq')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
          >
            Dúvidas
          </button>
        </nav>

        {/* Primary CTA button with Geometric Balance */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="header-cta-button"
            onClick={() => scrollToSection('mooca')}
            className="px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <span>Lançamentos</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-gray-100 text-black hover:bg-gray-200 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-white border-b border-gray-200 px-6 pt-4 pb-6 space-y-3 shadow-xl animate-in fade-in"
        >
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pt-1">
            Lançamentos Exclusivos 2024
          </div>
          <div className="grid grid-cols-1 gap-1">
            {DEVELOPMENTS_DATA.map((dev) => (
              <button
                key={dev.id}
                id={`mobile-dev-${dev.id}`}
                onClick={() => scrollToSection(dev.id)}
                className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 text-[#111827] flex items-center justify-between border border-gray-200"
              >
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider block">{dev.name}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">{dev.neighborhood}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black">Ver →</span>
              </button>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => scrollToSection('comparativo')}
              className="px-3 py-2 text-center text-xs font-bold uppercase tracking-wider bg-gray-100 text-black hover:bg-gray-200"
            >
              Comparativo
            </button>
            <button
              onClick={() => scrollToSection('simulador')}
              className="px-3 py-2 text-center text-xs font-bold uppercase tracking-wider bg-gray-100 text-black hover:bg-gray-200"
            >
              Simulador
            </button>
          </div>

          <div className="pt-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHT2Rxi9-wMt1I0KGm_dBxXF3qFUvabUtHIMO6UvvtHcK6Pw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2"
            >
              <span>Cadastre seu Interesse</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
