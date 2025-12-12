export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  teamSize?: string;
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "rpi-computer-club",
    title: "RPI Computer Club",
    shortDescription: "Frontend App for Rajshahi Polytechnic Institute Computer Club",
    fullDescription: "Built a modern, responsive platform for the Rajshahi Polytechnic Institute Computer Club. Created fast SPA with React + Vite, using Hooks and Context API. Integrated animations via Framer Motion; fully mobile responsive. Linked social media and added event countdowns & content sections.",
    role: "Lead Developer",
    teamSize: "3 People Team",
    techStack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "DaisyUI", "React Router"],
    features: [
      "Fast SPA with React + Vite",
      "Hooks and Context API architecture",
      "Framer Motion animations",
      "Mobile responsive design",
      "Social media integration",
      "Event countdowns & content sections"
    ],
    metrics: [
      { label: "Club Members", value: "500+" },
      { label: "Event Participation Increase", value: "40%" }
    ],
    liveUrl: "https://beta-rpicc.vercel.app",
    githubUrl: "#"
  },
  {
    id: "dumbbell-don",
    title: "Dumbbell Don",
    shortDescription: "Full-Stack Fitness & Gym Management Platform",
    fullDescription: "A comprehensive fitness and gym management platform that allows users to track workouts, manage memberships, and process payments seamlessly. Built with a focus on user experience and reliable payment processing.",
    role: "Developer",
    techStack: ["React", "Django", "PostgreSQL", "Stripe", "Tailwind CSS"],
    features: [
      "User workout tracking",
      "Membership management",
      "Stripe payment integration",
      "Admin dashboard",
      "Progress analytics"
    ],
    metrics: [
      { label: "Active Users", value: "100+" },
      { label: "Payment Success Rate", value: "99%" }
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "djb-ems",
    title: "DJB EMS",
    shortDescription: "Django-Based Event Management System",
    fullDescription: "An event management system built to streamline event organization and management workflows. Features comprehensive event tracking, attendee management, and reporting capabilities.",
    role: "Developer",
    techStack: ["Django", "SQLite", "Tailwind CSS", "Python"],
    features: [
      "Event creation & management",
      "Attendee registration",
      "Automated notifications",
      "Reporting dashboard",
      "Calendar integration"
    ],
    metrics: [
      { label: "Events Managed", value: "50+" },
      { label: "Workflow Reduction", value: "40%" }
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
