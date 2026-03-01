import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { TidalCursor } from "@/components/ui/tidal-cursor";
import { Home, User, GraduationCap, Briefcase, Code2, Award, Brain, Mail } from "lucide-react";

const Index = () => {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Education', url: '#education', icon: GraduationCap },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: Code2 },
    { name: 'Certifications', url: '#certifications', icon: Award },
    { name: 'Skills', url: '#skills', icon: Brain },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const elements = document.querySelectorAll('.fade-in, .slide-in-right');
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter overflow-hidden">
      <TidalCursor />
      <NavBar items={navItems} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;