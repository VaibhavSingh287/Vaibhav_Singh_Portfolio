import { Project, Capability, Stage, ExperienceItem, SkillCategory, Certification, Education } from '../types';

export const PERSONAL_INFO = {
  name: "VAIBHAV SINGH",
  title: "AI Automation & Business Systems Specialist",
  statusLabel: "Open for AI Automation & Business Systems opportunities",
  primaryHeadline: "I design AI-powered workflows that turn messy business processes into reliable systems.",
  supportingPositioning: "AI Automation · Workflow Architecture · Business Analysis · API Testing · UAT",
  location: "Mumbai, India",
  email: "vs.vaibhavsingh287@gmail.com",
  phone: "+91-9967715740",
  linkedin: "https://www.linkedin.com/in/vaibhavsingh287/",
  aboutBio: "Computer Science Engineer bridging business requirements and technical execution. I enjoy taking unclear business problems, breaking them into structured requirements, and turning them into systems that people can actually use. My background spans AI automation, business systems, workflow design, and digital analytics."
};

export const CAPABILITIES: Capability[] = [
  {
    id: "ai-automation",
    name: "AI Automation",
    description: "Designing intelligent multi-step automation sequences using AI reasoning, n8n, and custom API pipelines.",
    icon: "Bot"
  },
  {
    id: "workflow-architecture",
    name: "Workflow Architecture",
    description: "Mapping end-to-end operational paths from initial intake through state changes, approvals, and outputs.",
    icon: "GitBranch"
  },
  {
    id: "requirements-gathering",
    name: "Requirements Gathering",
    description: "Translating stakeholder constraints and messy operational needs into formal technical specifications.",
    icon: "FileCheck"
  },
  {
    id: "process-mapping",
    name: "Process Mapping",
    description: "Visualizing complex business rules, exception logic, and RBAC permission models.",
    icon: "Network"
  },
  {
    id: "api-testing",
    name: "API Testing",
    description: "Validating API endpoints, payload structures, and response handling using Postman and structured test suites.",
    icon: "Terminal"
  },
  {
    id: "uat",
    name: "UAT & QA",
    description: "Conducting user acceptance testing to verify calculation logic, document exports, and role permissions.",
    icon: "CheckCircle2"
  },
  {
    id: "google-workspace-apis",
    name: "Google Workspace APIs",
    description: "Integrating Google Sheets, Drive, and Docs APIs to deliver document generation and reporting pipelines.",
    icon: "Layers"
  },
  {
    id: "ai-assisted-implementation",
    name: "AI-Assisted Implementation",
    description: "Coordinating rapid AI-assisted development across full-stack React, Node.js, and PostgreSQL environments.",
    icon: "Cpu"
  }
];

export const STAGES: Stage[] = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business problem, user pain points, operational workflows, and technical constraints.",
    keyActions: ["Stakeholder interviews", "Pain point cataloging", "Constraint identification"]
  },
  {
    number: "02",
    title: "Map",
    description: "Convert informal business procedures and manual actions into structured, explicit process diagrams.",
    keyActions: ["Flowchart drafting", "Decision-tree modeling", "Exception pathway design"]
  },
  {
    number: "03",
    title: "Design",
    description: "Define technical requirements, business pricing/approval rules, data schemas, and integration points.",
    keyActions: ["RBAC planning", "Rule matrix definition", "API payload specifications"]
  },
  {
    number: "04",
    title: "Automate",
    description: "Leverage AI models, custom APIs, Google Workspace hooks, and automation engines where they deliver reliability.",
    keyActions: ["API integration", "AI prompt engineering", "Pipeline script execution"]
  },
  {
    number: "05",
    title: "Validate",
    description: "Perform API testing, manual QA, calculation scenario checks, and rigorous User Acceptance Testing (UAT).",
    keyActions: ["Postman endpoint validation", "Pricing scenario verification", "Export output auditing"]
  },
  {
    number: "06",
    title: "Improve",
    description: "Monitor system execution, identify operational bottlenecks, refine rules, and optimize system readiness.",
    keyActions: ["Error log reviews", "User feedback iterations", "Deployment readiness checks"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "job-card-ai-automation",
    number: "01",
    title: "Job Card AI Automation System",
    subtitle: "Enterprise Workflow Automation for Service Management",
    description: "An automated workflow covering service intake, pricing validation, approval logic, and document report generation.",
    tags: ["AI Automation", "Workflow Design", "Google Workspace APIs", "Business Rules", "UAT"],
    workflowNodes: ["Service Intake", "Pricing Rules", "Approval Logic", "Report Generation"],
    featured: true,
    caseStudy: {
      heroTitle: "Job Card AI Automation System",
      subtitle: "Enterprise workflow automation for service management.",
      tags: ["AI Automation", "Workflow Design", "Google Workspace APIs", "PostgreSQL", "React/Node.js"],
      problemContext: {
        overview: "Service intake and management relied on manual process coordination across disjointed communication channels, requiring repetitive validation and manual calculation across diverse pricing agreements.",
        frictionTitle: "Process Friction",
        frictionDetails: "Manual price rule applications, slow turnaround during job status updates, and lack of structured approval tracking created operational friction across breakdown and standard maintenance service requests."
      },
      objective: "Build a centralized, reliable system to automate service job intake, validate pricing against AMC/Warranty contracts, enforce multi-tier approval rules, and generate structured job cards via Google Workspace APIs.",
      requirements: [
        "Structured service intake forms with field validation",
        "Automated contract evaluation (AMC, Warranty, Standard Charge)",
        "Emergency breakdown call priority routing pathway",
        "Role-Based Access Control (RBAC) for field technicians and service managers",
        "Automated document generation (PDF/Excel) synced to Google Drive",
        "Postman API test coverage for all endpoint logic"
      ],
      existingProcess: "Paper service slips and WhatsApp messages were manually transferred into spreadsheets. Technicians manually looked up contract pricing, leading to calculation discrepancies and delayed customer billing.",
      proposedSolution: "Architected a full-stack web system with an automated rule engine. The application validates service charges against customer contract status in PostgreSQL, routes approvals according to cost thresholds, and triggers Google Workspace APIs for instant PDF/Excel job card creation.",
      roleSteps: [
        { stepNumber: 1, title: "Requirements", description: "Gathered & translated business requirements into explicit technical specifications." },
        { stepNumber: 2, title: "Workflow Design", description: "Mapped end-to-end service job lifecycles and exception routes." },
        { stepNumber: 3, title: "Business Rules", description: "Configured AMC/Warranty rules, service charge tiers, and approval routing." },
        { stepNumber: 4, title: "AI Implementation", description: "Coordinated AI-assisted development across React/Vite, Express, and PostgreSQL." },
        { stepNumber: 5, title: "API Testing", description: "Executed Postman API testing for endpoints and permission rules." },
        { stepNumber: 6, title: "UAT & QA", description: "Performed User Acceptance Testing to verify pricing and PDF/Excel exports." }
      ],
      roleResponsibilities: [
        "Gathered and translated business requirements into structured workflows, automation logic, approval rules, and system documentation for AI-assisted implementation.",
        "Designed service workflow and pricing rules including Warranty/AMC handling and Breakdown Call routing to align billing with business requirements.",
        "Coordinated AI-assisted implementation across React/Vite frontend, Node.js/Express backend, and PostgreSQL — validating system behavior against approved business logic.",
        "Performed API testing, manual QA, and UAT using Postman and structured test scenarios to verify workflow accuracy, pricing calculations, role permissions, and document outputs.",
        "Validated deployment readiness by reviewing PDF/Excel exports, frontend build status, TypeScript compilation, service charge logic, and role-based access before production reviews."
      ],
      architectureNodes: [
        { id: "1", label: "User / Admin", sublabel: "Service Desk & Technicians", type: "user" },
        { id: "2", label: "Frontend", sublabel: "React + Vite SPA", type: "frontend" },
        { id: "3", label: "Backend API", sublabel: "Node.js + Express Server", type: "backend" },
        { id: "4", label: "Business Logic", sublabel: "Pricing & Approval Rules", type: "logic" },
        { id: "5", label: "Integrations & DB", sublabel: "PostgreSQL & Workspace APIs", type: "integration" },
        { id: "6", label: "Outputs", sublabel: "PDF / Excel Reports", type: "output" }
      ],
      architectureDescription: "The architecture routes service intake from the React/Vite client through Express API endpoints. The core business logic layer validates pricing rules against PostgreSQL database tables and triggers Google Workspace APIs (Sheets, Drive, Docs) to output structured Job Cards, PDFs, and Excel exports.",
      techStackList: ["React / Vite", "Node.js / Express", "PostgreSQL", "Google Workspace APIs (Sheets, Docs, Drive)", "Postman", "TypeScript"],
      toolsAndIntegrations: ["Google Sheets API", "Google Drive API", "Google Docs API", "Postman", "PostgreSQL", "Express.js", "React / Vite"],
      workflowDetails: [
        { nodeNumber: "01", title: "Service Intake", description: "Structure the incoming information required for the service job, including client details, equipment identifiers, and issue descriptions.", iconName: "ClipboardList" },
        { nodeNumber: "02", title: "Pricing Validation", description: "Apply defined service and pricing rules automatically based on active contract terms, AMC coverage, and parts catalog lists.", iconName: "Calculator" },
        { nodeNumber: "03", title: "Approval Logic", description: "Handle multi-stage approval requirements based on configured business rules and job cost thresholds before execution.", iconName: "ShieldCheck" },
        { nodeNumber: "04", title: "Report Generation", description: "Generate structured, validated PDF / Excel job card reports and archive them directly to Google Drive via Workspace APIs.", iconName: "FileSpreadsheet" }
      ],
      businessRules: [
        { title: "WARRANTY / AMC", description: "Handling of warranty and Annual Maintenance Contract (AMC) service conditions to determine billing eligibility." },
        { title: "BREAKDOWN CALLS", description: "Workflow handling and priority routing for emergency breakdown service requests." },
        { title: "SERVICE CHARGES", description: "Defined service pricing and charge logic calculated systematically based on work item categories." },
        { title: "APPROVAL LOGIC", description: "Approval rules configured according to business requirements and manager access roles." }
      ],
      validationItems: [
        { title: "Postman API Testing", category: "API Validation" },
        { title: "Manual QA Execution", category: "Quality Assurance" },
        { title: "Workflow End-to-End Validation", category: "System Logic" },
        { title: "Role Permission Testing (RBAC)", category: "Security & Access" },
        { title: "Pricing Calculation Validation", category: "Business Rules" },
        { title: "PDF / Excel Output Validation", category: "Document Export" }
      ],
      validationDescription: "Rigorous testing protocols ensured the integrity of complex pricing rules, RBAC access controls, and document generation before deployment reviews.",
      outcomeBefore: [
        "Manual, unstructured service intake communications",
        "Manual pricing calculation across varied agreement terms",
        "Manual document creation and formatting for service job cards",
        "Separate manual verification of system records and exports"
      ],
      outcomeAfter: [
        "Structured digital workflow intake with input validation",
        "Rules-based pricing logic automatically applied",
        "Automated PDF/Excel report generation via Google Workspace APIs",
        "Validated role-based access permissions and document accuracy"
      ],
      currentStatus: "Validated production-ready system prototype.",
      whatILearned: [
        "Designing systems for real-world operations requires accounting for business edge-cases (AMC vs Breakdown vs Warranty) before writing code.",
        "Rigorous Postman testing and UAT scenario mapping save hours of refactoring downstream.",
        "Google Workspace APIs provide an accessible, low-friction reporting pipeline for operational teams."
      ]
    }
  },
  {
    id: "b2b-lead-generation-agent",
    number: "02",
    title: "AI-Based B2B Lead Generation Agent",
    subtitle: "Automated Lead Discovery, Validation, and CRM Pipeline",
    description: "An end-to-end automated pipeline to discover, validate, and structure B2B leads into CRM-ready data.",
    tags: ["AI Automation", "Lead Generation", "APIs", "Data Processing", "Workflow Design"],
    workflowNodes: ["Lead Discovery", "Validation", "AI Processing", "Structured Data", "CRM-ready Output"],
    featured: true,
    caseStudy: {
      heroTitle: "AI-Based B2B Lead Generation Agent",
      subtitle: "Automated lead discovery, validation, and CRM pipeline.",
      tags: ["AI Automation", "Lead Generation", "Google Workspace APIs", "PostgreSQL", "Workflow Architecture"],
      problemContext: {
        overview: "B2B sales and prospecting teams spend excessive hours manually locating potential lead records, checking contact validity, and organizing disjointed data into target databases.",
        frictionTitle: "Process Friction",
        frictionDetails: "Inconsistent lead schemas, unvalidated contact data, and time-consuming manual copy-paste workflows into CRM tools create data quality issues and slow down outreach campaigns."
      },
      objective: "Build an automated agent that systematically discovers company leads, validates domain health, normalizes data using structured AI prompts, and syncs clean datasets directly into PostgreSQL and Google Sheets.",
      requirements: [
        "Multi-source web discovery criteria configuration",
        "Domain syntax and deduplication validation routines",
        "AI entity normalization (company size, industry tags, primary contact)",
        "Automated Google Workspace API synchronization for CRM readiness",
        "Database schema mapping for clean PostgreSQL storage"
      ],
      existingProcess: "Sales reps manually searched web directories, copied raw contact details into unstandardized spreadsheets, and frequently uploaded duplicate or malformed records into outreach tools.",
      proposedSolution: "Engineered an end-to-end automated pipeline combining multi-stage retrieval scripts, custom AI prompt formatting for field extraction, domain health validation, and Google Workspace API sync.",
      roleSteps: [
        { stepNumber: 1, title: "Objective Definition", description: "Identified target B2B data fields and CRM ingestion schemas." },
        { stepNumber: 2, title: "Discovery Rules", description: "Configured multi-source automated lead retrieval rules." },
        { stepNumber: 3, title: "Validation Logic", description: "Designed domain and schema compliance checks." },
        { stepNumber: 4, title: "AI Processing", description: "Integrated AI logic for entity extraction and field normalization." },
        { stepNumber: 5, title: "Workspace Integration", description: "Connected Google Workspace APIs for database synchronization." },
        { stepNumber: 6, title: "Pipeline Testing", description: "Validated output schemas and CRM database readiness." }
      ],
      roleResponsibilities: [
        "Built and coordinated an end-to-end automated pipeline to discover, validate, and store B2B leads from multiple sources into a structured database.",
        "Integrated Google Workspace APIs with AI logic and designed CRM-ready output schemas to improve prospecting efficiency.",
        "Defined data extraction criteria, domain validation routines, and structured formatting rules for clean database storage.",
        "Validated schema consistency across contact fields, industry classification, and location attributes prior to CRM exports."
      ],
      architectureNodes: [
        { id: "1", label: "Multi-Source Intake", sublabel: "Public Business Directories & Search", type: "user" },
        { id: "2", label: "Lead Discovery Agent", sublabel: "Automated Retrieval Pipeline", type: "frontend" },
        { id: "3", label: "Validation Engine", sublabel: "Domain & Schema Verification", type: "logic" },
        { id: "4", label: "AI Structuring Logic", sublabel: "Entity Normalization & Tagging", type: "backend" },
        { id: "5", label: "Google Workspace APIs", sublabel: "Sheets Sync & Pipeline Hooks", type: "integration" },
        { id: "6", label: "Structured Database", sublabel: "CRM-Ready Dataset / PostgreSQL", type: "output" }
      ],
      architectureDescription: "The pipeline retrieves raw company data, executes automated validation rules, runs AI structuring logic to normalize business fields, and stores structured lead objects directly into PostgreSQL and Google Workspace spreadsheets for CRM ingestion.",
      techStackList: ["AI Logic / Prompt Engineering", "Google Workspace APIs", "PostgreSQL", "Node.js", "n8n / Pipeline Automation"],
      toolsAndIntegrations: ["Google Workspace APIs", "PostgreSQL", "Gemini AI Logic", "Node.js", "n8n Pipeline Engine"],
      workflowDetails: [
        { nodeNumber: "01", title: "Lead Discovery", description: "Discover potential B2B target entities from configured industry sources and public web registries.", iconName: "Search" },
        { nodeNumber: "02", title: "Validation", description: "Execute domain verification, syntax checks, and deduplication to ensure record cleanliness.", iconName: "ShieldAlert" },
        { nodeNumber: "03", title: "AI Processing", description: "Extract key contact fields, company size metrics, and industry tags using structured AI prompts.", iconName: "Sparkles" },
        { nodeNumber: "04", title: "Data Structuring", description: "Normalize information into standardized relational schemas matching CRM data model expectations.", iconName: "Database" },
        { nodeNumber: "05", title: "CRM-Ready Output", description: "Output clean, formatted lead records into structured database tables and Google Sheets pipelines.", iconName: "ArrowUpRight" }
      ],
      businessRules: [
        { title: "DEDUPLICATION", description: "Cross-checks domain names and company titles against database records to prevent duplicate records." },
        { title: "FIELD COMPLETENESS", description: "Enforces mandatory requirements for company name, website domain, and primary contact category." },
        { title: "SCHEMA STANDARDIZATION", description: "Transforms arbitrary string descriptions into standardized industry tags and geographic fields." },
        { title: "WORKSPACE SYNC", description: "Automatically populates Google Sheets tables formatted for direct CRM import workflows." }
      ],
      validationItems: [
        { title: "Multi-Source Discovery Verification", category: "Data Retrieval" },
        { title: "Domain & Email Syntax Checks", category: "Validation Rules" },
        { title: "AI Field Normalization Testing", category: "AI Logic" },
        { title: "Database Schema Compliance", category: "Data Integrity" },
        { title: "Google Workspace API Sync Verification", category: "Integration" },
        { title: "CRM Export Format Audit", category: "Output QA" }
      ],
      validationDescription: "Comprehensive test scenarios confirmed data schema compliance, field accuracy, and seamless synchronization with Google Workspace storage.",
      outcomeBefore: [
        "Manual web search and manual copy-paste of company information",
        "Unverified lead records with missing or inconsistent fields",
        "Disjointed spreadsheets lacking common schema definitions",
        "Significant human effort required before records could be loaded into CRMs"
      ],
      outcomeAfter: [
        "End-to-end automated lead discovery and validation pipeline",
        "AI-structured datasets with consistent field categorization",
        "Automated Google Workspace API synchronization into database storage",
        "Validated CRM-ready output schemas prepared for sales execution"
      ],
      currentStatus: "Working validated pipeline agent.",
      whatILearned: [
        "Prompt engineering alone is insufficient for enterprise data pipelines; rigid schema validation rules and domain checks are mandatory.",
        "Automating data cleaning at intake prevents downstream CRM degradation and wasted sales outreach."
      ]
    }
  },
  {
    id: "seo-analytics-audit",
    number: "03",
    title: "SEO & Analytics Audit",
    subtitle: "Technical Performance, GA4 & Google Looker Studio Reporting",
    description: "Technical SEO and analytics audit covering Core Web Vitals, metadata, mobile responsiveness, page speed, GA4, and Google Search Console.",
    tags: ["SEO", "GA4", "Google Search Console", "Looker Studio", "Analytics"],
    workflowNodes: ["Technical Crawl", "Core Web Vitals", "GA4 Configuration", "Looker Dashboards", "Growth Roadmap"],
    featured: true,
    caseStudy: {
      heroTitle: "SEO & Analytics Audit",
      subtitle: "Technical SEO, GA4 setup, and operational analytics dashboards.",
      tags: ["Technical SEO", "GA4", "Google Search Console", "Looker Studio", "Analytics"],
      problemContext: {
        overview: "Organizations often lack clear visibility into organic search performance, technical site health bottlenecks, and accurate user conversion paths due to incomplete analytics configurations.",
        frictionTitle: "Process Friction",
        frictionDetails: "Unindexed technical errors, unmonitored Core Web Vitals regressions, and fragmented reporting tools make it difficult for stakeholders to measure digital performance."
      },
      objective: "Perform a end-to-end technical SEO crawl, resolve indexing issues, configure custom GA4 conversion event tracking, and build interactive Google Looker Studio dashboards for stakeholder reporting.",
      requirements: [
        "Comprehensive site crawl for technical SEO errors (canonical tags, 404s, robots.txt)",
        "Core Web Vitals diagnostic (LCP, CLS, FID/INP)",
        "GA4 property configuration & custom event tracking (form submits, phone clicks, downloads)",
        "Google Search Console property linking and XML sitemap verification",
        "Executive Looker Studio dashboard with blended search and analytics metrics"
      ],
      existingProcess: "Marketing and management reviewed disparate, unverified reports with no unified view of search rankings, site speed regressions, or actual conversion metrics.",
      proposedSolution: "Established a structured technical audit framework. Audited site metadata and Core Web Vitals, implemented custom event streams in GA4, linked Search Console data, and synthesized real-time operational metrics into Looker Studio.",
      roleSteps: [
        { stepNumber: 1, title: "Technical Crawl", description: "Executed baseline SEO audits covering indexing, tags, and page speed." },
        { stepNumber: 2, title: "Core Web Vitals", description: "Evaluated LCP, CLS, and mobile responsiveness performance metrics." },
        { stepNumber: 3, title: "Analytics Audit", description: "Audited Google Analytics 4 (GA4) event streams and conversion definitions." },
        { stepNumber: 4, title: "Search Console Setup", description: "Configured Google Search Console properties and XML sitemap submissions." },
        { stepNumber: 5, title: "Dashboard Creation", description: "Designed custom Google Looker Studio operational dashboards." },
        { stepNumber: 6, title: "Growth Roadmap", description: "Delivered prioritized technical and on-page recommendations." }
      ],
      roleResponsibilities: [
        "Conducted baseline SEO and analytics audits covering Core Web Vitals, metadata, mobile responsiveness, page speed, GA4, and Google Search Console setup.",
        "Created a growth roadmap with prioritized technical and on-page recommendations for improved discoverability and tracking.",
        "Built interactive GA4 and Google Looker Studio dashboards for marketing and operational reporting."
      ],
      architectureNodes: [
        { id: "1", label: "Web Assets", sublabel: "Client Site & Landing Pages", type: "user" },
        { id: "2", label: "Crawler & Audit Tools", sublabel: "Semrush & Speed Tools", type: "frontend" },
        { id: "3", label: "Google Search Console", sublabel: "Indexing & Query Data", type: "integration" },
        { id: "4", label: "GA4 Property", sublabel: "Event Tracking & User Journeys", type: "logic" },
        { id: "5", label: "Looker Studio Engine", sublabel: "Data Blend & Metrics Modeling", type: "backend" },
        { id: "6", label: "Executive Dashboards", sublabel: "Operational & Traffic Reports", type: "output" }
      ],
      architectureDescription: "Data flows from client web properties into Google Analytics 4 and Google Search Console. Looker Studio aggregates event streams and search queries into visual operational dashboards for real-time performance tracking.",
      techStackList: ["Google Analytics (GA4)", "Google Search Console", "Google Looker Studio", "Semrush", "Technical SEO Audit Frameworks"],
      toolsAndIntegrations: ["Google Analytics 4 (GA4)", "Google Search Console", "Google Looker Studio", "Semrush", "Google Tag Manager"],
      workflowDetails: [
        { nodeNumber: "01", title: "Problem Definition", description: "Audit baseline organic discoverability and identify missing technical tracking structures.", iconName: "SearchCode" },
        { nodeNumber: "02", title: "Technical Audit", description: "Review metadata, canonical tags, mobile responsiveness, and page speed metrics.", iconName: "Gauge" },
        { nodeNumber: "03", title: "Findings Analysis", description: "Catalog indexing issues, mobile layout shifts, and missing GA4 event triggers.", iconName: "BarChart3" },
        { nodeNumber: "04", title: "Recommendations", description: "Develop a prioritized roadmap targeting critical technical fixes and content structures.", iconName: "ListOrdered" },
        { nodeNumber: "05", title: "Analytics Setup", description: "Configure custom event tracking in GA4 and establish property links in Google Search Console.", iconName: "Settings" },
        { nodeNumber: "06", title: "Reporting Dashboards", description: "Build interactive Looker Studio dashboards providing transparent operational insights.", iconName: "LayoutDashboard" }
      ],
      businessRules: [
        { title: "INDEXING COMPLIANCE", description: "Ensures valid XML sitemaps, robots.txt directives, and canonical tags across all page templates." },
        { title: "PERFORMANCE THRESHOLDS", description: "Benchmarking page speed and Core Web Vitals against Search Console standards." },
        { title: "EVENT STANDARDIZATION", description: "Defines consistent GA4 event naming conventions for user interactions and key actions." },
        { title: "OPERATIONAL DASHBOARDS", description: "Translates complex web metrics into clean, digestible Looker Studio visualizations." }
      ],
      validationItems: [
        { title: "XML Sitemap & Indexing Audit", category: "Technical SEO" },
        { title: "Mobile Responsiveness & Layout Checks", category: "UX & Speed" },
        { title: "Core Web Vitals Metric Assessment", category: "Performance" },
        { title: "GA4 Custom Event Trigger Verification", category: "Analytics" },
        { title: "Google Search Console Data Validation", category: "Search Metrics" },
        { title: "Looker Studio Field Blending Checks", category: "Reporting" }
      ],
      validationDescription: "Detailed verification of analytics tag firing, event payload integrity, and Search Console data synchronization.",
      outcomeBefore: [
        "Unindexed pages and unmonitored technical performance errors",
        "Incomplete GA4 configuration with missing event conversions",
        "Lack of centralized reporting dashboards for operational metrics",
        "Ad-hoc SEO changes without a structured growth roadmap"
      ],
      outcomeAfter: [
        "Comprehensive technical SEO roadmap with prioritized fixes",
        "Clean GA4 property configuration with verified event tracking",
        "Interactive Google Looker Studio dashboards for real-time visibility",
        "Clear baseline documentation for ongoing operational monitoring"
      ],
      currentStatus: "Completed technical audit & live Looker Studio reporting framework.",
      whatILearned: [
        "Data accuracy in analytics depends on precise event definition at the frontend layer.",
        "Building Looker Studio dashboards requires clean underlying GA4 schemas rather than superficial visual tweaks."
      ]
    }
  },
  {
    id: "digital-marketing-campaign-analysis",
    number: "04",
    title: "Digital Marketing & Campaign Analysis",
    subtitle: "Search Marketing Strategy, Keyword Clustering, and Paid Campaign Tracking",
    description: "Structured search marketing framework focusing on intent keyword research, Google & Meta ad structures, landing page alignment, and GA4 attribution.",
    tags: ["Digital Marketing", "Google Ads", "Meta Ads", "Keyword Research", "GA4"],
    workflowNodes: ["Intent Research", "Keyword Clustering", "Ad Group Structure", "Landing Page Alignment", "GA4 Attribution"],
    featured: false,
    caseStudy: {
      heroTitle: "Digital Marketing & Campaign Analysis",
      subtitle: "Search marketing strategy, keyword clustering, and campaign measurement.",
      tags: ["Digital Marketing", "Google Ads", "Meta Ads Manager", "GA4", "Search Strategy"],
      problemContext: {
        overview: "Digital acquisition campaigns often suffer from inefficient spend due to broad keyword matching, disconnected ad copy, unaligned landing pages, and unmonitored conversion pathways.",
        frictionTitle: "Campaign Friction",
        frictionDetails: "High cost-per-click without conversion visibility, negative keyword leakage, and lack of clear intent mapping across paid and organic channels."
      },
      objective: "Develop a structured campaign planning and measurement framework that maps high-intent search queries directly to dedicated ad messaging and landing page actions while tracking complete user conversion paths in GA4.",
      requirements: [
        "Search intent analysis & keyword volume/difficulty mapping using Semrush & Keyword Planner",
        "Negative keyword list compilation to eliminate non-converting ad traffic",
        "Granular ad group structure (Single-Intent Ad Groups / STAGs)",
        "Meta Ads Manager target audience layering and retargeting framework",
        "UTM parameter taxonomy and GA4 custom conversion event attribution"
      ],
      existingProcess: "Campaigns relied on generic broad-match keywords with unsegmented ad groups, leading to irrelevance between search queries and landing pages, with zero conversion event tagging.",
      proposedSolution: "Mapped user intent across commercial, transactional, and informational search queries. Built a structured ad group architecture with exact/phrase match focus, engineered negative keyword safeguards, and configured end-to-end UTM tracking hooked into GA4 conversion events.",
      roleSteps: [
        { stepNumber: 1, title: "Intent Mapping", description: "Analyzed target audience search queries and buyer journey stages." },
        { stepNumber: 2, title: "Keyword Clustering", description: "Grouped high-intent keywords into tightly themed categories." },
        { stepNumber: 3, title: "Ad Architecture", description: "Designed campaign hierarchies, ad copy variations, and extension sets." },
        { stepNumber: 4, title: "Landing Page Sync", description: "Ensured messaging alignment between ad headlines and landing page copy." },
        { stepNumber: 5, title: "UTM & GA4 Setup", description: "Defined UTM naming standards and verified conversion triggers in GA4." },
        { stepNumber: 6, title: "Performance Review", description: "Created campaign evaluation templates and optimization benchmarks." }
      ],
      roleResponsibilities: [
        "Conducted search intent research and keyword clustering using Semrush and Google Keyword Planner.",
        "Designed campaign architectures and audience segmentations for Google Ads and Meta Ads Manager.",
        "Established standardized UTM parameter structures and mapped conversion goals into GA4 for attribution modeling.",
        "Prepared landing page alignment recommendations to maximize quality scores and conversion rates."
      ],
      architectureNodes: [
        { id: "1", label: "Searcher Intent", sublabel: "Commercial & Transactional Queries", type: "user" },
        { id: "2", label: "Ad Networks", sublabel: "Google Ads & Meta Ads Manager", type: "frontend" },
        { id: "3", label: "UTM Tracking", sublabel: "Standardized Query String Taxonomy", type: "logic" },
        { id: "4", label: "Landing Experience", sublabel: "Aligned Copy & Clear CTA Forms", type: "backend" },
        { id: "5", label: "GA4 Engine", sublabel: "Custom Conversion Events", type: "integration" },
        { id: "6", label: "Attribution Output", sublabel: "Campaign ROI & CAC Reporting", type: "output" }
      ],
      architectureDescription: "User search queries trigger tightly themed ads in Google/Meta. Traffic carries standardized UTM tags to high-relevance landing pages where form fills and phone clicks trigger custom conversion events in GA4.",
      techStackList: ["Google Ads", "Meta Ads Manager", "Google Analytics 4 (GA4)", "Semrush", "Google Keyword Planner", "Google Looker Studio"],
      toolsAndIntegrations: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Semrush", "Google Tag Manager"],
      workflowDetails: [
        { nodeNumber: "01", title: "Intent Analysis", description: "Identify high-intent search terms and categorize by transactional readiness.", iconName: "Search" },
        { nodeNumber: "02", title: "Keyword Clustering", description: "Organize keywords into tight clusters to maximize Google Quality Scores.", iconName: "Layers" },
        { nodeNumber: "03", title: "Ad Copy & Extensions", description: "Draft responsive search ads matching exact user query hooks.", iconName: "PenTool" },
        { nodeNumber: "04", title: "Landing Page Sync", description: "Align page headlines and CTAs with ad hooks to lower bounce rates.", iconName: "CheckCircle2" },
        { nodeNumber: "05", title: "GA4 Conversion Tracking", description: "Verify pixel and conversion event firing across form submits and call clicks.", iconName: "BarChart3" }
      ],
      businessRules: [
        { title: "NEGATIVE KEYWORDS", description: "Strict negative keyword filters applied to prevent budget drain on irrelevant searches." },
        { title: "UTM TAXONOMY", description: "Mandatory source/medium/campaign naming conventions for all ad links." },
        { title: "QUALITY SCORE ALIGNMENT", description: "Direct messaging match between ad headlines and landing page H1 elements." },
        { title: "CONVERSION ATTRIBUTION", description: "Primary conversions defined as validated lead form submits and direct call triggers." }
      ],
      validationItems: [
        { title: "Keyword Intent & Search Volume Audit", category: "Market Research" },
        { title: "Negative Keyword List Review", category: "Budget Protection" },
        { title: "UTM Parameter Link Testing", category: "Tracking QA" },
        { title: "GA4 DebugView Conversion Event Test", category: "Analytics QA" },
        { title: "Ad Copy Quality Score Alignment", category: "Campaign Design" }
      ],
      validationDescription: "Verified all campaign links, UTM strings, and GA4 conversion events in test environments prior to budget commitment.",
      outcomeBefore: [
        "Wasted ad spend on non-converting broad search terms",
        "Generic landing pages disconnected from specific user search intent",
        "Lack of conversion event tracking in GA4",
        "Unclear campaign performance visibility"
      ],
      outcomeAfter: [
        "High-intent keyword clusters with strict negative lists",
        "Direct alignment between ad copy and landing page CTAs",
        "End-to-end conversion tracking configured in GA4 DebugView",
        "Standardized UTM taxonomy for transparent ROI reporting"
      ],
      currentStatus: "Campaign strategy & measurement framework ready for execution.",
      whatILearned: [
        "Aligning search user intent with landing page messaging is the single highest leverage factor in digital acquisition.",
        "Measurement must be built and tested prior to ad spend deployment."
      ]
    }
  },
  {
    id: "safron-cafe-digital-growth",
    number: "05",
    title: "Safron Café — Digital Growth Strategy",
    subtitle: "Local SEO, Menu Keyword Research, & Social Foot-Traffic Funnel",
    description: "A comprehensive digital growth roadmap for a local artisanal café covering Local SEO, Google Business Profile, local keyword mapping, and GA4 reservation tracking.",
    tags: ["Digital Growth", "Local SEO", "Google Business Profile", "GA4", "Portfolio Project"],
    workflowNodes: ["Local Audit", "GBP Optimization", "Menu Keyword Strategy", "Social Funnel", "GA4 Local Tracking"],
    featured: false,
    caseStudy: {
      heroTitle: "Safron Café — Digital Growth Strategy (Portfolio Concept)",
      subtitle: "360° local SEO, Google Business Profile optimization, menu keyword strategy, and foot-traffic conversion funnel.",
      tags: ["Digital Growth", "Local SEO", "Google Business Profile", "GA4", "Portfolio Concept"],
      problemContext: {
        overview: "Local artisanal hospitality businesses struggle to capture high-intent 'café near me' search volume and convert social media followers into verifiable table reservations and foot traffic.",
        frictionTitle: "Local Visibility Gap",
        frictionDetails: "Inconsistent NAP (Name, Address, Phone) records across local maps, unoptimized Google Business Profile categories, and lack of digital reservation conversion tracking."
      },
      objective: "Build a complete 360° digital growth playbook for Safron Café (a local artisanal café concept) demonstrating how local SEO, menu keyword targeting, Instagram content funnels, and GA4 local reservation tracking systematically drive customer foot traffic.",
      requirements: [
        "Google Business Profile (GBP) optimization plan (categories, geotagged photos, Q&A, menu link)",
        "Local SEO keyword research targeting 'best café in [locality]', 'artisanal coffee near me', and 'specialty brunch'",
        "Local business Schema Markup (Restaurant / Café schema specification)",
        "Instagram & Meta local ad targeting framework for weekend brunch promotions",
        "GA4 local conversion setup (Table Reservation clicks, Menu Downloads, Directions requests)"
      ],
      existingProcess: "The café relied solely on word-of-mouth with no optimized Google Maps listing, no structured local keywords, and zero tracking for digital reservation inquiries.",
      proposedSolution: "Designed a local digital growth architecture centered on Google Business Profile domination, Schema.org structured data, geo-targeted Meta Ads, and a streamlined mobile landing page with tracked CTA buttons.",
      roleSteps: [
        { stepNumber: 1, title: "Local Audit", description: "Audited local map presence, competitor citations, and search visibility." },
        { stepNumber: 2, title: "GBP Strategy", description: "Structured Google Business Profile categories, photo uploads, and review workflows." },
        { stepNumber: 3, title: "Keyword Mapping", description: "Mapped high-intent local search queries to menu items and landing page sections." },
        { stepNumber: 4, title: "Schema Markup", description: "Drafted JSON-LD Restaurant & Menu schema for search engine rich snippets." },
        { stepNumber: 5, title: "Social Funnel", description: "Created an Instagram-to-reservation funnel with local geo-fenced ad targeting." },
        { stepNumber: 6, title: "GA4 Local Metrics", description: "Configured tracking for 'Get Directions', 'View Menu', and 'Reserve Table'." }
      ],
      roleResponsibilities: [
        "Architected a portfolio concept model for local business growth strategy.",
        "Created Local SEO and Google Business Profile optimization guidelines.",
        "Designed JSON-LD Schema markup specifications for local food & beverage businesses.",
        "Engineered a local conversion tracking model in GA4 to measure offline impact."
      ],
      architectureNodes: [
        { id: "1", label: "Local Searcher", sublabel: "Searching 'Café near me' / 'Brunch'", type: "user" },
        { id: "2", label: "Google Business Profile", sublabel: "Maps Pack & Local Citation Engine", type: "frontend" },
        { id: "3", label: "Mobile Landing Page", sublabel: "Café Menu & Fast CTA Actions", type: "backend" },
        { id: "4", label: "JSON-LD Schema", sublabel: "Structured Local Restaurant Data", type: "logic" },
        { id: "5", label: "GA4 Local Engine", sublabel: "Directions & Reservation Events", type: "integration" },
        { id: "6", label: "Foot Traffic Outcome", sublabel: "Dine-in Customers & Bookings", type: "output" }
      ],
      architectureDescription: "Local searchers discover the café via Google Maps or Geo-targeted Meta Ads, visit the mobile menu landing page, and trigger 'Get Directions' or 'Reserve Table' conversion events measured in GA4.",
      techStackList: ["Google Business Profile", "Google Analytics 4 (GA4)", "Local SEO Frameworks", "JSON-LD Schema", "Meta Ads Manager"],
      toolsAndIntegrations: ["Google Business Profile", "Google Analytics 4", "Semrush Local", "Schema.org (JSON-LD)", "Meta Ads Manager"],
      workflowDetails: [
        { nodeNumber: "01", title: "Local Search Optimization", description: "Claim and optimize Google Business Profile with secondary categories and geotagged imagery.", iconName: "MapPin" },
        { nodeNumber: "02", title: "Menu Keyword Integration", description: "Incorporate high-demand coffee and brunch terms into online menu descriptions.", iconName: "FileText" },
        { nodeNumber: "03", title: "Structured Data", description: "Implement JSON-LD Schema to display menu prices and operating hours directly in Google Search.", iconName: "Code" },
        { nodeNumber: "04", title: "Local Meta Ad Funnel", description: "Run geo-fenced Instagram ads targeting users within a 3km radius during morning coffee hours.", iconName: "Users" },
        { nodeNumber: "05", title: "Conversion Measurement", description: "Track menu views, directions clicks, and reservation submissions as primary GA4 conversion goals.", iconName: "BarChart3" }
      ],
      businessRules: [
        { title: "NAP CONSISTENCY", description: "Strict 100% Name, Address, Phone matching across all local web directories." },
        { title: "GEO-TARGETING RADIUS", description: "Paid social campaigns restricted to a 3km to 5km radius around physical store location." },
        { title: "SCHEMA COMPLIANCE", description: "Valid Schema.org/Cafe JSON-LD structure verified with Google Rich Results Test." },
        { title: "LOCAL CTA TRACKING", description: "'Get Directions' button clicks tagged as key conversion micro-goals." }
      ],
      validationItems: [
        { title: "Google Business Profile Audit Checklist", category: "Local SEO" },
        { title: "JSON-LD Schema Rich Snippet Test", category: "Technical SEO" },
        { title: "Local Keyword Search Volume Analysis", category: "Market Research" },
        { title: "GA4 Local Event Trigger Verification", category: "Analytics QA" },
        { title: "Geo-fenced Campaign Setup Verification", category: "Paid Media" }
      ],
      validationDescription: "Verified local schema markup using Google's Rich Results Tool and validated local conversion tracking scenarios in GA4 DebugView.",
      outcomeBefore: [
        "Unclaimed or unoptimized Google Business listing with missing hours",
        "No local schema markup for search engines to read menu items",
        "Unmeasured social media activity with zero conversion attribution",
        "Loss of local coffee and brunch customers to nearby competitors"
      ],
      outcomeAfter: [
        "Fully optimized Google Business Profile with 100% NAP consistency",
        "Valid JSON-LD Schema enabling rich search snippets in Google",
        "Targeted local Meta Ads funnel driving high-intent local traffic",
        "GA4 local conversion tracking measuring direct table reservations and map clicks"
      ],
      currentStatus: "Portfolio / Mock Strategy Framework.",
      whatILearned: [
        "Even small brick-and-mortar businesses benefit dramatically from systematic local SEO and structured data.",
        "Measuring micro-conversions (like 'Get Directions' clicks) bridges the gap between digital marketing and physical foot traffic."
      ]
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "bhatia-brothers",
    company: "Bhatia Brothers",
    role: "SEO and AI Automation Coordinator",
    period: "Sep 2025 – Present",
    type: "Full-time",
    location: "Mumbai, India",
    summary: "Leading solution architecture and workflow coordination across AI-powered automation systems and digital analytics infrastructure.",
    highlights: [
      "Led solution architecture and delivery coordination for an enterprise Job Card Management platform covering workflow mapping, RBAC planning, pricing logic, and Azure App Services deployment readiness.",
      "Gathered business requirements and translated them into structured workflows, automation logic, approval rules, and technical specifications for AI-assisted implementation.",
      "Designed service workflow and pricing rules including Warranty/AMC handling and Breakdown Call routing to align billing with business requirements.",
      "Performed API testing, manual QA, and UAT using Postman and structured test scenarios to verify workflow accuracy, pricing calculations, role permissions, and document outputs.",
      "Built and coordinated an AI-based B2B Lead Generation Agent to automate lead discovery, validation, data structuring, and CRM-ready database preparation.",
      "Conducted technical SEO audits (Core Web Vitals, indexing, metadata) and created GA4 and Google Looker Studio dashboards for marketing and operational reporting."
    ],
    technologies: [
      "AI Automation", "Workflow Architecture", "React/Vite", "Node.js/Express", "PostgreSQL", "Google Workspace APIs", "Postman", "GA4", "Looker Studio", "SEO"
    ]
  },
  {
    id: "coindcx",
    company: "CoinDCX",
    role: "Backend Developer Intern",
    period: "Feb 2023 – May 2023",
    type: "Internship (3 Months)",
    location: "India",
    summary: "Supported platform stability and contributed to backend feature development and database optimization for a high-traffic cryptocurrency trading platform.",
    highlights: [
      "Contributed to backend feature development in Ruby on Rails for a high-traffic cryptocurrency trading platform.",
      "Optimized PostgreSQL queries to improve response times and assisted in debugging production issues in an Agile/Scrum environment.",
      "Supported platform stability and helped deliver backend features during the internship period."
    ],
    technologies: [
      "Ruby on Rails", "PostgreSQL", "Backend API Development", "Database Optimization", "Agile/Scrum"
    ]
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    category: "AI & Automation",
    skills: ["AI Automation", "Workflow Design", "AI-assisted Systems", "Prompt Engineering", "n8n"]
  },
  {
    category: "Business Analysis & Systems",
    skills: ["Requirements Gathering", "Process Mapping", "Business Rules", "UAT", "API Testing", "Workflow Architecture"]
  },
  {
    category: "Digital Growth & Analytics",
    skills: ["SEO", "Technical SEO", "GA4", "Google Search Console", "Looker Studio", "SEMrush", "Google Ads", "Meta Ads Manager"]
  },
  {
    category: "Technical",
    skills: ["APIs", "Postman", "PostgreSQL", "React / Node.js", "Google Workspace APIs"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Google Digital Marketing & E-commerce", issuer: "Google" },
  { title: "IBM Data Science Professional Certificate", issuer: "IBM" },
  { title: "Cloud Computing", issuer: "IIT Kharagpur" },
  { title: "Google IT Support Professional Certificate", issuer: "Google" },
  { title: "The Complete Digital Marketing Guide", issuer: "Udemy" }
];

export const EDUCATION: Education = {
  degree: "B.Tech / B.E. in Computer Science and Engineering (CSE)",
  institution: "Chandigarh University, Mohali",
  year: "2022",
  grade: "Grade: 6.2/10"
};
