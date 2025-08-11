import { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import CodeView from '../codeview/codeview';
import { portfolioData } from './portfolioData';

const Portfolio: React.FC = () => {
  const [isCodeView, setIsCodeView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isCodeView) {
    return (
      <CodeView
          owner="VIBHORE-LAB"
          repo="Portfolio"
          branch="main"
     onToggle={() => setIsCodeView(false)}
/>
      
    );
  }

  return (
    
   <div className="min-h-screen bg-background relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="fixed inset-0 opacity-30 z-[-1]">
    <div className="absolute top-20 left-10 w-32 h-32 border border-border rounded-full animate-pulse-slow" />
    <div className="absolute top-40 right-20 w-24 h-24 border border-border rotate-45 animate-float" />
    <div className="absolute bottom-40 left-20 w-20 h-20 border border-border rounded-full animate-pulse-slow" />
    <div className="absolute bottom-20 right-40 w-28 h-28 border border-border rotate-12 animate-float" />
  </div>

  <div
    className="fixed inset-0 bg-grid-pattern bg-grid opacity-20 z-[-1]"
    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
  />

  <div className="fixed top-6 left-5 mx-auto">

  </div>

  <Header onCodeToggle={() => setIsCodeView(true)} />
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
    <Contact contact={portfolioData.contact} socialLinks={portfolioData.socialLinks} />
  </section>
  <Footer socialLinks={portfolioData.socialLinks} />
</div>
  );
};

export default Portfolio;
