import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown, Sparkles, Zap, Target } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#488194]/5 via-[#55BB96]/5 to-[#31364A]/5 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#488194]/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#55BB96]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#31364A]/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative w-full mx-auto text-center space-y-8 animate-fade-in py-8">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight">
          <span className="bg-gradient-to-r from-[#31364A] via-[#488194] to-[#55BB96] bg-clip-text text-transparent lg:text-6xl">
            {t.hero.headline}
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="sm:text-2xl text-[#31364A]/80 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subheadline}
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#488194] to-[#55BB96] text-white px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#488194]/50 focus:ring-offset-2"
          >
            <span>{t.hero.cta}</span>
            <ArrowDown className="size-5 group-hover:animate-bounce" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex flex-col items-center gap-2 text-[#31364A]/50 animate-bounce">
          <span className="text-xs uppercase tracking-wider">Scroll para explorar</span>
          <div className="w-6 h-10 border-2 border-[#488194]/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#488194] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};