import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'About Me', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Work Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact Me', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <section className="min-h-screen hero-gradient flex flex-col px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="w-full py-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Mobile hamburger */}
            <div className="sm:hidden">
              <button
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((o) => !o)}
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop nav */}
            <div className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base px-3 py-2 rounded-md hover:bg-primary/10"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileOpen && (
            <div id="mobile-nav" className="sm:hidden mt-4">
              <div className="flex flex-col gap-1 p-2 rounded-lg bg-background/80 backdrop-blur border">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left w-full text-foreground/90 hover:text-primary transition-colors font-medium text-base px-3 py-2 rounded-md hover:bg-primary/10"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="space-y-8 fade-in">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Mohammed Abdullah Shareef
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aspiring AI Engineer | Frontend Developer | Student Leader
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in fade-in-delay-1">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-semibold glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 fade-in fade-in-delay-2">
            <a 
              href="https://www.instagram.com/shxreef_603?igsh=ZmxrdTc3MnI2ZG9l" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammed-abdullah-shareef-7292b0256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
