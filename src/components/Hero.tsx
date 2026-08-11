import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, Sparkles, Workflow, ArrowDown, ShieldCheck, Layers, Database, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onViewWork: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onOpenResume }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const workflowSteps = [
    {
      id: 1,
      title: "Business Problem",
      detail: "Unstructured service requests & manual calculation friction",
      icon: Layers,
      tag: "INPUT"
    },
    {
      id: 2,
      title: "Business Rules",
      detail: "AMC/Warranty contract logic, breakdown priority & pricing tiers",
      icon: Workflow,
      tag: "RULES"
    },
    {
      id: 3,
      title: "AI & APIs",
      detail: "Google Workspace APIs, prompt logic & Express endpoints",
      icon: Sparkles,
      tag: "ENGINE"
    },
    {
      id: 4,
      title: "Database Storage",
      detail: "PostgreSQL schema validation & RBAC permission matrix",
      icon: Database,
      tag: "STORAGE"
    },
    {
      id: 5,
      title: "UAT & API Testing",
      detail: "Postman test collection execution & calculation audits",
      icon: ShieldCheck,
      tag: "VERIFY"
    },
    {
      id: 6,
      title: "Automated System",
      detail: "Validated job cards, instant PDF exports & Drive archiving",
      icon: CheckCircle2,
      tag: "OUTPUT"
    }
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#e2e8f0] bg-[#f8fafc] dot-pattern overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#4f46e5]/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#4f46e5]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Microcopy */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e2e8f0] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-[#64748b] tracking-tight">
                STATUS: AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* Main Greeting Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-[#0f172a]">{PERSONAL_INFO.name}</span>
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4f46e5] tracking-tight">
                AI Automation & Business Systems Specialist
              </div>
            </div>

            {/* Concise Intro Text */}
            <p className="text-base text-[#64748b] max-w-xl leading-relaxed">
              Computer Science Engineer bridging business requirements and technical execution. Specializing in automated workflow architecture, deterministic business rules, Postman API testing, UAT validation, and digital analytics.
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onViewWork}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#4f46e5] text-white font-semibold text-sm hover:bg-[#4338ca] transition-all duration-200 shadow-lg shadow-[#4f46e5]/25 cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-[#4f46e5] text-[#4f46e5] font-semibold text-sm hover:bg-[#4f46e5]/5 transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons at Bottom Left */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#4f46e5]/30 text-[#4f46e5] hover:bg-[#4f46e5]/10 hover:border-[#4f46e5] flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-full border border-[#4f46e5]/30 text-[#4f46e5] hover:bg-[#4f46e5]/10 hover:border-[#4f46e5] flex items-center justify-center transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-full border border-[#4f46e5]/30 text-[#4f46e5] hover:bg-[#4f46e5]/10 hover:border-[#4f46e5] flex items-center justify-center transition-all duration-200"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Technical Guarantees */}
            <div className="pt-4 border-t border-[#e2e8f0] grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white border border-[#e2e8f0] shadow-2xs">
                <div className="text-[10px] font-mono text-[#4f46e5] uppercase font-semibold">Principle</div>
                <div className="text-xs font-bold text-[#0f172a] mt-0.5">Zero Fabricated Metrics</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e2e8f0] shadow-2xs">
                <div className="text-[10px] font-mono text-[#4f46e5] uppercase font-semibold">Methodology</div>
                <div className="text-xs font-bold text-[#0f172a] mt-0.5">Postman API & UAT</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e2e8f0] shadow-2xs col-span-2 sm:col-span-1">
                <div className="text-[10px] font-mono text-[#4f46e5] uppercase font-semibold">Integrations</div>
                <div className="text-xs font-bold text-[#0f172a] mt-0.5">Google Workspace APIs</div>
              </div>
            </div>

          </div>

          {/* Right Column: Structured rectangular cards grouping technical workflow steps */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 sm:p-6 shadow-md relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4f46e5] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                    SYSTEM_MAP.FLOW
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-[#4f46e5]/10 text-[#4f46e5] px-2.5 py-0.5 rounded-full border border-[#4f46e5]/20 font-semibold">
                  LIVE WORKFLOW
                </span>
              </div>

              {/* Clean structured rectangular cards grouped without floating arrows */}
              <div className="space-y-2.5 relative">
                {workflowSteps.map((step) => {
                  const Icon = step.icon;
                  const isHovered = activeStep === step.id;

                  return (
                    <div
                      key={step.id}
                      onMouseEnter={() => setActiveStep(step.id)}
                      onMouseLeave={() => setActiveStep(null)}
                      className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer relative ${
                        isHovered
                          ? 'bg-[#4f46e5] text-white border-[#4f46e5] shadow-md shadow-[#4f46e5]/20'
                          : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-[#4f46e5]/50 text-[#0f172a]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                            isHovered ? 'bg-white text-[#4f46e5]' : 'bg-white text-[#4f46e5] border border-[#e2e8f0]'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-xs font-bold flex items-center gap-2 ${isHovered ? 'text-white' : 'text-[#0f172a]'}`}>
                              <span>{step.title}</span>
                            </div>
                            <div className={`text-[11px] leading-tight mt-0.5 ${isHovered ? 'text-indigo-100' : 'text-[#64748b]'}`}>
                              {step.detail}
                            </div>
                          </div>
                        </div>

                        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                          isHovered 
                            ? 'bg-white/20 text-white border-white/40' 
                            : 'bg-white text-[#4f46e5] border-[#e2e8f0]'
                        }`}>
                          {step.tag}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Indicator */}
              <div className="mt-4 pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
                  Deterministic Logic & Rules
                </span>
                <span className="text-[#4f46e5]">Hover steps to inspect</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

