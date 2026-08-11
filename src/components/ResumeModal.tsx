import React, { useState } from 'react';
import { X, Download, Copy, Check, Printer, ExternalLink, FileText, Calendar, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const fullResumeText = `VAIBHAV SINGH
${PERSONAL_INFO.title}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFILE SUMMARY
AI Automation and Operations professional with a Computer Science Engineering background and hands-on experience designing, coordinating, and validating AI-powered workflow systems that reduce repetitive manual work. Skilled in translating business requirements into scalable automation architectures across service reporting pipelines, enterprise job management platforms, Google Workspace APIs, cloud-ready systems, and AI-assisted implementation workflows. Strong experience in solution architecture, process mapping, workflow design, stakeholder management, UAT, system validation, SEO technology, and cross-functional delivery coordination.

WORK EXPERIENCE
SEO and AI Automation Coordinator – Bhatia Brothers (Sep 2025 – Present)
• Led solution architecture and delivery coordination for an enterprise Job Card Management platform covering workflow mapping, RBAC planning, authentication flows, pricing logic, and Azure App Services deployment readiness.
• Gathered and translated business requirements into structured workflows, automation logic, approval rules, and system documentation for AI-assisted implementation.
• Designed service workflow and pricing rules including Warranty/AMC handling and Breakdown Call routing to align billing with business requirements.
• Coordinated AI-assisted implementation across React/Vite frontend, Node.js/Express backend, and PostgreSQL — validating system behaviour against approved business logic.
• Performed API testing, manual QA, and UAT using Postman and structured test scenarios to verify workflow accuracy, pricing calculations, role permissions, and document outputs.
• Validated deployment readiness by reviewing PDF/Excel exports, frontend build status, TypeScript compilation, service charge logic, and role-based access before production reviews.
• Built and coordinated an AI-based B2B Lead Generation Agent to automate lead discovery, validation, data structuring, and CRM-ready database preparation.
• Conducted technical SEO audits and created GA4 and Google Looker Studio dashboards for marketing and operational reporting.

Backend Developer Intern – CoinDCX (Feb 2023 – May 2023)
• Contributed to backend feature development in Ruby on Rails for a high-traffic cryptocurrency trading platform.
• Optimized PostgreSQL queries to improve response times and assisted in debugging production issues in an Agile/Scrum environment.
• Supported platform stability and helped deliver backend features during the internship period.

PROJECTS
• AI-Based B2B Lead Generation Agent: Built an end-to-end automated pipeline to discover, validate, and store B2B leads from multiple sources into a structured database. Integrated Google Workspace APIs with AI logic.
• Job Card AI Automation System: Developed an automated workflow for service intake to pricing validation to report generation using Google Sheets, Docs, and Drive APIs with rule-based pricing logic.
• SEO & Analytics Audit: Conducted baseline SEO and analytics audits covering Core Web Vitals, metadata, mobile responsiveness, page speed, GA4 and Google Search Console setup.

EDUCATION
B.Tech / B.E. in Computer Science and Engineering (CSE), Chandigarh University, Mohali (2022) | Grade: 6.2/10

CERTIFICATIONS
• Google Digital Marketing & E-commerce
• IBM Data Science Professional Certificate
• Cloud Computing – IIT Kharagpur
• Google IT Support Professional Certificate
• The Complete Digital Marketing Guide
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#f8fafc] text-[#0f172a] flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#4f46e5]" />
            <span className="font-bold text-sm tracking-tight font-mono text-[#4f46e5]">VAIBHAV_SINGH_RESUME.PDF</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 border border-slate-200 text-[#0f172a] transition-colors cursor-pointer shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#4f46e5]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#4f46e5] hover:bg-[#4338ca] text-white transition-colors cursor-pointer shadow-md shadow-[#4f46e5]/25"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume Canvas */}
        <div className="p-8 sm:p-10 overflow-y-auto font-sans space-y-6 text-[#64748b] bg-[#f8fafc]">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-[#4f46e5] mt-1 font-mono">
              SEO and AI Automation Coordinator · AI Automation & Business Systems
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-[#64748b] mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#4f46e5]" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#4f46e5]" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#4f46e5]" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1 text-[#4f46e5]">
                <Linkedin className="w-3.5 h-3.5" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-[#0f172a]">
                  LinkedIn Profile
                </a>
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#4f46e5] uppercase tracking-widest border-b border-slate-200 pb-1">
              PROFILE SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              AI Automation and Operations professional with a Computer Science Engineering background and hands-on experience designing, coordinating, and validating AI-powered workflow systems that reduce repetitive manual work. Skilled in translating business requirements into scalable automation architectures across service reporting pipelines, enterprise job management platforms, Google Workspace APIs, cloud-ready systems, and AI-assisted implementation workflows. Strong experience in solution architecture, process mapping, workflow design, stakeholder management, UAT, system validation, SEO technology, and cross-functional delivery coordination.
            </p>
          </div>

          {/* Skills Tag Cloud */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#4f46e5] uppercase tracking-widest border-b border-slate-200 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {[
                "AI Automation", "Workflow Architecture", "Prompt Engineering", "n8n", "Google Workspace APIs", "Postman", "Google Analytics (GA4)", "Google Looker Studio", "Semrush", "SEO", "Google Ads", "Meta Ads Manager", "PostgreSQL", "React", "Node.js"
              ].map((skill, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-[#0f172a] font-mono text-[11px] shadow-2xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-[#4f46e5] uppercase tracking-widest border-b border-slate-200 pb-1">
              WORK EXPERIENCE
            </h2>

            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-[#0f172a]">
                  <span>{exp.role} – {exp.company}</span>
                  <span className="font-mono text-[#4f46e5] font-normal">{exp.period}</span>
                </div>
                <ul className="space-y-1 pl-4 list-disc text-xs text-[#64748b] leading-relaxed">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#4f46e5] uppercase tracking-widest border-b border-slate-200 pb-1">
              KEY PROJECTS
            </h2>

            {PROJECTS.map((p) => (
              <div key={p.id} className="text-xs space-y-1">
                <div className="font-bold text-[#0f172a]">{p.title}</div>
                <p className="text-[#64748b] leading-relaxed">{p.caseStudy.problemContext.overview}</p>
              </div>
            ))}
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-[#4f46e5] uppercase tracking-widest border-b border-slate-200 pb-1">
                CERTIFICATIONS
              </h2>
              <ul className="space-y-1 text-xs text-[#64748b] list-disc pl-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx}>{cert.title}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-[#4f46e5] uppercase tracking-widest border-b border-slate-200 pb-1">
                EDUCATION
              </h2>
              <div className="text-xs text-[#64748b]">
                <div className="font-bold text-[#0f172a]">{EDUCATION.degree}</div>
                <div>{EDUCATION.institution} ({EDUCATION.year})</div>
                <div className="text-[#4f46e5] font-mono mt-0.5">{EDUCATION.grade}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#f8fafc] border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white border border-slate-200 hover:border-[#4f46e5] text-[#0f172a] font-semibold text-xs transition-colors cursor-pointer shadow-2xs"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};
