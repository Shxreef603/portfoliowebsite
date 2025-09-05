import { useState, useEffect } from "react";
import { Code, Brain, Users, Zap, Database, Globe } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: "Expert Level",
      icon: <Brain className="text-primary" size={24} />,
      color: "primary",
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Python", level: 90 },
        { name: "Flask", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Communication", level: 100 },
        { name: "Event Management", level: 90 },
        { name: "Typing (100 WPM)", level: 100 }
      ]
    },
    {
      category: "Intermediate Level", 
      icon: <Code className="text-accent" size={24} />,
      color: "accent",
      skills: [
        { name: "JavaScript", level: 75 },
        { name: "AWS Cloud", level: 70 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: "Soft Skills",
      icon: <Users className="text-success" size={24} />,
      color: "success", 
      skills: [
        { name: "Leadership", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Marketing", level: 85 },
        { name: "Prompt Engineering", level: 80 },
        { name: "MS Office", level: 90 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return { bg: 'bg-primary', text: 'text-primary', border: 'border-primary/30' };
      case 'accent': return { bg: 'bg-accent', text: 'text-accent', border: 'border-accent/30' };
      case 'success': return { bg: 'bg-success', text: 'text-success', border: 'border-success/30' };
      default: return { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-muted/30' };
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Technical proficiencies, leadership capabilities, and continuous learning achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={categoryIndex}
                className={`bg-card p-6 rounded-xl border border-border card-shadow fade-in fade-in-delay-${categoryIndex + 1}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-background rounded-lg border ${colors.border}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className={`text-sm font-bold ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-background rounded-full h-2 border border-border">
                        <div
                          className={`h-2 rounded-full ${colors.bg} skill-progress transition-all duration-1000 ease-out`}
                          style={{
                            '--progress-width': `${skill.level}%`,
                            width: isVisible ? `${skill.level}%` : '0%'
                          } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 fade-in fade-in-delay-3">
          <h3 className="text-2xl font-bold text-center mb-8">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Python", icon: <Code size={20} /> },
              { name: "JavaScript", icon: <Globe size={20} /> },
              { name: "React", icon: <Code size={20} /> },
              { name: "AWS", icon: <Database size={20} /> },
              { name: "Flask", icon: <Zap size={20} /> },
              { name: "ML/AI", icon: <Brain size={20} /> }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border text-center hover:border-primary/50 transition-colors project-card"
              >
                <div className="flex justify-center mb-2 text-primary">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Highlight */}
        <div className="mt-12 text-center fade-in fade-in-delay-3">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full border border-accent/30">
            <Zap size={20} />
            <span className="font-semibold">Typing Speed: 100 WPM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;