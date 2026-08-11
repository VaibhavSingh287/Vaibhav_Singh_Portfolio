import React from 'react';
import { SKILLS_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle, Bot, FileCheck, LineChart, Code2 } from 'lucide-react';

export const SkillsCertifications: React.FC = () => {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "AI & Automation": return <Bot className="w-4 h-4 text-[#4f46e5]" />;
      case "Business Analysis & Systems": return <FileCheck className="w-4 h-4 text-[#4f46e5]" />;
      case "Digital Growth & Analytics": return <LineChart className="w-4 h-4 text-[#4f46e5]" />;
      case "Technical": return <Code2 className="w-4 h-4 text-[#4f46e5]" />;
      default: return <Award className="w-4 h-4 text-[#4f46e5]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#4f46e5] font-semibold mb-1">
              CAPABILITY MATRIX & EDUCATION
            </div>
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Skills & Credentials
            </h2>
          </div>
          <p className="text-sm text-[#64748b] max-w-md">
            Organized into four primary skill groups, verified Google & IBM certifications, and engineering degree.
          </p>
        </div>

        {/* 4 Skill Category Groups */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-[#4f46e5] uppercase font-semibold mb-4 tracking-wider">
            PRIMARY SKILL GROUPS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_CATEGORIES.map((cat, idx) => {
              const isPrimaryLane = cat.category === "AI & Automation" || cat.category === "Business Analysis & Systems";
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 transition-all duration-300 ${
                    isPrimaryLane
                      ? 'bg-white border-[#4f46e5]/40 shadow-sm hover:border-[#4f46e5]'
                      : 'bg-white border-slate-200 hover:border-[#4f46e5]/40 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-100 border border-slate-200">
                        {getCategoryIcon(cat.category)}
                      </div>
                      <h4 className="text-base font-bold text-[#0f172a]">
                        {cat.category}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-[#4f46e5] font-semibold bg-[#4f46e5]/10 px-2.5 py-0.5 rounded-full border border-[#4f46e5]/20">
                      {cat.skills.length} Skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border shadow-xs ${
                          isPrimaryLane
                            ? 'bg-[#f8fafc] text-[#0f172a] border-slate-200 hover:border-[#4f46e5]/50'
                            : 'bg-[#f8fafc] text-[#64748b] border-slate-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications and Education Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certifications */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#4f46e5]" />
              <h3 className="text-xs font-mono text-[#4f46e5] uppercase font-semibold tracking-wider">
                PROFESSIONAL CERTIFICATIONS
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 hover:border-[#4f46e5]/40 transition-colors shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#4f46e5]/10 border border-[#4f46e5]/20 flex items-center justify-center text-[#4f46e5] shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f172a]">{cert.title}</div>
                    {cert.issuer && (
                      <div className="text-[11px] text-[#64748b] font-mono mt-0.5">{cert.issuer}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#4f46e5]" />
              <h3 className="text-xs font-mono text-[#4f46e5] uppercase font-semibold tracking-wider">
                EDUCATION
              </h3>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="text-sm font-extrabold text-[#0f172a]">
                {EDUCATION.degree}
              </div>
              <div className="text-xs text-[#64748b] font-semibold">
                {EDUCATION.institution}
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#64748b] pt-3 border-t border-slate-200">
                <span>Graduated {EDUCATION.year}</span>
                {EDUCATION.grade && <span className="font-semibold text-[#4f46e5]">{EDUCATION.grade}</span>}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
