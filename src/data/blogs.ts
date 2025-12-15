export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: string[];
  image: string;
  url: string;
  category: string;
  content: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation",
    title: "Bringing AI into Everyday Software",
    summary:
      "How I rewired automation pipelines with accessible AI tooling while keeping reliability high.",
    date: "Dec 10, 2025",
    readingTime: "6 min read",
    tags: ["AI", "Automation"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    url: "/blogs/ai-automation",
    category: "AI Engineering",
    featured: true,
    content: [
      "I revamped the automation stack by embedding a lightweight AI assistant that can analyze logs, summarize anomalies, and suggest remediation steps.",
      "The key was keeping the tooling transparent — every AI recommendation can be reviewed, scheduled, or skipped without interrupting delivery.",
      "We shipped the feature in under three sprint cycles and saw a 30% drop in firefighting during nightly deployments."
    ]
  },
  {
    slug: "rpicc-journey",
    title: "Scaling the RPI Computer Club Website",
    summary:
      "The roadmap that guided the redesign, collaboration workflow, and launch of the new club platform.",
    date: "Aug 14, 2025",
    readingTime: "5 min read",
    tags: ["Web", "Leadership"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    url: "/blog/rpicc-journey",
    category: "Frontend",
    content: [
      "Leading the redesign meant synchronizing volunteers, mentors, and school stakeholders in a weekly cadence.",
      "I documented every design decision, asset, and deployment so future cohorts could iterate without friction.",
      "On launch day we celebrated with a virtual hackathon, then kept the site evergreen through community-written posts."
    ]
  },
  {
    slug: "react-django-stack",
    title: "Building a Web App with React and Django",
    summary:
      "How I paired a React 19 frontend with a Django API to ship a seamless product experience.",
    date: "Jul 22, 2025",
    readingTime: "5 min read",
    tags: ["React", "Django"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    url: "/blog/react-django-stack",
    category: "Full-Stack",
    content: [
      "The project started with a shared schema document so backend and frontend teams could iterate in parallel.",
      "We introduced a messaging bus for near real-time updates and leaned on Django's ORM to keep queries predictable.",
      "By the final sprint, the React dashboard delivered live analytics the leadership team loved."
    ]
  },
  {
    slug: "cp-progress",
    title: "Competitive Programming Progressions",
    summary:
      "My structured practice routine turning 1,000+ problems into confident competition performance.",
    date: "May 02, 2025",
    readingTime: "4 min read",
    tags: ["DSA", "Competition"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    url: "/blog/cp-progress",
    category: "Problem Solving",
    content: [
      "I organize weeks around foundations, then capstone contests, keeping notes on every new trick.",
      "Solving problems backward from harder contest sets builds context and keeps the momentum up.",
      "Sharing annotated solutions with the community helps me remember lessons and pay it forward."
    ]
  },
];
