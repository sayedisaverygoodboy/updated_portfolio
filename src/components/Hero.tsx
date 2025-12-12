import { ArrowDown, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/skills";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <code className="text-sm text-muted-foreground font-mono">
              ~/portfolio $ <span className="text-primary">whoami</span>
            </code>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm{" "}
            <span className="gradient-text">{aboutData.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {aboutData.title}
            <span className="terminal-cursor" />
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {aboutData.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow px-8"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <a
              href={aboutData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={aboutData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={aboutData.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <button
            onClick={scrollToProjects}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
