import { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { portfolioData } from './portfolioData';
import VoronoiBackground from '../Fractal/Index';

interface PortfolioProps {
  onCodeToggle: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onCodeToggle }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <VoronoiBackground />

      <div
        className="fixed inset-0 bg-grid-pattern bg-grid opacity-20 z-[-1]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Content */}
      <Header onCodeToggle={onCodeToggle} />
      <Hero contact={portfolioData.contact} socialLinks={portfolioData.socialLinks} />

      <section id="about" className="relative z-10">
        <About />
      </section>

      <section id="experience" className="relative z-10">
        <Experience experiences={portfolioData.experience} />
      </section>

      <section id="Projects" className="relative z-10">
        <Projects projects={portfolioData.projects} />
      </section>

      <section id="skills" className="relative z-10">
        <Skills skills={portfolioData.skills} />
      </section>

      <section id="contact" className="relative z-10">
        <Contact
          contact={portfolioData.contact}
          socialLinks={portfolioData.socialLinks}
        />
      </section>

      <Footer socialLinks={portfolioData.socialLinks} />
    </div>
  );
};

export default Portfolio;
