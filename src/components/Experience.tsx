import React, { useState } from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Bot, LineChart, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (roleId: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [roleId]: !prev[roleId]
    }));
  };

  const bhatiaBrothersExp = EXPERIENCE.find((e) => e.id === 'bhatia-brothers') || EXPERIENCE[0];
  const coinDcxExp = EXPERIENCE.find((e) => e.id === 'coindcx') || EXPERIENCE[1];

  const bhatiaAiHighlights = [
    "Led solution architecture and workflow design for an enterprise Job Card Management platform (RBAC, pricing logic, approval routing).",
    "Gathered business requirements and translated them into structured workflows, automation logic, and technical specifications.",
    "Coordinated AI-assisted development across React/Vite frontend, Node.js/Express backend, and PostgreSQL database.",
    "Executed API testing, manual QA, and UAT using Postman to verify calculation accuracy, role permissions, and document outputs.",
    "Built an AI-based B2B Lead Generation Agent automating lead discovery, domain validation, and CRM-ready database storage."
  ];

  const bhatiaDigitalHighlights = [
    "Conducted technical SEO audits covering Core Web Vitals, metadata, mobile responsiveness, and XML sitemap indexing.",
    "Configured Google Analytics 4 (GA4) event tracking and established Google Search Console property integrations.",
    "Designed custom Google Looker Studio operational reporting dashboards for marketing and executive tracking."
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#4f46e5] font-semibold mb-1">
              CAREER HISTORY
            </div>
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-sm text-[#64748b] max-w-md">
            Scannable professional history spanning AI automation workflows, system requirements, API testing, and digital analytics.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          
          {/* Role 1: Bhatia Brothers */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md hover:border-[#4f46e5]/40 transition-all duration-300">
            
            {/* Header / Role Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                    {bhatiaBrothersExp.role}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] border border-[#4f46e5]/20">
                    {bhatiaBrothersExp.company}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748b] mt-2">
                  <span className="flex items-center gap-1.5 font-semibold text-[#0f172a]">
                    <Calendar className="w-3.5 h-3.5 text-[#4f46e5]" />
                    {bhatiaBrothersExp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                    {bhatiaBrothersExp.location}
                  </span>
                  <span className="text-[#64748b]">({bhatiaBrothersExp.type})</span>
                </div>
              </div>
            </div>

            {/* Split Responsibilities Grid: AI/Automation & Digital Marketing */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: AI & Automation Responsibilities */}
              <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#4f46e5] uppercase pb-2 border-b border-slate-200">
                  <Bot className="w-4 h-4 text-[#4f46e5]" />
                  <span>AI & Automation Workflows</span>
                </div>
                <ul className="space-y-2">
                  {bhatiaAiHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#0f172a] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Digital Marketing & Analytics Responsibilities */}
              <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0f172a] uppercase pb-2 border-b border-slate-200">
                  <LineChart className="w-4 h-4 text-[#4f46e5]" />
                  <span>Digital Growth & Analytics</span>
                </div>
                <ul className="space-y-2">
                  {bhatiaDigitalHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#0f172a] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Expandable Extended Details */}
            {expandedRoles[bhatiaBrothersExp.id] && (
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-3 animate-fadeIn">
                <div className="text-xs font-mono text-[#4f46e5] uppercase font-semibold">
                  Extended Execution Details:
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#0f172a]">
                  {bhatiaBrothersExp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#4f46e5] font-bold">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Tech Pills + Toggle */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-[#64748b] mr-1">TECH:</span>
                {bhatiaBrothersExp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-[#f8fafc] text-[#64748b] px-2.5 py-0.5 rounded border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => toggleExpand(bhatiaBrothersExp.id)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#4f46e5] hover:text-[#4338ca] cursor-pointer"
              >
                <span>{expandedRoles[bhatiaBrothersExp.id] ? 'Hide Full Breakdown' : 'View Full Details'}</span>
                {expandedRoles[bhatiaBrothersExp.id] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

          {/* Role 2: CoinDCX */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md hover:border-[#4f46e5]/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                    {coinDcxExp.role}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-[#0f172a] border border-slate-200">
                    {coinDcxExp.company}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748b] mt-2">
                  <span className="flex items-center gap-1.5 font-semibold text-[#0f172a]">
                    <Calendar className="w-3.5 h-3.5 text-[#4f46e5]" />
                    {coinDcxExp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                    {coinDcxExp.location}
                  </span>
                  <span className="text-[#64748b]">({coinDcxExp.type})</span>
                </div>
              </div>
            </div>

            {/* Highlights Bullets */}
            <div className="pt-6 space-y-2.5">
              {coinDcxExp.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0f172a] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-[#64748b] mr-1">TECH:</span>
              {coinDcxExp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono bg-[#f8fafc] text-[#64748b] px-2.5 py-0.5 rounded border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
