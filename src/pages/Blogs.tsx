import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";

const heroPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
const storyPosts = blogPosts.filter((post) => post !== heroPost);

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blogs | Abu Sayed</title>
        <meta
          name="description"
          content="Read Abu Sayed's writings on AI engineering, web development, and problem-solving."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 space-y-12 max-w-6xl">
            <section className="space-y-6">
              <div className="text-center">
                <p className="text-sm font-mono text-primary uppercase tracking-[0.5em]">
                  // Thoughts
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Stories from the keyboard
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                  Insights from AI experiments, product launches, and the craft of building for people.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card/70 p-8 shadow-lg backdrop-blur-xl flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    Featured Article
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold">{heroPost.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{heroPost.summary}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{heroPost.date}</span>
                    <span className="text-secondary">·</span>
                    <span>{heroPost.readingTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {heroPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={heroPost.url}
                    className="mt-4 inline-flex items-center gap-2 text-primary font-semibold"
                  >
                    Read the story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="h-64 overflow-hidden rounded-3xl border border-border bg-muted/5 shadow-lg">
                    <img
                      src={heroPost.image}
                      alt={heroPost.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-mono text-primary uppercase tracking-[0.5em]">
                    // Archives
                  </p>
                  <h2 className="text-2xl font-bold">More writing</h2>
                </div>
                <Link
                  to="/"
                  className="text-sm font-semibold text-primary inline-flex items-center gap-1"
                >
                  Back to home
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {storyPosts.map((post) => (
                  <article
                    key={post.url}
                    className="group flex flex-col rounded-3xl border border-border bg-card/70 p-5 shadow-xl transition hover:-translate-y-1 hover:border-primary"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      <span>{post.category}</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={post.url}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Read the article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blogs;