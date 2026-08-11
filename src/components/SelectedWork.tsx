import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ArrowRight, ChevronRight, Workflow, Bot, LineChart, CheckCircle2, Search, Gauge, BarChart3, Database, ShieldCheck } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const jobCardProject = PROJECTS.find((p) => p.id === 'job-card-ai-automation') || PROJECTS[0];
  const b2bLeadGenProject = PROJECTS.find((p) => p.id === 'b2b-lead-generation-agent') || PROJECTS[1];
  const seoAuditProject = PROJECTS.find((p) => p.id === 'seo-analytics-audit') || PROJECTS[2];
  const digitalMarketingProject = PROJECTS.find((p) => p.id === 'digital-marketing-campaign-analysis') || PROJECTS[3];
  const safronCafeProject = PROJECTS.find((p) => p.id === 'safron-cafe-digital-growth') || PROJECTS[4];

  return (
    <section id="work" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#4f46e5] font-semibold mb-1">
              SYSTEM CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-sm text-[#64748b] max-w-md">
            Factual breakdowns of automated systems, process mapping, API integrations, digital analytics, and UAT validation.
          </p>
        </div>

        {/* ======================================================
            FLAGSHIP SHOWCASE: AI Automation & Business Systems
           ====================================================== */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#4f46e5]/10 border border-[#4f46e5]/20 text-[#4f46e5]">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">
                PRIMARY CATEGORY: AI Automation & Business Systems
              </h3>
            </div>
            <span className="text-xs font-mono text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20 font-semibold">
              FLAGSHIP DOMAIN
            </span>
          </div>

          {/* FLAGSHIP PROJECT 01: Job Card AI Automation System */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-md hover:border-[#4f46e5]/50 transition-all duration-300 group relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
              
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#4f46e5] px-3 py-1 rounded-full shadow-md shadow-[#4f46e5]/20">
                      FLAGSHIP SYSTEM 01
                    </span>
                    <span className="text-xs font-mono text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20 font-semibold">
                      AI AUTOMATION · BUSINESS SYSTEMS · UAT
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight group-hover:text-[#4f46e5] transition-colors leading-snug">
                    {jobCardProject.title}
                  </h4>

                  <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                    Automated service intake, contract pricing validation (AMC & Warranty logic), approval routing, and document report generation via Google Workspace APIs.
                  </p>

                  {/* Compact Visual Pipeline */}
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
                    <div className="text-[10px] font-mono text-[#64748b] uppercase font-bold tracking-wider flex items-center justify-between">
                      <span>AUTOMATED WORKFLOW PIPELINE</span>
                      <span className="text-[#4f46e5]">✓ UAT VALIDATED</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#0f172a] pt-1">
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-200">1. INTAKE</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" />
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-200">2. CONTRACT RULES</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" />
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-200">3. APPROVAL ROUTING</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" />
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-200">4. WORKSPACE PDF/EXCEL</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {jobCardProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono bg-[#f8fafc] text-[#64748b] px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectProject(jobCardProject.id)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#4f46e5] text-white font-semibold text-sm hover:bg-[#4338ca] transition-all duration-200 shadow-md shadow-[#4f46e5]/25 cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Architecture & Validation Box */}
              <div className="lg:col-span-5 bg-[#f8fafc] border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono font-bold text-[#0f172a] uppercase tracking-wider">
                      ARCHITECTURE & VALIDATION
                    </span>
                    <span className="text-[10px] font-mono text-[#4f46e5] bg-[#4f46e5]/10 px-2.5 py-0.5 rounded-full border border-[#4f46e5]/20 font-semibold">
                      POSTMAN VERIFIED
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
                      <ShieldCheck className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#0f172a]">Deterministic Contract Rules</div>
                        <div className="text-[#64748b] mt-0.5">Automates AMC, Warranty, and standard service pricing evaluations without human math errors.</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
                      <Database className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#0f172a]">RBAC & PostgreSQL Storage</div>
                        <div className="text-[#64748b] mt-0.5">Role-based access matrix for service managers and technicians with persistent audit logs.</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
                      <Workflow className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#0f172a]">Google Workspace Document Sync</div>
                        <div className="text-[#64748b] mt-0.5">Triggers Google Drive, Docs, and Sheets APIs for real-time PDF/Excel report output.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                  <span>Methodology: Postman + UAT</span>
                  <span className="text-[#4f46e5] font-bold">Zero Fabricated ROI</span>
                </div>
              </div>

            </div>
          </div>

          {/* PROJECT 02: B2B Lead Generation Agent */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-[#4f46e5]/40 transition-all duration-300 group shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-2.5 py-0.5 rounded-full border border-[#4f46e5]/20">
                    PROJECT {b2bLeadGenProject.number}
                  </span>
                  <span className="text-xs text-[#64748b] font-mono">AI AUTOMATION & DATA PIPELINE</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                  {b2bLeadGenProject.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Automated lead discovery, domain health verification, AI entity normalization, and CRM-ready spreadsheet synchronization via Google Workspace APIs.
                </p>

                {/* Pipeline Flow */}
                <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs font-medium text-[#0f172a] flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[10px] text-[#64748b] uppercase mr-1">FLOW:</span>
                  {b2bLeadGenProject.workflowNodes.map((node, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-2.5 py-0.5 bg-white rounded-md border border-slate-200 shadow-2xs">
                        {node}
                      </span>
                      {idx < b2bLeadGenProject.workflowNodes.length - 1 && (
                        <span className="text-[#4f46e5] font-mono">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {b2bLeadGenProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-[#f8fafc] text-[#64748b] px-2.5 py-0.5 rounded border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full space-y-4">
                <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs text-[#0f172a] space-y-1 w-full">
                  <div className="font-bold text-[#4f46e5] font-mono uppercase">Pipeline Safeguards</div>
                  <p className="text-[#64748b]">Domain syntax verification, deduplication against PostgreSQL tables, and standardized CRM schema output.</p>
                </div>

                <button
                  onClick={() => onSelectProject(b2bLeadGenProject.id)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#4f46e5] text-[#4f46e5] font-semibold text-xs hover:bg-[#4f46e5] hover:text-white transition-all cursor-pointer shadow-2xs"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ======================================================
            SECONDARY CATEGORY: Digital Growth & Analytics
           ====================================================== */}
        <div className="space-y-6 pt-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#4f46e5]/10 border border-[#4f46e5]/20 text-[#4f46e5]">
                <LineChart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">
                  SECONDARY CATEGORY: Digital Growth & Analytics
                </h3>
                <p className="text-xs text-[#64748b] font-mono">
                  Technical SEO, GA4 analytics setups, paid media frameworks, and Looker Studio dashboards.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20 font-semibold">
              ANALYTICS & SEO
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* PROJECT 03: SEO & Analytics Audit */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 hover:border-[#4f46e5]/40 transition-all flex flex-col justify-between group shadow-2xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-2.5 py-0.5 rounded-full border border-[#4f46e5]/20">
                    PROJECT 03
                  </span>
                  <span className="text-[10px] font-mono text-[#64748b] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    TECHNICAL SEO & GA4
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                  {seoAuditProject.title}
                </h4>

                <p className="text-xs text-[#64748b] leading-relaxed">
                  End-to-end technical SEO crawl, Core Web Vitals diagnostics, custom GA4 conversion event tracking, and Looker Studio operational reporting.
                </p>

                {/* DISTINCT VISUAL: Technical SEO Audit Indicators */}
                <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
                  <div className="text-[10px] font-mono text-[#4f46e5] uppercase font-bold tracking-wider">
                    AUDIT DIAGNOSTICS & COVERAGE
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-[#0f172a]">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5]" /> Crawlability & Indexing</span>
                      <span className="font-mono text-[10px] text-[#64748b]">XML Sitemaps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5]" /> Core Web Vitals</span>
                      <span className="font-mono text-[10px] text-[#64748b]">LCP / CLS / INP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5]" /> GA4 Event Streams</span>
                      <span className="font-mono text-[10px] text-[#64748b]">Custom Conversions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5]" /> Looker Studio</span>
                      <span className="font-mono text-[10px] text-[#64748b]">Blended Reports</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {seoAuditProject.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-[#f8fafc] text-[#64748b] px-2 py-0.5 rounded border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectProject(seoAuditProject.id)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#4f46e5] text-[#4f46e5] font-semibold text-xs hover:bg-[#4f46e5] hover:text-white transition-all cursor-pointer mt-2 shadow-2xs"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* PROJECT 04: Digital Marketing & Campaign Analysis */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 hover:border-[#4f46e5]/40 transition-all flex flex-col justify-between group shadow-2xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-2.5 py-0.5 rounded-full border border-[#4f46e5]/20">
                    PROJECT 04
                  </span>
                  <span className="text-[10px] font-mono text-[#64748b] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    SEARCH & PAID MEDIA
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                  {digitalMarketingProject.title}
                </h4>

                <p className="text-xs text-[#64748b] leading-relaxed">
                  Search intent mapping, single-intent ad group structuring, negative keyword safeguards, and GA4 attribution modeling.
                </p>

                {/* DISTINCT VISUAL: Campaign Funnel Matrix */}
                <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
                  <div className="text-[10px] font-mono text-[#4f46e5] uppercase font-bold tracking-wider">
                    SEARCH CAMPAIGN MATRIX
                  </div>
                  <div className="space-y-1.5 text-xs text-[#0f172a]">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-[#0f172a]">1. Intent Keywords</span>
                      <span className="font-mono text-[10px] text-[#64748b]">Commercial / Exact</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-[#0f172a]">2. Ad Group Structuring</span>
                      <span className="font-mono text-[10px] text-[#64748b]">STAG Architecture</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-[#0f172a]">3. GA4 Conversion Sync</span>
                      <span className="font-mono text-[10px] text-[#64748b]">UTM + DebugView</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {digitalMarketingProject.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-[#f8fafc] text-[#64748b] px-2 py-0.5 rounded border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectProject(digitalMarketingProject.id)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#4f46e5] text-[#4f46e5] font-semibold text-xs hover:bg-[#4f46e5] hover:text-white transition-all cursor-pointer mt-2 shadow-2xs"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* PROJECT 05: Safron Café Digital Growth (Portfolio Project) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 hover:border-[#4f46e5]/40 transition-all flex flex-col justify-between group shadow-2xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#4f46e5] bg-[#4f46e5]/10 px-2.5 py-0.5 rounded-full border border-[#4f46e5]/20">
                    PROJECT 05
                  </span>
                  <span className="text-[10px] font-mono text-[#64748b] bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-semibold">
                    PORTFOLIO / CONCEPT
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                  {safronCafeProject.title}
                </h4>

                <p className="text-xs text-[#64748b] leading-relaxed">
                  Local SEO roadmap, Google Business Profile optimization, JSON-LD Schema markup, and GA4 local reservation tracking.
                </p>

                {/* DISTINCT VISUAL: Local SEO Checklist */}
                <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
                  <div className="text-[10px] font-mono text-[#4f46e5] uppercase font-bold tracking-wider">
                    LOCAL FOOT-TRAFFIC ENGINE
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-[#0f172a]">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5]" /> Google Business Profile</span>
                      <span className="font-mono text-[10px] text-[#64748b]">NAP 100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5]" /> Local Schema Data</span>
                      <span className="font-mono text-[10px] text-[#64748b]">JSON-LD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5]" /> GA4 Local Actions</span>
                      <span className="font-mono text-[10px] text-[#64748b]">Get Directions</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {safronCafeProject.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-[#f8fafc] text-[#64748b] px-2 py-0.5 rounded border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectProject(safronCafeProject.id)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#4f46e5] text-[#4f46e5] font-semibold text-xs hover:bg-[#4f46e5] hover:text-white transition-all cursor-pointer mt-2 shadow-2xs"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

