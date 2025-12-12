import { Link } from "react-router-dom";
import { ArrowRight, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/skills";

const AboutPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="animate-fade-in">
              <span className="text-primary font-mono text-sm mb-4 block">
                // About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting <span className="gradient-text">Digital Solutions</span> with Passion
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {aboutData.summary}
              </p>
              
              {/* Leadership badge */}
              <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{aboutData.leadership.role}</p>
                  <p className="text-sm text-muted-foreground">{aboutData.leadership.organization}</p>
                </div>
              </div>

              {/* Achievement highlight */}
              <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Skills Competition Winner</p>
                  <p className="text-sm text-muted-foreground">Recognized for technical excellence</p>
                </div>
              </div>

              <Link to="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
                  Read More About Me
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right side - Visual element */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative p-8 rounded-2xl border border-border bg-card/30 backdrop-blur">
                {/* Code block decoration */}
                <div className="font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <code className="block text-muted-foreground">
                    <span className="text-secondary">const</span>{" "}
                    <span className="text-primary">developer</span> = {"{"}
                  </code>
                  <code className="block text-muted-foreground pl-4">
                    name: <span className="text-accent">"{aboutData.name}"</span>,
                  </code>
                  <code className="block text-muted-foreground pl-4">
                    role: <span className="text-accent">"Full-Stack Dev"</span>,
                  </code>
                  <code className="block text-muted-foreground pl-4">
                    passion: <span className="text-accent">"Building cool stuff"</span>,
                  </code>
                  <code className="block text-muted-foreground pl-4">
                    coffee: <span className="text-primary">true</span>,
                  </code>
                  <code className="block text-muted-foreground">
                    {"}"};
                  </code>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
