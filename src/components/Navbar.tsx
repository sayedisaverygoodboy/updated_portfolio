import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
    { name: "Blogs", href: "/blogs" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-primary group-hover:animate-pulse-glow transition-all" />
            <span className="font-mono font-bold text-lg gradient-text">
              absyd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  if (link.href.startsWith("/#")) {
                    scrollToSection(link.href);
                  }
                }}
                className="relative text-muted-foreground hover:text-primary transition-colors group"
              >
                {link.href.startsWith("/#") ? (
                  <span>{link.name}</span>
                ) : (
                  <Link to={link.href}>{link.name}</Link>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <a href="https://wa.me/8801717963289">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Let's Talk
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    if (link.href.startsWith("/#")) {
                      scrollToSection(link.href);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.href.startsWith("/#") ? (
                    <span>{link.name}</span>
                  ) : (
                    <Link to={link.href}>{link.name}</Link>
                  )}
                </button>
              ))}
              <a href="https://wa.me/8801717963289">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Let's Talk
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
