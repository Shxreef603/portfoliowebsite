import { GraduationCap, Calendar } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

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

  const timelineData = education.map((edu) => ({
    title: edu.period,
    content: (
      <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 shadow-lg max-w-xl">
        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-cyan-400" size={20} />
            <span
              className={`text-xs px-2 py-1 rounded-full border ${
                edu.status === "current"
                  ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                  : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
              }`}
            >
              {edu.status === "current" ? "In Progress" : "Completed"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <Calendar size={14} />
            {edu.period}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-1 text-slate-100">{edu.degree}</h3>
        <p className="text-slate-400 mb-3">{edu.institution}</p>
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/20">
          🎓 {edu.grade}
        </div>
      </div>
    ),
  }));

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My academic journey in computer science and engineering
          </p>
        </div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default Education;
