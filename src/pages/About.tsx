import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Users,
  Briefcase,
  Target,
  Heart,
  Rocket,
  Sparkles,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Abu Sayed | Software & AI Engineer</title>
        <meta
          name="description"
          content="Learn more about Abu Sayed — a software engineer specializing in AI engineering, full-stack systems, and technical leadership."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back button */}
              <Link to="/">
                <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>

              {/* Header */}
              <header className="mb-12 animate-fade-in">
                <span className="text-primary font-mono text-sm mb-4 block">// About Me</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Hi, I'm <span className="gradient-text">Abu Sayed</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Software Engineer • AI Engineer • Community Leader
                </p>
              </header>

              {/* Overview */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="p-6 rounded-xl border border-border bg-card/40 backdrop-blur">
                  <p className="text-muted-foreground leading-relaxed">
                    Building scalable, intelligent systems that merge software craftsmanship with
                    AI engineering. I have over 2 years of software development experience(freelance), 1 year
                    of focused AI engineering work, and strong leadership roles across tech
                    communities. I love turning algorithms into reliable, production-ready
                    experiences and mentoring teams through full execution pipelines.
                  </p>
                </div>
              </section>

              {/* Experience Stats */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" /> Experience Snapshot
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl border bg-card/30">
                    <h3 className="text-3xl font-bold">2+ years</h3>
                    <p className="text-muted-foreground">Software Engineering(Freelance)</p>
                  </div>
                  <div className="p-5 rounded-xl border bg-card/30">
                    <h3 className="text-3xl font-bold">1 year</h3>
                    <p className="text-muted-foreground">AI Engineering(Freelance)</p>
                  </div>
                  <div className="p-5 rounded-xl border bg-card/30">
                    <h3 className="text-3xl font-bold">1000+</h3>
                    <p className="text-muted-foreground">Algorithm Problems Solved</p>
                  </div>
                </div>
              </section>

              {/* Leadership */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" /> Leadership & Impact
                </h2>

                <div className="grid gap-4">
                  <div className="p-6 rounded-xl border bg-card/50">
                    <h3 className="font-bold text-lg mb-1">General Secretary — RPI Computer Club</h3>
                    <p className="text-muted-foreground">
                      Leads curriculum planning, mentorship programs, workshops, and technical collaboration.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border bg-card/50">
                    <h3 className="font-bold text-lg mb-1">Campus Ambassador — Phitron</h3>
                    <p className="text-muted-foreground">
                      Promotes structured CS fundamentals and drives community learning.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border bg-card/50">
                    <h3 className="font-bold text-lg mb-1">Campus Ambassador — ICT Olympiad Bangladesh</h3>
                    <p className="text-muted-foreground">
                      Guides algorithmic problem-solvers and competitive programming talent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Journey */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-primary" /> Explore My Journey
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My AI journey began with the Machine Learning course by Andrew Ng and
                    Mathematics for Machine Learning by DeepLearning.AI. Over time, I expanded my
                    expertise with a Data Science certification from Ostad and rigorous CS
                    foundations from Phitron.
                  </p>

                  <p>
                    I've worked on full product pipelines — from IoT prototypes and backend
                    architectures to automation systems and intelligent tooling. Along the way, I
                    solved more than 1000 competitive programming problems, sharpening my problem-solving mindset.
                  </p>

                  <p>
                    My dedication to innovation was recognized when I won the 2025 Skills
                    Competition at Rajshahi Polytechnic Institute.
                  </p>
                </div>
              </section>

              {/* Skills */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" /> Technical Strengths
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border bg-card/30">
                    <h3 className="font-semibold mb-2">Software Engineering</h3>
                    <p className="text-muted-foreground">Python, MERN, Next.js, System Design</p>
                  </div>
                  <div className="p-5 rounded-xl border bg-card/30">
                    <h3 className="font-semibold mb-2">AI Engineering</h3>
                    <p className="text-muted-foreground">
                      ML, DL, Data Science, Intelligent Automation
                    </p>
                  </div>
                </div>
              </section>

              {/* Achievements */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" /> Achievements
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 rounded-lg border bg-card/40">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Winner — 2025 Skills Competition (Rajshahi Polytechnic Institute) Organized By ASSET And The World Bank
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg border bg-card/40">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Completed 1000+ DSA & CP problems
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg border bg-card/40">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Completed ML, DS, and CS Fundamental certifications
                  </div>
                </div>
              </section>

              {/* Passion */}
              <section className="animate-fade-in" style={{ animationDelay: "0.35s" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-destructive" /> What Drives Me
                </h2>

                <div className="p-6 rounded-xl border bg-gradient-to-br from-primary/5 to-secondary/5">
                  <p className="text-muted-foreground leading-relaxed">
                    I’m passionate about building systems that solve real problems and empower
                    people. Whether mentoring, designing architectures, or implementing AI
                    workflows, I bring consistency, curiosity, and a love for learning. My goal is
                    to merge software engineering with intelligent automation to create technology
                    that truly makes an impact.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/#contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Let's Work Together
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
