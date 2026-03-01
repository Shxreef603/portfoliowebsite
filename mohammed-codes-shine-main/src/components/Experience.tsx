import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const experiences = [
    {
      title: "Chief Coordinator",
      organization: "CSI MJCET",
      period: "Sept 2025–Present",
      type: "Leadership",
      status: "current",
      description: "Leading the organization and coordinating the activities and events"
    },
    {
      title: "Google Student Ambassador",
      organization: "Google",
      period: "Aug 2025–Present",
      type: "Leadership",
      status: "current",
      description: "Becoming the face of Gemini at campus and holding events and workshops regarding Gemini and Google technologies"
    },
    {
      title: "Tech Team",
      organization: "EdVenture Park",
      period: "Feb 2026–Present",
      type: "Technical",
      status: "current",
      description: "Working on building projects and gaining technical knowledge"
    },
    {
      title: "Campus Developer Advocate",
      organization: "Code for India Foundation",
      period: "Sept 2025–Present",
      type: "Leadership",
      status: "current",
      description: "Becoming the face of CFI at campus and holding events and workshops with CFI and promoting it's initiatives"
    },
    {
      title: "Web Development Intern",
      organization: "Bioreform",
      period: "Oct 2025–Present",
      type: "Internship",
      status: "current",
      description: "Developing an e commerce website for the organization"
    },
    {
      title: "Operations Head",
      organization: "SU Knowledge Hub",
      period: "Dec 2025–Present",
      type: "Leadership",
      status: "current",
      description: "Leading operations and strategic initiatives"
    },
    {
      title: "Campus Lead",
      organization: "Edventure Park",
      period: "Apr 2025–Present",
      type: "Leadership",
      status: "current",
      description: "Managing campus activities and student engagement"
    },
    {
      title: "General Secretary",
      organization: "ACM MJCET",
      period: "Aug 2024–Jul 2025",
      type: "Leadership",
      status: "completed",
      description: "Leading technical initiatives and member engagement"
    },
    {
      title: "Web Master",
      organization: "EWB MJCET",
      period: "Aug 2024–Jul 2025",
      type: "Leadership",
      status: "completed",
      description: "Managing web development and digital presence"
    },
    {
      title: "Head of Marketing",
      organization: "AWS Cloud Clubs MJCET",
      period: "Aug 2024–Jul 2025",
      type: "Leadership",
      status: "completed",
      description: "Driving marketing strategies and cloud technology adoption"
    },
    {
      title: "General Secretary",
      organization: "Orator's Club MJCET",
      period: "Aug 2024–Dec 2025",
      type: "Leadership",
      status: "completed",
      description: "Managing club operations and public speaking events"
    },
    {
      title: "Technical Team Member",
      organization: "IEEE PES MJCET",
      period: "Oct 2023–Oct 2024",
      type: "Technical",
      status: "completed",
      description: "Contributing to power and energy society initiatives"
    },
    {
      title: "Head of Marketing",
      organization: "Orator's Club MJCET",
      period: "Aug 2023–Aug 2024",
      type: "Leadership",
      status: "completed",
      description: "Led marketing campaigns and member engagement"
    },
    {
      title: "Internpreneur 4.0",
      organization: "TSIG MJCET",
      period: "May–Jun 2024",
      type: "Internship",
      status: "completed",
      description: "Developed web applications and gained entrepreneurial skills"
    },
    {
      title: "Machine Learning Intern",
      organization: "Delta Sigma Technologies",
      period: "Apr–May 2024",
      type: "Internship",
      status: "completed",
      description: "Built student placement prediction ML models"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Startup': return 'bg-violet-500/20 text-violet-400 border-violet-500/30';
      case 'Leadership': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Internship': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Technical': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  // Group experiences by year for the timeline
  const groupedByYear: Record<string, typeof experiences> = {};
  experiences.forEach((exp) => {
    const year = exp.period.match(/\d{4}/)?.[0] ?? "2024";
    if (!groupedByYear[year]) groupedByYear[year] = [];
    groupedByYear[year].push(exp);
  });

  // Sort years descending
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  const timelineData = sortedYears.map((year) => ({
    title: year,
    content: (
      <div className="space-y-4">
        {groupedByYear[year].map((exp, i) => (
          <div
            key={i}
            className="bg-slate-900/60 p-5 rounded-xl border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 shadow-md"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Briefcase className="text-cyan-400" size={16} />
                <span className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(exp.type)}`}>
                  {exp.type}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${
                  exp.status === 'current'
                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                    : 'bg-slate-500/20 text-slate-400 border-slate-500/30'
                }`}>
                  {exp.status === 'current' ? '● Active' : 'Completed'}
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <Calendar size={12} />
                {exp.period}
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-100 mb-1">{exp.title}</h3>
            <div className="flex items-center gap-1 mb-2">
              <MapPin size={13} className="text-slate-500" />
              <p className="text-slate-400 text-sm">{exp.organization}</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Leadership roles, internships, and professional experiences that shaped my journey
          </p>
        </div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default Experience;
