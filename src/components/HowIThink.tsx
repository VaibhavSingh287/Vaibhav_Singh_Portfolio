import React, { useState } from 'react';
import { STAGES } from '../data/portfolioData';
import { Lightbulb, Network, PenTool, Bot, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

export const HowIThink: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const activeStage = STAGES[selectedStageIndex];

  const getStageIcon = (index: number) => {
    switch (index) {
      case 0: return <Lightbulb className="w-5 h-5 text-[#4f46e5]" />;
      case 1: return <Network className="w-5 h-5 text-[#4f46e5]" />;
      case 2: return <PenTool className="w-5 h-5 text-[#4f46e5]" />;
      case 3: return <Bot className="w-5 h-5 text-[#4f46e5]" />;
      case 4: return <ShieldCheck className="w-5 h-5 text-[#4f46e5]" />;
      case 5: return <TrendingUp className="w-5 h-5 text-[#4f46e5]" />;
      default: return <Lightbulb className="w-5 h-5 text-[#4f46e5]" />;
    }
  };

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4f46e5] font-semibold mb-2">
            METHODOLOGY & FRAMEWORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            From Business Problem to Working System
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mt-3">
            A structured 6-stage methodology that turns ambiguous operational chaos into reliable, testable automation architectures.
          </p>
        </div>

        {/* 6 Stage Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {STAGES.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={stage.number}
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#4f46e5] text-white border-[#4f46e5] shadow-md shadow-[#4f46e5]/30 scale-[1.02]'
                    : 'bg-white border-slate-200 text-[#0f172a] hover:border-[#4f46e5]/50 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-white' : 'text-[#64748b]'}`}>
                    {stage.number}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#4f46e5]'}`}>
                    {getStageIcon(idx)}
                  </div>
                </div>
                <div className={`text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-[#0f172a]'}`}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail Inspector Card for Active Stage */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold bg-[#4f46e5]/10 text-[#4f46e5] px-3 py-1 rounded-full border border-[#4f46e5]/20">
                  STAGE {activeStage.number}
                </span>
                <span className="text-xs font-semibold text-[#64748b] uppercase tracking-wider font-mono">
                  THE {activeStage.title.toUpperCase()} PHASE
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0f172a]">
                {activeStage.title}: {activeStage.description}
              </h3>

              <div className="pt-2 space-y-2">
                <div className="text-xs font-mono text-[#64748b] uppercase font-semibold">
                  Key Operational Execution Actions:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStage.keyActions.map((action, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs font-medium text-[#0f172a]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4f46e5] shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-xs font-mono text-[#4f46e5] font-bold uppercase tracking-wider">
                SYSTEM GUARANTEE
              </div>
              <div className="text-sm font-semibold text-[#0f172a] leading-relaxed">
                "No code or automation script is deployed until business rules are explicitly mapped, tested, and validated."
              </div>
              <p className="text-xs text-[#64748b] leading-relaxed pt-2 border-t border-slate-200">
                This prevents costly scope creep, logic errors in production, and broken user permissions across business workflows.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
