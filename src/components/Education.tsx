import { GraduationCap, BookOpen } from "lucide-react";
import { aboutData } from "@/data/skills";

const Education = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic <span className="gradient-text">Journey</span>
            </h2>
          </div>

          {/* Education card */}
          <div className="relative animate-fade-in">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

            {/* Education item */}
            <div className="relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background glow-box md:left-1/2 md:-translate-x-1/2" />

              {/* Content - Left side on desktop */}
              <div className="md:text-right md:pr-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-4">
                  <BookOpen className="w-4 h-4" />
                  {aboutData.education.status}
                </div>
              </div>

              {/* Content - Right side on desktop */}
              <div className="md:pl-12">
                <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{aboutData.education.degree}</h3>
                      <p className="text-sm text-muted-foreground">
                        {aboutData.education.institution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {aboutData.education.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
