import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    label: "Software Engineering",
    value: "2+ years",
    detail: "(Freelance) From IoT prototypes to production-grade full-stack systems",
  },
  {
    label: "AI Engineering",
    value: "1 year",
    detail: "(Freelance) Model workflows, automation systems, and intelligent tooling",
  },
  {
    label: "Problem Solving",
    value: "1000+ problems",
    detail: "(Competitive Programming) Algorithms, DSA mastery, and competitive programming",
  },
];

const focusAreas = [
  "Python & AI Systems",
  "MERN + Next.js",
  "Data Science",
  "Intelligent Automation",
];

const leadershipRoles = [
  {
    title: "General Secretary",
    org: "RPI Computer Club",
    detail:
      "Plans curriculum, leads mentorship tracks, and drives technical collaboration.",
  },
  {
    title: "Campus Ambassador",
    org: "Phitron",
    detail:
      "Promotes CS fundamentals, structured learning, and community growth.",
  },
  {
    title: "Campus Ambassador",
    org: "ICT Olympiad Bangladesh",
    detail:
      "Guides algorithmic problem-solvers and competitive programming talent.",
  }
];

const impactHighlights = [
  "Workshops & Mentorship",
  "AI Community Building",
  "Problem-Solving Events",
];

const AboutPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-x-4 top-0 h-[400px] rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto grid gap-14 md:gap-16 md:grid-cols-2 items-start">

          {/* LEFT COLUMN — Narrative */}
          <div className="space-y-6">
            <span className="text-primary font-mono text-sm uppercase tracking-[0.5em]">
              // Little More About Me
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Building scalable, intelligent systems that merge software
              craftsmanship with AI engineering.
            </h2>

            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                I'm Abu Sayed — a software engineer with 2+ years of hands-on
                development experience (freelance) and a growing specialization in AI
                engineering. I mentor teams, run community programs, and help
                drive technical culture as General Secretary of the RPI Computer
                Club and Campus Ambassador for Phitron, ICT Olympiad Bangladesh,
                and ICTOB.
              </p>

              <p>
                My work spans design sprints, backend architectures, automation
                systems, and full product cycles. I love turning algorithms into
                reliable, scalable experiences — a mindset shaped by constant
                learning, DSA practice, and achievements like winning the 2025
                Skills Competition at Rajshahi Polytechnic Institute.
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• I organize workshops blending AI, software systems, and teamwork.</li>
              <li>• I guide ambassadors & club members through full execution pipelines.</li>
              <li>• I energize communities through mentorship and study-jam culture.</li>
            </ul>

                        {/* Focus Chips */}
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>



            <Link to="/about" >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 group mt-6"
              >
                Explore My Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* RIGHT COLUMN — Leadership + Stats */}
          <div className="space-y-10">

            {/* Leadership Card */}
            <div className="rounded-lg border border-border bg-card p-4 space-y-6">
              <div className="flex items-center gap-3 text-primary text-lg font-semibold">
                <Sparkles className="w-5 h-5" />
                Leadership & Impact
              </div>

              <div className="space-y-4">
                {leadershipRoles.map((role) => (
                  <div
                    key={`${role.title}-${role.org}`}
                    className="rounded-2xl border border-border bg-card/60 p-4"
                  >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">
                      {role.title}
                    </p>
                    <p className="text-lg font-semibold text-primary">{role.org}</p>
                    <p className="text-sm text-muted-foreground mt-1">{role.detail}</p>
                  </div>
                ))}
              </div>

              {/* <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-2">
                  Impact Sprints
                </p>
                <div className="flex flex-wrap gap-2">
                  {impactHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="border border-border rounded-full px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div> */}
                           {/* Stats Grid */}
            <div className="grid gap-1 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/60 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <BookOpenCheck className="w-4 h-4 text-primary" />
                    {stat.label}
                  </div>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
            </div>

           



          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
