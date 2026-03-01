import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center relative z-10"
        >
          <div className="space-y-6">
            <p className="text-lg text-cyan-400 font-medium tracking-widest uppercase">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight mt-4">
              Mohammed Abdullah Shareef
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mt-4">
              Aspiring AI Engineer | Frontend Developer | Student Leader
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 text-lg font-semibold rounded-full glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-500/60 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg font-semibold rounded-full"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.instagram.com/shxreef_603?igsh=ZmxrdTc3MnI2ZG9l"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-abdullah-shareef-7292b0256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Shxreef603"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
};

export default Hero;