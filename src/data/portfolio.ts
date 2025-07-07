import { Project, Experience, Education, Certification, Skill, ContactInfo } from '../types';

export const skills: Skill[] = [
  { name: 'HTML/CSS', level: 95, category: 'Frontend Development' },
  { name: 'JavaScript', level: 90, category: 'Frontend Development' },
  { name: 'React', level: 85, category: 'Frontend Development' },
  { name: 'TypeScript', level: 80, category: 'Frontend Development' },
  { name: 'Node.js', level: 90, category: 'Backend & Database' },
  { name: 'Python', level: 85, category: 'Backend & Database' },
  { name: 'Java', level: 80, category: 'Backend & Database' },
  { name: 'MongoDB', level: 85, category: 'Backend & Database' },
  { name: 'MySQL', level: 80, category: 'Backend & Database' },
  { name: 'Penetration Testing', level: 90, category: 'Security & AI' },
  { name: 'Ethical Hacking', level: 85, category: 'Security & AI' },
  { name: 'Generative AI', level: 75, category: 'Security & AI' },
  { name: 'AI Security', level: 70, category: 'Security & AI' },
];

export const projects: Project[] = [
  {
    id: 'hidden-spots',
    title: 'HIDDEN SPOTS STORIES',
    description: 'A platform to discover and share hidden gems and unique locations with stories and experiences from users around the world.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Geolocation'],
    githubUrl: 'https://github.com/Neerajupadhayay2004/hidden-spots-stories',
    icon: 'MapPin'
  },
  {
    id: 'mlm-system',
    title: 'MLM SYSTEM',
    description: 'A multi-level marketing platform with user hierarchy, commission tracking, and secure payment processing.',
    technologies: ['JavaScript', 'Node.js', 'MySQL', 'Security'],
    githubUrl: 'https://github.com/Neerajupadhayay2004/mlm',
    icon: 'Network'
  },
  {
    id: 'google-home',
    title: 'GOOGLE HOME DEV CHALLENGE',
    description: 'A project for Google Home development challenge featuring voice-controlled automation and smart home integration.',
    technologies: ['Google Assistant', 'Node.js', 'API Integration', 'IoT'],
    githubUrl: 'https://github.com/Neerajupadhayay2004/google-home-dev-challenge',
    icon: 'Home'
  },
  {
    id: 'password-checker',
    title: 'PASSWORD STRENGTH CHECKER',
    description: 'A security tool that evaluates password strength in real-time using advanced algorithms. Features include entropy calculation, common password detection, and visual feedback.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Security'],
    githubUrl: 'https://github.com/Neerajupadhayay2004',
    icon: 'Lock'
  },
  {
    id: 'tic-tac-toe',
    title: 'TIC TAC TOE GAME',
    description: 'A classic Tic Tac Toe game with AI opponent featuring multiple difficulty levels. Includes score tracking, responsive design, and smooth animations.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'AI'],
    githubUrl: 'https://github.com/Neerajupadhayay2004',
    icon: 'Gamepad2'
  },
  {
    id: 'chess-game',
    title: 'CHESS GAME',
    description: 'A fully functional chess game with move validation, check detection, and game state tracking. Features include undo functionality and move highlighting.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic'],
    githubUrl: 'https://github.com/Neerajupadhayay2004',
    icon: 'Crown'
  },
  {
    id: 'tech-buddy',
    title: 'TECH BUDDY - HEALTHCARE DIAGNOSTICS',
    description: 'An accessible healthcare diagnostics platform that helps users understand potential health issues based on symptoms. Includes secure data handling.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Security'],
    githubUrl: 'https://github.com/Neerajupadhayay2004',
    icon: 'Heart'
  },
  {
    id: 'kyc-system',
    title: 'KYC (KNOW YOUR CUSTOMER) SYSTEM',
    description: 'A secure identity verification system with document upload, facial recognition, and data validation features. Currently in development with focus on security and privacy.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Security'],
    githubUrl: 'https://github.com/Neerajupadhayay2004',
    icon: 'CreditCard'
  }
];

export const experiences: Experience[] = [
  {
    id: 'dev-researcher',
    title: 'FULL STACK DEVELOPER & SECURITY RESEARCHER',
    period: '2024 - PRESENT',
    description: 'Developing web applications (both frontend and backend) while conducting independent research on emerging cybersecurity threats, developing proof-of-concept exploits, and contributing to open-source security tools. Specializing in Python, Java, and JavaScript development.'
  },
  {
    id: 'ethical-hacking',
    title: 'ETHICAL HACKING & CTF COMPETITOR',
    period: '2023 - 2024',
    description: 'Completed multiple ethical hacking certifications and participated in CTF competitions on TryHackMe and HackTheBox, ranked in top 15% for penetration testing challenges. Specialized in web exploitation, cryptography, and network security. Developed security tools in Python during competitions.'
  },
  {
    id: 'ai-intern',
    title: 'AI & CYBERSECURITY INTERN',
    period: '2023',
    description: 'Completed 1-month internship in Artificial Intelligence and Generative AI at Ybi Foundation. Worked on practical AI projects and learned to apply AI concepts to cybersecurity challenges.'
  },
  {
    id: 'hackathon-lead',
    title: 'HACKATHON TECHNICAL LEAD',
    period: '2023',
    description: 'Led a team to develop a blockchain-based secure document verification system with Python and Solidity, winning 2nd place among 30+ teams. Implemented both frontend interface and backend smart contracts.'
  },
  {
    id: 'cyber-simulations',
    title: 'CYBERSECURITY SIMULATIONS',
    period: '2023',
    description: 'Completed multiple cybersecurity simulations including AIG\'s Shields Up and ANZ Australia\'s Cyber Security Management programs. Gained practical experience in threat analysis, vulnerability assessment, and security management.'
  }
];

export const education: Education[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science (Cybersecurity)',
    school: 'IILM University, Greater Noida',
    year: '2023 - 2027'
  },
  {
    id: 'intermediate',
    degree: '12th Grade (Bihar Board)',
    school: 'PC College, Buxar, Bihar',
    year: '2023',
    percentage: '60%'
  },
  {
    id: 'matriculation',
    degree: '10th Grade (CBSE)',
    school: 'SS Convent, Buxar, Bihar',
    year: '2021',
    percentage: '72.8%'
  }
];

export const certifications: Certification[] = [
  {
    id: 'mongodb',
    title: 'MongoDB Certification',
    organization: 'MongoDB University',
    description: '12-hour self-learning course on NoSQL database management and development.',
    icon: 'Database',
    type: 'development'
  },
  {
    id: 'cybersecurity-foundation',
    title: 'Foundation of Cybersecurity',
    organization: 'Coursera',
    description: 'Comprehensive introduction to cybersecurity fundamentals and best practices.',
    icon: 'Shield',
    type: 'security'
  },
  {
    id: 'aws-security',
    title: 'AWS Cloud Security',
    organization: 'Amazon Web Services',
    description: 'AWS Academy Cloud Security Foundations certification.',
    icon: 'Cloud',
    type: 'security'
  },
  {
    id: 'microsoft-copilot',
    title: 'Microsoft 365 Copilot',
    organization: 'Microsoft Learn',
    description: 'Craft effective prompts for Microsoft 365 Copilot.',
    icon: 'Bot',
    type: 'ai'
  },
  {
    id: 'github-copilot',
    title: 'GitHub Copilot',
    organization: 'GitHub',
    description: 'Building applications with GitHub Copilot agent mode.',
    icon: 'Code',
    type: 'ai'
  },
  {
    id: 'java-basics',
    title: 'Java Basics',
    organization: 'HackerRank',
    description: 'Certificate of Accomplishment in Java Basics programming.',
    icon: 'Coffee',
    type: 'development'
  },
  {
    id: 'ai-generative',
    title: 'AI & Generative AI',
    organization: 'Ybi Foundation',
    description: '1-month internship in Artificial Intelligence and Generative AI technologies.',
    icon: 'Brain',
    type: 'ai'
  },
  {
    id: 'aig-shields',
    title: 'Shields Up: Cybersecurity',
    organization: 'AIG',
    description: 'Cybersecurity threat analysis simulation for the Cyber Defense Unit.',
    icon: 'ShieldCheck',
    type: 'security'
  },
  {
    id: 'anz-security',
    title: 'Cyber Security Management',
    organization: 'ANZ Australia',
    description: 'Cybersecurity threat identification and analysis simulation.',
    icon: 'Lock',
    type: 'security'
  }
];

export const contactInfo: ContactInfo = {
  phone: '+91 6200592390',
  email: 'neerajupadhayay347@gmail.com',
  location: 'Buxar, Bihar, India (802101)',
  github: 'https://github.com/Neerajupadhayay2004',
  linkedin: 'https://www.linkedin.com/in/neeraj-upadhayay-2nd-a0958a246'
};