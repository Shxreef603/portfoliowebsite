import { ExternalLink, Github, Code2, Bot, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentPlacementML from "@/assets/student-placement-ml.jpg";
import restaurantWeatherApp from "@/assets/Restaurant-weather-app.webp";
import glassicAI from "@/assets/glassic-ai.jpg";
import literaryWeek from "@/assets/literary-week.png";

const Projects = () => {
  const projects = [
    {
      title: "Glassic - Conversational Voice AI Platform",
      description: "An innovative AI platform built with Next.js & Tailwind CSS, integrated with AWS backend for real-time voice conversations and intelligent responses.",
      image: glassicAI,
      technologies: ["Next.js", "Tailwind CSS", "AWS", "Voice AI", "Real-time"],
      link: "https://glassic.vercel.app/",
      github: null,
      icon: <Bot className="text-accent" size={24} />,
      type: "AI Platform"
    },
    {
      title: "Student Placement Prediction ML Model",
      description: "Machine learning model developed during internship at Delta Sigma Technologies to predict student placement outcomes with high accuracy using various algorithms.",
      image: studentPlacementML,
      technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas"],
      link: null,
      github: null,
      icon: <Code2 className="text-primary" size={24} />,
      type: "Machine Learning"
    },
    {
      title: "Literary Week Landing Page",
      description: "A sophisticated landing page for university literary events featuring elegant design, event information, and interactive elements for enhanced user engagement.",
      image: literaryWeek,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://literaryweek2k25.netlify.app/",
      github: null,
      icon: <Globe className="text-success" size={24} />,
      type: "Web Development"
    },
    {
      title: "Restaurant Menu & Weather App",
      description: "Dual-purpose web application developed during Internpreneur 4.0, featuring a dynamic restaurant menu interface and real-time weather information.",
      image: restaurantWeatherApp,
      technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Responsive Design"],
      link: null,
      github: null,
      icon: <FileText className="text-muted-foreground" size={24} />,
      type: "Web Application"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'AI Platform': return 'bg-accent/20 text-accent border-accent/30';
      case 'Machine Learning': return 'bg-primary/20 text-primary border-primary/30';
      case 'Web Development': return 'bg-success/20 text-success border-success/30';
      case 'Web Application': return 'bg-muted/20 text-muted-foreground border-muted/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A showcase of my recent work in AI, machine learning, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card bg-card rounded-2xl overflow-hidden card-shadow fade-in fade-in-delay-${(index % 3) + 1}`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {project.icon}
                  <span className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-background/50 text-foreground rounded-md border border-border"
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
                      className="bg-primary hover:bg-primary-glow text-primary-foreground flex-1"
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
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
                      className="flex-1 cursor-not-allowed opacity-50"
                    >
                      Private Project
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-8 fade-in fade-in-delay-2">
          <p className="text-muted-foreground text-lg font-medium">
            More projects coming soon!
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in fade-in-delay-3">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-glow text-accent-foreground px-8 py-3 text-lg font-semibold"
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