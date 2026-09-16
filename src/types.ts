export type ProjectCategory = 'All' | 'Branding' | 'Social Media' | 'Advertising' | 'Marketing' | 'Graphic Design';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  client: string;
  year: string;
  shortDescription: string;
  coverImage: string;
  additionalImages?: string[];
  overview: string;
  challenge: string;
  creativeDirection: string;
  marketingGoal: string;
  finalSolution: string;
  toolsUsed: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  duration: string;
  overview: string;
  challenge: string;
  creativeDirection: string;
  marketingGoal: string;
  finalSolution: string;
  toolsUsed: string[];
  results: {
    metric: string;
    label: string;
  }[];
  heroImage: string;
  tags: string[];
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  typicalTimeline: string;
  iconName: string;
}

export interface ToolItem {
  name: string;
  category: 'Design & Visual' | 'Advertising & Marketing' | 'AI & Strategy';
  roleInWorkflow: string;
  proficiency: number; // percentage
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  actionItems: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  highlightTag: string;
}
