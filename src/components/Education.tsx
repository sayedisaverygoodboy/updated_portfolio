import { BookOpen, CalendarDays, GraduationCap, MapPin, ScrollText, Sparkles } from "lucide-react";
import { aboutData } from "@/data/skills";

const Education = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm mb-4 block">// Education</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Academic <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border bg-card/70 p-8 shadow-sm shadow-primary/10">
            <div className="absolute inset-0 pointer-events-none  " />
            <div className="relative z-10 space-y-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
                    <BookOpen className="w-4 h-4" />
                    {aboutData.education.status}
                  </div>
                  <div className="mt-4 flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-[18px] bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wide text-muted-foreground">Degree</p>
                        <h3 className="text-2xl font-bold">{aboutData.education.degree}</h3>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{aboutData.education.institution}</p>
                      <p className="text-xs uppercase tracking-wide">{aboutData.education.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 text-sm">
                  <div className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-center">
                    <p className="uppercase text-muted-foreground tracking-wide">Duration</p>
                    <p className="font-semibold">{aboutData.education.duration}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-center">
                    <p className="uppercase text-muted-foreground tracking-wide">GPA</p>
                    <p className="font-semibold">{aboutData.education.gpa}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {aboutData.education.description}
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex gap-3 items-start text-sm text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Location</p>
                    <p className="font-semibold text-base text-foreground">{aboutData.education.location}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start text-sm text-muted-foreground">
                  <CalendarDays className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Focus Areas</p>
                    <p className="font-semibold text-base text-foreground">{aboutData.education.focusAreas.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Capstone</p>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm">
                    <ScrollText className="w-4 h-4 text-primary" />
                    <p className="text-muted-foreground">{aboutData.education.capstone}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Relevant Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.education.relevantCourses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Highlights</p>
                  <div className="grid gap-2 text-sm">
                    {aboutData.education.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span>{highlight}</span>
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
