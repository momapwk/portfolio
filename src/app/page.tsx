"use client"

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  Menu,
  X,
  User,
  Briefcase,
  Phone,
  Download,
  Star,
  MapPin,
  Calendar,
  Award,
  Heart
} from 'lucide-react';
import { experience, projects, skills, stats } from '@/data';


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const roles = ['Full Stack Developer', 'React Specialist', 'Problem Solver'];

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  setIsMenuOpen(false);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500 relative overflow-x-hidden">

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/30 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              &lt;PemaWangmoKhandu/&gt;
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-400' 
                      : 'text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-blue-400 transition-colors z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md absolute top-full left-0 right-0 border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-lg font-medium text-white hover:text-blue-400 w-full text-left transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur animate-pulse"></div>
<img 
  src="/assets/profileI.jpeg" 
  alt="Profile" 
  className="relative w-48 h-48 rounded-full mx-auto border-4 border-white/20 shadow-2xl object-cover"
/>

              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Pema Wangmo</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
              <span className="mr-3">I&apos;m a</span>
              <span className="text-blue-400 font-semibold min-w-fit">{typedText}</span>
              <span className="animate-ping text-blue-400">|</span>
            </div>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating beautiful, functional digital experiences that solve real problems. 
              I transform ideas into scalable applications using cutting-edge technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Briefcase className="inline mr-2 group-hover:rotate-12 transition-transform" size={20} />
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="inline mr-2" size={20} />
                Get In Touch
              </button>
            </div>
            
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:momapwk24@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform group"
                  aria-label={social.label}
                >
                  <social.icon size={28} className="group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <User className="text-blue-400 mr-4" size={28} />
                <h3 className="text-3xl font-semibold text-white">My Journey</h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I&apos;m Pema Wangmo, a passionate full-stack developer from Bhutan with a strong 
                  enthusiasm for building meaningful, user-friendly digital experiences. My journey into the world 
                  of web development started with a curiosity to understand how the internet works, which soon grew into a 
                  deep commitment to mastering both front-end and back-end technologies. I enjoy crafting clean, 
                  efficient code and translating ideas into practical, impactful applications.
                </p>
                <p>
                  I specialize in the React ecosystem, Node.js, and modern web technologies. I thrive on 
                  solving complex problems and transforming innovative ideas into scalable, user-friendly 
                  applications that create real impact.
                </p>
                <p>
                 Beyond coding, I value collaboration, communication, and continuous learning. I believe that the best solutions 
                 are built by diverse teams who share knowledge and grow together. Whether I&apos;m contributing to a project, debugging
                 an issue, or helping others, I approach everything with a positive mindset and a willingness to improve. I aspire to 
                 use technology not just to solve problems, but to create things that truly make a difference in peoples lives.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin size={24} className="text-blue-400" />
                <span className="text-lg">Damphu, Tsirang</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'AWS'].map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform -rotate-6 opacity-30"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                    alt="Coding workspace"
                    className="w-full h-64 rounded-xl object-cover"
                  />
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Current Focus</span>
                      <span className="text-blue-400 font-medium">Full Stack Development</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Learning</span>
                      <span className="text-purple-400 font-medium">AI/ML Integration</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Available for</span>
                      <span className="text-green-400 font-medium">New Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-xl mr-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <skill.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{skill.name}</h3>
                    <div className="flex items-center">
                      <div className="flex-1 bg-gray-700 rounded-full h-3 mr-4 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-300">{skill.level}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-black/30 text-gray-300 px-4 py-3 rounded-lg text-sm text-center font-medium hover:bg-black/50 transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                      <Star size={16} className="mr-2" />
                      Featured Project
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a 
                        href={project.github} 
                        className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        aria-label="View GitHub repository"
                      >
                        <Github size={24} />
                      </a>
                      <a 
                        href={project.live} 
                        className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        aria-label="View live project"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                    <p className="text-blue-400 font-medium text-lg mb-2">{job.company}</p>
                    <div className="flex items-center text-gray-400 mb-4 lg:mb-0">
                      <Calendar size={16} className="mr-2" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">{job.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="bg-black/20 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center text-green-400 mb-2">
                        <Award size={16} className="mr-2" />
                        <span className="text-sm font-medium">Achievement</span>
                      </div>
                      <p className="text-gray-300 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always excited to discuss new opportunities, innovative projects, and ways we can 
            collaborate to create something amazing together. Let&apos;s build the future!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: "Email", info: "momapwk24@gmail.com", color: "from-blue-600 to-cyan-600" },
              { icon: Linkedin, title: "LinkedIn", info: "@momapwk", color: "from-blue-600 to-indigo-600" },
              { icon: Github, title: "GitHub", info: "@momapwk", color: "from-purple-600 to-pink-600" }
            ].map((contact, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className={`bg-gradient-to-r ${contact.color} p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <contact.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{contact.title}</h3>
                <p className="text-gray-300 font-medium">{contact.info}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:momapwk24@gmail.com"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="inline mr-3 group-hover:rotate-12 transition-transform" size={20} />
              Send Email
            </a>
            <a 
              href="https://calendly.com/momapwk"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-10 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="inline mr-3" size={20} />
              Schedule Call
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Download className="inline mr-3" size={20} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                &lt;PemaWangmoKhandu/&gt;
              </div>
              <p className="text-gray-400">
                © 2025 Pema Wangmo Khandu. Crafted with passion using React & Tailwind CSS.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Made with <Heart className="inline w-4 h-4 text-red-500" /> and lots of coffee
              </p>
            </div>
            
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:momapwk24@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform group"
                  aria-label={social.label}
                >
                  <social.icon size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
              &quot;The best way to predict the future is to create it.&quot; - Peter Drucker
            </p>
          </div>
        </div>
      </footer>
    
      {/* <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out
        }
        
        .animate-blob {
          animation: blob 7s infinite
        }
        
        .animation-delay-2000 {
          animation-delay: 2s
        }
        
        .animation-delay-4000 {
          animation-delay: 4s
        }
        
        .line-clamp-3 {
          display: -webkit-box
          -webkit-line-clamp: 3
          -webkit-box-orient: vertical
          overflow: hidden
        }
      `}</style> */}
    </div>
  );
}