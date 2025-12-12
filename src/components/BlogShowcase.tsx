import React from 'react'
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Bringing AI into Everyday Software",
    summary:
      "How I rewired our automation pipelines with accessible AI tooling while keeping reliability high.",
    date: "Dec 10, 2025",
    readingTime: "6 min read",
    tags: ["AI", "Automation"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    url: "/blogs/ai-automation",
  },
  {
    title: "Scaling the RPI Computer Club Website",
    summary:
      "The roadmap that guided the redesign, collaboration workflow, and launch of the new club platform.",
    date: "Aug 14, 2025",
    readingTime: "5 min read",
    tags: ["Web", "Leadership"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    url: "/blogs/rpicc-journey",
  },
   {
    title: "Building a Web App with React and Django",
    summary:
      "The roadmap that guided the redesign, collaboration workflow, and launch of the new club platform.",
    date: "Aug 14, 2025",
    readingTime: "5 min read",
    tags: ["Web", "Leadership"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    url: "/blogs/rpicc-journey",
  },
  {
    title: "Competitive Programming Progressions",
    summary:
      "My practice approach that turned 1000+ problems into structured confidence during competitions.",
    date: "May 02, 2025",
    readingTime: "4 min read",
    tags: ["DSA", "Competition"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    url: "/blogs/cp-progress",
  },
];

const BlogShowcase = () => {
  const [heroPost, ...rest] = blogPosts;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // My Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Blog</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out my latest blog posts and insights.
            </p>
          </div>
        <div className="flex flex-col gap-8">
          <div className="rounded-[2rem] border border-border bg-card/70 p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Latest insights</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {heroPost.title}
                </h2>
                <p className="text-muted-foreground">{heroPost.summary}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>{heroPost.date}</span>
                  <span className="text-secondary">·</span>
                  <span>{heroPost.readingTime}</span>
                </div>
                <Link to={heroPost.url} className="inline-flex items-center gap-2 text-primary font-semibold">
                  Read story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1">
                <div className="h-52 rounded-2xl border border-border bg-gradient-to-br from-primary/30 to-transparent shadow-xl">
                  <img
                    src={heroPost.image}
                    alt={heroPost.title}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((post) => (
              <div key={post.url} className="flex flex-col rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
                <div className="h-40 overflow-hidden rounded-2xl border border-border bg-muted/10">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.summary}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={post.url} className="mt-4 inline-flex items-center gap-2 text-primary font-semibold">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;