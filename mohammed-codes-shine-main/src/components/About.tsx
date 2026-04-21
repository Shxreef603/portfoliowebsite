import { MapPin, Brain, Code, Users, Zap, Trophy } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "8+", icon: <Code className="text-cyan-400" size={20} />, color: "text-cyan-400" },
    { label: "Leadership Roles", value: "12", icon: <Users className="text-violet-400" size={20} />, color: "text-violet-400" },
    { label: "Hackathon participated", value: "20+", icon: <Trophy className="text-amber-400" size={20} />, color: "text-amber-400" },
    { label: "Typing Speed", value: "130 WPM", icon: <Zap className="text-emerald-400" size={20} />, color: "text-emerald-400" },
    { label: "CGPA", value: "8.0", icon: <Brain className="text-cyan-400" size={20} />, color: "text-cyan-400" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 fade-in">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6 fade-in fade-in-delay-1">
            <p className="text-lg leading-relaxed text-slate-300">
              I'm a dedicated Computer Science Engineering student at MJCET with a strong focus on machine learning,
              artificial intelligence, and web development. Currently pursuing my B.E. with a CGPA of 8.0,
              I'm passionate about leveraging technology to solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed text-slate-300">
              Beyond academics, I'm actively involved in various student organizations and leadership roles.
              Right now, I serve as the <span className="text-cyan-400 font-medium">Chief Coordinator</span> of the Computer Society of India, and have held multiple other leadership
              positions across tech clubs. I'm also the <span className="text-cyan-400 font-medium">Google Student Ambassador</span> at MJCET.
            </p>

            {/* Info pills */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/50 hover:border-cyan-500/40 transition-colors px-4 py-3 rounded-xl">
                <MapPin className="text-cyan-400 shrink-0" size={18} />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
                  <p className="text-slate-200 font-medium">Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/50 hover:border-cyan-500/40 transition-colors px-4 py-3 rounded-xl">
                <Brain className="text-cyan-400 shrink-0" size={18} />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Focus</p>
                  <p className="text-slate-200 font-medium">AI/ML & Web Dev</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="fade-in fade-in-delay-2">
            <div className="bg-slate-900/70 border border-slate-700/50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-slate-100 mb-6 text-center">Quick Stats</h3>

              <div className="space-y-4 relative z-10">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      {stat.icon}
                      <span className="text-slate-300 text-sm">{stat.label}</span>
                    </div>
                    <span className={`font-bold text-xl ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;