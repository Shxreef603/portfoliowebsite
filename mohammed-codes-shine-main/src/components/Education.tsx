import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Science Engineering",
      institution: "MJCET",
      period: "2022–2026",
      grade: "CGPA: 8.0",
      status: "current"
    },
    {
      degree: "MPC (Science)",
      institution: "Narayana Junior College",
      period: "2020–2022",
      grade: "97%",
      status: "completed"
    },
    {
      degree: "Primary & Secondary Education",
      institution: "Creekside International School",
      period: "2016–2020",
      grade: "CGPA: 9.0",
      status: "completed"
    }
  ];

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Education</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col h-full fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-cyan-400" size={24} />
                </div>
                <span
                  className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border ${
                    edu.status === "current"
                      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                      : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  }`}
                >
                  {edu.status === "current" ? "In Progress" : "Completed"}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 font-medium mb-4">{edu.institution}</p>
                
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 pb-6 border-b border-slate-800">
                  <Calendar size={14} className="text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-800/40 p-3 rounded-xl border border-slate-700/30">
                <div className="p-1.5 bg-cyan-500/10 rounded-lg">
                  <Award className="text-cyan-400" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Academic Performance</p>
                  <p className="text-cyan-400 font-bold">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

