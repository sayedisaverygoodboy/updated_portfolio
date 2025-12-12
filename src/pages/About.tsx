import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Users, Briefcase, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aboutData } from "@/data/skills";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Abu Sayed | Frontend & Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Abu Sayed, a passionate developer and leader at RPI Computer Club with expertise in React, Django, and modern web technologies."
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
              <div className="mb-12 animate-fade-in">
                <span className="text-primary font-mono text-sm mb-4 block">// About Me</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Hi, I'm <span className="gradient-text">{aboutData.name}</span>
                </h1>
                <p className="text-xl text-muted-foreground">{aboutData.title}</p>
              </div>

              {/* Career Objective */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Career Objective</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-13">
                  {aboutData.careerObjective}
                </p>
              </section>

              {/* Professional Summary */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Professional Summary</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutData.summary}
                </p>
              </section>

              {/* Leadership */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Leadership Experience</h2>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card/50">
                  <h3 className="font-bold text-lg">{aboutData.leadership.role}</h3>
                  <p className="text-primary mb-2">{aboutData.leadership.organization}</p>
                  <p className="text-muted-foreground">{aboutData.leadership.description}</p>
                </div>
              </section>

              {/* Achievements */}
              <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">Achievements</h2>
                </div>
                <div className="space-y-3">
                  {aboutData.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/30"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Passion */}
              <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-destructive" />
                  </div>
                  <h2 className="text-2xl font-bold">What Drives Me</h2>
                </div>
                <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about creating digital experiences that not only solve problems 
                    but also delight users. Whether it's crafting pixel-perfect interfaces, 
                    building robust backend systems, or leading development teams, I bring 
                    enthusiasm and dedication to every project. I believe in continuous learning 
                    and staying updated with the latest technologies to deliver cutting-edge solutions.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.35s" }}>
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
