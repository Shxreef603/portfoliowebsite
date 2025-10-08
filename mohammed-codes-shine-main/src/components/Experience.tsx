import { Briefcase, Calendar, MapPin } from "lucide-react";

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
      description: "Becoming the face of Gemini on campus and holding events and workshops regarding Gemini and Google technologies"
    },
    {
      title: "Campus Developer Advocate",
      organization: "Code for India Foundation",
      period: "Sept 2025–Present",
      type: "Leadership",
      status: "current",
      description: "Becoming the face of CFI at the campus and holding events and workshops with CFI, and promoting its initiatives"
    },
    {
      title: "Web Development Intern",
      organization: "Bioreform",
      period: "Oct 2025–Present",
      type: "Internship",
      status: "current",
      description: "Developing an e-commerce website for the organization"
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
      title: "Co-Founder",
      organization: "Glassic",
      period: "May 2025–Present",
      type: "Startup",
      status: "current",
      description: "Building conversational voice AI platform"
    },
    {
      title: "General Secretary",
      organization: "ACM MJCET",
      period: "Aug 2024–Jul 2025",
      type: "Leadership",
      status: "current",
      description: "Leading technical initiatives and member engagement"
    },
    {
      title: "Web Master",
      organization: "EWB MJCET",
      period: "Aug 2024–Jul 2025",
      type: "Leadership",
      status: "current",
      description: "Managing web development and digital presence"
    },
    {
      title: "Head of Marketing",
      organization: "AWS Cloud Clubs MJCET",
      period: "Aug 2024–Jul 2025", 
      type: "Leadership",
      status: "current",
      description: "Driving marketing strategies and cloud technology adoption"
    },
    {
      title: "General Secretary",
      organization: "Orator's Club MJCET",
      period: "Aug 2024–Oct 2025",
      type: "Leadership",
      status: "current", 
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
      case 'Startup': return 'bg-accent/20 text-accent border-accent/30';
      case 'Leadership': return 'bg-primary/20 text-primary border-primary/30';
      case 'Internship': return 'bg-success/20 text-success border-success/30';
      case 'Technical': return 'bg-muted/20 text-muted-foreground border-muted/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Leadership roles, internships, and professional experiences that shaped my journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 fade-in fade-in-delay-${(index % 3) + 1}`}
              >
                {/* Content (left or right side) */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="bg-background/50 p-6 rounded-xl border border-border card-shadow hover:border-primary/50 transition-all duration-300 project-card relative">
                    
                    

                    {/* Card Content */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="text-primary" size={18} />
                        <span className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          exp.status === 'current' 
                            ? 'bg-primary/20 text-primary border border-primary/30' 
                            : 'bg-success/20 text-success border border-success/30'
                        }`}>
                          {exp.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      <MapPin size={14} className="text-muted-foreground" />
                      <p className="text-muted-foreground">{exp.organization}</p>
                    </div>
                    <p className="text-foreground/90 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
