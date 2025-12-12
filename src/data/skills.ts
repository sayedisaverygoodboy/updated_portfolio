export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML5" },
      { name: "CSS3" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Django" },
      { name: "Python" },
      { name: "Node.js" },
      { name: "REST APIs" },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "MongoDB" },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vite" },
      { name: "Stripe" },
      { name: "Vercel" },
    ]
  }
];

export const aboutData = {
  name: "Abu Sayed",
  title: "Frontend & Full-Stack Developer",
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
    github: "https://github.com/abusayed",
    linkedin: "https://linkedin.com/in/abusayed",
    website: "https://absyd.xyz",
    email: "contact@absyd.xyz",
    phone: "+880 XXXXXXXXXX"
  }
};
