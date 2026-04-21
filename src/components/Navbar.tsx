import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import aboutData from '../data/about';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'case-study';
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home' }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const ctaLink = currentPage === 'about' ? aboutData.linkedin_url : aboutData.whatsapp_url;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentPage === 'home') {
      // Já está na home, apenas faz scroll
      e.preventDefault();
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
    // Se não está na home, deixa o link navegar naturalmente (será interceptado pelo App.tsx)
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentPage === 'home') {
      // Já está na home, apenas faz scroll
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
    // Se não está na home, deixa o link navegar naturalmente (será interceptado pelo App.tsx)
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-[#488194]/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <a
            href="/"
            className="text-xl font-semibold bg-gradient-to-r from-[#31364A] to-[#488194] bg-clip-text text-transparent hover:from-[#488194] hover:to-[#55BB96] transition-all focus:outline-none focus:ring-2 focus:ring-[#488194] focus:ring-offset-2 rounded-md px-2 py-1"
          >
            Thiago Rodrigues
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#projects"
              onClick={scrollToProjects}
              className="text-[#31364A]/80 hover:text-[#488194] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#488194] focus:ring-offset-2 rounded-md px-3 py-2"
            >
              {t.nav.projects}
            </a>
            <a
              href="/#about"
              onClick={scrollToAbout}
              className="text-[#31364A]/80 hover:text-[#488194] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#488194] focus:ring-offset-2 rounded-md px-3 py-2"
            >
              {t.nav.about}
            </a>
            <LanguageSwitcher />
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-gradient-to-r from-[#488194] to-[#55BB96] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#488194] focus:ring-offset-2 overflow-hidden"
            >
              <span className="relative z-10">{t.nav.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#31364A] to-[#488194] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#31364A] hover:bg-[#488194]/10 focus:outline-none focus:ring-2 focus:ring-[#488194] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#488194]/20 py-4 space-y-4 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <a
              href="/#projects"
              onClick={scrollToProjects}
              className="block text-[#31364A]/80 hover:text-[#488194] hover:bg-[#488194]/5 px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#488194]"
            >
              {t.nav.projects}
            </a>
            <a
              href="/#about"
              onClick={scrollToAbout}
              className="block text-[#31364A]/80 hover:text-[#488194] hover:bg-[#488194]/5 px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#488194]"
            >
              {t.nav.about}
            </a>
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-[#488194] to-[#55BB96] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all text-center focus:outline-none focus:ring-2 focus:ring-[#488194] mx-4"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};