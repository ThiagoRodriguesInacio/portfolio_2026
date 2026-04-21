import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { KairosCase } from './components/cases/KairosCase';
import { AgendaEsporteCase } from './components/cases/AgendaEsporte';
import { SkipLink } from './components/SkipLink';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'case-study'>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('');

  useEffect(() => {
    // Simple routing based on URL
    const path = window.location.pathname;
    const match = path.match(/\/case-study\/(.+)/);
    
    if (match) {
      setCurrentPage('case-study');
      setCurrentSlug(match[1]);
    } else {
      setCurrentPage('home');
    }

    // Handle browser back/forward
    const handlePopState = () => {
      const newPath = window.location.pathname;
      const newMatch = newPath.match(/\/case-study\/(.+)/);
      
      if (newMatch) {
        setCurrentPage('case-study');
        setCurrentSlug(newMatch[1]);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll automático quando houver hash na URL e página for home
  useEffect(() => {
    if (currentPage === 'home') {
      const hash = window.location.hash;
      if (hash === '#projects') {
        // Vai ao topo primeiro, depois faz scroll para a seção
        window.scrollTo(0, 0);
        setTimeout(() => {
          const projectsSection = document.getElementById('projects');
          projectsSection?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else if (hash === '#about') {
        // Vai ao topo primeiro, depois faz scroll para a seção
        window.scrollTo(0, 0);
        setTimeout(() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        // Sem hash, só vai ao topo
        window.scrollTo(0, 0);
      }
    } else if (currentPage === 'case-study') {
      // Ao navegar para case study, sempre vai ao topo
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  // Intercept link clicks for SPA navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href);
        
        // Only handle internal navigation
        if (url.pathname.startsWith('/case-study/')) {
          e.preventDefault();
          const slug = url.pathname.replace('/case-study/', '');
          window.history.pushState({}, '', url.pathname);
          setCurrentPage('case-study');
          setCurrentSlug(slug);
          window.scrollTo(0, 0);
        } else if (url.pathname === '/' || url.pathname === '') {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname + url.hash);
          setCurrentPage('home');
          
          // Se houver hash, faz scroll para a seção
          if (url.hash === '#projects') {
            setTimeout(() => {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          } else if (url.hash === '#about') {
            setTimeout(() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          } else {
            window.scrollTo(0, 0);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (currentPage === 'case-study') {
    // Render specific case study component based on slug
    if (currentSlug === 'kairos-time-project-cost-management') {
      return (
        <LanguageProvider>
          <KairosCase />
        </LanguageProvider>
      );
    }
    
    if (currentSlug === 'agenda-esporte') {
      return (
        <LanguageProvider>
          <AgendaEsporteCase />
        </LanguageProvider>
      );
    }
    
    // 404 for unknown case study
    return (
      <LanguageProvider>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center space-y-4">
            <h1 className="text-gray-900">404 - Case Study Not Found</h1>
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <SkipLink />
      <div className="min-h-screen bg-white">
        <Navbar currentPage="home" />
        
        <main id="main-content" className="pt-16">
          <HeroSection />
          <ProjectsGrid />
          <AboutSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;