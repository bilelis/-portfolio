import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: "9ach Store",
      description: "Premium streetwear e-commerce platform with advanced shopping cart, size selection, and modern UI design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "E-commerce"],
      github: "https://github.com/bilelayari/9ach-store",
      demo: "/projects/9ach-store/index.html",
      category: "E-commerce"
    },
    {
      id: 2,
      title: "TechGear Pro",
      description: "Advanced electronics marketplace with product comparison, warranty tracking, and B2B features.",
      technologies: ["Vue.js", "Laravel", "MySQL", "PayPal API"],
      github: "https://github.com/bilelayari/techgear-pro",
      demo: "/projects/techgear-pro/index.html",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "GreenMart Organic",
      description: "Farm-to-table organic food marketplace with subscription boxes and farm tracking.",
      technologies: ["Next.js", "PostgreSQL", "Square API", "Stripe"],
      github: "https://github.com/bilelayari/greenmart-organic",
      demo: "/projects/greenmart-organic/index.html",
      category: "E-commerce"
    },
    {
      id: 4,
      title: "LuxuryWatch Boutique",
      description: "Premium timepiece collection with 360° views, authentication services, and luxury experience.",
      technologies: ["Angular", "Django", "Redis", "Klarna"],
      github: "https://github.com/bilelayari/luxurywatch-boutique",
      demo: "/projects/luxurywatch-boutique/index.html",
      category: "Luxury E-commerce"
    },
    {
      id: 5,
      title: "SportZone Equipment",
      description: "Complete fitness marketplace with equipment recommendations and integrated workout guides.",
      technologies: ["React", "Laravel", "MongoDB", "Razorpay"],
      github: "https://github.com/bilelayari/sportzone-equipment",
      demo: "/projects/sportzone-equipment/index.html",
      category: "Fitness E-commerce"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 90 },
    { name: "E-commerce Solutions", level: 95 },
    { name: "UI/UX Design", level: 85 },
    { name: "Database Design", level: 88 },
    { name: "API Integration", level: 92 }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Bilel Ayari - Full Stack Developer & E-commerce Specialist | React, Next.js Expert</title>
        <meta name="description" content="Professional Full Stack Developer specializing in modern e-commerce solutions, React, Next.js, and comprehensive web applications. 3+ years experience building scalable web solutions." />
        <meta name="keywords" content="Bilel Ayari, Full Stack Developer, E-commerce, React, Next.js, JavaScript, Web Development, Frontend, Backend, Tunisia, Freelancer, Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bilel Ayari" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bilelayari.vercel.app/" />
        <meta property="og:title" content="Bilel Ayari - Full Stack Developer & E-commerce Specialist" />
        <meta property="og:description" content="Professional Full Stack Developer specializing in modern e-commerce solutions, React, Next.js, and comprehensive web applications." />
        <meta property="og:image" content="https://bilelayari.vercel.app/profile.png" />
        <meta property="og:site_name" content="Bilel Ayari Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bilelayari.vercel.app/" />
        <meta property="twitter:title" content="Bilel Ayari - Full Stack Developer & E-commerce Specialist" />
        <meta property="twitter:description" content="Professional Full Stack Developer specializing in modern e-commerce solutions, React, Next.js, and comprehensive web applications." />
        <meta property="twitter:image" content="https://bilelayari.vercel.app/profile.png" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <link rel="canonical" href="https://bilelayari.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile.png" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" />
        <link rel="preload" href="/profile.png" as="image" />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bilel Ayari",
              "jobTitle": "Full Stack Developer & E-commerce Specialist",
              "description": "Professional Full Stack Developer specializing in modern e-commerce solutions, React, Next.js, and comprehensive web applications.",
              "url": "https://bilelayari.vercel.app/",
              "image": "https://bilelayari.vercel.app/profile.png",
              "email": "ba336158@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Tunisia"
              },
              "sameAs": [
                "https://github.com/bilelayari",
                "https://linkedin.com/in/bilel-ayari"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "JavaScript",
                "E-commerce Development",
                "Full Stack Development",
                "Web Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "description": "Developing modern web applications and e-commerce solutions"
              }
            })
          }}
        />
      </Head>

      <div className="portfolio-container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <h1>Bilel Ayari</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-desktop">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="nav-mobile">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-btn"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="nav-mobile-menu">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="profile-image-container">
              <img
                src="/profile.png"
                alt="Bilel Ayari"
                className="profile-image"
              />
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Bilel Ayari</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer & E-commerce Specialist crafting modern, scalable web solutions
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate Full Stack Developer with over 3 years of experience in creating 
                  modern, scalable web applications. I specialize in e-commerce solutions, 
                  React/Next.js development, and building comprehensive digital experiences.
                </p>
                <p>
                  My expertise spans across the entire development stack, from crafting beautiful 
                  user interfaces to architecting robust backend systems. I'm particularly 
                  passionate about creating seamless e-commerce experiences that drive business growth.
                </p>
                <div className="social-links">
                  <a href="https://github.com/bilelayari" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>GitHub
                  </a>
                  <a href="https://linkedin.com/in/bilel-ayari" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>LinkedIn
                  </a>
                  <a href="mailto:ba336158@gmail.com" className="social-link">
                    <i className="fas fa-envelope"></i>Email
                  </a>
                </div>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fas fa-code"></i>
                  <h3>Frontend</h3>
                  <p>React, Next.js, Vue.js, TypeScript</p>
                </div>
                <div className="skill-card">
                  <i className="fas fa-server"></i>
                  <h3>Backend</h3>
                  <p>Node.js, Laravel, Django, PostgreSQL</p>
                </div>
                <div className="skill-card">
                  <i className="fas fa-shopping-cart"></i>
                  <h3>E-commerce</h3>
                  <p>Stripe, PayPal, Square, WooCommerce</p>
                </div>
                <div className="skill-card">
                  <i className="fas fa-mobile-alt"></i>
                  <h3>Mobile</h3>
                  <p>React Native, PWA, Responsive Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-demo"
                      >
                        <i className="fas fa-external-link-alt"></i>Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-code"
                      >
                        <i className="fab fa-github"></i>Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-subtitle">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>ba336158@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <h3>Phone</h3>
                <p>+216 XX XXX XXX</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Location</h3>
                <p>Tunisia</p>
              </div>
            </div>
            <div className="contact-buttons">
              <a href="mailto:ba336158@gmail.com" className="btn-primary">
                <i className="fas fa-paper-plane"></i>Send Message
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <i className="fas fa-download"></i>Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>© 2024 Bilel Ayari. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://github.com/bilelayari" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/bilel-ayari" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:ba336158@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .portfolio-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          font-family: 'Inter', sans-serif;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }

        .nav-brand h1 {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .nav-desktop {
          display: flex;
          gap: 1rem;
        }

        .nav-link {
          padding: 8px 16px;
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.8);
          background: none;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-link.active {
          color: white;
          background: rgba(255, 255, 255, 0.2);
        }

        .nav-mobile {
          display: none;
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: white;
          font-size: 1.25rem;
          cursor: pointer;
        }

        .nav-mobile-menu {
          display: none;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 1rem;
        }

        .mobile-nav-link {
          display: block;
          width: 100%;
          padding: 12px 16px;
          color: white;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          border-radius: 6px;
          transition: background 0.3s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .nav-mobile {
            display: block;
          }
          .nav-mobile-menu {
            display: block;
          }
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
        }

        .profile-image-container {
          margin-bottom: 2rem;
        }

        .profile-image {
          width: 128px;
          height: 128px;
          border-radius: 50%;
          border: 4px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          color: white;
          padding: 12px 32px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 12px 32px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Sections */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          text-align: center;
          margin-bottom: 3rem;
        }

        /* About Section */
        .about {
          padding: 80px 0;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-text p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .skill-card i {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .skill-card:nth-child(1) i { color: #60a5fa; }
        .skill-card:nth-child(2) i { color: #4ade80; }
        .skill-card:nth-child(3) i { color: #a78bfa; }
        .skill-card:nth-child(4) i { color: #f472b6; }

        .skill-card h3 {
          color: white;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .skill-card p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
        }

        /* Projects Section */
        .projects {
          padding: 80px 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .project-image {
          height: 200px;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-image i {
          font-size: 3rem;
          color: white;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .project-header h3 {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .project-category {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
        }

        .project-links {
          display: flex;
          gap: 0.75rem;
        }

        .btn-demo {
          flex: 1;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          text-align: center;
          font-size: 0.875rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .btn-demo:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
        }

        .btn-code {
          flex: 1;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          text-align: center;
          font-size: 0.875rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .btn-code:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Skills Section */
        .skills {
          padding: 80px 0;
        }

        .skills-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          padding: 1.5rem;
          border-radius: 12px;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-header h3 {
          color: white;
          font-weight: 600;
        }

        .skill-header span {
          color: rgba(255, 255, 255, 0.8);
        }

        .skill-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          border-radius: 4px;
          transition: width 1s ease-out;
        }

        /* Contact Section */
        .contact {
          padding: 80px 0;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
        }

        .contact-item i {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .contact-item:nth-child(1) i { color: #60a5fa; }
        .contact-item:nth-child(2) i { color: #4ade80; }
        .contact-item:nth-child(3) i { color: #a78bfa; }

        .contact-item h3 {
          color: white;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .contact-item p {
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Footer */
        .footer {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2rem 0;
        }

        .footer .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer p {
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .footer-social a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.25rem;
          transition: color 0.3s ease;
        }

        .footer-social a:hover {
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-buttons {
            flex-direction: column;
            align-items: center;
          }

          .footer .container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
