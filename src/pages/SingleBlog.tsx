import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogs";

const SingleBlog = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((item) => item.slug === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl border border-border bg-card/60 p-10 text-center shadow-xl">
              <p className="text-xl font-semibold text-muted-foreground mb-4">
                Sorry, we couldn't find that article.
              </p>
              <Link to="/blogs" className="inline-flex items-center gap-2 text-primary font-semibold">
                Back to blogs
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Abu Sayed</title>
        <meta name="description" content={post.summary} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 space-y-10 max-w-5xl">
            <section className="space-y-4">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <p className="text-xs uppercase tracking-[0.6em] text-muted-foreground">
                {post.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
              <p className="text-muted-foreground leading-relaxed">{post.summary}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span className="text-secondary">·</span>
                <span>{post.readingTime}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-3xl overflow-hidden border border-border bg-card/70 shadow-xl">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-80 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
              </div>
            </section>

            <section className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SingleBlog;