export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  workflowNodes: string[];
  featured?: boolean;
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  heroTitle: string;
  subtitle: string;
  tags: string[];
  
  // 1. Business Problem & Context
  problemContext: {
    overview: string;
    frictionTitle: string;
    frictionDetails: string;
  };

  // 2. Objective
  objective?: string;

  // 3. Requirements
  requirements?: string[];

  // 4. Existing Process
  existingProcess?: string;

  // 5. Proposed Solution & Role
  proposedSolution?: string;
  roleSteps: Array<{
    stepNumber: number;
    title: string;
    description: string;
  }>;
  roleResponsibilities: string[];

  // 6. Workflow / System Architecture
  architectureNodes: Array<{
    id: string;
    label: string;
    sublabel?: string;
    type: 'user' | 'frontend' | 'backend' | 'logic' | 'integration' | 'output';
  }>;
  architectureDescription: string;
  techStackList: string[];

  // 7. Tools & Integrations
  toolsAndIntegrations?: string[];

  // Section 04: Workflow Breakdown
  workflowDetails: Array<{
    nodeNumber: string;
    title: string;
    description: string;
    iconName?: string;
  }>;

  // 8. Configured Business Rules
  businessRules: Array<{
    title: string;
    description: string;
  }>;

  // 9. Testing & Validation
  validationItems: Array<{
    title: string;
    category: string;
  }>;
  validationDescription: string;

  // 10. Outcome / Current Status
  outcomeBefore: string[];
  outcomeAfter: string[];
  currentStatus?: string;

  // 11. What I Learned
  whatILearned?: string[];
}

export interface Capability {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Stage {
  number: string;
  title: string;
  description: string;
  keyActions: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
}
