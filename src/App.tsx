import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { SelectedWork } from './components/SelectedWork';
import { HowIThink } from './components/HowIThink';
import { Experience } from './components/Experience';
import { SkillsCertifications } from './components/SkillsCertifications';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CaseStudyView } from './components/CaseStudyView';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('work');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project/')) {
        const projectId = hash.replace('project/', '');
        const projectExists = PROJECTS.some((p) => p.id === projectId);
        if (projectExists) {
          setActiveCaseStudyId(projectId);
          return;
        }
      } else if (hash === 'resume') {
        setIsResumeOpen(true);
      } else if (hash) {
        setActiveCaseStudyId(null);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hash);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveCaseStudyId(null);
    window.location.hash = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleSelectProject = (projectId: string) => {
    setActiveCaseStudyId(projectId);
    window.location.hash = `project/${projectId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveCaseStudyId(null);
    window.location.hash = 'work';
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const activeProject = PROJECTS.find((p) => p.id === activeCaseStudyId);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col font-sans">
      
      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={handleOpenResume}
        activeCaseStudyId={activeCaseStudyId}
        onBackToHome={handleBackToHome}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeProject ? (
          <CaseStudyView
            project={activeProject}
            onBack={handleBackToHome}
          />
        ) : (
          <>
            <Hero
              onViewWork={() => handleNavigate('work')}
              onOpenResume={handleOpenResume}
            />
            <Capabilities />
            <SelectedWork onSelectProject={handleSelectProject} />
            <HowIThink />
            <Experience />
            <SkillsCertifications />
            <About />
            <Contact onOpenResume={handleOpenResume} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Resume View Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
