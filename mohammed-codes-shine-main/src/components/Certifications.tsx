import { Award, Trophy, Code, Brain, Users, Globe } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Internship",
      issuer: "Delta Sigma Technologies",
      type: "Internship",
      icon: <Brain className="text-primary" size={24} />,
      description: "Hands-on experience in ML model development and data analysis"
    },
    {
      title: "HackRevolution 2025 Winner",
      issuer: "MJCET",
      type: "Competition",
      icon: <Trophy className="text-accent" size={24} />,
      description: "Won HackRevolution 2025 and received a cash prize of ₹25,000 for developing an innovative hardware-based solution during the national hackathon organized by CSI × ECELL.",
    },
    {
      title: "Hackvibe 2025 Winner",
      issuer: "Vignan Institute of Technology",
      type: "Hackathon",
      icon: <Trophy className="text-success" size={24} />,
      description: "Won the 1st prize at Hackvibe hackathon at Vignan, whose theme was based on Vibe coding and AI"
    },
    {
      title: "Hack Revolution 2023 Participant",
      issuer: "Technical Hackathon",
      type: "Hackathon",
      icon: <Trophy className="text-success" size={24} />,
      description: "Participated in competitive programming and innovation challenge"
    },
    {
      title: "Hackprix 2025 Participant", 
      issuer: "Programming Competition",
      type: "Hackathon",
      icon: <Trophy className="text-success" size={24} />,
      description: "Participated in an algorithmic problem-solving competition"
    },
    {
      title: "Web3 Buildathon 2025 Participant",
      issuer: "Blockchain Competition",
      type: "Hackathon", 
      icon: <Globe className="text-accent" size={24} />,
      description: "Participated in decentralized application development challenge"
    },
    {
      title: "Innovatia Panoply 2025 - Consolation Prize",
      issuer: "MJCET",
      type: "Tech Expo",
      icon: <Award className="text-primary" size={24} />,
      description: "Won consolation prize for innovative project presentation"
    },
    {
      title: "Expogenix Winner",
      issuer: "MJCET",
      type: "Tech Expo",
      icon: <Award className="text-primary" size={24} />,
      description: "Outstanding project presentation and technical innovation"
    },
    {
      title: "Google AI Study Jams",
      issuer: "GDSC (Google Developer Student Clubs)",
      type: "Course",
      icon: <Code className="text-accent" size={24} />,
      description: "Comprehensive AI and machine learning fundamentals with Google"
    },
    {
      title: "Organizer at DATANYX 2024",
      issuer: "Telangana's First Datathon",
      type: "Leadership",
      icon: <Users className="text-accent" size={24} />,
      description: "Led marketing initiatives for Telangana's first datathon, both on campus and off campus, and volunteered for event coordination"
    },
    {
      title: "Organizer at FEEL25",
      issuer: "Goodmind Care Foundation",
      type: "Volunteer",
      icon: <Code className="text-accent" size={24} />,
      description: "Led in bringing up partnership stalls and marketing initiatives for Telangana's biggest mental wellness event, which happened at Sattva Knowledge City"
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-primary/20 text-primary border-primary/30';
      case 'Course': return 'bg-accent/20 text-accent border-accent/30'; 
      case 'Competition': return 'bg-success/20 text-success border-success/30';
      case 'Leadership': return 'bg-accent/20 text-accent border-accent/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Recognition for technical excellence, innovation, and continuous learning
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-background/50 p-6 rounded-xl border border-border card-shadow project-card fade-in fade-in-delay-${(index % 3) + 1}`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-background rounded-lg border border-border">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(cert.type)}`}>
                      {cert.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-primary font-medium mb-3">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Achievement Badge */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className=" flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Achievement</span>
                  <div className="flex items-center gap-1">
                    <Award size={16} className="text-accent" />
                    <span className="text-sm font-medium text-accent">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 fade-in fade-in-delay-3">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-center mb-8">Achievement Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground text-sm">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">4</div>
                <div className="text-muted-foreground text-sm">Competition Wins</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1</div>
                <div className="text-muted-foreground text-sm">Google Program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground text-sm">Total Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
