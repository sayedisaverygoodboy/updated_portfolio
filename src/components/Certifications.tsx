import React from "react";

const certifications = [
  {
    id: "phitron-cse",
    provider: "Phitron",
    title: "CSE Fundamentals With Phitron: Fall 2024",
    description: "Completion Certificate Of CSE Fundamentals With Phitron: Fall 2024",
    issued: "Issued Nov 2025",
    credentialId: "PHBATCH66222921003",
    skills: ["C++", "React.js", "Django", "Problem Solving", "Web Development", "JavaScript"],
    link: "https://phitron.io",
    art: "Phitron logo",
  },
  {
    id: "ostad-data-science",
    provider: "Ostad",
    title: "Data Science Certificate Program",
    description: "Skills focused program covering modern analytics stacks",
    issued: "Issued Mar 2024",
    credentialId: "c10952-abu-sayed",
    skills: ["Data Analysis", "Scikit-Learn", "Python", "Machine Learning", "Pandas", "NumPy", "Data Visualization"],
    link: "https://ostad.ai",
    art: "Ostad logo",
  },
  {
    id: "coursera-unsupervised",
    provider: "Coursera",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    description: "Specialization path from Coursera covering probabilistic and recommender systems",
    issued: "Issued Aug 2023",
    credentialId: "8N3JGWX363TL",
    skills: [],
    link: "https://coursera.org",
    art: "Coursera logo",
  },
  {
    id: "coursera-advanced-learning",
    provider: "Coursera",
    title: "Advanced Learning Algorithms",
    description: "Deep dive in modern optimization and meta-learning techniques",
    issued: "Issued Aug 2023",
    credentialId: "LDJJBMHS7R7W",
    skills: [],
    link: "https://coursera.org",
    art: "Coursera logo",
  },
  {
    id: "deeplearningai-ml-specialization",
    provider: "DeepLearning.AI",
    title: "Machine Learning Specialization",
    description: "Covers core algorithms, neural nets, and practical ML workflows",
    issued: "Issued Aug 2023",
    credentialId: "85XN58JGYHC2",
    skills: ["Data Analysis", "Scikit-Learn", "Mathematics", "Machine Learning", "Pandas", "NumPy"],
    link: "https://www.deeplearning.ai",
    art: "DeepLearning.AI logo",
  },
  {
    id: "coursera-supervised-ml",
    provider: "Coursera",
    title: "Supervised Machine Learning: Regression and Classification",
    description: "Rigorous coursework on regression, classification, and feature engineering",
    issued: "Issued Jul 2023",
    credentialId: "RR9DMMVMG4EG",
    skills: [],
    link: "https://coursera.org",
    art: "Coursera logo",
  },
  {
    id: "coursera-calculus",
    provider: "Coursera",
    title: "Calculus for Machine Learning and Data Science",
    description: "Streamlined calculus prerequisites for practitioners",
    issued: "Issued May 2023",
    credentialId: "HE75B9WMAMC8",
    skills: ["Mathematics", "Machine Learning", "Calculus"],
    link: "https://coursera.org",
    art: "Coursera logo",
  },
  {
    id: "coursera-linear-algebra",
    provider: "Coursera",
    title: "Linear Algebra for Machine Learning and Data Science",
    description: "Matrix intuition, vector spaces, and systems for ML engineers",
    issued: "Issued Apr 2023",
    credentialId: "PTNC7K8Z3B25",
    skills: [],
    link: "https://coursera.org",
    art: "Coursera logo",
  },
];

const Certifications = () => {
  return (
    <section className="py-24 relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-transparent -z-10" />
      <div className="absolute top-[-60px] right-12 w-72 h-72 bg-gradient-to-br from-secondary/40 to-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm font-mono text-primary tracking-[0.3em] mb-3">/ credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Select certifications & impact</h2>
          <p className="text-muted-foreground mt-4">
            These credentials highlight the blend of software, data science, and ML coursework I rely on to ship world-class experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="relative flex flex-col justify-between rounded-3xl border border-border bg-card/80 p-6 shadow-xl shadow-primary/10 transition hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-3 text-white text-xs font-semibold tracking-wide uppercase">
                  {cert.provider.slice(0, 2)}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {cert.issued}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{cert.provider}</p>
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
                          className="text-[11px] px-3 py-1 rounded-full border border-border bg-white/5 text-white"
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
                <p className="text-sm text-white">ID: {cert.credentialId}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary bg-primary/10 transition hover:bg-primary/20"
                >
                  Show credential
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