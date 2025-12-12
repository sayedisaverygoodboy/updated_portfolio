export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React", icon: "Atom" },
      { name: "Next.js", icon: "Globe" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "JavaScript", icon: "FileJson" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Framer Motion", icon: "Sparkles" },
      { name: "HTML5", icon: "Code" },
      { name: "CSS3", icon: "Paintbrush" },
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Django", icon: "Layers" },
      { name: "Python", icon: "Terminal" },
      { name: "Node.js", icon: "Hexagon" },
      { name: "REST APIs", icon: "Link" },
    ]
  },
  {
    category: "ML & AI",
    icon: "Brain",
    skills: [
      { name: "Python (ML)", icon: "Terminal" },
      { name: "Machine Learning", icon: "Cpu" },
      { name: "Data Analysis", icon: "BarChart" },
      { name: "TensorFlow", icon: "Workflow" },
      { name: "NumPy", icon: "Calculator" },
      { name: "Pandas", icon: "Table" },
    ]
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "SQLite", icon: "HardDrive" },
      { name: "MongoDB", icon: "Leaf" },
    ]
  },
  {
    category: "Tools & Others",
    icon: "Settings",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "VS Code", icon: "Code2" },
      { name: "Vite", icon: "Zap" },
      { name: "Stripe", icon: "CreditCard" },
      { name: "Vercel", icon: "Triangle" },
    ]
  }
];

export const aboutData = {
  name: "Abu Sayed",
  title: "Full-Stack Developer ",
  tagline: "Building digital experiences that make an impact",
  summary: "Passionate developer focused on creating elegant, user-centric web applications. I combine clean code with creative design to build solutions that not only work flawlessly but also delight users.",
  careerObjective: "To leverage my technical skills and creative problem-solving abilities to build innovative web solutions that make a meaningful impact. I thrive in collaborative environments where I can contribute to team success while continuously learning and growing as a developer.",
  leadership: {
    role: "General Secretary",
    organization: "RPI Computer Club",
    description: "Leading initiatives to foster technical learning and community engagement among students."
  },
  achievements: [
    "Skills Competition Winner - Recognized for technical excellence",
    "Lead Developer managing a 3-person development team",
    "Successfully delivered projects serving 500+ users"
  ],
  education: {
    degree: "Diploma in Computer Technology",
    institution: "Rajshahi Polytechnic Institute",
    status: "Currently Pursuing",
    highlights: ["Strong foundation in programming", "Focus on practical application development"]
  },
  social: {
    github: "https://github.com/coder-black-mamba",
    linkedin: "https://linkedin.com/in/itisabusayed",
    website: "https://absyd.xyz",
    email: "sde.sayed24@gmail.com",
    phone: "+880 1717963289"
  }
};
