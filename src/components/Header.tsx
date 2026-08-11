import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  activeCaseStudyId: string | null;
  onBackToHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
  activeCaseStudyId,
  onBackToHome
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'automation', label: 'Automation' },
    { id: 'digital-growth', label: 'Digital Growth' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    if (activeCaseStudyId) {
      onBackToHome();
      setTimeout(() => {
        onNavigate(id);
      }, 100);
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#f8fafc]/90 backdrop-blur-md border-slate-200/80 shadow-xs'
          : 'bg-[#f8fafc]/70 backdrop-blur-sm border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => {
            if (activeCaseStudyId) {
              onBackToHome();
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-left group flex items-center gap-3 focus:outline-hidden cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-[#4f46e5]/10 border border-[#4f46e5]/30 text-[#4f46e5] flex items-center justify-center font-extrabold text-sm shadow-2xs group-hover:bg-[#4f46e5] group-hover:text-white transition-all duration-300">
            VS
          </div>
          <div>
            <div className="font-extrabold text-lg tracking-tight text-[#0f172a] group-hover:text-[#4f46e5] transition-colors flex items-center gap-1">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-[#4f46e5]">.</span>
            </div>
            <p className="text-[11px] text-[#64748b] font-mono hidden md:block">
              AI Automation & Business Systems
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-slate-200 shadow-2xs">
          {navItems.map((item) => {
            const isActive = !activeCaseStudyId && activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#4f46e5] text-white shadow-md shadow-[#4f46e5]/20'
                    : 'text-[#64748b] hover:text-[#0f172a] hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold border border-[#4f46e5] text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white transition-all duration-200 cursor-pointer shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-[#4f46e5] text-white hover:bg-[#4338ca] transition-all duration-200 cursor-pointer shadow-md shadow-[#4f46e5]/25"
          >
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#4f46e5] text-[#4f46e5] cursor-pointer"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0f172a] hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#4f46e5]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 py-5 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0f172a] hover:bg-slate-100 hover:text-[#4f46e5] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center px-4 py-2.5 rounded-full text-xs font-semibold bg-[#4f46e5] text-white hover:bg-[#4338ca] transition-colors cursor-pointer mt-2"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
