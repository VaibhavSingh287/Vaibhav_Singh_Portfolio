import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, Terminal, Cpu, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#4f46e5] font-semibold mb-1">
                BACKGROUND & APPROACH
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                About Vaibhav Singh
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#64748b] leading-relaxed font-sans">
              <p className="font-semibold text-[#0f172a] text-base sm:text-lg">
                Computer Science Engineer bridging business requirements and technical execution.
              </p>
              <p className="p-4 rounded-xl bg-white border border-slate-200 text-[#0f172a] font-medium italic shadow-2xs">
                "I enjoy taking unclear business problems, breaking them into structured requirements, and turning them into systems that people can actually use."
              </p>
              <p>
                My professional direction focuses on AI automation, business systems, workflow architecture, and digital analytics. Whether configuring multi-step AI automation sequences or conducting technical SEO and GA4 audits, my approach centers on clarity, rigorous verification, and practical business outcomes.
              </p>
            </div>

            {/* Quality Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 hover:border-[#4f46e5]/40 transition-colors shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#4f46e5] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#0f172a]">Deterministic Logic</div>
                  <div className="text-[11px] text-[#64748b] mt-0.5">Explicit business rules and RBAC permissions before code execution.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 hover:border-[#4f46e5]/40 transition-colors shadow-2xs">
                <Terminal className="w-5 h-5 text-[#4f46e5] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#0f172a]">Rigorous Testing</div>
                  <div className="text-[11px] text-[#64748b] mt-0.5">Postman endpoint validation and User Acceptance Testing (UAT).</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-md space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-full bg-[#4f46e5] text-white font-bold flex items-center justify-center text-sm shadow-md shadow-[#4f46e5]/20">
                VS
              </div>
              <div>
                <div className="font-extrabold text-[#0f172a] text-base">{PERSONAL_INFO.name}</div>
                <div className="text-xs text-[#64748b] font-mono">Computer Science Engineer (CSE)</div>
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-[#64748b]">Location</span>
                <span className="font-semibold text-[#0f172a]">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-[#64748b]">Primary Focus</span>
                <span className="font-semibold text-[#4f46e5]">AI Automation & Systems</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-[#64748b]">Secondary Focus</span>
                <span className="font-semibold text-[#0f172a]">Digital Growth & Analytics</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-[#64748b]">Key Tools</span>
                <span className="font-semibold text-[#0f172a]">React, Node, PostgreSQL, Postman</span>
              </div>
              <div className="flex justify-between py-2 items-center">
                <span className="text-[#64748b]">Availability</span>
                <span className="font-semibold text-[#4f46e5] bg-[#4f46e5]/10 px-2.5 py-1 rounded-full border border-[#4f46e5]/20">
                  Open for Opportunities
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
