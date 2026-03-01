import { ExternalLink, Github, Code2, Bot, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentPlacementML from "@/assets/student-placement-ml.jpg";
import restaurantWeatherApp from "@/assets/Restaurant-weather-app.webp";
import glassicAI from "@/assets/glassic-ai.jpg";
import literaryWeek from "@/assets/literary-week.png";
import greenyBags from "@/assets/greenybags.png";
import fitlyApp from "@/assets/fitly-app.png";

const Projects = () => {
  const projects = [
    {
      title: "GreenyBags - An AI E-commerce Platform",
      description: "A sustainable e-commerce platform integrating AI-driven features, immersive 3D product visualization with Three.js, and scalable cloud infrastructure.",
      image: greenyBags,
      technologies: ["TypeScript", "TailwindCSS", "Supabase", "Three.js", "React", "Firebase"],
      link: "https://greenybags-1.vercel.app/",
      github: null,
      icon: <Bot className="text-cyan-400" size={24} />,
      type: "AI E-commerce"
    },
    {
      title: "Fitly - An AI Powered Nutrition Tracking App",
      description: "Log meals effortlessly by snapping a photo of your food — Fitly detects nutritional values using AI. Track calories, macros, and get personalized guidance from an integrated AI bot for smarter meal choices.",
      image: fitlyApp,
      technologies: ["Node.js", "Firebase", "React", "API Integration"],
      link: "https://fitlyapp.vercel.app/",
      github: null,
      icon: <Bot className="text-green-400" size={24} />,
      type: "AI Health"
    },
    {
      title: "Glassic - Conversational Voice AI Platform",
      description: "An innovative AI platform built with Next.js & Tailwind CSS, integrated with AWS backend for real-time voice conversations and intelligent responses.",
      image: glassicAI,
      technologies: ["Next.js", "Tailwind CSS", "AWS", "Voice AI", "Real-time"],
      link: "https://glassic.vercel.app/",
      github: null,
      icon: <Bot className="text-cyan-400" size={24} />,
      type: "AI Platform"
    },
    {
      title: "Student Placement Prediction ML Model",
      description: "Machine learning model developed during internship at Delta Sigma Technologies to predict student placement outcomes with high accuracy using various algorithms.",
      image: studentPlacementML,
      technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas"],
      link: null,
      github: null,
      icon: <Code2 className="text-cyan-400" size={24} />,
      type: "Machine Learning"
    },
    {
      title: "Literary Week Landing Page",
      description: "A sophisticated landing page for university literary events featuring elegant design, event information, and interactive elements for enhanced user engagement.",
      image: literaryWeek,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://literaryweek2k25.netlify.app/",
      github: null,
      icon: <Globe className="text-cyan-400" size={24} />,
      type: "Web Development"
    },
    {
      title: "Restaurant Menu & Weather App",
      description: "Dual-purpose web application developed during Internpreneur 4.0, featuring a dynamic restaurant menu interface and real-time weather information.",
      image: restaurantWeatherApp,
      technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Responsive Design"],
      link: null,
      github: null,
      icon: <FileText className="text-cyan-400" size={24} />,
      type: "Web Application"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'AI Platform': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Machine Learning': return 'bg-violet-500/20 text-violet-400 border-violet-500/30';
      case 'Web Development': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Web Application': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      case 'AI E-commerce': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'AI Health': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 fade-in">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-4" />
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A showcase of my recent work in AI, machine learning, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {project.icon}
                  <span className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-100 line-clamp-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.link && (
                    <Button
                      asChild
                      className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex-1 font-semibold"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      variant="outline"
                      asChild
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                  {!project.link && !project.github && (
                    <Button
                      variant="outline"
                      disabled
                      className="flex-1 cursor-not-allowed opacity-50 border-slate-600 text-slate-500"
                    >
                      Private Project
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-10">
          <p className="text-slate-500 text-lg font-medium">More projects coming soon!</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-400 mb-6">Interested in collaborating or learning more about my work?</p>
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 text-lg font-semibold rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;