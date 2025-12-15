import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Server,
  Brain,
  Database,
  Settings,
  Code,
  Terminal,
  Cloud,
  Zap,
  Layers,
  GitBranch,
  HardDrive,
  Cpu,
  Github,
  Palette,
  Atom,
  Wrench,
  ArrowRightCircle,
  ChartPie,
} from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend / UI": Monitor,
  "Backend / Server": Server,
  "Machine Learning & Data Science": Brain,
  Databases: Database,
  "Cloud & Hosting": Cloud,
  "DevOps & Tools": Wrench,
  "UI/UX & Design Tools": Palette,
  "Embedded, IoT & Others": Layers,
};

const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HTML5: Code,
  CSS3: Code,
  SASS: Code,
  Bootstrap: Code,
  "Tailwind CSS": Code,
  "Chakra UI": Code,
  React: Atom,
  "Next.js": Atom,
  Redux: Atom,
  "Context API": Atom,
  "React Router": Atom,
  "React Hook Form": Atom,
  "Ant Design": Atom,
  DaisyUI: Atom,
  "Node.js": Terminal,
  "Express.js": Terminal,
  Django: Layers,
  "Django REST Framework": Layers,
  FastAPI: Terminal,
  Flask: Terminal,
  "Socket.IO": Cloud,
  GraphQL: Atom,
  EJS: Code,
  MongoDB: Database,
  MySQL: HardDrive,
  PostgreSQL: HardDrive,
  SQLite: HardDrive,
  Redis: Database,
  Supabase: Database,
  Prisma: Database,
  "Microsoft SQL Server": HardDrive,
  Firebase: Cloud,
  AWS: Cloud,
  "Google Cloud Platform": Cloud,
  DigitalOcean: Cloud,
  Vercel: Cloud,
  Netlify: Cloud,
  Render: Cloud,
  Heroku: Cloud,
  Keras: Brain,
  TensorFlow: Brain,
  PyTorch: Brain,
  "scikit-learn": Brain,
  NumPy: Cpu,
  Pandas: Cpu,
  Matplotlib: ChartPie,
  Plotly: ChartPie,
  Anaconda: Brain,
  OpenCV: Brain,
  Docker: Wrench,
  Git: GitBranch,
  "GitHub Actions": Github,
  NPM: Terminal,
  PNPM: Terminal,
  Webpack: ArrowRightCircle,
  Vite: Zap,
  ESLint: Code,
  Prettier: Code,
  Jest: Code,
  Babel: Code,
  Gradle: Code,
  FFmpeg: Cpu,
  Gunicorn: Wrench,
  Nodemon: Terminal,
  Apache: Settings,
  "Apache Tomcat": Settings,
  Nginx: Settings,
  Elasticsearch: Cpu,
  Figma: Palette,
  "Adobe Illustrator": Palette,
  "Adobe Photoshop": Palette,
  Canva: Palette,
  Arduino: Wrench,
  "Raspberry Pi": Wrench,
  PlatformIO: Wrench,
  "Home Assistant": Layers,
  Zigbee: Layers,
};

const skillGroups = [
  {
    title: "Frontend / UI",
    skills: [
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "Tailwind CSS",
      "Chakra UI",
      "React",
      "Next.js",
      "Redux",
      "Context API",
      "React Router",
      "React Hook Form",
      "Ant Design",
      "DaisyUI",
    ],
  },
  {
    title: "Backend / Server",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flask",
      "Socket.IO",
      "GraphQL",
      "EJS",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Supabase",
      "Prisma",
      "Microsoft SQL Server",
      "Firebase",
    ],
  },
  {
    title: "Cloud & Hosting",
    skills: [
      "AWS",
      "Google Cloud Platform",
      "DigitalOcean",
      "Vercel",
      "Netlify",
      "Render",
      "Heroku",
    ],
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      "Keras",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Plotly",
      "Anaconda",
      "OpenCV",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "NPM",
      "PNPM",
      "Webpack",
      "Vite",
      "ESLint",
      "Prettier",
      "Jest",
      "Babel",
      "Gradle",
      "FFmpeg",
      "Gunicorn",
      "Nodemon",
      "Apache",
      "Apache Tomcat",
      "Nginx",
      "Elasticsearch",
    ],
  },
  {
    title: "UI/UX & Design Tools",
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva"],
  },
  {
    title: "Embedded, IoT & Others",
    skills: ["Arduino", "Raspberry Pi", "PlatformIO", "Home Assistant", "Zigbee"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center">
            <p className="text-sm font-mono text-primary uppercase tracking-[0.5em]">
              // Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => {
              const CategoryIcon = categoryIcons[group.title];
              return (
                <div
                  key={group.title}
                  className="space-y-4 rounded-2xl border border-border bg-background/60 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:border-primary"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-center gap-2">
                    {CategoryIcon && (
                      <CategoryIcon className="text-muted-foreground h-5 w-5" />
                    )}
                    <p className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
                      {group.title}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {group.skills.map((skill) => {
                      const SkillIcon =
                        skillIconMap[skill] ?? ArrowRightCircle;
                      return (
                        <Badge
                          key={`${group.title}-${skill}`}
                          variant="outline"
                          className="flex items-center gap-2 rounded-full border border-gray-300/70 bg-muted/5 px-3 py-1 text-xs uppercase tracking-[0.3em]"
                        >
                          <SkillIcon className="h-3 w-3 text-muted-foreground" />
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
