import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Send, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const PUBLIC_KEY = 'nyQmONw3khv5pgSLZ';
  const TEMPLATE_ID = 'template_jp0clxc';
  const SERVICE_ID = 'service_h6gbgff';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init(PUBLIC_KEY);
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Abdullah',
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you shortly!",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Could not send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400" size={20} />,
      label: "Email",
      value: "160422733013@mjcollege.ac.in",
      href: "mailto:160422733013@mjcollege.ac.in?subject=Portfolio%20Inquiry",
      color: "cyan"
    },
    {
      icon: <Phone className="text-emerald-400" size={20} />,
      label: "Phone",
      value: "+91 7780227803",
      href: "tel:+917780227803",
      color: "emerald"
    },
    {
      icon: <MapPin className="text-violet-400" size={20} />,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
      color: "violet"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      url: "https://www.linkedin.com/in/mohammed-abdullah-shareef-7292b0256/",
      color: "hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10"
    },
    {
      name: "Instagram",
      icon: <Instagram size={22} />,
      url: "https://www.instagram.com/shxreef_603?igsh=ZmxrdTc3MnI2ZG9l",
      color: "hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10"
    },
    {
      name: "GitHub",
      icon: <Github size={22} />,
      url: "https://github.com/Shxreef603",
      color: "hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-400/10"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/60 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6">Let's Build Something Great</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Open for collaborations, opportunities, or just a coffee chat about AI and innovation. I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-2 space-y-10 fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <MessageCircle size={22} />
                </span>
                Contact Information
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Whether you have a specific project in mind or just want to say hello, my inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-5 p-5 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700/40 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className={`p-3 bg-slate-800/80 rounded-xl border border-slate-700/50 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-slate-200 font-medium hover:text-cyan-400 transition-colors break-all">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 font-medium">{info.value}</p>
                    )}
                  </div>
                  {info.href && (
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs uppercase font-bold tracking-[0.2em] text-cyan-400 mb-6">Social Connection</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-14 h-14 bg-slate-900/60 border border-slate-700/50 rounded-2xl transition-all duration-300 shadow-xl ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-3xl border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <p className="text-sm font-bold text-slate-200 uppercase tracking-wide">Availability</p>
              </div>
              <p className="text-sm text-slate-400">
                Currently open for <span className="text-cyan-400 font-semibold">Web Development</span> & <span className="text-violet-400 font-semibold">AI/ML Internships</span> and freelance projects.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3 fade-in">
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-slate-100 mb-8">Send a Direct Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="h-14 bg-slate-800/40 border-slate-700 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-2xl transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="hello@example.com"
                      className="h-14 bg-slate-800/40 border-slate-700 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-2xl transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="h-14 bg-slate-800/40 border-slate-700 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-2xl transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me more about your vision..."
                    className="bg-slate-800/40 border-slate-700 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-[2rem] p-5 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 text-lg font-bold rounded-2xl shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)] active:scale-[0.98] transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-3 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={20} />
                      Deliver Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-10 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6 fade-in">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 <span className="text-slate-300">Mohammed Abdullah Shareef</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs uppercase font-bold tracking-widest text-slate-500">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
