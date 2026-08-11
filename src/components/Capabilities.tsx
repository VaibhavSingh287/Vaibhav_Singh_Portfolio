import React from 'react';
import { Bot, LineChart, ArrowRight, CheckCircle2, Cpu, Zap, Layers } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const card1Skills = [
    "Workflow Automation",
    "AI-assisted Systems",
    "Requirements Gathering",
    "Process Mapping",
    "Business Rules",
    "API Testing",
    "UAT"
  ];

  const card2Skills = [
    "SEO",
    "Technical SEO",
    "Google Analytics / GA4",
    "Google Search Console",
    "Looker Studio",
    "SEMrush",
    "Google Ads",
    "Meta Ads Manager"
  ];

  return (
    <section id="automation" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#4f46e5] font-semibold mb-1">
              CORE CAPABILITIES
            </div>
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
              WHAT I WORK ON
            </h2>
          </div>
          <p className="text-sm text-[#64748b] max-w-md">
            Clear separation between primary workflow architecture systems and secondary digital growth & analytics capabilities.
          </p>
        </div>

        {/* Two Visual Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CARD 01: AI Automation & Business Systems (Primary Lane) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#4f46e5] p-6 sm:p-8 shadow-md relative flex flex-col justify-between group hover:shadow-lg transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#4f46e5] text-white shadow-md shadow-[#4f46e5]/30">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] border border-[#4f46e5]/30">
                  CORE FOCUS
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                  AI Automation & Business Systems
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed mt-2">
                  Designing AI-assisted workflows, business rules, API integrations and UAT processes that turn operational requirements into reliable systems.
                </p>
              </div>

              {/* Skills Pills */}
              <div className="pt-2">
                <div className="text-xs font-mono text-[#64748b] uppercase font-semibold mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#4f46e5]" />
                  Key Capability Spectrum
                </div>
                <div className="flex flex-wrap gap-2">
                  {card1Skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-[#f8fafc] text-[#0f172a] px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-2 hover:border-[#4f46e5]/50 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-[#64748b] font-medium">
              <span>Deterministic Business Rules + UAT</span>
              <span className="text-[#4f46e5] font-bold">Flagship Domain</span>
            </div>
          </div>

          {/* CARD 02: Digital Growth & Analytics (Secondary Lane) */}
          <div id="digital-growth" className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative flex flex-col justify-between group hover:border-[#4f46e5]/40 transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-100 text-[#4f46e5] border border-slate-200">
                    <LineChart className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#64748b] bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                  GROWTH & MEASUREMENT
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                  Digital Growth & Analytics
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mt-2">
                  Using SEO, analytics and reporting to improve digital visibility, measurement and decision-making.
                </p>
              </div>

              {/* Skills Pills */}
              <div className="pt-2">
                <div className="text-xs font-mono text-[#64748b] uppercase font-semibold mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#4f46e5]" />
                  Analytics & Marketing Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {card2Skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-[#f8fafc] text-[#0f172a] px-3 py-1.5 rounded-md border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-[#64748b]">
              <span>Technical SEO & GA4 Pipelines</span>
              <span className="text-[#4f46e5]">Secondary Specialty</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
