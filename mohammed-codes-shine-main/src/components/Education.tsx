import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Science Engineering",
      institution: "MJCET",
      period: "2022–2025",
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My academic journey in computer science and engineering
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 fade-in fade-in-delay-${
                  index + 1
                }`}
              >
                

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="bg-card p-6 rounded-xl border border-border card-shadow hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="text-primary" size={20} />
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            edu.status === "current"
                              ? "bg-primary/20 text-primary border border-primary/30"
                              : "bg-success/20 text-success border border-success/30"
                          }`}
                        >
                          {edu.status === "current"
                            ? "In Progress"
                            : "Completed"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-3">
                      {edu.institution}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {edu.grade}
                    </div>
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

export default Education;
