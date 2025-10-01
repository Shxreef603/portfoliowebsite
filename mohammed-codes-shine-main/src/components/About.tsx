const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Passionate about artificial intelligence, machine learning, and creating impactful solutions through technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in fade-in-delay-1">
            <p className="text-lg leading-relaxed text-foreground">
              I'm a dedicated Computer Science Engineering student at MJCET with a strong focus on machine learning, 
              artificial intelligence, and frontend development. Currently pursuing my B.E. with a CGPA of 8.0, 
              I'm passionate about leveraging technology to solve real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              Beyond academics, I'm actively involved in various student organizations and leadership roles. 
              I serve as General Secretary for both ACM and Orator's Club, and hold marketing leadership positions 
              in several tech clubs. I'm also the co-founder of Glassic, an innovative conversational AI platform.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <p className="text-muted-foreground">Hyderabad, India</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Focus</h4>
                <p className="text-muted-foreground">AI & Machine Learning</p>
              </div>
            </div>
          </div>

          <div className="fade-in fade-in-delay-2">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-center">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-2xl text-primary">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Leadership Roles</span>
                  <span className="font-bold text-2xl text-accent">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Typing Speed</span>
                  <span className="font-bold text-2xl text-success">100 WPM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">CGPA</span>
                  <span className="font-bold text-2xl text-primary">8.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
