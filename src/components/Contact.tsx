import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Phone, MapPin, FileText, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Contact Messaging */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4f46e5]/10 border border-[#4f46e5]/20 text-[#4f46e5] font-mono text-xs font-semibold">
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                Have a process worth automating?
              </h2>

              <p className="text-sm sm:text-base text-[#64748b] max-w-xl leading-relaxed">
                I'm open for opportunities involving AI automation, business systems, workflow architecture, API testing, UAT, and digital growth analytics.
              </p>

              {/* Direct Info List */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-[#4f46e5]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#0f172a]">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-[#f8fafc] hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer border border-slate-200"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#4f46e5]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-[#4f46e5]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#0f172a]">{PERSONAL_INFO.phone}</span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg bg-[#f8fafc] hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer border border-slate-200"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#4f46e5]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-[#4f46e5]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#0f172a]">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Role%20/%20Project%20Inquiry%20-%20Vaibhav%20Singh`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#4f46e5] text-white font-bold text-xs sm:text-sm hover:bg-[#4338ca] transition-all shadow-md shadow-[#4f46e5]/25 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-[#0f172a] font-bold text-xs sm:text-sm hover:border-[#4f46e5] transition-all cursor-pointer shadow-2xs"
                >
                  <Linkedin className="w-4 h-4 text-[#4f46e5]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#64748b]" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-[#64748b] hover:text-[#0f172a] font-bold text-xs sm:text-sm hover:border-[#4f46e5] transition-all cursor-pointer shadow-2xs"
                >
                  <FileText className="w-4 h-4 text-[#4f46e5]" />
                  <span>Download Resume</span>
                </button>
              </div>

            </div>

            {/* Right Interactive Quick Inquiry Form */}
            <div className="lg:col-span-5 bg-[#f8fafc] p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-[#0f172a] mb-1">
                Direct Role or Project Inquiry
              </h3>
              <p className="text-xs text-[#64748b] mb-4 font-mono">
                Send a message directly regarding automation roles or opportunities.
              </p>

              {messageSent ? (
                <div className="p-4 rounded-xl bg-[#4f46e5]/10 border border-[#4f46e5]/20 text-[#4f46e5] text-xs space-y-2">
                  <div className="font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#4f46e5]" />
                    <span>Inquiry Prepared</span>
                  </div>
                  <p className="text-[#64748b]">
                    Thank you! You can also email directly at <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-bold text-[#0f172a]">{PERSONAL_INFO.email}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono text-[#64748b] mb-1">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Solutions Director"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0f172a] focus:outline-none focus:border-[#4f46e5] bg-white shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#64748b] mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0f172a] focus:outline-none focus:border-[#4f46e5] bg-white shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#64748b] mb-1">Workflow / Role Details *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We are looking for an AI Automation Specialist for workflow mapping and API testing..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0f172a] focus:outline-none focus:border-[#4f46e5] bg-white shadow-2xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-full bg-[#4f46e5] text-white font-bold text-xs hover:bg-[#4338ca] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#4f46e5]/25 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Start a Conversation</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
