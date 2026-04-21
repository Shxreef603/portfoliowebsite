import { Award, Trophy, Code, Brain, Users, Globe, ExternalLink, ShieldCheck } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Nyxora MREM Hackathon Winner",
      issuer: "MREM",
      type: "Hackathon",
      icon: <Award className="text-amber-400" size={24} />,
      description: "Won 1st prize in Nyxora MREM 48 hours National hackathon with the prize money of 40k in AI domain",
      color: "amber"
    },
    {
      title: "Agentathon 2026 Participant",
      issuer: "Malla Reddy University",
      type: "Hackathon",
      icon: <Award className="text-cyan-400" size={24} />,
      description: "Participated in world's biggest 36 hour Agentic AI hackathon",
      color: "cyan"
    },
    {
      title: "HackSavvy 2026 Winner",
      issuer: "MGIT",
      type: "Hackathon",
      icon: <Users className="text-amber-400" size={24} />,
      description: "Won the HackSavvy 2026 hackathon at MGIT with the prize money of 10k in the AI and Robotics domain",
      color: "amber"
    },
    {
      title: "Machine Learning Internship",
      issuer: "Delta Sigma Technologies",
      type: "Internship",
      icon: <Brain className="text-emerald-400" size={24} />,
      description: "Hands-on experience in ML model development and data analysis",
      color: "emerald"
    },
    {
      title: "Hackvibe 2025 Winner",
      issuer: "Vignan Institute of Technology",
      type: "Hackathon",
      icon: <Trophy className="text-amber-400" size={24} />,
      description: "Won 1st prize in hackvibe competition at Vignan with the prize money of 15k whose theme was based on Vibe coding and AI",
      color: "amber"
    },
    {
      title: "Machine Learning Internship",
      issuer: "Cognifyz Technologies", 
      type: "Internship",
      icon: <Brain className="text-emerald-400" size={24} />,
      description: "Advanced machine learning techniques and real-world applications",
      color: "emerald"
    },
    {
      title: "Google AI Study Jams",
      issuer: "GDSC (Google Developer Student Clubs)",
      type: "Course",
      icon: <ShieldCheck className="text-blue-400" size={24} />,
      description: "Comprehensive AI and machine learning fundamentals with Google",
      color: "blue"
    },
    {
      title: "Hack Revolution 2025 Winner",
      issuer: "MJCET",
      type: "Hackathon",
      icon: <Trophy className="text-amber-400" size={24} />,
      description: "Won 2nd prize Hack Revolution 2025 with the prize money of 25k in hardware domain",
      color: "amber"
    },
    {
      title: "Hackprix 2025 Participant", 
      issuer: "LORDS institute of Technology",
      type: "Hackathon",
      icon: <Trophy className="text-cyan-400" size={24} />,
      description: "Participated in hackprix in AI domain",
      color: "cyan"
    },
    {
      title: "Web3 Buildathon Participant",
      issuer: "Mahindra University",
      type: "Hackathon", 
      icon: <Globe className="text-cyan-400" size={24} />,
      description: "Participated in decentralized application development challenge",
      color: "cyan"
    },
    {
      title: "Innovatia Panoply 2025 - Consolation Prize",
      issuer: "MJCET",
      type: "Project Expo",
      icon: <Award className="text-amber-400" size={24} />,
      description: "Won consolation prize for innovative project presentation",
      color: "amber"
    },
    {
      title: "Expogenix Winner",
      issuer: "MJCET",
      type: "Project Expo",
      icon: <Award className="text-amber-400" size={24} />,
      description: "Outstanding project presentation and technical innovation",
      color: "amber"
    },
    {
      title: "Organizer at DATANYX 2024",
      issuer: "AWS Cloud Club & SMC MJCET",
      type: "Leadership",
      icon: <Users className="text-violet-400" size={24} />,
      description: "Led marketing initiatives for Telangana's first datathon and volunteered for coordination",
      color: "violet"
    },
    {
      title: "Organizer at FEEL 2025",
      issuer: "Goodmind.app",
      type: "Leadership",
      icon: <Users className="text-violet-400" size={24} />,
      description: "Led marketing and operations initiatives for Telangana's biggest mental wellness event FEEL 25 happened in Sattva Knowledge city, Hyderabad",
      color: "violet"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'emerald': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'amber': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'blue': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'violet': return 'text-violet-400 bg-violet-500/10 border-violet-500/20';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  const stats = [
    { label: "Internships", value: "3", icon: <Brain size={20} />, color: "text-emerald-400" },
    { label: "Hackathons wins", value: "6", icon: <Trophy size={20} />, color: "text-amber-400" },
    { label: "Leadership", value: "12", icon: <Users size={20} />, color: "text-violet-400" },
    { label: "Achievements", value: "20+", icon: <Award size={20} />, color: "text-cyan-400" },
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">Qualifications</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Certifications & Achievements</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-500 shadow-xl flex flex-col h-full fade-in"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`p-3 rounded-xl ${getColorClasses(cert.color).split(' ').slice(1).join(' ')} group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border ${getColorClasses(cert.color)}`}>
                  {cert.type}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-1 text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-cyan-400/80 text-sm font-medium mb-4">{cert.issuer}</p>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/50 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-cyan-400" />
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Verified Achievement</span>
                </div>
                <div className="p-1.5 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="fade-in">
          <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-violet-500/10 rounded-full blur-[80px]" />

            <h3 className="text-2xl font-bold text-center mb-12 text-slate-100 relative z-10">Achievement Overview</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-12 h-12 ${stat.color} bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300 group-hover:border-cyan-500/30`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-slate-100 mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-slate-500 text-xs uppercase font-bold tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
