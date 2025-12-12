import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import BlogShowcase from "@/components/BlogShowcase";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abu Sayed | Frontend & Full-Stack Developer</title>
        <meta
          name="description"
          content="Abu Sayed is a passionate Frontend & Full-Stack Developer building elegant, user-centric web applications. View portfolio and projects."
        />
        <meta name="keywords" content="Abu Sayed, Frontend Developer, Full-Stack Developer, React, Django, Web Development" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <AboutPreview />
          <ProjectsShowcase />
          <Skills />
          <Certifications/>
          <Education />
          <BlogShowcase/>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
