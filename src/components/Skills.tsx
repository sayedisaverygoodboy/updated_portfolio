import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, Server, Brain, Database, Settings, 
  Atom, Globe, FileCode, FileJson, Palette, Sparkles, Code, Paintbrush,
  Layers, Terminal, Hexagon, Link, Cpu, BarChart, Workflow, Calculator, Table,
  HardDrive, Leaf, GitBranch, Github, Code2, Zap, CreditCard, Triangle
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor, Server, Brain, Database, Settings,
  Atom, Globe, FileCode, FileJson, Palette, Sparkles, Code, Paintbrush,
  Layers, Terminal, Hexagon, Link, Cpu, BarChart, Workflow, Calculator, Table,
  HardDrive, Leaf, GitBranch, Github, Code2, Zap, CreditCard, Triangle
};

const Skills = () => {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const CategoryIcon = iconMap[category.icon];
              return (
                <div
                  key={category.category}
                  className="p-6 rounded-xl border border-border bg-background/50 backdrop-blur animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {CategoryIcon && (
                      <CategoryIcon className="w-5 h-5 text-primary" />
                    )}
                    <h3 className="font-mono text-primary text-sm">
                      {`<${category.category} />`}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon ? iconMap[skill.icon] : null;
                      return (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          className="border-border hover:border-primary hover:text-primary transition-colors cursor-default flex items-center gap-1.5"
                        >
                          {SkillIcon && <SkillIcon className="w-3 h-3" />}
                          {skill.name}
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
