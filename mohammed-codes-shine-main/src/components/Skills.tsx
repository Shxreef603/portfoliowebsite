import { useState, useEffect } from "react";
import { Code, Brain, Users, Zap, Database, Globe, Layers, Cpu, Smartphone } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      icon: <Brain className="text-cyan-400" size={24} />,
      color: "cyan",
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Python", level: 90 },
        { name: "Flask", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Communication", level: 100 },
        { name: "Event Management", level: 90 },
        { name: "Typing (130 WPM)", level: 100 }
      ]
    },
    {
      category: "Intermediate Level", 
      icon: <Code className="text-violet-400" size={24} />,
      color: "violet",
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
      icon: <Users className="text-emerald-400" size={24} />,
      color: "emerald", 
      skills: [
        { name: "Leadership", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Marketing", level: 85 },
        { name: "Prompt Engineering", level: 80 },
        { name: "Public Speaking", level: 90 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan': return { bar: 'bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]', text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' };
      case 'violet': return { bar: 'bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]', text: 'text-violet-400', border: 'border-violet-500/30', bg: 'bg-violet-500/10' };
      case 'emerald': return { bar: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]', text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' };
      default: return { bar: 'bg-slate-500', text: 'text-slate-400', border: 'border-slate-500/30', bg: 'bg-slate-500/10' };
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">My Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Skills & Expertise</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={categoryIndex}
                className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 shadow-xl fade-in"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 ${colors.bg} rounded-xl border ${colors.border}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2.5">
                      <div className="flex justify-between items-center px-1">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className={`text-xs font-bold ${colors.text} px-2 py-0.5 bg-slate-800/50 rounded-md border border-slate-700/30`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-slate-950/50 rounded-full h-1.5 border border-slate-800/50 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${colors.bar} transition-all duration-1000 ease-out`}
                          style={{
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

        {/* Technology Stack Grid */}
        <div className="mt-20 fade-in">
          <div className="bg-slate-900/40 rounded-3xl p-8 border border-slate-700/30">
            <h3 className="text-2xl font-bold text-center mb-10 text-slate-200">Modern Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Python", icon: <Cpu className="text-cyan-400" /> },
                { name: "JavaScript", icon: <Globe className="text-violet-400" /> },
                { name: "React", icon: <Layers className="text-blue-400" /> },
                { name: "AWS", icon: <Database className="text-amber-400" /> },
                { name: "Flask", icon: <Zap className="text-emerald-400" /> },
                { name: "Next.js", icon: <Smartphone className="text-slate-100" /> }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/30 p-5 rounded-2xl border border-slate-700/40 text-center hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Badge */}
        <div className="mt-12 text-center fade-in">
          <div className="inline-flex items-center gap-3 bg-cyan-500/10 text-cyan-400 px-6 py-3 rounded-full border border-cyan-500/20 backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-default">
            <Zap size={20} className="animate-pulse" />
            <span className="font-bold tracking-tight text-sm uppercase">Elite Efficiency: 130 WPM Typing Speed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
