import { Helmet } from "react-helmet";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectById, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Abu Sayed Portfolio</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back button */}
              <Link to="/#projects">
                <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>

              {/* Project header */}
              <div className="mb-12 animate-fade-in">
                <span className="text-primary font-mono text-sm mb-4 block">// Project Details</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                  {project.title}
                </h1>
                
                {/* Role and team */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge variant="outline" className="border-secondary text-secondary text-base px-4 py-1">
                    {project.role}
                  </Badge>
                  {project.teamSize && (
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {project.teamSize}
                    </span>
                  )}
                </div>

                <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-border">
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </Button>
                  </a>
                )}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border bg-card/50 text-center"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </section>

              {/* Tech Stack */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-foreground px-4 py-2 text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Features */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/30"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Other projects */}
              <section className="animate-fade-in" style={{ animationDelay: "0.35s" }}>
                <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {projects
                    .filter((p) => p.id !== project.id)
                    .slice(0, 2)
                    .map((p) => (
                      <Link
                        key={p.id}
                        to={`/project/${p.id}`}
                        className="p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 transition-colors group"
                      >
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{p.shortDescription}</p>
                      </Link>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
