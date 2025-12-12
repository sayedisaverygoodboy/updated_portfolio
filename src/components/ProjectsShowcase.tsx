import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Things I've <span className="gradient-text">Built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills in frontend development,
              full-stack applications, and team leadership.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative p-6 rounded-xl border border-border bg-card/30 backdrop-blur hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured badge for first project */}
                {index === 0 && (
                  <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}

                {/* Project header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.shortDescription}
                  </p>
                  
                  {/* Role badge */}
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="border-secondary text-secondary">
                      {project.role}
                    </Badge>
                    {project.teamSize && (
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-3 h-3" />
                        {project.teamSize}
                      </span>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span className="font-semibold text-primary">{metric.value}</span>
                      <span className="text-muted-foreground">{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-muted text-muted-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link to={`/project/${project.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10 group/btn"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
