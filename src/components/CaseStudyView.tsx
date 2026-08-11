import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, CheckCircle2, XCircle, ShieldCheck, FileText, Cpu, Database, ChevronRight, Calculator, ShieldAlert, Sparkles, Search, ArrowUpRight, BarChart3, Gauge, Settings, ListOrdered, LayoutDashboard, Target, Layers, Lightbulb, Wrench, CheckSquare, Info } from 'lucide-react';

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
  onNavigateToOtherProject?: (projectId: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onBack }) => {
  const { caseStudy } = project;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  return (
    <div className="pt-28 pb-24 bg-[#f8fafc] min-h-screen text-[#64748b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#0f172a] hover:text-[#4f46e5] hover:border-[#4f46e5] transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#4f46e5]" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#4f46e5] font-bold bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
              CASE STUDY {project.number}
            </span>
          </div>
        </div>

        {/* Header Hero */}
        <header className="space-y-6 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            {caseStudy.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono bg-[#4f46e5]/10 text-[#4f46e5] px-3 py-1 rounded-full border border-[#4f46e5]/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            {caseStudy.heroTitle}
          </h1>

          <p className="text-lg text-[#64748b] font-medium max-w-3xl leading-relaxed">
            "{caseStudy.subtitle}"
          </p>

          {caseStudy.currentStatus && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4f46e5]/10 border border-[#4f46e5]/20 text-xs font-mono text-[#4f46e5] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4f46e5] animate-pulse" />
              STATUS: {caseStudy.currentStatus}
            </div>
          )}
        </header>

        {/* 1. Business Problem & Context */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
              01
            </span>
            <h2 className="text-2xl font-bold text-[#0f172a]">Business Problem & Context</h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              {caseStudy.problemContext.overview}
            </p>

            <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-[#4f46e5] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4f46e5]" />
                {caseStudy.problemContext.frictionTitle}
              </div>
              <p className="text-xs sm:text-sm text-[#0f172a] leading-relaxed">
                {caseStudy.problemContext.frictionDetails}
              </p>
            </div>

            {caseStudy.existingProcess && (
              <div className="pt-4 border-t border-slate-200 space-y-1">
                <div className="text-xs font-mono text-[#4f46e5] font-bold uppercase">Legacy / Manual Process:</div>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{caseStudy.existingProcess}</p>
              </div>
            )}
          </div>
        </section>

        {/* 2. Objective & 3. Requirements */}
        {(caseStudy.objective || caseStudy.requirements) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.objective && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#4f46e5] uppercase">
                  <Target className="w-4 h-4" />
                  <span>02. System Objective</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  {caseStudy.objective}
                </p>
              </div>
            )}

            {caseStudy.requirements && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#4f46e5] uppercase">
                  <CheckSquare className="w-4 h-4" />
                  <span>03. Core Requirements</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#64748b]">
                  {caseStudy.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#4f46e5] font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 4. Proposed Solution & Role */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
                04
              </span>
              <h2 className="text-2xl font-bold text-[#0f172a]">Proposed Solution & Process Sequence</h2>
            </div>
          </div>

          {caseStudy.proposedSolution && (
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 text-xs sm:text-sm text-[#0f172a] leading-relaxed">
              <span className="font-mono font-bold text-[#4f46e5] uppercase block mb-1">Proposed Architecture Approach:</span>
              {caseStudy.proposedSolution}
            </div>
          )}

          {/* Process Step Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {caseStudy.roleSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5"
              >
                <div className="w-6 h-6 rounded-full bg-[#4f46e5] text-white font-mono text-xs font-bold flex items-center justify-center">
                  {step.stepNumber}
                </div>
                <div className="text-xs font-bold text-[#0f172a]">{step.title}</div>
                <div className="text-[11px] text-[#64748b] leading-tight">{step.description}</div>
              </div>
            ))}
          </div>

          {/* Responsibilities */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <div className="text-xs font-mono text-[#4f46e5] uppercase font-semibold">
              Execution Responsibilities:
            </div>
            <div className="space-y-2.5">
              {caseStudy.roleResponsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0f172a] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. System Architecture & Workflow */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
              05
            </span>
            <h2 className="text-2xl font-bold text-[#0f172a]">System Architecture Diagram</h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {caseStudy.architectureNodes.map((node) => (
                <div
                  key={node.id}
                  className="p-3.5 rounded-2xl bg-[#f8fafc] border border-slate-200 text-center space-y-1"
                >
                  <div className="text-[10px] font-mono text-[#4f46e5] font-bold uppercase">{node.type}</div>
                  <div className="text-xs font-bold text-[#0f172a]">{node.label}</div>
                  {node.sublabel && (
                    <div className="text-[10px] text-[#64748b] font-mono">{node.sublabel}</div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed pt-4 border-t border-slate-200">
              {caseStudy.architectureDescription}
            </p>

            {/* Tech Stack List */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#4f46e5] font-semibold mr-2">TECH STACK:</span>
              {caseStudy.techStackList.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono bg-[#f8fafc] text-[#0f172a] px-2.5 py-1 rounded-lg border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Details */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
              06
            </span>
            <h2 className="text-2xl font-bold text-[#0f172a]">Workflow Pipeline Breakdown</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {caseStudy.workflowDetails.map((detail) => (
              <div
                key={detail.nodeNumber}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-2.5 py-0.5 rounded-full border border-[#4f46e5]/20">
                    PHASE {detail.nodeNumber}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">{detail.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{detail.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Tools & Integrations */}
        {caseStudy.toolsAndIntegrations && (
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
                07
              </span>
              <h2 className="text-2xl font-bold text-[#0f172a]">Tools & Integrations</h2>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-2">
              {caseStudy.toolsAndIntegrations.map((tool, idx) => (
                <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs font-mono font-semibold text-[#0f172a]">
                  {tool}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 8. Configured Business Rules */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
              08
            </span>
            <h2 className="text-2xl font-bold text-[#0f172a]">Configured Business Rules</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.businessRules.map((rule, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
              >
                <div className="text-xs font-mono font-bold text-[#4f46e5] uppercase">
                  {rule.title}
                </div>
                <p className="text-xs text-[#64748b] leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Testing & Validation */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
              09
            </span>
            <h2 className="text-2xl font-bold text-[#0f172a]">Testing & User Acceptance Testing (UAT)</h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              {caseStudy.validationDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {caseStudy.validationItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 flex items-center gap-3"
                >
                  <ShieldCheck className="w-5 h-5 text-[#4f46e5] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#0f172a]">{item.title}</div>
                    <div className="text-[10px] text-[#64748b] font-mono">{item.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Outcome: Before vs After */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
              10
            </span>
            <h2 className="text-2xl font-bold text-[#0f172a]">Outcome: Before vs After Transformation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <XCircle className="w-5 h-5 text-slate-400" />
                <h3 className="font-bold text-[#64748b] text-base">BEFORE (Manual / Fragmented)</h3>
              </div>
              <ul className="space-y-2.5">
                {caseStudy.outcomeBefore.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#64748b]">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-[#4f46e5] rounded-2xl p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#4f46e5]" />
                <h3 className="font-bold text-[#0f172a] text-base">AFTER (Automated / Validated System)</h3>
              </div>
              <ul className="space-y-2.5">
                {caseStudy.outcomeAfter.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0f172a] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 11. What I Learned */}
        {caseStudy.whatILearned && (
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
                11
              </span>
              <h2 className="text-2xl font-bold text-[#0f172a]">What I Learned & Key Takeaways</h2>
            </div>
            <div className="bg-white border border-slate-200 text-[#0f172a] rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
              <div className="text-xs font-mono text-[#4f46e5] font-bold uppercase flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>OPERATIONAL INSIGHTS</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#64748b]">
                {caseStudy.whatILearned.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#4f46e5] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Back Button Footer */}
        <div className="pt-8 border-t border-slate-200 flex justify-between items-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4f46e5] text-white font-semibold text-xs hover:bg-[#4338ca] transition-all shadow-md shadow-[#4f46e5]/25 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Work</span>
          </button>
        </div>

      </div>
    </div>
  );
};
