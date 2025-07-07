export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  percentage?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  description: string;
  icon: string;
  type?: 'ai' | 'security' | 'development';
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface TerminalLine {
  text: string;
  delay: number;
  prompt?: boolean;
  loop?: boolean;
}