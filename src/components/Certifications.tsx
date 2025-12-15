import React from "react";
import { ArrowRight } from "lucide-react";
import certifications from "../data/certifications";
const Certifications = () => {
  return (
    <section className="py-24 relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-transparent -z-10" />
      <div className="absolute top-[-60px] right-12 w-72 h-72 bg-gradient-to-br from-secondary/40 to-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm font-mono text-primary tracking-[0.3em] mb-3">/ credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary/90">My Liscences And Certifications</h2>
          <p className="text-muted-foreground mt-4">
            These credentials highlight the blend of software, data science, and ML coursework I rely on to ship world-class experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="relative flex flex-col justify-between rounded-md border border-border bg-card/80 p-3 shadow-xl shadow-primary/10 transition hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="my-3">
                <img src={cert.certificate_image} alt={cert.certificate_image} className="" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-2xl text-xs font-semibold tracking-wide uppercase">
                  <div className="my-3">
                    <img src={cert.art} alt={cert.art} className=" w-12" />
                  </div>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {cert.provider}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {cert.issued}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary/80">{cert.title}</h3>
                {/* <p className="text-sm text-muted-foreground mt-2">{cert.provider}</p> */}
                <p className="text-sm text-muted-foreground mt-4">{cert.description}</p>
              </div>

              <div className="mt-5">
                {cert.skills.length > 0 && (
                  <>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-3 py-1 rounded-full border border-border bg-white/5 text-gray-500"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Credential</p>
                <p className="text-sm text-gray-500">ID: {cert.credentialId}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/70 hover:underline text-center"
                >
                  Show credential
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;