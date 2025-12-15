import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Abu Sayed</title>
        <meta
          name="description"
          content="Curated highlights of Abu Sayed’s frontend, full-stack, and AI engineering work."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 space-y-12 max-w-6xl">
            <section className="space-y-6">
              <p className="text-sm font-mono text-primary uppercase tracking-[0.5em]">
                // Projects
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">Product work that ships</h1>
              <p className="text-muted-foreground leading-relaxed">
                From ambitious club platforms to AI-assisted automation, I build with rhythm, testing,
                and a focus on measurable impact. Every project here includes the context, tooling, and
                lessons that guided the ship.
              </p>
            </section>

            <section className="grid gap-8">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group flex flex-col rounded-[2rem] border border-border bg-card/70 p-6 shadow-xl transition hover:-translate-y-1 hover:border-secondary"
                >
                  <div className="mb-6 rounded-[1.5rem] overflow-hidden border border-border bg-muted/10 shadow-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {project.role}
                      </p>
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                    </div>
                    {/* <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      View case study
                      <ArrowRight className="w-4 h-4" />
                    </Link> */}
                  </div>

                  <p className="mt-2 text-muted-foreground">{project.shortDescription}</p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        Tech stack
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="rounded-full border border-border px-3 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        Metrics
                      </h3>
                      <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                        {project.metrics.map((metric) => (
                          <p key={metric.label}>
                            <span className="font-semibold text-muted-foreground text-base">
                              {metric.value}
                            </span>{" "}
                            {metric.label}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {project.features.slice(0, 3).map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-muted-foreground"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
                    >
                      View details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Projects;