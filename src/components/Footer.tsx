import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Linkedin, Mail, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f1f5f9] text-[#64748b] py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#4f46e5] text-white font-bold flex items-center justify-center text-xs shadow-md shadow-[#4f46e5]/20">
                VS
              </div>
              <span className="text-[#0f172a] font-bold text-lg tracking-tight">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-[#64748b] font-mono mt-1.5">
              AI Automation & Business Systems Specialist · Mumbai, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#0f172a] hover:text-[#4f46e5] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Mail className="w-3.5 h-3.5 text-[#4f46e5]" />
              <span>Email</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f172a] hover:text-[#4f46e5] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#4f46e5]" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenResume}
              className="text-[#0f172a] hover:text-[#4f46e5] transition-colors cursor-pointer font-semibold"
            >
              Resume
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748b]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4f46e5]" />
            <span className="text-[#64748b]">Factual Portfolio · Zero Fabricated Metrics</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#64748b]">© {new Date().getFullYear()} Vaibhav Singh</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-[#4f46e5] text-[#0f172a] hover:text-[#4f46e5] transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#4f46e5]" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
