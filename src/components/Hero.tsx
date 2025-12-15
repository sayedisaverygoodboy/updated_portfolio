import { ArrowDown, Github, Linkedin, Globe  } from "lucide-react";
import {FaWhatsapp} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/skills";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10 ">
        <div className="max-w-6xl mx-auto flex-col md:flex-row flex items-center justify-between">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Terminal-style greeting */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <code className="text-sm text-muted-foreground font-mono">
                ~/portfolio $ <span className="text-primary">whoami</span>
              </code>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="gradient-text">{aboutData.name}</span>
            </h1>

            {/* Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {aboutData.title}
              <span className="terminal-cursor" />
            </h2>

            {/* Tagline */}
            <p className="text-base md:text-md text-gray-400 max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {/* {aboutData.tagline} */}
              I'm a Full-Stack Django & MERN Developer and Aspiring AI Engineer who blends solid software engineering with practical ML. I build real-world systems, scalable backends, robust web apps, ML tools, and automation pipelines. Curious and adaptable, I quickly learn any tech a project needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
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
                onClick={() => window.open("https://drive.google.com/file/d/12ZwVZjGhsDgOXRRHQtsC3JoMc0FHatmX/view?usp=sharing", "_blank")}
              >
                Download Resume
              </Button> 
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex flex-col items-center justify-center  gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Profile Image Container */}
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary blur-xl opacity-50 animate-pulse" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/50 overflow-hidden bg-card/50 backdrop-blur">
                <img
                  src="https://avatars.githubusercontent.com/u/158572665?v=4"
                  alt="https://avatars.githubusercontent.com/u/158572665?v=4"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
            </div>

            {/* Social Links - Pushed to right */}
            <div className="flex items-center justify-center gap-6 w-full ">
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
                href={aboutData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-scale"
              > 
              <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
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
